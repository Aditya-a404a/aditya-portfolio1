import AnimatedLetters from '../AnimatedLetters';
import '/Users/adityaarora/reactportfolio/src/components/Contact/index.scss'
import {useEffect, useState} from 'react'
const Contact= ()=>
{ 
    const [letterClass,setLetterClass] = useState('text-animate')
    const t="I am currently looking for a oppurtunity to work as intern in a Tech startup or a company where I can learn and grow as a developer."
    const p1=t.split(" ")
    let p2=[]
    for(let i=0;i<p1.length;i++)
    {
        p2.push(p1[i])
        p2.push(" ")
    }

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass ('text-animate-hover')},6000)
    })
    return (<>
    <div className="container contact-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters strArray={["C","O","N","T","A","C","T"," ","M","E"]} letterClass={letterClass} idx={15}/>

            </h1>
            <p>
            <AnimatedLetters strArray={p2} letterClass={letterClass} idx={15}/>
                <br/>
               
            </p>
            <div  className="contact-form">
                <form>
                    <ul>
                        <li className="half">
                            <input type="text" name="name" placeholder="Name"  required/>
                        </li>
                        <li className="half">
                            <input type="email" name="email" placeholder="email"  required/>
                        </li>
                        <li>
                            <input type="text" name="subject" placeholder="Subject"  required/>
                        </li>
                        <li>
                            <textarea name="message" placeholder="Message"  required></textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND"/>
                        </li>
                    </ul>
                </form>
            </div>

        </div>

    </div>
    </>)
}
export default Contact;
