import React from "react";
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import {IMovie} from "./mock";
import cssStyles from "../styles/styles";
interface ModalProps {
    closeModal: (arg: boolean) => void;
    moviesList: IMovie;
}

function Modal({closeModal,moviesList}: ModalProps) {
    const {modal} = cssStyles
    return (

        <modal.Background>
            <modal.Container >
                <modal.Title >
                    <div>
                        <p>{moviesList.trailerTitle}</p>
                    </div>

                    <modal.TitleBtn
                        onClick={() => {
                            closeModal(false);
                        }}>
                        X
                    </modal.TitleBtn>
                </modal.Title>
                <Video>
                    <source src={moviesList.trailerSource}/>
                </Video>
            </modal.Container>
        </modal.Background>
    );
}

export default Modal;
