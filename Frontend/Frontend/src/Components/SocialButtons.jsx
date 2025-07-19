import React from 'react';
import { Github, Linkedin, Instagram, Mail, Code2, FileCode2 } from 'lucide-react';
// import './SocialButtons.css'; // Import the CSS file

const SocialButtons = () => {
  const links = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ritesh-sharma-5b50b422a/', label: 'LinkedIn', colorClass: 'hover-linkedin' },
    { icon: Github, href: 'https://github.com/RiteshSharmaop', label: 'GitHub', colorClass: 'hover-github' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ritesh.lnct@gmail.com', label: 'Email', colorClass: 'hover-email' },
    { icon: Code2, href: 'https://www.codechef.com/users/riteshnub', label: 'CodeChef', colorClass: 'hover-codechef' },
    { icon: Code2, href: 'https://codeforces.com/profile/noob1204', label: 'Codeforces', colorClass: 'hover-forces' },
    { icon: FileCode2, href: 'https://leetcode.com/u/rTiZLdfR0q/', label: 'LeetCode', colorClass: 'hover-leetcode' },
    { icon: Instagram, href: '#', label: 'Instagram', colorClass: 'hover-instagram' },
    { icon: FileCode2, href: 'https://leetcode.com/u/riteshrsharma71/', label: 'LeetCode', colorClass: 'hover-leetcode' },
  ];
  

  return (
    <div className="social-buttons-container">
      {links.map(({ icon: Icon, href, label, colorClass }) => (
        <a
          key={label}
          href={href}
          className={`social-button ${colorClass}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size={20} />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;
