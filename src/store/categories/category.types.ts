/* 
  For redux-thunk we will use these 3 types to determine the steps of our async actions
  START when the async function starts - loading is true
  SUCCESS when the task is fetched successfuly - Loading is false
  FAILED when some error happens - Loading is false
*/
export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "category/FETCH_CATEGORIES_FAILED",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};
