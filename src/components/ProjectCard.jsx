import React from 'react'
import './styles/ProjectCard.css'
import seo from '../assets/seo.png'
import pacman from '../assets/pacman.png'
import surfgpt from '../assets/surfgpt.png'
import arrow from '../assets/arrow.png'

export default function ProjectCard(props) {
    
    
    return (
        <div className='wrapper--projectcard'>
            {props.contentFirst ? <div className={`left--projectcard`}>
                <img src={props.image} />
            </div> : null}
            
            <div className={`right--projectcard`}>
                <div className='content'>
                    <div className='title'>{props.title}</div>
                    <div className='description'>{props.description1}<span> {props.description2}</span></div>
                    <div className='category'>{props.category}</div>
                    </div>
                <a href={props.link}>
                    <button>
                        <div>VIEW WORK</div>
                        <img src={arrow} />
                    </button>
                </a>
            </div>

            {!props.contentFirst ? <div className={`left--projectcard`}>
                <img src={props.image} />
            </div> : null}

        </div>
    )
}