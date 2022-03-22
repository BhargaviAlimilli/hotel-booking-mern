import axios from 'axios'
export const User= async(user)=>{
    console.log(user)
    return await axios.post(`${process.env.REACT_APP_API}/register`, user)
}

export const loginUser= async(user)=>{
    console.log(user)
    return await axios.post(`${process.env.REACT_APP_API}/login`, user)
}

// updated user responses here
export const updatedUser= async (user, next) => {
    if (window.localStorage.getItem("auth")) {
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = user;
      localStorage.setItem("auth", JSON.stringify(auth));
      next();
    }
}



