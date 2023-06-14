import React from 'react' 
import './styles/HomePage.css'
import Icons from './Icons.jsx'

export default function HomePage(props) {
    return (
        <div className='wrapper'>
            <div className='name'>Sean Muirhead</div>
            <div className='sidebar' onClick={props.scroll('projects')}>
                <li onClick={() => props.scroll('about')}>ABOUT</li>
                <li onClick={() => props.scroll('projects')}>PROJECTS</li>
                <a href="https://www.linkedin.com/in/sean-muirhead-6b1b75195/">
                    <li>CONTACT</li>
                </a>
            </div>
                <div className='icons'>
                    <Icons mail='mailto:smmuirhead100@berkeley.edu' linkedin='https://www.linkedin.com/in/sean-muirhead-6b1b75195/' github='https://github.com/smmuirhead100'/>
                </div>
            <div className='creator'>Creator</div>
        </div>
    )
}