import React from "react";
import background from '../Assets/background.mp4'

const Main = () => {
    return(
        <div>
            <div className="overlay"></div>
            <video className="background" src={background} autoPlay loop muted/>
            <div className="content">
                <h1>Does your broker give you this?</h1>
            </div>
        </div>
    )
}

export default Main;