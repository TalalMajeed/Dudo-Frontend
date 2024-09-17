import Dudo from './assets/Dudo.png'
import Section1 from './Section1';
import Section2 from './Section2';
import './Intro.css'

function Intro () {
    return (
        <>
         <nav id='nav'>
            <img src={Dudo} id='nav_dudo'/>
            <div id='Dudo'>Dudo</div>
         </nav>
         <Section1/>
         <Section2/>
        </>
    )
}
export default  Intro;
