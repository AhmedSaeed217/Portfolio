import React from 'react'
import styles from './Skills.module.css'
import htmlIcon from '../../assets/imgs/html5.png'
import cssIcon from '../../assets/imgs/css3.png'
import bootstrapIcon from '../../assets/imgs/bootstrap.png'
import jsIcon from '../../assets/imgs/javascript.png'
import jqIcon from '../../assets/imgs/jquery.png'
import npmIcon from '../../assets/imgs/npm.png'
import reactIcon from '../../assets/imgs/react.png'
import reduxIcon from '../../assets/imgs/redux.png'
import sassIcon from '../../assets/imgs/sass.png'
import tsIcon from '../../assets/imgs/typescript.png'
import vsIcon from '../../assets/imgs/visual-studio-team-services.png'
import gitIcon from '../../assets/imgs/visual-studio-team-services-git-repository.png'
export default function Skills() {
  return<>
  <section className={styles.skills}>
  <div className="container">
    <div className="head-title">
        <h1>Skills</h1>
        <p> Technologies I’ve been working with recently</p>
      </div>

      <div className={styles.skillsContainer}>

            <div className={styles.skill}>
            <img src={htmlIcon} alt="" />
            <p>HTML</p>
            </div>

            <div className={styles.skill}>
            <img src={cssIcon} alt="" />
            <p>CSS</p>
            </div>


            <div className={styles.skill}>
            <img src={bootstrapIcon} alt="" />
            <p>Bootstrap</p>
            </div>


            
            <div className={styles.skill}>
            <img src={sassIcon} alt="" />
            <p>Sass</p>
            </div>

            <div className={styles.skill}>
            <img src={jsIcon} alt="" />
            <p>Javascript</p>
            </div>

            <div className={styles.skill}>
            <img src={tsIcon} alt="" />
            <p>Typescript</p>
            </div>
            

            <div className={styles.skill}>
            <img src={jqIcon} alt="" />
            <p>JQuery</p>
            </div>
            

            <div className={styles.skill}>
            <img src={reactIcon} alt="" />
            <p>React</p>
            </div>

            <div className={styles.skill}>
            <img src={reduxIcon} alt="" />
            <p>Redux</p>
            </div>

            <div className={styles.skill}>
            <img src={npmIcon} alt="" />
            <p>NPM</p>
            </div>

            
         
            <div className={styles.skill}>
            <img src={gitIcon} alt="" />
            <p>Git</p>
            </div>

            <div className={styles.skill}>
            <img src={vsIcon} alt="" />
            <p>VS Code</p>
            </div>

        

        </div>


    </div>

    


  </section>
  
  </>
}
