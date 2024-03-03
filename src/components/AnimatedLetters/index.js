import '/Users/adityaarora/reactportfolio/src/components/AnimatedLetters/index.scss'
import sound from '/Users/adityaarora/reactportfolio/src/assets/mixkit-classic-click-1117.wav'

const AnimatedLetters =({letterClass,strArray,idx}) => {
    const lay=(sound)=>{
        new Audio(sound).play()
    }
        

        return (<span>
        {
            strArray.map((char,i)=>(<span key={char+i} className={`${letterClass} _${i+idx}`} >
                {char}
                </span>))


            
        }

            </span>
        )

        

    };
    export default AnimatedLetters;
