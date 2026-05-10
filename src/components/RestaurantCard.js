import { CDN_URL } from "../utils/constants";

//# Styling the card
const styleCard = {
    width: "300px",
    padding: "5px",
    backgroundColor: "#5C766D",
    display: "flex",
    flexDirection: "column",
    transition: "0.3s all ease-in-out",
    gap: "10px",
    color: "#E3D095",
}
//# Restaurant Cards 
// const RestaurantCard = ({resName, cuisine}) => {  (Destructuring)
const RestaurantCard = ({ resData }) => { //Direct via prop 
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;


    return (

        <div className="res-card" style={styleCard}>
            <div className="res-logo">
                <img src={CDN_URL + cloudinaryImageId} alt="" />
            </div>
            <h3>{name}</h3>

            <h4>{cuisines.join(", ")}</h4>

            <h4>{avgRating}⭐</h4>
            <h4>{costForTwo} for two</h4>
        </div>
    )
}


export default RestaurantCard;