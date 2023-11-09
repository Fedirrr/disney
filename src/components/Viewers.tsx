import React from "react";
import {viewersArray} from "./mock"
import cssStyles from "../styles/styles";


const {viewers} = cssStyles
const Viewers = () => {
    return (<viewers.Container>
        {viewersArray.map(({imgSource, videoSource},index) => (
            <viewers.Wrap key={index}>
                <img src={imgSource} alt=""/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={videoSource} type="video/mp4"/>
                </video>
            </viewers.Wrap>
        ))}
    </viewers.Container>)
}

export default Viewers;



