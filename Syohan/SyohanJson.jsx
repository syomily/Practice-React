import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const SyohanJson = () => {
    const [states, setStates] = useState([]);
    const getData = () => {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        setStates(res.data);
      });
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    console.log(states);
  
    return (
      <>
        {states.map((data, idx) => {
          return (
            <div key={idx}>
                <h1>Title:{data.title}</h1>
                <p>Body: {data.body}</p>
                <p>ID: {data.id} </p>
              <hr />
            </div>
          );
        })}
      </>
    );
  };
  
  export default SyohanJson;