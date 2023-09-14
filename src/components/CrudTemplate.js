import './CrudTemplate.css';

const CrudTemplate = ({children,totalCost}) => {
    return(
        <div className='CrudTemplate'>
            <h1>예산 계산기</h1>
            <div className='content'>{children}</div>
            <h1 className='allcost'>총 지출: {totalCost}원</h1>
        </div>
            
    )
}
export default CrudTemplate;