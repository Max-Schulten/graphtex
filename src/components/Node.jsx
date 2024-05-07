function Node(props) {
    const x = props.x;
    const y = props.y;
    return(
        <div style={{position: 'absolute',top:y, left:x, border:'1px solid black', borderRadius:'50%', height:'20px', width:'20px', textAlign:'center'}}>e</div>
    )

}

export default Node;