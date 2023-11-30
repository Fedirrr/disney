import {IMovie, ISliderDetails, IViewers} from "../../components/mock";

export interface IMovieInitialState {
    movies : IMovie[] | null;
}
export interface IAboutCompanyInitialState {
    aboutCompanyState: IViewers[] | null
}

export interface ISliderListInitialState {
    item : ISliderDetails[] | null;
}

export interface IWatchListInitialState {
    watchlistItems: IMovie[] ;
}


export interface IState {
    movie: IMovieInitialState
    aboutCompany: IAboutCompanyInitialState
    sliderDetails: ISliderListInitialState
    watchList: IWatchListInitialState;

}