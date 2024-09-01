import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  return <>
    <footer className={styles.footer}>

      <div className="container">
        <hr />
        <div className={styles.footerContent}>
          <div className={styles.copyRights}>
            <h2>Copyrights&copy;2024 Ahmed Saeed</h2>
          </div>

          <div className={styles.icons}>
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
        </div>
      </div>




    </footer>





  </>
}
