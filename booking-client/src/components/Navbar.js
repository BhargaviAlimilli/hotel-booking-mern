import {Link} from 'react-router-dom'

function Navbar(){

    return(
        <div className='nav bg-light d-flex justify-content-between'>
            <Link to='/login' className='nav-link'>Login</Link>
            <Link to='/' className='nav-link' >Home</Link>
            <Link to='/register' className='nav-link'>Register</Link>
        </div>
    )
}

export default Navbar