import { useState, useEffect } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import Search from "../components/SearchBar";
import { searchListings } from "../actions/hotels";

const SearchResult = () => {
  // state
  const [searchLocation, setSearchLocation] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchBed, setSearchBed] = useState("");
  const [hotels, setHotels] = useState([]);
  // when component mounts, get search params from url and use to send search query to backend
  useEffect(() => {
    const { location, date, bed } = queryString.parse(window.location.search);
    console.table({ location, date, bed });
    searchListings({ location, date, bed }).then((res) => {
      console.log("SEARCH RESULTS ===>", res.data);
      setHotels(res.data);
    });
  }, [window.location.search]);

  return (
    <div className="container">
      <div className="row">{JSON.stringify(hotels, null, 4)}</div>
    </div>
  );
};

export default SearchResult;