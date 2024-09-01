import React from 'react'
import styles from './Hero.module.css'
import mainImg from '../../assets/imgs/myImg.png'
import CV from '../../assets/CV.pdf'
import { useTheme } from '../../Context/ThemeContext'
import { motion } from "framer-motion"
export default function Hero() {

  const { theme, toggleTheme } = useTheme();


  return <>
    <section  
    className={styles.hero}>
      <div className={styles.container}>
        <motion.div initial={{opacity:0, x:"-100vw"}} animate={{opacity:1,x:0}} transition={{duration:1}}
         className={styles.containerImg}> 
          <img src={mainImg} alt="" />
          {theme === 'light' ? <i onClick={toggleTheme} className="fa-solid fa-moon"></i> : <i onClick={toggleTheme} className="fa-solid fa-sun"></i>}
        </motion.div>


        <motion.div initial={{opacity:0, x:"-100vw"}} animate={{opacity:1,x:0}} transition={{duration:1}}
        className={styles.containerInfo}>
          <h1>Ahmed <br /> Saeed</h1>
          <h3>Frontend Developer</h3>

          <div className={styles.socialLinks}>
            <a target='_blank' href="https://github.com/AhmedSaeed217">
              <i className="fa-brands fa-github"></i>
            </a>
            <a target='_blank' href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH-U5MKSBWxdQAAAZC7K0MIa6NEUHMa5qTPSkUn2xvmxY6bBhdK_mrGhVqqP-Uizu0Yre5TLXSqVaY6YCRHjOZtYsSJO14_v_LUH2Y_Q2bs71BIchTByEg665YAlEdRT7G9LkU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fahmedsaeed217%2F">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a target='_blank' href="mailto:ahmedalsaeed@1999@gmail.com">
              <i className="fa-solid fa-paper-plane"></i>
            </a>
          </div>
          <p>Passionate React developer skilled in building dynamic, user-friendly web applications,
            with a focus on delivering responsive, scalable, and visually appealing solutions.</p>
          <a href={CV} download>
            <button>Download CV</button>
            <br />
          </a>
          <a href="#contact" >
            <button className={styles.customBtn}>Contact Me</button>

          </a>
        </motion.div>

      </div>

      <div className={styles.buttondown}>
        <a href="#education">
          <i className="fa-solid fa-angles-down"></i>
        </a>
      </div>

    </section>


  </>
}
