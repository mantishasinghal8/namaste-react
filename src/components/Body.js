import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

//# Body Component 
const Body = () => {
    //State Variable - Super Powerful Variable 
    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    let [filteredRestaurants, setfilteredRestaurants] = useState([]);
    let [searchText, setsearchText] = useState("");


    useEffect(() => {
        console.log("Rendered body");
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6915878&lng=76.7208437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("json", json);
        console.log("json.data.cards", json.data.cards);

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter-container">
                <div className="search">
                    <input type="text" placeholder="Search.." className="search-box" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        //! Filter the restaurants card and update the UI
                        console.log("searchedText:", searchText);

                        const filteredRestaurants = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText)
                        );
                        setfilteredRestaurants(filteredRestaurants);


                    }} >Search</button>
                </div>

                <div className="filter">
                    <button className="filter-btn" onClick={() => {
                        console.log("Button Clicked");
                        const filteredList = listOfRestaurants.filter((res) => {
                            return res.info.avgRating > 4.2;

                        })
                        setListOfRestaurants(filteredList)
                        console.log("filteredList", filteredList);

                    }}>


                        Top Rated Restaurant
                    </button>
                </div>
            </div>

            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />


                    ))

                }
            </div>
        </div >
    )
}

export default Body;
