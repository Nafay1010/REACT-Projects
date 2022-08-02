const Box = (props) => {
    // console.log(props);         
    const style = {
        backgroundColor: props.on ? 'Black' : 'White'
    }
    return ( 
        <div className="layout">
            <div className="box" style={style} onClick={()=> props.toggle(props.id)}></div>
        </div>
     );
}
 
export default Box;