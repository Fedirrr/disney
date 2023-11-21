import {sliderArray, moviesArray, IMovie} from "../components/mock";


export const fetchSliderDetailsById =  async (sliderId: string) => {
    return sliderArray.find(({id}) => id === sliderId)
};

export const fetchMovies = async () => {
    return moviesArray
};


export const fetchAddToFavorites = (movieId: IMovie) => {
    const movieToAdd = moviesArray.find(item => item.id === movieId.id);

    if (movieToAdd) {
        return [movieToAdd];
    } else {
        return moviesArray;
    }
};


export const fetchRemoveFromFavorites =  (movieId: string) => {
    return moviesArray.filter(item => item.id !== movieId);
};



