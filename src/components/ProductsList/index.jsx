import Product from "../Product";
import "./style.css";

const ProductsList = ({ productsData, setProductsData }) => {
  // Updates the sale count for a specific product and payment type.
  const updateSale = (productId, paymentType, operation) => {
    const updatedProducts = productsData.map((product) => {
      if (product.id === productId) {
        // Ensure the count doesn't go below 0.
        const currentCount = product.salesByPayment[paymentType];
        let newCount =
          operation === "increment"
            ? currentCount + 1
            : currentCount > 0
            ? currentCount - 1
            : 0;

        return {
          ...product,
          salesByPayment: {
            ...product.salesByPayment,
            [paymentType]: newCount,
          },
        };
      }
      return product;
    });
    setProductsData(updatedProducts);
  };

  return (
    <div>
      <h2>Daily Registration</h2>
      {productsData.map((product) => (
        <div className="product-container" key={product.id}>
          <Product name={product.name} price={product.price} id={product.id} />
          <div className="btns-container">
            <div className="transaction-type">
              <div className="typeAndBtns">
                <p>DEBIT</p>
                <div className="addOrRemoveBtns">
                  <button
                    className="addBtn"
                    onClick={() => updateSale(product.id, "debit", "increment")}
                  >
                    +
                  </button>
                  <button
                    className="rmvBtn"
                    onClick={() => updateSale(product.id, "debit", "decrement")}
                  >
                    -
                  </button>
                </div>
              </div>

              <span>{product.salesByPayment.debit}</span>
            </div>
            <div className="transaction-type">
              <div className="typeAndBtns">
                <p>VISA</p>
                <div className="addOrRemoveBtns">
                  <button
                    className="addBtn"
                    onClick={() => updateSale(product.id, "visa", "increment")}
                  >
                    +
                  </button>
                  <button
                    className="rmvBtn"
                    onClick={() => updateSale(product.id, "visa", "decrement")}
                  >
                    -
                  </button>
                </div>
              </div>
              <span>{product.salesByPayment.visa}</span>
            </div>
            <div className="transaction-type">
              <div className="typeAndBtns">
                <p>MC</p>
                <div className="addOrRemoveBtns">
                  <button
                    className="addBtn"
                    onClick={() => updateSale(product.id, "mc", "increment")}
                  >
                    +
                  </button>
                  <button
                    className="rmvBtn"
                    onClick={() => updateSale(product.id, "mc", "decrement")}
                  >
                    -
                  </button>
                </div>
              </div>
              <span>{product.salesByPayment.mc}</span>
            </div>
            <div className="transaction-type">
              <div className="typeAndBtns">
                <p>CASH</p>
                <div className="addOrRemoveBtns">
                  <button
                    className="addBtn"
                    onClick={() => updateSale(product.id, "cash", "increment")}
                  >
                    +
                  </button>
                  <button
                    className="rmvBtn"
                    onClick={() => updateSale(product.id, "cash", "decrement")}
                  >
                    -
                  </button>
                </div>
              </div>
              <span>{product.salesByPayment.cash}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
