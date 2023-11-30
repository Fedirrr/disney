import {createSlice} from "@reduxjs/toolkit";
import {ISliderDetails} from "../../components/mock";
import {IState} from "../types/redux";


interface ISliderListInitialState {
    item :ISliderDetails[] | null;
}

const initialState:ISliderListInitialState = {
    item : null,
};

export const sliderListSlice = createSlice({
    name: "sliderDetails",
    initialState,
    reducers: {
        setSliderDetails: (state, action) => {
            state.item = action.payload

        }
    }
});
export const {setSliderDetails} = sliderListSlice.actions;
export const selectSliderDetails = (state:IState) => state.sliderDetails.item;