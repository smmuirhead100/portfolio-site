import React from 'react'
import './styles/Projects.css'
import ProjectCard from './ProjectCard'
import data from '../projectdata'

export default function Projects(){
    
    const[contentFirst, setContentFirst] = React.useState(false)

    function switchOrder() {
        setContentFirst(true)
    }


    const cards = data.map(item => {
        return (
            <ProjectCard
                image={item.image}
                title={item.title}
                description1={item.description1}
                description2={item.description2}
                category={item.category}
                contentFirst={item.contentFirst}
                link={item.link}
            />
        )
    })

    React.useEffect(() => {
        switchOrder()
    }, [cards])
    
    

    return (
        <div>
            <div className='title--projects'>PROJECTS</div>
            <div className='wrapper--projects'>
                {cards}
            </div>
        </div>
    )
}