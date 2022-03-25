import DashboardNav from "../components/DashboardNav";
import ComponentNav from './../components/ConnectNav';
import { Link } from "react-router-dom";
import {HomeOutlined} from '@ant-design/icons'
import {useEffect, useState} from 'react'
import { useSelector } from "react-redux";
import {createConnectAccount} from './../actions/stripe'
import {toast} from 'react-toastify'
import SmallCard from './../components/cards/smallCard'
import { sellerHotels } from "../actions/hotels";

const DashboardSeller = () => {
  
  const [hotels,sethotels]= useState([])
  const [Loading,setLoading]= useState(false)
  const {auth}= useSelector((state)=> state)

  // useEffect(() => {
  //   allSellerHotels();
  // }, []);

  // const allSellerHotels= async()=>{
  //     let sh= await sellerHotels(auth.token)
  //     sethotels(sh.data)
  // }

  const stripeClick = async () => {
    setLoading(true);
    try {
      let res = await createConnectAccount(auth.token);
      console.log(res); // get login link
      window.location.href = res.data;

    } catch (err) {
      console.log(err);
      toast.error("Stripe connect failed, Try again.");
      setLoading(false);
    }
  };

  const connected=()=>{
    return(
      <>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your Bookings</h2>
          </div>
          <div className="col-md-2">
            <Link to="/hotel/new" className="btn btn-primary">
              + Add new Hotel
            </Link>
          </div>
        </div>

        {/* <div className="row">
        {hotels.map((h) => (
          <SmallCard
            key={h._id}
            h={h}
            showViewMoreButton={false}
            owner={true}
          />
        ))}
      </div> */}
      </div>
      </>
    )
  }

  const notConnected=()=>{
    return(
      <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <HomeOutlined className="h1"/>
            <p className="lead">
              "Homie Hotels & Service Appartments" use Stripe account for bussiness transactions. 
              To host hotels please connect to Stripe"
            </p>
            <button className="btn btn-primary" disabled={Loading} 
                    onClick={stripeClick} > {Loading ? "Processing..." : "Get Stripe"}
            </button>
            <div>
            <small>this will redirect to Stripe website </small>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }

  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ComponentNav />
      </div>

      <div className="container-fluid p-4">
        <DashboardNav />
      </div>

      {auth &&
      auth.user &&
      auth.user.stripe_seller &&
      auth.user.stripe_seller.charges_enabled
        ? connected()
        : notConnected()}

    </>
  );
};

export default DashboardSeller;
