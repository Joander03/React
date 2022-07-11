function Select(props){
    return(
        <div>
            <p>Seleccione {props.nombre}</p>
            <select>
                <option>Seleccione un item ...</option>
                {props.items?.map(items => {
                    return (<option>{items}</option>)
                })}
            </select>
        </div>
    )
}

export default Select