import { useState } from 'react'
import DrawingBoard from './components/DrawingBoard';

function App() {

  const [coords, setCoords] = useState({x:null, y:null})

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const getNodes = ()=>{
    return nodes;
  }

  return(
    <div>
    <p>You have clicked at the coordinates ({coords.x},{coords.y})</p>
    <DrawingBoard setNodes={setNodes} getNodes={getNodes}/>
    </div>
  )
 
}

export default App
