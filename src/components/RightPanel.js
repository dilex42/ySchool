import MonthComponent from "./MonthComponent";

const RightPanel = ({ data }) => {
  let monthObj = {};
  data
    .filter((obj) => obj.checked)
    .forEach((obj) => {
      const month = obj.dob.getMonth();
      if (monthObj[month]) {
        monthObj[month].push(obj);
      } else {
        monthObj[month] = [obj];
      }
    });

  return (
    <div>
      <div className="heading">Employees birthday</div>
      {[...Array(12).keys()]
        .filter((month) => monthObj[month])
        .map((month) => (
          <MonthComponent key={month} empArr={monthObj[month]} />
        ))}
      {!Object.keys(monthObj).length && <div>No selected employees</div>}
    </div>
  );
};

export default RightPanel;
