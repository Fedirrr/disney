import {sliderArray, moviesArray, IMovie} from "../components/mock";


export const fetchSliderDetailsById =  async (sliderId: string) => {
    return sliderArray.find(({id}) => id === sliderId)
};

export const fetchMovies = async () => {
    return moviesArray
};

