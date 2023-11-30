import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setSliderDetails} from '../store/slices/sliderDetailsSlice';
import {ISliderDetails, sliderArray} from './mock';
import cssStyles from '../styles/styles';
import {fetchSliderDetailsById} from '../api/movies';
import SliderModal from './SliderModal';
import {FaVolumeUp, FaVolumeMute} from "react-icons/fa";

const SliderDetails = () => {
    const {sliderDetailsStyles} = cssStyles;
    const {id} = useParams();
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [movie, setMovie] = useState<ISliderDetails | null>(null);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (id) {
            fetchSliderDetailsById(id).then((res) => {
                if (res) {
                    dispatch(setSliderDetails(res));
                    setMovie(res);
                }
            });
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (id) {
            const foundMovie = sliderArray.find((item) => item.id === id);
            if (foundMovie) {
                setMovie(foundMovie);
            }
        }
    }, [id]);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };


    return (
        <>
            {id && movie ? (
                <sliderDetailsStyles.Container>
                    {modal && <SliderModal closeModal={() => setModal(false)} sliderList={movie}/>}

                    <div className="movieDescriptionContainer"
                         style={{
                             padding: "80px",
                             border: "1px solid white",
                             marginTop: "100px",
                             borderRadius: "6px"

                         }}>
                        <div className="movieDescriptionContent"
                             style={{
                                 display: "flex",
                             }}>

                            <div className="movieDescriptionPoster">
                                <img style={{width: "300px"}} src={movie.titleImg} alt=""/>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginLeft: "50px"
                                }}
                            >

                            <span
                                style={{
                                    textDecoration: "underline",
                                    textDecorationColor: "white",
                                    textDecorationThickness: "2px"
                                }}>
                                Description
                            </span>


                                <div className="movieDescriptionInfo">
                                    <dl style={{display: "flex", alignItems: "flex-start"}}>
                                        <dt style={{width: "120px", marginRight: "40px"}}>Release date:</dt>
                                        <dd
                                            style={{margin: 0}}>{movie.infoAboutMovie}</dd>
                                    </dl>
                                    <dl style={{display: "flex", alignItems: "flex-start"}}>
                                        <dt style={{width: "120px", marginRight: "40px"}}>Duration:</dt>
                                        <dd style={{margin: 0}}>{movie.duration}</dd>
                                    </dl>
                                    <dl style={{display: "flex", alignItems: "flex-start"}}>
                                        <dt style={{width: "120px", marginRight: "40px"}}>Stars:</dt>
                                        <dd style={{margin: 0}}>{movie.starring}</dd>
                                    </dl>
                                    <dl style={{display: "flex", alignItems: "flex-start"}}>
                                        <dt style={{width: "120px", marginRight: "40px"}}>Director:</dt>
                                        <dd style={{margin: 0}}>{movie.director}</dd>
                                    </dl>
                                    <dl style={{display: "flex", alignItems: "flex-start"}}>
                                        <dt style={{width: "120px", marginRight: "40px"}}>Genre:</dt>
                                        <dd style={{margin: 0}}>{movie.genre}</dd>
                                    </dl>

                                </div>
                            </div>
                        </div>
                        <div>
                            <h2>
                                {movie.descriptionTitle}
                            </h2>
                            <span>
                                {movie.description}
                            </span>
                        </div>
                    </div>
                    <div className="movieTitleContainer">

                        {movie.backgroundTrailer && (
                            <div
                                style={{
                                    position: "relative",
                                    top: 0,
                                    left: 0,
                                    overflow: "hidden"
                                }}
                            >
                                <div>
                                    <video autoPlay loop playsInline muted={isMuted} style={{width: "100%"}}>
                                        <source src={movie.backgroundTrailer} type="video/mp4"/>
                                    </video>

                                </div>
                                <button style={{
                                    position: "absolute",
                                    top: "80px",
                                    right: "80px",
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                                    border: "1px solid white",
                                    color: "white",
                                    fontSize: '20px',
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "5px",
                                }}
                                        onClick={() => setIsMuted(!isMuted)}>
                                    {isMuted ? <FaVolumeMute/> : <FaVolumeUp/>}
                                </button>

                                <div className="movieCardInfo"
                                     style={{
                                         display: "flex",
                                         position: "absolute",
                                         bottom: 0,
                                         left: 0,
                                         marginLeft: "25px",
                                         marginBottom: "15px",
                                     }}>

                                    <div className="movieCPoster">
                                        <img style={{width: "250px"}}
                                             src={movie.titleImg} alt=""/>
                                    </div>
                                    <div className="movieCardInfoPanel"
                                         style={{marginLeft: "55px", display: "flex", flexDirection: "column"}}>
                                        <div className="movieCardInfoTop">
                                            <ul style={{display: "flex", listStyle: "none"}}>
                                                <li style={{
                                                    marginRight: "15px",
                                                    fontSize: "13px",
                                                    fontStyle: "normal",
                                                    fontWeight: 600,
                                                    letterSpacing: ".3px",
                                                    textTransform: "uppercase",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis"
                                                }}>{movie.title}</li>
                                                <li style={{
                                                    marginRight: "15px",
                                                    fontSize: "13px",
                                                    fontStyle: "normal",
                                                    fontWeight: 600,
                                                    letterSpacing: ".3px",
                                                    textTransform: "uppercase",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap"
                                                }}>{movie.imdbRating}</li>
                                                <li style={{
                                                    marginRight: "15px",
                                                    fontSize: "13px",
                                                    fontStyle: "normal",
                                                    fontWeight: 600,
                                                    letterSpacing: ".3px",
                                                    textTransform: "uppercase",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap"
                                                }}>{movie.age}</li>
                                            </ul>
                                        </div>
                                        <h1>
                                            {movie.title}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </sliderDetailsStyles.Container>
            ) : (
                <p style={{
                    padding: "70px"
                }}>No movies found for the entered id</p>
            )}


        </>
    );
};

export default SliderDetails;
