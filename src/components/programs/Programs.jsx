import React from 'react'
import './Program.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
             <div className='programs-header'>
                <span className='stroke-text'>Explore Our</span>
                <span>Program</span>
                <span className='stroke-text'>to shape you</span>
             </div> 
             <div className='program-categories'>
                {
                   programsData.map((program)=>{
                    return(
                        <div className='categories'>
                            {program.image}
                            <span>{program.heading}</span>
                            <span>{program.details}</span>   
                        <div className='join-now'>
                            <span>Join Now</span>
                            <img src={RightArrow} alt='' />
                        </div>
                        </div>
                    )}) 
                }
             </div>
    </div>
  )
}

export default Programs
