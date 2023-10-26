import toast from "react-hot-toast";
import Axios from "../redux/API/Axios";
import { IoMdCloudDownload } from "react-icons/io";

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

//download video

export const DownloadVideo = async (videoUrl, setProgress) => {
   const { data } = await Axios({
      url: videoUrl,
      method: "GET",
      responseType: "blog",
      onDownloadProgress: (ProgressEvent) => {
         const { loaded, total } = ProgressEvent;
         let percent = Math.floor((loaded * 100) / total);
         setProgress(percent);
         if (percent > 0 && percent < 100) {
            toast.loading(`Downloading... ${percent}%`, {
               id: "download",
               duration: 100000000,
               position: "bottom-right",
               style: {
                  background: "#333",
                  color: "#fff",
                  boarderRadius: "10px",
                  border: "5px solid #F20000",
                  padding: "16px",
               },
               icon: (
                  <IoMdCloudDownload className='text-2xl mr-2 text-subMain' />
               ),
            });
         } else {
            toast.dismiss("download");
         }
         return data;
      },
   });
};
