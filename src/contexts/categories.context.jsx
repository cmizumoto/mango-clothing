/* 
  Redux took place of this functionality, there is no need to keep this file, but leaving it for studies purpouse.
*/

import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  /* 
    When using an Async function in useEffect, we need to avoid calling async in the use effect
    it's best to create a function inside it, add async and call it inside the useEffect
    Use effect is supposed to return either undefined or a function to remove side effects.
    Using async will return a promise!
  */
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();

      // setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
