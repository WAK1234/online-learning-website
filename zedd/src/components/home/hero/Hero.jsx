import React from 'react'
import "./hero.css"
import Title from "../../common/title/Title"

const Hero = () => {
  return (
    <>
      <section className='hero'>
      <div className='container'>
        <div class="row">
        <Title subtitle='WELCOME TO ZEDD' title="Best Online Education" />
            <p>Do you dream of acquiring new skills, advancing your career, or simply exploring your interests? At ZEDD, we make learning accessible and convenient with our diverse range of online courses. Whether you're a busy professional, a lifelong learner, or a student seeking an alternative to traditional education, we have something for everyone.</p>
        <div className="button">
            <button className="primary-btn">
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
            </button>
             <button>
                VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
            </button>
        </div>
        </div>
      </div>


      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
