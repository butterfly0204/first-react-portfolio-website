import me from "../assets/IMG_3700.png"
import Headersocials from "./Headersocials" 
function Header(){
    return(
        <>
        <header>
            <div className="container header_container">
                <h5>Hello I'm </h5>
                <h1>Mogaji Favour</h1>
                <h5 className="text-light">Software Engineer</h5>
                 <Headersocials/>
                 <div>
                    <img src={me} alt="me" className="me" />
                 </div>

                 <a href="#contact" className="scroll_down"> Scroll Down</a>
            </div>
        </header>
        
        </>
        
    )

}

export default Header