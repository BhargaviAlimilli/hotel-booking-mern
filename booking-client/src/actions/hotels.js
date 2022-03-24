import axios from "axios";

export const createHotel = async (token, data) =>{
    return await axios.post(`${process.env.REACT_APP_API}/hotel/create-hotel`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
})
}


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
