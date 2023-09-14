import { useCallback, useRef, useState } from "react";
import "./App.css";
import CrudInsert from "./components/CrudInsert";
import CrudTemplate from "./components/CrudTemplate";
import List from "./components/List";

const App = () => {
  const [budgets, setBudgets] = useState([]);
  const nextId = useRef(3);

  const onInsert = useCallback(
    (title, cost) => {
      const budget = {
        id: nextId.current,
        title,
        cost,
      };
      setBudgets([...budgets, budget]);
      nextId.current += 1;
    },
    [budgets]
  );
  const handleAllRemove = useCallback(() => {
    setBudgets([]); // 모든 예산 삭제
  }, []);

  const onRemove = useCallback(
    id => {
      setBudgets(budgets.filter(budget => budget.id !== id));

    },[budgets],
  );
  const totalCost = budgets.reduce((total, budget) => total + budget.cost, 0);
  return (
    <CrudTemplate totalCost={totalCost}>
      <CrudInsert onInsert={onInsert}  budgets ={budgets} onRemove={onRemove} handleAllRemove={handleAllRemove}>
        <List budgets={budgets} onRemove={onRemove} />
      </CrudInsert>
    </CrudTemplate>
  );
};

export default App;
