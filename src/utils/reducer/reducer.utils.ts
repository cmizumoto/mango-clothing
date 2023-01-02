/* 
    This is a helper function to create actions, instead typing the whole
    {type: actionType, payload: payload}
    we shorten it to
    {actionType, payload}

export const createAction = (type, payload) => ({ type, payload });
 */
import { AnyAction } from "redux";

/* 
  Intersection "&" - creates an hybrid with two types
  type Human = {name: string};
  type Alien = {fly: () => void};
  type Hybrid = Human & Alien;
  =============
  ReturnType - gets the return type of the defined function
  type MyFunction = () => string;
  type MyReturn = ReturnType<MyFunction> // type MyReturn = string;
*/
/* 
  Now here we use both Intersection and ReturnType to create our matchable type, to make the actions work
  Get the type by accessing the 'type' inside the actions
  the match are defined bellow this type Matchable
*/
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

/* 
  These three functions are made to overload and match with the action types, with and without arguments
  With the first one is without any arguments made for the starting actions
  Second is with arguments, and since we can receive any kind of data, we declare with "any[]"
*/
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

/* 
  This third function is defining what the withMatcher really does.
  A function that receives an actionCreator that is a function
  Gets the type by accessing the actionCreator type, because they always return an action that has a type
  Now returning a mappable object, with the type and ReturnType
*/
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
