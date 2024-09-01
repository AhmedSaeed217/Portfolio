import React from 'react'
import styles from './Education.module.css';
export default function Education() {
  return <>
    <section 
    className={styles.education} id='education'>
      <div className="container">
      <div className="head-title">
        <h1>Education & Experience</h1>
      </div>

        <div className={styles.row}>

        <div className={styles.col}>
        {/* <h2 className={styles.heading}>Education</h2> */}
        <div className={styles.boxes}>

        <div className={styles.box}>
          <h2>Information Technology Institute <span>(Cairo, Egypt)</span></h2>
          <h3>March 2023 - June 2023</h3>
          <p>Front-end Development Track.</p>
        </div>

        <div className={styles.box}>
          <h2>Beni-Suef University <span>(Beni-Suef, Egypt)</span></h2>
          <h3>2018 - 2022</h3>
          <p>Bachelor's Degree in Computer science.</p>
          {/* <p>Departement : Information Systems.</p>
          <p>Grade : Good.</p> */}
        </div>



        </div>

        </div>

        <div className={styles.col}>
{/* <h2 className={styles.heading}>Experience</h2> */}
<div className={`${styles.boxes} ${styles.customBoxes}`}>

<div className={styles.box}>
  <h2>Freelance Front-end Developer</h2>
  <h3>July 2023 - Present</h3>
  <p >Upwork || Fiverr</p>

  {/* <p>Developed responsive and interactive front-end interfaces for websites and
  web applications based on client requirements.</p> */}
</div>

<div className={styles.box}>
  <h2>Front-end Developer</h2>
  <h3>August 2022 - February 2023</h3>
  <p >Eldeep Development Company (<span>Beni-Suef, Egypt</span>)</p>
  {/* <p>Developed and maintained multiple websites, ensuring compatibility across
  multiple browsers and devices.</p> */}
</div>



</div>

</div>






        </div>

     





      </div>

    



    </section>


  </>
}
