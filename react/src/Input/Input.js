function Input(props){
    return(
        <div>
            <p>{props.titulo}</p>
            <input type={props.type} />
        </div>
    )
}
export default Input