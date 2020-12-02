const LetterComponent = ({ letter, empArr, handleCheck }) => {
  let block;
  if (!empArr) {
    block = <span>---</span>;
  } else {
    const sortedArr = empArr.sort((a, b) =>
      a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
    );
    block = (
      <ul className="list">
        {sortedArr.map((emp) => (
          <li key={emp.id}>
            {emp.lastName} {emp.firstName}
            <input
              type="checkbox"
              id={emp.id}
              checked={emp.checked}
              onChange={handleCheck}
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="center">
      <h4>{letter}</h4>
      {block}
    </div>
  );
};

export default LetterComponent;
