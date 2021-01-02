import { Carousel } from 'react-bootstrap'
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const getData = () => {
        Axios.get("http://13.212.139.34:3000/home/carouselImages")
        .then((res) => {
            setIndex(res.result);
        });
    };

    useEffect(() => {
        getData
        // return () => {
        //     cleanup
        // }
    }, []);

    console.log(Index)
    
    {Index.map((result, idx) => {
        return (
            <Carousel>
                <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
        })}
    
    );
  }
  
  render(<ControlledCarousel />);