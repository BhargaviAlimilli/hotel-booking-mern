import {useState} from 'react'
import  LogiForm from '../components/LoginForm'
import { loginUser } from './../actions/auth'
import {toast} from 'react-toastify'
import {useDispatch} from 'react-redux'
// import axios from 'axios'

function Login({history}){
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const dispatch= useDispatch()

    const handleSubmit = async (e) => {
        console.log("SEND LOGIN DATA", { email, password });
        e.preventDefault();
        try {
            const res = await loginUser({ email,password })      
            console.log(res.data)
            if (res.data) {
                window.localStorage.setItem("auth", JSON.stringify(res.data));
                dispatch({
                  type: "LOGGED_IN_USER",
                  payload: res.data,
                });
                history.push("/dashboard");
              }
        } catch (err) {
          console.log(err)
          toast.error(err.response.data)
        }
    }

    return(
        <>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h3>Login page</h3>
            </div>
            <div className="container">
                <div className='row'>
                    <div className= 'col-md-6 offset-md-3'>
                        <LogiForm handleSubmit={handleSubmit} email={email} password={password} setPassword={setPassword} setEmail={setEmail}  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login