import './ListItem.css'

const ListItem =({budget,onRemove}) =>{
    const {id,title,cost} = budget;
    const handleRemoveClick = () =>{
        onRemove(id);
    };

    return(
        <div className="item-list">
            <div className="text">{title}</div>
            <div className="cost">{cost}</div>
            <div className="button-container">
                <button className="updateBtn">수정</button>
                <button className="deleteBtn" onClick={handleRemoveClick}>삭제</button>
            </div>  
        </div>
    )
}


export default ListItem;