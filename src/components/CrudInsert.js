import { useCallback, useState } from "react";
import "./CrudInsert.css";
import List from "./List";


const CrudInsert = ({ onInsert, budgets, onRemove, handleAllRemove }) => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

const onChangeCost = useCallback((e) => {
  const inputCost = e.target.value;

  if (typeof inputCost === 'string' && !isNaN(inputCost)) {
    const numericCost = Number(inputCost); // 문자열을 숫자로 변환
    setCost(numericCost);
  }
}, []);




  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(title, cost);
      setTitle("");
      setCost("");
    },
    [onInsert, title, cost]
  );

  

  return (
    <div className="container">
      <div className="CrudInsert-title">
        <div className="costlist">지출항목</div>
        <div className="cost">예산</div>
      </div>
      <form className="CrudInsert" onSubmit={handleSubmit}>
        <input
          placeholder="예) 렌트비"
          value={title}
          onChange={onChangeTitle}
          required
        />
        <input
          placeholder="0"
          value={cost}
          onChange={onChangeCost}
          required
        />
      </form>
      <button type="submit" className="submitBtn" onClick={handleSubmit}>
        제출
      </button>
      <List budgets={budgets} onRemove={onRemove}/>
      <button type="button" className="deleteallBtn" onClick={handleAllRemove}>
        목록 지우기
      </button>
    </div>
  );
};

export default CrudInsert;
