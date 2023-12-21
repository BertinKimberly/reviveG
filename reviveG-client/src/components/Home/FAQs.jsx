import { useEffect } from "react";
import { FaQuestion } from "react-icons/fa";
import "./Faqs.css";
import Titles from "../Titles";
import { useSelector, useDispatch } from "react-redux";
import { getAllFaqsAction } from "../../redux/Actions/faqsActions";
import FAQ from "./FAQ";
import Loader from "../Notifications/Loader";

const FAQs = () => {
   const { isLoading, faqs } = useSelector((state) => state.getAllFaqs);


   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getAllFaqsAction({}));
   }, []);

   return (
      <section className='faqs'>
         <div className='container faqs__container'>
            <Titles
               title='Frequently Asked Questions'
               Icon={FaQuestion}
            />
            <div className='faqs__wrapper'>
               {isLoading ? (
                  <Loader />
               ) : faqs?.length > 0 ? (
                  faqs.map(({ _id, question, answer }) => (
                     <FAQ
                        key={_id}
                        question={question}
                        answer={answer}
                     />
                  ))
               ) : (
                  <h5>No FAQS</h5>
               )}
               {}
            </div>
         </div>
      </section>
   );
};

export default FAQs;
