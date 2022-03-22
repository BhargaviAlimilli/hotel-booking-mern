import {LoadingOutlined} from '@ant-design/icons'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getAccStatus} from './../actions/stripe'
import { updatedUser } from '../actions/auth'

const StripeCallBack=({history})=>{

    const  {auth}= useSelector((state)=> ({...state}))
    const dispatch= useDispatch()

    useEffect(() => {
        if (auth && auth.token) account()
      }, [auth])

    const account= async()=>{
        try{
            const res= await getAccStatus(auth.token);
            // console.log("USER ACCOUNT STATUS ON STRIPE CALLBACK", res)
            updatedUser(res.data,()=>{
              dispatch({
                type: "LOGGED_IN_USER",
                payload:res.data
              })
              window.location.href= '/dashboard/seller'
            })          
          } catch (err) {
            console.log(err);
          }
    }

    return(
        <div className='d-flex justify-content-center p-5'>
        <LoadingOutlined className='display-1 h1 p5 text-danger' />
        </div>
    )
}

export default StripeCallBack


