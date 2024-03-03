import Layout from "../Layout"
import LogoTitle from "/Users/adityaarora/reactportfolio/src/assets/images/icons8-a-100 (1).png"
import { NavLink,Link } from "react-router-dom"
import "/Users/adityaarora/reactportfolio/src/components/home/index.scss"
import AnimatedLetters from "../AnimatedLetters"
import {useEffect, useState} from 'react'


const Home = ()=> {

    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray =["A","D",'I']
    const jobArray=["W","E","B"," ","D","E","V","E","L","O","P","E","R"]

    useEffect(()=>{

        setTimeout(()=>{
            setLetterClass ('text-animate-hover')},3500)
    })

    return (
        <>
        
        <div className="container home-page">
            <div claasName='text-zone'>
                <h1>
                    <span className={`${letterClass} _10`}>H</span>
                    <span className={`${letterClass} _11`}>i</span>
                     <br/>
                     <span className={`${letterClass} _12`}>I</span> 
                     <span className={`${letterClass} _13`}>'</span>  
                     <span className={`${letterClass} _14`}>m</span>
                     <span className={`${letterClass} _15`}> </span>

                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16} />
                 
                
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={18} />
                </h1>
                <h2> Frontend Developer / Python</h2>
                <Link to="/contact" className="flat-button">Contact me</Link>


                
            </div>
        </div>


        </>
    )

}
export default Home