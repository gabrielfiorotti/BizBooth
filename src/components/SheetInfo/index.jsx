import "./style.css";

const SheetInfo = () => {
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
    </div>
  );
};

export default SheetInfo;
