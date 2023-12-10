import React from "react";
import {viewersArray} from "./mock"
import cssStyles from "../styles/styles";
import {Link} from "react-router-dom";
const {viewers} = cssStyles

const Viewers = () => {
    return (<viewers.Container>
        {viewersArray.map(({imgSource, videoSource, id}) => (
            <Link to={`/about/${id}`} key={id}>
                <viewers.Wrap>
                    <img src={imgSource} alt=""/>
                    <video autoPlay={true} loop={true} playsInline={true}>
                        <source src={videoSource} type="video/mp4"/>
                    </video>
                </viewers.Wrap>
            </Link>
        ))}
    </viewers.Container>)
}
export default Viewers;



