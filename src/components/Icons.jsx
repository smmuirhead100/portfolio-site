import React from 'react'
import mail from '../assets/mail.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github-alt.png'
import './styles/Icons.css'

export default function Icons(props){
    return (
    <div className='icons--wrapper'>
        
        <a href={props.mail}>
            <img src={mail} />
        </a>

        <a href={props.linkedin}>
            <img src={linkedin} />
        </a>

        <a href={props.github}>
            <img src={github} />
        </a>
    </div>
    )
}