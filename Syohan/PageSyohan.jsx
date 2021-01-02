import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import "./assets/pageSyohan.css";
import Syohan from "../../components/Syohan/assets/doraemon.jpg";
// import Syopage from "./assets/kilua.jpg"
import { Container } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { SyohangetJson } from "../store/actions/SyohangetJson";
// import { useSelector, useDispatch } from 'react-redux';


const PageSyohan = () => {
  const fontSM = {
    fontFamily:'monospace', 
    fontWeight:'bold', 
    fontSize:'16px'
  };
  const fontBG = {
    fontFamily:'monospace', 
    fontWeight:'bold', 
    fontSize:'50px'
  };
  const popup = {
    display: 'flex',
    marginTop: '100px',
    fontFamily: 'monospace'
  }

  return (
    <div>
      <Navbar color='dark' dark expand='md'>
        <Container>
          <NavbarBrand href='/syohan'><h1 className='text-light'>Syohan</h1></NavbarBrand>
          <Nav className ='mr-auto'>
            <Link to='/SyohanCrud'><span className='text-muted'>AboutMe</span></Link>
            <Link to='#'><span className='text-muted'>SocialLfye</span></Link>
            <Link to='#'><span className='text-muted'>Friends</span></Link>
            <FormGroup className='mr-auto'>
              <Input type='text' name='seacrh' id='search' placeholder='search' />
            </FormGroup>
            <Button className='searchBTN'><img src='buttonimg' src={FaSearch} alt='' /></Button>
            <Button className='submitbutton'><Link to='/syohanJson'>Back</Link></Button> 
          </Nav>
        </Container>
        </Navbar> 
        <Container style={popup}>
          <div className='sidebarLeft'>
            <img src={Syohan} alt='' />
            <h6 style={fontSM}>Aboutme</h6>
            <h5>Hello Its Me Syomily</h5>
            <p className='desc'>Front-End Developer</p>
            <p>Member of Glints Academy Batch 9</p>
          </div>
        <div className='sidebarRight'>
          <h6>This is published beacuse i missed you so much</h6>
          <h1 className='mainbar' style={fontBG}>WHEERE ARE YOUUU NOWW?!!</h1>
          <img src={Syohan} alt='alt' />
          <p>Did you know , we already didn't meet each other more than 12 years, but i still clearly remind about anything that we ever did together, and right now i just wanna meet by the last chance before i open my new part of mylife for another someone special for me, please allow me!</p> 
          <p>I knew it's impossible but who knows, god always understanding and listening for all sinner that will decide to be a good man, so i'll wait till this year.</p>
        </div>
        </Container>
    </div>
  );
};

export default PageSyohan;
