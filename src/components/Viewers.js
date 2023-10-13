import React from "react";
import cssStyles from "../styles/styles";
import {viewersArray} from "./mock"
const {viewers} = cssStyles


const Viewers = () => {
    return (<viewers.Container>
        {viewersArray.map(({imgSource, videoSource}) => (
            <viewers.Wrap>
                <img src={imgSource} alt=""/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={videoSource} type="video/mp4"/>
                </video>
            </viewers.Wrap>
        ))}
    </viewers.Container>)
}

export default Viewers;



