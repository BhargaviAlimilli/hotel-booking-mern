import axios from 'axios'
export const User= async(user)=>{
    await axios.post(`${process.env.REACT_APP_API}/register`, user)
    console.log(user)
}

export const loginUser= async(user)=>{
    console.log(user)
    return await axios.post(`${process.env.REACT_APP_API}/login`, user)
}