import {createSlice} from "@reduxjs/toolkit";
import {ISliderDetails} from "../../components/mock";

// interface for initialState
interface ISliderListInitialState {
    item : ISliderDetails[] | null;
}

// interface for selectSliderMovie
interface ISliderListState {
    sliderDetails: ISliderListInitialState
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
export const selectSliderDetails = (state:ISliderListState) => state.sliderDetails.item;