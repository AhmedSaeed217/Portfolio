import React, {useEffect, useState } from 'react'
import twitterProject from '../../assets/imgs/TwitterProject.png'
// import youtubeProject from '../../assets/imgs/yo'
import productFilterProject from '../../assets/imgs/ProductFilterProject.png'
import crudProject from '../../assets/imgs/CrudProject.png'
import feaneProject from '../../assets/imgs/FeaneProject.png'
import topicoProject from '../../assets/imgs/topicoProject.png'
import recipeProject from '../../assets/imgs/RecipeProject.png'
import { motion } from "framer-motion"
import styles from './Projects.module.css'
const projects=[
  { id: 0, name: 'Twitter Clone', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, dolor eum ratione molestias laboriosam quis.', img:twitterProject, tech: 'HTML , CSS', live: 'https://ahmedsaeed217.github.io/Twitter-Clone/', code: 'https://github.com/AhmedSaeed217/Twitter-Clone', category: 'landing' },
  // { id: 1, name: 'Youtube Clone', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, dolor eum ratione molestias laboriosam quis.', img:'', tech: 'HTML , CSS', live: 'https://ahmedsaeed217.github.io/Youtube-Clone/', code: 'https://github.com/AhmedSaeed217/Youtube-Clone', category: 'landing' },
  { id: 2, name: 'Feane Restaurant', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, dolor eum ratione molestias laboriosam quis.', img:feaneProject, tech: 'HTML , CSS , Bootstrap , JS , Jquery', live: 'https://ahmedsaeed217.github.io/Feane-Food-Restaurant/', code: 'https://github.com/AhmedSaeed217/Feane-Food-Restaurant', category: 'landing' },
  { id: 3, name: 'Product Filter App', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, dolor eum ratione molestias laboriosam quis.', img:productFilterProject, tech: 'HTML , CSS , Bootstrap , JS , React', live: 'https://product-filetring-react-app.netlify.app/', code: 'https://github.com/AhmedSaeed217/Product-Filtering-React-App', category: 'React' },
  { id: 4, name: 'Topico', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, dolor eum ratione molestias laboriosam quis.', img:topicoProject, tech: 'HTML , CSS , JS', live: 'https://ahmedsaeed217.github.io/TOPICO/', code: 'https://github.com/AhmedSaeed217/TOPICO', category: 'advanced' },
  { id: 5, name: 'Icloud Store', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, dolor eum ratione molestias laboriosam quis.', img:crudProject, tech: 'HTML , CSS , JS', live: 'https://ahmedsaeed217.github.io/I-Cloud-Store/', code: 'https://github.com/AhmedSaeed217/I-Cloud-Store', category: 'advanced' },
  { id: 6, name: 'Recipe App', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, dolor eum ratione molestias laboriosam quis.', img:recipeProject, tech: 'HTML , CSS , Bootstrap , JS', live: 'https://recipeappsaeed.netlify.app/', code: 'https://github.com/AhmedSaeed217/RecipeApp', category: 'advanced' },
];


export default function Projects() {

  const [filteredProjects,setFilteredProjects]=useState(projects);

  const [currentActive,setCurrentActive]=useState('all');

  const filterByCategory = (category) => {
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {

      const filtered = projects.filter((project) => project.category === category);
      setFilteredProjects(filtered);
    }
  }



  return <> 
  <section className={styles.projects}>
      <div className="container">
        <div className="head-title">
          <h1>Projects</h1>
          <p>Things I’ve built so far</p>
        </div>

        <div className={styles.filterBtns}>
          <button className={currentActive==='all'?`${styles.active}`:null} onClick={() => {filterByCategory('all'); setCurrentActive('all')}}>All projects</button>
          <button className={currentActive==='css'?`${styles.active}`:null} onClick={() => {filterByCategory('landing');setCurrentActive('css') }}>HTML & CSS</button>
          <button className={currentActive==='advanced'?`${styles.active}`:null} onClick={() => {filterByCategory('advanced');setCurrentActive('advanced')}}>Javascript</button>
          <button className={currentActive==='react'?`${styles.active}`:null} onClick={() => {filterByCategory('React');setCurrentActive('react')}}>React</button>
        </div>

        <div className={styles.projectsContainer}>

          {/* {projects.map((project)=>
            <div key={project.id} className={styles.oneProject}>
            <div className={styles.projectImg}>
              <img src={project.img} alt="" />
            </div>
            <div className={styles.projectInfo}>
             <h3>{project.name}</h3>
              
              <p className={styles.description}>{project.desc}</p>
              <h5>Tech Stack : <span>{project.tech}</span></h5>
              <div className={styles.projectLinks}>
                  <a href={project.live}><i className="fa-solid fa-link"></i> Live Preview</a>
                  <a href={project.code}><i className="fa-brands fa-github"></i> View Code</a>
              </div>
            </div>

             
          </div>
          )} */}

{/* {filteredProjects.map((project) =>  <div key={project.id} className={styles.oneProject}>
            <div className={styles.projectImg}>
              <img src={project.img} alt="" />
            </div>
            <div className={styles.projectInfo}>
             <h3>{project.name}</h3>
              <h5>Tech Stack : <span>{project.tech}</span></h5>
              <div className={styles.projectLinks}>
                  <a href={project.live}><i className="fa-solid fa-link"></i> Live Preview</a>
                  <a href={project.code}><i className="fa-brands fa-github"></i> View Code</a>
              </div>
            </div>

             
          </div>
          )} */}

          {filteredProjects.map((project) => <motion.div
          initial={{opacity:0.5, x:"-100vw"}} animate={{opacity:1,x:0,y:0}} transition={{duration:0.8}}
           key={project.id} className={styles.project}>
            <div className="project-img">
              <img src={project.img} alt="" />
            </div>

            <div className={styles.projectInfo}>
              <a target='_blank' href={project.live}><i className="fa-solid fa-link"></i> Live Demo</a>
              <a target='_blank' href={project.code}><i className="fa-brands fa-github"></i> Github</a>
            </div>

          </motion.div>
          )}






        </div>

      </div>

    </section>




  </>
}
