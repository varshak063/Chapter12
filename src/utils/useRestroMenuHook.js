import { useEffect, useState } from "react";
import { RESTRO_URL } from "./constants";

export const useRestroMenuHook = (restroId) => {
  const [restromenuName, setRestroMenuName] = useState(null);

  //fetch data
  useEffect(() => {
    fetchResrtoMenu();
  }, []);
  const fetchResrtoMenu = async () => {
    const data = await fetch(`${RESTRO_URL + restroId}`);
    const json = await data.json();
    setRestroMenuName(json.data);
  };

  return restromenuName;
};
