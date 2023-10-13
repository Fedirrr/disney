import React from "react";
import cssStyles from "../styles/styles";

const {viewers} = cssStyles

const viewersArray = [
    {
        imgSource: "/images/viewers-disney.png",
        videoSource: "/videos/1564674844-disney.mp4"
    },
    {
        imgSource: "/images/viewers-pixar.png",
        videoSource: "/videos/1564676714-pixar.mp4"
    },
    {
        imgSource: "/images/viewers-marvel.png",
        videoSource: "/videos/1564676115-marvel.mp4"
    },
    {
        imgSource: "/images/viewers-starwars.png",
        videoSource: "/videos/1608229455-star-wars.mp4"
    },
    {
        imgSource: "/images/viewers-national.png",
        videoSource: "/videos/1564676296-national-geographic.mp4"
    },

]


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



