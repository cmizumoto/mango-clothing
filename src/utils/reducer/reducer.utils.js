/* 
    This is a helper function to create actions, instead typing the whole
    {type: actionType, payload: payload}
    we shorten it to
    {actionType, payload}
*/
export const createAction = (type, payload) => ({ type, payload });
