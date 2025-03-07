import "./style.css";

// eslint-disable-next-line react/prop-types
const Product = ({ name, price }) => {
  return (
    <div className="p">
      <h4>{name}</h4>
      {/* <p>${price}</p> */}
    </div>
  );
};

export default Product;
