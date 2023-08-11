import { CategoryItemList } from "./CategoryItemLists";

export const RestroCategories = ({
  categories,
  showItemList,
  setShowIndex,
}) => {
  const handleClick = () => {
    // showItemList(!showItemList);

    setShowIndex();
  };
  return (
    <>
      <div>
        {/* Header */}
        <div className="mx-auto w-6/12 bg-gray-100 shadow-md p-4 my-4">
          <div
            className="flex justify-between cursor-pointer"
            onClick={handleClick}
          >
            <span className="text-right font-bold text-lg">
              {categories.title}({categories.itemCards.length})
            </span>
            <span>⬇️</span>
          </div>
          {/* Accordian body */}
          {showItemList && <CategoryItemList items={categories?.itemCards} />}
        </div>
      </div>
    </>
  );
};
