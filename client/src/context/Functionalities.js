import toast from "react-hot-toast";

//check if movie is aded to favorites

export const IfMovieLiked = (movie) => {
   const { likedMovies } = useSelector((state) => state.userGetFavoriteMovies);
   return likedMovies?.find((likedMovie) => likedMovie._id === movie._id);
};

//like movie functionality

export const LikeMovie = (movie, dispatch, userInfo) => {
   return !userInfo
      ? toast.error("Please Login to add to favorites")
      : dispatch(
           likeMovieAction({
              movieId: movie._id,
           })
        );
};
