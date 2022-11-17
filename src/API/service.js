import { myAxios } from "./api";

export const loginDetails=(user)=>{

    return myAxios.post('/login',user).then((response)=>response.data)
}