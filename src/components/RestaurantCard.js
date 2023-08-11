import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { UserContext } from "../utils/UserContext";

// Write CSS using JS obje
export const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { restoData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = restoData;
  return (
    <>
      <div className=" relative h-80 bg-pink-50 m-4 p-4 rounded-lg w-[200px] break-words">
        <img className="" alt="logo" src={CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold text-red-500 py-2">{name}</h3>
        <h6 className="text-sm py-2">{cuisines.join(",")}</h6>
        <h5 className="font-bold">{avgRating} Stars</h5>
        <h5 className="text-red-400">{sla?.deliveryTime}mins</h5>
        <h3>User : {loggedInUser}</h3>
      </div>
    </>
  );
};

// Higher order component

// input-Restrocard => Restrocard discount

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <div>
          <lable
            className="absolute z-[999] bg-gray-500 p-1 rounded-md text-white m-2
        "
          >
            Promoted
          </lable>
          <RestaurantCard {...props} />
        </div>
      </>
    );
  };
};
