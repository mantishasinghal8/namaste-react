import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

//# Body Component 
const Body = () => {
    //State Variable - Super Powerful Variable 
    let [listOfRestaurants, setListOfRestaurants] = useState(resList.cards);

    let listOfRestaurantsJS = [
        {
            "id": "736171",
            "name": "LFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/341bbfad-0967-4048-822c-0c4e551b82bd_1136601.JPG",
            "costForTwo": "₹270 for two",
            "cuisines": [
                "Chicken",
                "Salads",
                "Burgers"
            ],
            "avgRating": 4,
        },
        {

            "id": "857545",
            "name": "Dominoz",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/27/2b846ec8-2e33-4ee8-93c9-00fa6422bd21_342476.JPG",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizza",
                "Italian",
                "Pastas",
                "Desserts",
            ],
            "avgRating": 4.5,
        },
        {

            "id": "857546",
            "name": "Mc. Donalds",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/c3341341-7ad4-4cfd-8982-e53c09bbdee3_772036.JPG",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "American",
                "Fast Food",
                "Beverages",
            ],
            "avgRating": 4.3,
        },
    ];
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search.." />
            </div>

            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    console.log("Button Clicked");
                    const filteredList = listOfRestaurants.filter((res) => {
                        return res.card.card.info.avgRating > 4;

                    })
                    setListOfRestaurants(filteredList)
                    console.log("filteredList", filteredList);

                }}>


                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">

                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
