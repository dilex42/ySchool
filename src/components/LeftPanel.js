import LetterComponent from "./LetterComponent";

const LeftPanel = ({ data, handleCheck }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let alphabetObj = {};
  data.forEach((obj) => {
    const firstLetter = obj.lastName[0].toUpperCase();
    if (alphabetObj[firstLetter]) {
      alphabetObj[firstLetter].push(obj);
    } else {
      alphabetObj[firstLetter] = [obj];
    }
  });

  return (
    <div>
      <div className="heading">Employees</div>
      <div className="wrapper">
        {alphabet.map((letter) => (
          <LetterComponent
            key={letter}
            letter={letter}
            empArr={alphabetObj[letter]}
            handleCheck={handleCheck}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
