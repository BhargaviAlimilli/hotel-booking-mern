import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

function Navbar(){
    const {auth}= useSelector((state)=> ({...state}))
    const dispatch= useDispatch()
    const history= useHistory()

    const logOut=()=>{
        dispatch({
            type: "LOGOUT",
            payload: null
        })
        window.localStorage.removeItem('auth')
        history.push("/login");
    }

    return(
        <div className='nav bg-light d-flex justify-content-between'>
            <Link to='/' className='nav-link' >Home</Link>
        
            {auth== null && (
                <>
                <Link to='/login' className='nav-link'>Login</Link>
                <Link to='/register' className='nav-link'>Register</Link>
                </>
            )}

            {auth !== null && (
                <>
                    <Link to='/dashboard' className='nav-link'>User Dashboard</Link>
                    <a className='nav-link pointer' onClick={logOut}> LogOut </a>
                </>
            )}

            
        </div>
    )
}

export default Navbar