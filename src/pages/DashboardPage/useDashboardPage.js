import { useDispatch, useSelector } from "react-redux";

const useDashboardPage = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

  const wishlistProps = {
    wishlist
  };

  return {
    wishlistProps,
  }
};

export default useDashboardPage;
