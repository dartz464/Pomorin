import './btn.css';

function Btn (props){
    return(
        <button onClick={props.btn_click}>{props.btn_text}</button>
    )
}

export default Btn
