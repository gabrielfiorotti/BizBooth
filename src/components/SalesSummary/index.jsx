import "./style.css";

const SalesSummary = ({ productsData }) => {
  // Initialize totals for each payment type.
  let totals = { debit: 0, visa: 0, mc: 0, cash: 0 };

  // Accumulate totals by iterating over productsData.
  productsData.forEach((product) => {
    totals.debit += product.salesByPayment.debit * product.price;
    totals.visa += product.salesByPayment.visa * product.price;
    totals.mc += product.salesByPayment.mc * product.price;
    totals.cash += product.salesByPayment.cash * product.price;
  });

  // Calculate the general total sales.
  const generalTotal = totals.debit + totals.visa + totals.mc + totals.cash;

  return (
    <div className="sales-summary">
      <h2>Sales Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Debit</th>
            <th>Visa</th>
            <th>MC</th>
            <th>Cash</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => {
            const debitTotal = product.salesByPayment.debit * product.price;
            const visaTotal = product.salesByPayment.visa * product.price;
            const mcTotal = product.salesByPayment.mc * product.price;
            const cashTotal = product.salesByPayment.cash * product.price;
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${debitTotal.toFixed(2)}</td>
                <td>${visaTotal.toFixed(2)}</td>
                <td>${mcTotal.toFixed(2)}</td>
                <td>${cashTotal.toFixed(2)}</td>
              </tr>
            );
          })}
          {/* Totals per Payment Type Row */}
          <tr>
            <td>
              <strong>Total per Payment Type</strong>
            </td>
            <td>
              <strong>${totals.debit.toFixed(2)}</strong>
            </td>
            <td>
              <strong>${totals.visa.toFixed(2)}</strong>
            </td>
            <td>
              <strong>${totals.mc.toFixed(2)}</strong>
            </td>
            <td>
              <strong>${totals.cash.toFixed(2)}</strong>
            </td>
          </tr>
          {/* General Total Sales Row */}
          <tr>
            <td colSpan="5" style={{ textAlign: "right" }}>
              <strong>General Total Sales: ${generalTotal.toFixed(2)}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesSummary;
