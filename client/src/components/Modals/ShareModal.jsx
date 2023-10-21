import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const ShareModal = ({ modalOpen, setModalOpen, movie }) => {
   const shareData = [
      {
         icon: FaFacebook,
         shareButton: FacebookShareButton,
      },
      {
         icon: FaTwitter,
         shareButton: TwitterShareButton,
      },
   ];
   const url = `${window.location.protocol}//${window.location.host}/movie/${movie._id}`;
   return (
      <MainModal
         modalOpen={modalOpen}
         setModalOpen={setModalOpen}
      >
         <div className='inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle bg-main shadow-xl rounded-2xl p-10 overflow-y-auto h-full text-white'>
            <h2 className='text-2xl'>
               Share <span className='text-xl font-bold'> "{movie?.name}"</span>
            </h2>
            <form className='flex-rows flex-wrap gap-6 mt-6'>
               {shareData.map((data, index) => (
                  <data.shareButton
                     key={index}
                     url={url}
                     quote='Netflixo | Free Movies Site'
                  >
                     <div className='w-12 transitions hover:bg-subMain flex-colo text-lg h-12 bg-white rounded bg-opacity-30'>
                        <data.icon />
                     </div>
                  </data.shareButton>
               ))}
            </form>
         </div>
      </MainModal>
   );
};

export default ShareModal;
