import React from "react";
import "react-html5video/dist/styles.css";
import {IMovie} from "./mock";
import cssStyles from "../styles/styles";
interface ModalProps {
    closeModal: (arg: boolean) => void;
    moviesList: IMovie;
}

function Modal({closeModal,moviesList}: ModalProps) {
    const {modal,Iframe} = cssStyles;

    return (
        <modal.Background>
            <modal.Container>
                <modal.Title>
                    <div>
                        <p>{moviesList.trailerTitle}</p>
                    </div>
                    <modal.TitleBtn
                        onClick={() => {closeModal(false)}}
                    >
                        X
                    </modal.TitleBtn>
                </modal.Title>
                <Iframe src={moviesList.trailerSource}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                </Iframe>
            </modal.Container>
        </modal.Background>
    );
}
export default Modal;

