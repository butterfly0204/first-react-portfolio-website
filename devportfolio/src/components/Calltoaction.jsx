import cv from "../assets/Mogaji_favour_onepage_resume.pdf"
function Calltoaction(){
    return(
        <>
        <div className="calltoaction">
            <a href={cv} download className="btn" >Download CV</a>
            <a href="#contact" className="btn btn-primary">Send me a message</a>

        </div>
        </>
    )
}


export default Calltoaction