import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import '/Users/adityaarora/reactportfolio/src/components/About/index.scss'
import { useState,useEffect } from 'react';
import { faReact, faCss3, faHtml5, faJava, faJsSquare, faPython } from '@fortawesome/free-brands-svg-icons';



const About =() =>

{  const [letterClass,setLetterClass] = useState('text-animate')
useEffect(()=>{

    setTimeout(()=>{
        setLetterClass ('text-animate-hover')},3500)
})

    return (<>
    <div className="Container about-page">
        <div className="text-zone">
            <h1>

                <AnimatedLetters
                strArray={['A','B','O','U','T', ' ', 'M','E']} idx={15} letterClass={letterClass}  />
            </h1>
            <p>
                I am a Frontend Developer with a passion for creating beautiful and functional user experiences. I have a strong interest in learning new technologies and frameworks. I am currently working on my skills in React and Python. I am a graduate of the University of Toronto with a Bachelor of Science in Computer Science and Statistics. I am currently looking for a full-time position as a Frontend Developer.  

            </p>
            <p>
                Currently I am learing React by building this portfolio website. 
                I know the 3-4 languages Python, Java, C, Javascript(just for React)
                I have worked on a few projects in Python and Java. I have also worked on a few projects in React.
            </p>



        </div>

        <div className="stage-cube-cont">

            <div className="cubespinner">

                <div className="face1">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faPython} color="#ffde57"/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJava} color="#5ED4F4" />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
            </div>
        </div>


    </div>
    
    </>)
}
export default About;