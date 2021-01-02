import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import { ModalBody } from "reactstrap";
import image from "./assets/doraemon.jpg";
import "./assets/syohan.css";



function Syohan() {
  return (
    <>
      <ModalBody>
       <Link to="/PageSyohan">
         <h1>Syohan Perdhana</h1>
         </Link>
        <p>Syohan Perdhana is member of GA FE #9</p>
        <img src={image} alt="syusyu" />
      </ModalBody>
    </>
  );
}

export default Syohan;
