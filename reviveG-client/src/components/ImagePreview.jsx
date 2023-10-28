import React from "react";
import Avatar from "../assets/user.png"
const ImagePreview = ({ image, name }) => {
   return (
      <div className='w-32 mt-2 h-32 p-2 bg-main border-border rounded'>
         <img
            src={image ? image : Avatar}
            alt={name}
            className='w-full h-full object-cover rounded'
         />
      </div>
   );
};

export default ImagePreview;
