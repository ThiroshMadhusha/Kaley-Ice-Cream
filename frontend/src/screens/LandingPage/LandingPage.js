import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./LandingPage.css";

const LandingPage = () => {

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if (userInfo) {
  //     history.push("/inventory");
  //   }
  // }, [history]);
    
    
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome To Kaley Ice Cream</h1>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="loginbutton" variant="outline-primary">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button size="lg" className="registerbutton" variant="outline-primary">
                  Register
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage
