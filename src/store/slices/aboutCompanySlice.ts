import {createSlice} from "@reduxjs/toolkit";
import {IViewers} from "../../components/mock";
import {IState} from "../types/redux";

interface IAboutCompanyInitialState {
    aboutCompanyState: IViewers[] | null
}

const initialState: IAboutCompanyInitialState = {
    aboutCompanyState: null
}


export const companySlice = createSlice({
    name: "aboutCompany",
    initialState,
    reducers: {
        setSCompanyDetails: (state, action) => {
            state.aboutCompanyState = action.payload
        }
    },
})
export const {setSCompanyDetails} = companySlice.actions;
export const selectCompany = (state:IState) => state.aboutCompany.aboutCompanyState