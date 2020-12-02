const MonthComponent = ({ empArr }) => {
  const sortedArr = empArr.sort((a, b) =>
    a.dob > b.dob ? 1 : b.dob > a.dob ? -1 : 0
  );
  const month = sortedArr[0].dob.toLocaleString("en-us", { month: "long" });
  return (
    <div>
      <h3>{month}</h3>
      <ul>
        {sortedArr.map((emp) => (
          <li key={emp.id}>
            {emp.lastName} {emp.firstName} - {emp.dob.getDate()} {month},{" "}
            {emp.dob.getFullYear()} year
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthComponent;
