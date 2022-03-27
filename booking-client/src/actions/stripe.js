import axios from 'axios'

export const createConnectAccount=async(token)=>{
    return await axios.post(`${process.env.REACT_APP_API}/stripe/create-connect-account`,{},{
        headers: {
            Authorization: `Bearer ${token}`,
          },
    })
}

export const getAccStatus= async (token)=>{
    return await axios.post(`${process.env.REACT_APP_API}/stripe/get-account-status`,{},{
        headers: {
            Authorization: `Bearer ${token}`,
          },
    })
}

export const getAccBalance= async (token)=>{
    return await axios.post(`${process.env.REACT_APP_API}/stripe/get-account-balance`,{},{
        headers: {
            Authorization: `Bearer ${token}`,
          },
    })
}

export const currencyFormatter = (data) => {
    return (data.amount / 100).toLocaleString(data.currency, {
      style: "currency",
      currency: data.currency,
    })
}

// export const payoutSetting = async (token) =>{
//   return await axios.post(
//     `${process.env.REACT_APP_API}/stripe/payout-setting`,
//     {},
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   )
// }
  
export const getSessionId = async (token, hotelId) =>{
  return await axios.post(
    `${process.env.REACT_APP_API}/stripe/stripe-session`,
    {
      hotelId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}



