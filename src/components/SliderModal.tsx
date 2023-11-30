import React from "react";
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { ISliderDetails} from "./mock";
import cssStyles from "../styles/styles";
interface ModalProps {
    closeModal: (arg: boolean) => void;
    sliderList: ISliderDetails;
}

function SliderModal({closeModal, sliderList}: ModalProps) {
    const {modal} = cssStyles
    return (
        <modal.Background>
            <modal.Container >
                <modal.Title >
                    <div>
                        <p>{sliderList.title}</p>
                    </div>

                    <modal.TitleBtn
                        onClick={() => {
                            closeModal(false);
                        }}>
                        X
                    </modal.TitleBtn>
                </modal.Title>
                <Video>
                    <source src="/videos/The%20Simpsons%20Movie%20-%201080p%20Trailer.mp4"/>
                </Video>
            </modal.Container>
        </modal.Background>
    );
}

export default SliderModal;
