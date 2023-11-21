import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectSliderDetails, setSliderDetails} from "../store/slices/sliderDetailsSlice";
import {fetchSliderDetailsById} from "../api/movies";

function SliderDetails() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const sliderDetails = useSelector(selectSliderDetails);

    useEffect(() => {
        if (id) {
            fetchSliderDetailsById(id).then(res => {
                dispatch(setSliderDetails(res));
            });
        }
    }, [id, dispatch]);

    return (
        <div>
            {id && sliderDetails ? (
                <>
                    <span>{sliderDetails.title}</span>
                    <img src={sliderDetails.imgSource} alt={sliderDetails.title}/>
                </>
            ) : (
                <p style={{
                    padding: "70px"
                }}>No movies found for the entered id</p>
            )}
        </div>
    );
}

export default SliderDetails;
