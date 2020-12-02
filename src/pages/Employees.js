import React from "react";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";

const Employees = () => {
  const getUsers = async () => {
    try {
      const URL =
        "https://yalantis-react-school-api.yalantis.com/api/task0/users";
      const resp = await fetch(URL);
      if (resp.ok) {
        const data = await resp.json();
        const dataStored = JSON.parse(localStorage.getItem("checkedIds")) || [];
        const q = data.map((obj) => ({
          ...obj,
          checked: dataStored.includes(obj.id),
          dob: new Date(obj.dob),
        }));
        setData(q);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    getUsers();
  }, []);

  const handleCheck = (e) => {
    const idx = data.findIndex((element) => element.id === e.target.id);
    let newData = [...data];
    newData[idx] = { ...newData[idx], checked: e.target.checked };
    setData(newData);
    const checkedIds = newData
      .filter((emp) => emp.checked)
      .map((emp) => emp.id);
    localStorage.setItem("checkedIds", JSON.stringify(checkedIds));
  };

  return (
    <div className="container">
      <div className="left">
        {loading ? (
          "Loading..."
        ) : (
          <LeftPanel data={data} handleCheck={handleCheck} />
        )}
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
      <div className="right">
        <RightPanel data={data} />
      </div>
    </div>
  );
};

export default Employees;
