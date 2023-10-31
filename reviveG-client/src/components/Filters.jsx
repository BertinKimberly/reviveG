import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { CgSelect } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { getAllMoviesAction } from "../redux/Actions/MoviesActions";
import { LanguageData, RatesData } from "../data/FilterData";

const Filters = (props) => {
   const {
      categories,
      category,
      setCategory,
      language,
      setLanguage,
      year,
      setYear,
      times,
      setTimes,
      rates,
      setRates,
   } = props?.data;

   const Filter = [
      {
         value: category,
         onChange: setCategory,
         items:
            categories?.length > 0
               ? [{ title: "All Categories" }, ...categories]
               : [{ title: "No category found" }],
      },
      {
         value: language,
         onChange: setLanguage,
         items: LanguageData,
      },
      {
         value: year,
         onChange: setYear,
         items: CategoriesData,
      },
      {
         value: times,
         onChange: setTimes,
         items: CategoriesData,
      },
      {
         value: rates,
         onChange: setRates,
         items: RatesData,
      },
   ];



   return (
      <div className='my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6'>
         {Filter.map((item, index, onChange) => (
            <Listbox
               key={index}
               value={item.value}
               onChange={item - onChange}
            >
               <div className='relative'>
                  <Listbox.Button className='relative border border-gray-800 w-full  text-white bg-main rounded-lg  cursor-default py-4 pl-6 pr-10 text-left text-xs'>
                     <span className='block truncate'>{item.value.title}</span>
                     <span className='absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2'>
                        <CgSelect
                           className='h-5 w-5'
                           aria-hidden='true'
                        />
                     </span>
                  </Listbox.Button>
                  <Transition
                     as={Fragment}
                     leave='transition ease-in duration-100'
                     leaveFrom='opacity-100'
                     leaveTo='opacity-0'
                  >
                     <Listbox.Options className='absolute z-10 mt-1 bg-dry border border-gray-800 text-dryGray ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                        {item.items.map((item, i) => (
                           <Listbox.Option
                              key={i}
                              className={({ active }) =>
                                 `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                       ? "bg-subMain text-white"
                                       : "text-main"
                                 }`
                              }
                              value={item}
                           >
                              {({ selected }) => (
                                 <>
                                    <span
                                       className={`block truncated ${
                                          selected
                                             ? "font-semibold"
                                             : "font-normal"
                                       } `}
                                    >
                                       {item.title}
                                    </span>
                                    {selected ? (
                                       <span className='absolute inset-y-0 flex items-center pl-3'>
                                          <FaCheck
                                             className='h-5 w-5'
                                             aria-hidden='true'
                                          />
                                       </span>
                                    ) : null}
                                 </>
                              )}
                           </Listbox.Option>
                        ))}
                     </Listbox.Options>
                  </Transition>
               </div>
            </Listbox>
         ))}
      </div>
   );
};

export default Filters;
