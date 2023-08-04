import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hey There !<span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Ekansh Verma</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/ekanshverma143");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/ekansh-verma-469557228/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://twitter.com/i_ekanshverma");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://instagram.com/i_ekanshverma");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
        <hr className='line' />
        <p className='copyright'>© Copyright 2023.
        <br /> 
        Designed <span>Ekansh Verma</span></p>
      </Container>
    </div>
  )
}

export default Home