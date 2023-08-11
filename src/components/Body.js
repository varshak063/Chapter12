import { useEffect, useState, useContext } from "react";
import { RestaurantCard, withDiscountLabel } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useInternetCheck } from "../utils/useInternetCheck";
import { UserContext } from "../utils/UserContext";
export const Body = () => {
  //State Variable in React
  const [fakeRestroDataList, setFakeRestroDataList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  // console.log("list", fakeRestroDataList);
  const [searchTextVariable, setSearchTextVariable] = useState("");

  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  // console.log("before return");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setFakeRestroDataList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log(fakeRestroDataList);
  const isOnline = useInternetCheck();
  if (isOnline === false) {
    return <h1>Looks like offline please check network connection</h1>;
  }
  const { setUserName, loggedInUser } = useContext(UserContext);
  return fakeRestroDataList?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search p-4 flex justify-center">
          <input
            class="rounded-l-lg placeholder:italic placeholder:text-slate-400 block bg-white w-100 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="text"
            name="Search"
            placeholder="Search..."
            value={searchTextVariable}
            onChange={(e) => {
              setSearchTextVariable(e.target.value);
            }}
          />
          <button
            className="p-2 bg-pink-300 text-sm font-semibold rounded-r-lg"
            onClick={() => {
              //filter restro card and update UI
              const filterRestro = fakeRestroDataList?.filter((restroFilter) =>
                restroFilter?.info?.name
                  .toLowerCase()
                  .includes(searchTextVariable.toLowerCase())
              );
              setFilteredRestro(filterRestro);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 ml-4 bg-gray-100"
            onClick={() => {
              //Filter logic here
              const filterLists = fakeRestroDataList.filter(
                (rest) => rest?.info?.avgRating > 4
              );
              setFilteredRestro(filterLists);
            }}
          >
            Top Rated Restro
          </button>
          <div className="py-2 m-2 font-bold">
            UserName:{" "}
            <input
              type="text"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
              className="rounded p-2 mx-2 border border-slate-300"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          {filteredRestro?.map((items) => (
            <Link to={"/restromenu/" + items?.info?.id} key={items?.info?.id}>
              {items?.info?.avgRating > 4 ? (
                <RestaurantCardDiscount restoData={items?.info} />
              ) : (
                <RestaurantCard restoData={items?.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
