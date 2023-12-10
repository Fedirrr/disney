import React from "react";
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import {ISliderDetails} from "./mock";
import cssStyles from "../styles/styles";

interface ModalProps {
    closeModal: (arg: boolean) => void;
    sliderList: ISliderDetails;
}

function SliderModal({closeModal, sliderList}: ModalProps) {
    const {modal, Iframe} = cssStyles;

    return (
        <modal.Background
            onClick={() => {
                closeModal(false)}}
        >
            <modal.Container>
                <modal.Title>
                    <div>
                        <p>{sliderList.title}</p>
                    </div>
                    <modal.TitleBtn
                        onClick={() => {
                            closeModal(false);
                        }}
                    >
                        X
                    </modal.TitleBtn>
                </modal.Title>
                <Iframe
                    src={sliderList.backgroundTrailer}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </Iframe>
            </modal.Container>
        </modal.Background>
    );
}

export default SliderModal;
