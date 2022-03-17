import axios from 'axios'
export const User= async(user)=>{
    console.log(user)
    return await axios.post(`${process.env.REACT_APP_API}/register`, user)
}

export const loginUser= async(user)=>{
    console.log(user)
    return await axios.post(`${process.env.REACT_APP_API}/login`, user)
}