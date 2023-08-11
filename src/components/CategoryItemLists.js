import { MENU_URL } from "../utils/constants";

export const CategoryItemList = ({ items }) => {
  // console.log("items", items);
  return (
    <>
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className=" py-3 border-b-2 text-left flex align-baseline"
          >
            <div className="font-semibold w-9/12">
              <div>
                <span>{item?.card?.info?.name}</span>
                <span className="ml-2">
                  ₹-
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs text-left">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12 p-2">
              <div className="absolute m-1">
                <button className="bg-white m-auto p-1 rounded-sm text-sm font-semibold">
                  Add +
                </button>
              </div>
              <img className="w-full" src={MENU_URL + item.card.info.imageId} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
