import {useState} from 'react'
import {useSelector} from 'react-redux'

function NewHotel(){
  const { auth } = useSelector((state) => ({ ...state }));
  
  const [values, setValues] = useState({
    title: "",
    content: "",
    image: "",
    price: "",
    from: "",
    to: "",
    bed: "",
  })

  const {title, content,image,price,from,to,bed} = values
 

    return(
        <>
        <div className="container-fluid bg-secondary p-5 text-center">
            <h2>Add Hotel</h2>
        </div>
        </>
    )
}

export default NewHotel

