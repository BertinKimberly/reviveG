import React from "react";
import Layout from "../Layout/Layout";
import Head from "../components/Head";
import { FaMapMarker, FaPhone, FaVoicemail } from "react-icons/fa";

const ContactUs = () => {
   const ContactData = [
      {
         id: 1,
         title: "Email Us",
         info: "Interactively grow backend ideas for cross-platform models",
         icon: FaVoicemail,
         contact: "reviveG@gmail.com",
      },
      {
         id: 2,
         title: "Call Us",
         info: "Interactively grow backend ideas for cross-platform models",
         icon: FaPhone,
         contact: "+2500000005",
      },
      {
         id: 3,
         title: "Location",
         info: "Interactively grow backend ideas for cross-platform models",
         icon: FaMapMarker,
         contact: "",
      },
   ];
   return (
      <Layout>
         <div className='min-height-screen container mx-auto px-2 my-6'>
            <Head title='Contact Us' />
            <div className='grid mg:grid-cols-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-8'>
               {ContactData.map((item) => (
                  <div
                     key={item.id}
                     className='border border-border flex-colo p-10 bg-dry rounded-lg text-center'
                  >
                     <span className='flex-colo w-20 h-20 rounded-full bg-main text-white text-2xl mb-4'>
                        <item.icon />
                     </span>
                     <h5 className='text-2xl font-semibold mb-2'>
                        {item.title}
                     </h5>
                     <p className='mb-0 text-sm text-text leading-7'>
                        <a href={`mailto:${item.contact}`} className="text-blue-600">{item.contact}</a>
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </Layout>
   );
};

export default ContactUs;
