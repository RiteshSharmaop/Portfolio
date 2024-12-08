import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";


function Education() {
  return (
    <div>
      <section class="education" id="education">
        <h1 class="heading">
          {" "}
          my <span>education</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box boxy">
            <i class="fas fa-graduation-cap"><FontAwesomeIcon icon={faGraduationCap} className="fas fa-graduation-cap"/>
            </i>
            <span>2022-Present</span>
            <h3>LNCT Bhopal</h3>
            <p class="bold">B.tech</p>
            <p>
              Computer Science And Engineering and Artificial Intelligence and
              Machine learning
            </p>
          </div>

          <div class="box boxy">
            <i class="fas fa-graduation-cap"><FontAwesomeIcon icon={faGraduationCap} className="fas fa-graduation-cap"/>
            </i>
            <span>2020-2023</span>
            <h3>SV Polytechnic</h3>
            <p class="bold">Diploma</p>
            <p>Computer Science And Engineering</p>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap"><FontAwesomeIcon icon={faGraduationCap} className="fas fa-graduation-cap"/>
            </i>
            <span>2020</span>
            <h3>St.Francis Co-ed School</h3>
            <p class="bold">10th</p>
            <p>AISSCE</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
