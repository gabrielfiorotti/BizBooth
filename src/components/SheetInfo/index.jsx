import "./style.css";

const SheetInfo = () => {
  const printPage = () => window.print();
  return (
    <div className="sheet-info">
      <label>
        Name:
        <input type="text" placeholder="Employee Name" />
      </label>
      <label>
        Date:
        <input type="text" placeholder="e.g. March 7, 2025" />
      </label>
      <label>
        Shift Time:
        <input type="text" placeholder="e.g. 11AM-3PM" />
      </label>
      <button onClick={printPage}>Print</button>
    </div>
  );
};

export default SheetInfo;
