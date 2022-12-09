import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSongsAction } from "../redux/actions";

const RecentlyPlayedSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsAction);
  }, []);

  return <div>those are the fetched songs in recently played section</div>;
};

export default RecentlyPlayedSection;
