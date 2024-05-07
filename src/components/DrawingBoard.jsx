import { useRef, useEffect } from "react";
import Node from "./Node";

function DrawingBoard(props) {
    
    const setNodes = props.setNodes;
    const nodes = props.getNodes()

    const canvasRef = useRef(null);

    const drawNodes = () => {
    }


    const handleClick = (event) => {
        const x = event.clientX
        const y = event.clientY
        setNodes([...nodes, {x: x, y: y}])
    }
    
    useEffect(()=>{
        drawNodes()
    }, [nodes])

    return(
        <div style={{border: '2px solid black', minHeight:'400px'}} onClick={handleClick}>
            {nodes.map((node,index)=>{
                const x = node.x - 10;
                const y = node.y - 10;
                return <Node key={index} x={x + 'px'} y={y + 'px'}/>
            })}
        </div>   
    );
}

export default DrawingBoard;