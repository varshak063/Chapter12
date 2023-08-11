import { useEffect, useState } from "react";

export const useInternetCheck = () => {
  const [isOnline, setOnline] = useState(true);
  //check if online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnline(false);
    });
    window.addEventListener("online", () => {
      setOnline(true);
    });
  }, []);

  return isOnline;
};
