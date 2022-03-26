import axios from "axios";

export const createHotel = async (token, data) =>{
    return await axios.post(`${process.env.REACT_APP_API}/hotel/create-hotel`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
})
}

// to get all hotels for users in home 
export const allHotels = async () =>{
  return await axios.get(`${process.env.REACT_APP_API}/hotel/all-hotels`);
}

export const diffDays = (from, to) => {
  const day = 24 * 60 * 60 * 1000;
  const start = new Date(from);
  const end = new Date(to);
  const difference = Math.round(Math.abs((start - end) / day));
  return difference;
};

export const sellHotelsData= async(token)=>{
  return await axios.get(`${process.env.REACT_APP_API}/hotel/seller/hotels`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}


export const deleteHotel = async (token, hotelId) => { 
  return await axios.delete(`${process.env.REACT_APP_API}/hotel/delete-hotel/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const read = async (hotelId) => {
  console.log("hello from show more")
  return await axios.get(`${process.env.REACT_APP_API}/hotel/${hotelId}`)
}

export const updateHotel = async (token, data, hotelId) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/hotel/update-hotel/${hotelId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  }





