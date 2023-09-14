import './ListItem';
import ListItem from './ListItem';

const List = ({budgets, onRemove}) =>{
    
    return(
        <div className='BudgetList'>
           {budgets.map(budget =>(
                <ListItem budget = {budget} key={budget.id} onRemove={onRemove}/>
           ))}
        </div>
    )
}

export default List;