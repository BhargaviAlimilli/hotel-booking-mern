import {useState} from 'react'
import RegisterForm from '../components/RegisterForm'
import {User} from './../actions/auth'
import {toast} from 'react-toastify'
// import axios from 'axios'

function Register({history}){
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await User({ name,email,password })
            toast.success("Successfully registered! please login now.")
            history.push('/login')
        } catch (err) {
          console.log(err)
          toast.error(err.response.data)
        }
    }

    return(
        <>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h3>Register page</h3>
            </div>
            <div className="container">
                <div className='row'>
                    <div className= 'col-md-6 offset-md-3'>
                        <RegisterForm handleSubmit={handleSubmit} name={name} email={email} password={password} setName={setName} setPassword={setPassword} setEmail={setEmail}  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register