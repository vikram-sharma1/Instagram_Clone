

import { POST_POPUP } from "./action";

export const reducer=(store,{type,payload})=>{

switch (type) {
    case POST_POPUP:
        return {...store,ispopup:payload}
        

    default:
        return store;
}

}
