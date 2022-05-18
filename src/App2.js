import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import axios from 'axios';

function App() {
  const baseUrl="http://localhost/apiframeworks/";
  const [data, setData]=useState([]);
  


  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    peticionGet();
  },[])

    return (
     <div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Lanzamiento</th>
          <th>Desarrollador</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map(frameworks=>(
          <tr key={frameworks.id}>
            <td>{frameworks.id}</td>
            <td>{frameworks.nombre}</td>
            <td>{frameworks.lanzamiento}</td>
            <td>{frameworks.desarrollador}</td>
          <td>
          <button className="btn btn-primary">Editar</button>{"  "}
          <button className="btn btn-danger">Eliminar</button>
          </td>
          </tr>
        ))}

      </tbody> 
    </table>



    </div>
  );
}

export default App;

