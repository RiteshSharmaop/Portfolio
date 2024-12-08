
import Box from "./Box";

export default function Skills() {
  return (
    <>
       <section className="skill" id="skill">
        <h1 className="heading">
          <span>my</span> Skills{" "}
        </h1>

        <div className="bro">
        <div className="container">
            <Box className="ox" tit="C++" prof="Proficiency" />
            <Box className="ox" tit="DSA" prof="Proficiency" />
            <Box className="ox" tit="java" prof=" " />
            <Box className="ox" tit="Python" prof=" " />
            <Box className="ox" tit="Javascript" prof="" />
            <Box className="ox" tit="Solidity" prof="" />
            <Box className="ox" tit="Ethers.js" prof="" />
            <Box className="ox" tit="HardHat" prof="" />
            <Box className="ox" tit="React.js" prof="" />
            <Box className="ox" tit="Node.js" prof="" />
            <Box className="ox" tit="Express" prof="" />
            <Box className="ox" tit="HTML" prof="" />
            <Box className="ox" tit="CSS" prof="" />
            <Box className="ox" tit="MongoDb" prof="" />
            <Box className="ox" tit="SQL" prof="" />
            <Box className="ox" tit="TailWind" prof="" />
          </div> 
        </div>
      </section>
    </>
  );
}
