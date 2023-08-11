
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestroMenuHook } from "../utils/useRestroMenuHook";
import { RestroCategories } from "./RestroCategories";
import { useState } from "react";

export const RestroMenuPage = () => {
  //Extracting Restro ID using useParam HOOK
  const { restroId } = useParams();
  const restromenuName = useRestroMenuHook(restroId);
  const [showIndex, setShowIndex] = useState(null);
  if (restromenuName === null) return <Shimmer />;

  const { name, city, cuisines } = restromenuName?.cards[0]?.card?.card?.info;

  const menuCategory =
    restromenuName?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <>
      <div className="p-5 text-center">
        <h1 className="font-bold p-2 text-lg my-10">{name}</h1>
        <p className="font-bold text-sm">
          {cuisines.join(" , ")}-{city}
        </p>
        <h2 className="font-bold my-2">Menus</h2>
        {/* categories accordian */}
        {/* controlled component */}

        {menuCategory.map((category, index) => (
          <RestroCategories
            key={category?.card?.card?.title}
            categories={category?.card?.card}
            showItemList={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </>
  );
};
