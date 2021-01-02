import { SyohangetJson } from "../store/actions/SyohangetJson";
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const PageSyohanRedux = () => {
    const [json, setJson] = useState([]);
    const dispatch = useDispatch();
    const jsonData = useSelector((state) => state.SyohangetJson.dataJson);
    const [num, setNum] = useState(0);

    const getData = () => {
        axios
          .get("https://jsonplaceholder.typicode.com/todos")
          .then((res) => setJson(res.data));
      };
    
      const addNum = () => {
        setNum(num + 1);
      };
    
      const minumNum = () => {
        setNum(num - 1);
      };
    
      useEffect(() => {
        getData();
        dispatch(getJson());
      }, []);

      console.log(jsonData, jsonData);

      return (
          <div>
          <Link to="/">
            <h1>JSON</h1>
          </Link>
          <Container className="row-center">
            <Row>
              <p>{num}</p>
            </Row>
            <Row>
              <Button onClick={addNum}>+</Button>
              <Button onClick={minumNum}>-</Button>
            </Row>
            {jsonData?.map((data, idx) => {
              return (
                <div key={idx}>
                  <p>{data.title}</p>
                  <p>{data.body}</p>
                </div>
              );
            })}
          </Container>
        </div>
};
export default PageSyohanRedux;