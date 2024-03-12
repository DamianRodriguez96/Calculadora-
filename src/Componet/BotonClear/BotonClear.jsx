
const BotonClear=(props)=>{

return(
<div className="boton-clear" onClick={props.manejarClear}>
    {props.childen}
    Clear
</div>

)    
}
export default BotonClear;