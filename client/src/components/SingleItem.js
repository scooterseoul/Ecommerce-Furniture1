import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./StripeContext";

const SingleItem = () => {
  const { id } = useParams();
  const { productData } = useContext(ProductContext);

  return <div>{id}</div>;
};

export default SingleItem;
