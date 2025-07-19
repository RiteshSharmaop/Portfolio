import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Trophy, Star, TrendingUp } from 'lucide-react';

const Leetcode = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Replace with your LeetCode username
  const USERNAME = 'RitexhSharma';

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const query = `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              username
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
              profile {
                ranking
                rating
                realName
                countryName
                starRating
              }
              userContestRanking {
                attendedContestsCount
                rating
                globalRanking
                topPercentage
              }
              contestRankingHistory {
                rating
                ranking
                contest {
                  title
                  startTime
                }
              }
            }
          }
        `;

        const response = await fetch('https://leetcode.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables: { username: USERNAME }
          })
        });

        const data = await response.json();
        setUserData(data.data.matchedUser);
      } catch (err) {
        setError('Failed to fetch LeetCode data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-4xl p-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-center h-40">
            Loading LeetCode data...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl p-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-center h-40 text-red-500">
            {error}
          </div>
        </div>
      </div>
    );
  }

  const formatContestData = () => {
    if (!userData?.contestRankingHistory) return [];
    return userData.contestRankingHistory
      .filter(contest => contest.rating)
      .map(contest => ({
        name: new Date(contest.contest.startTime * 1000).toLocaleDateString(),
        rating: contest.rating,
        ranking: contest.ranking
      }))
      .slice(-10);
  };

  return (
    <div className="w-full max-w-4xl p-4 space-y-4">
      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-2 mb-4">
          <Star className="text-yellow-500" />
          <h2 className="text-xl font-bold">LeetCode Profile</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">{userData?.profile?.realName || USERNAME}</h3>
            <p className="text-gray-600">{userData?.profile?.countryName}</p>
            <div className="mt-4">
              <p className="font-medium">Global Ranking: #{userData?.profile?.ranking}</p>
              <p className="font-medium">Rating: {userData?.userContestRanking?.rating}</p>
              <p className="font-medium">Contests: {userData?.userContestRanking?.attendedContestsCount}</p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Problem Solving</h4>
            {userData?.submitStats?.acSubmissionNum.map(stat => (
              <div key={stat.difficulty} className="flex justify-between mb-1">
                <span>{stat.difficulty.charAt(0) + stat.difficulty.slice(1).toLowerCase()}</span>
                <span className="font-medium">{stat.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rating History Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="text-blue-500" />
          <h2 className="text-xl font-bold">Contest Rating History</h2>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={formatContestData()}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="rating"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ fill: '#2563eb' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-gray-600 text-center">
          Last 10 Contests Performance
        </div>
      </div>

      {/* Contest Stats */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="text-yellow-500" />
          <h2 className="text-xl font-bold">Contest Achievement</h2>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold mb-2">
            Top {userData?.userContestRanking?.topPercentage?.toFixed(1)}%
          </p>
          <p className="text-gray-600">
            Global Rank: #{userData?.userContestRanking?.globalRanking}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leetcode;