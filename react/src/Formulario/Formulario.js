import Input from '../Input/Input'
import Select from '../Select/Select'
function Formulario(props){

    let marca = ["Ferrari", "Mazda", "Honda", "Nissan"]
    let modelo = ["Italia", "Demio", "Integra", "versa"]

    return(
        <>
            <Input type="text" titulo="Agregar patente"/>
            <Input type="number" titulo="Ingresar año"/>
            <Select items={marca}></Select>
            <Select items={modelo} titulo="modelo"></Select>

            <button></button>
        </>
    )
}

export default Formulario