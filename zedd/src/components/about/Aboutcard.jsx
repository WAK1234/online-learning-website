import React from 'react'
import Title from "../common/title/Title"

const Aboutcard = () => {
  return (
    <div>
      <section className='aboutHome'>
      <div className='container flexSB'>
      <div className="left row">
        <img src='./images/3.jpg' alt='' />
      </div>
      <div className="right-row">
        <Title subtitle='LEARN ANYTHING' title="Benefits About Online Learning Expertise" />
     <div className='items'>{homeAbout}</div>
      </div>

      </div>
      </section>
    </div>
  )
}

export default Aboutcard
