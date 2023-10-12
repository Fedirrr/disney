import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import moviesArray from "./mock";
import cssStyles from "../styles/styles";

const {details} = cssStyles;
const Details = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        if (id) {
            const foundMovie = moviesArray.find(movie => movie.id === id);

            if (foundMovie) {
                setMovie(foundMovie);
            } else {
                alert('Movie not found')
            }
        } else {
            alert('The "id" parameter is missing from the URL')
        }
    }, [id, moviesArray]);
    return (
        <details.Container>
            {
                movie && (
                    <>
                        <details.Background>
                            <img src={movie.cardImg} alt=""/>
                        </details.Background>
                        <details.ImageTitle>
                            <img
                                src={movie.titleImg}/>
                        </details.ImageTitle>
                        <details.Controls>
                            <details.PlayButton>
                                <img src="/images/play-icon-black.png"/>
                                <span>PLAY</span>
                            </details.PlayButton>
                            <details.TrailerButton>
                                <img src="/images/play-icon-white.png"/>
                                <span>Trailer</span>
                            </details.TrailerButton>
                            <details.AddButton>
                                <span>+</span>
                            </details.AddButton>
                            <details.GroupWatchButton>
                                <img src="/images/group-icon.png"/>
                            </details.GroupWatchButton>
                        </details.Controls>
                        <details.SubTitle>
                            {movie.subTitle}
                        </details.SubTitle>
                        <details.Description>
                            {movie.description}
                        </details.Description>
                    </>
                )}
        </details.Container>
    )
}

export default Details
//
// const Container = styled.div`
//   min-height: calc(100vh - 70px);
//   padding: 70px calc(3.5vw + 5px);
//   position: relative;
// `;
//
// const Background = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   z-index: -1;
//   opacity: 0.8;
//
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;
//
// const ImageTitle = styled.div`
//   height: 30vh;
//   min-height: 170px;
//   width: 35vw;
//   min-width: 200px;
//   margin-top: 60px;
//
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }
// `;
//
// const Controls = styled.div`
//   display: flex;
//   align-items: center;
// `;
//
// const PlayButton = styled.button`
//   border-radius: 4px;
//   font-size: 15px;
//   padding: 0 24px;
//   margin-right: 22px;
//   display: flex;
//   align-items: center;
//   height: 56px;
//   background-color: rgb(249, 249, 249);
//   border: none;
//   letter-spacing: 1.8px;
//   cursor: pointer;
//
//   &:hover {
//     background: rgb(198, 198, 198);
//   }
// `;
//
// const TrailerButton = styled(PlayButton)`
//   background: rgba(0, 0, 0, 0.3);
//   border: 1px solid rgb(249, 249, 249);
//   color: rgb(249, 249, 249);
//   text-transform: uppercase;
// `;
//
// const AddButton = styled.button`
//   margin-right: 16px;
//   width: 44px;
//   height: 44px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   border: 2px solid white;
//   background-color: rgba(0, 0, 0, 0.6);
//   cursor: pointer;
//
//   span {
//     font-size: 30px;
//     color: white;
//   }
//
// `;
//
// const GroupWatchButton = styled(AddButton)`
//   background: rgb(0, 0, 0);
// `;
//
// const SubTitle = styled.div`
//   color: rgb(249, 249, 249);
//   font-size: 15px;
//   min-height: 20px;
//   margin-top: 26px;
// `;
//
// const Description = styled.div`
//   line-height: 1.4;
//   font-size: 20px;
//   margin-top: 16px;
//   color: rgb(249, 249, 249);
//   max-width: 760px;
// `;