import React from 'react';
import './Slider.css'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container';
function CarouselFadeExample() {
  
  return (
    <div className='main '>
    <Container className='main p-5'>
    <Carousel fade>
      <Carousel.Item>
            <Row  >
            <Col xs={12} md={4} className='img-box '>
              <img className='main-img' src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg" alt="" />
          </Col>
          <Col xs={12} md={{ span: 7, offset: 1 }} className='second-div'>
            <h1 className=' text-start mt-5 name-h'>MOVIE TIME</h1>
            <h3 className='text-light text-start mt-5'>Welcome to MY-MOVIE</h3>           
          
          </Col>
            </Row>
        
      </Carousel.Item>
      <Carousel.Item>
      <Row>
            <Col xs={12} md={4} className='img-box'>
            <img className='main-img' src="https://static.tvmaze.com/uploads/images/original_untouched/24/60454.jpg" alt="" />
             
          </Col>
          <Col xs={12} md={{ span: 7, offset: 1 }} className='second-div'>
          
          <h1 className=' text-start mt-5 name-h'>MOVIE TIME</h1>
            <h3 className='text-light text-start mt-5'>Welcome to MY-MOVIE</h3> 
          </Col>
            </Row>

      </Carousel.Item>
      <Carousel.Item>
      <Row>
            <Col xs={12} md={4} className='img-box'>
            <img className='main-img' src="https://static.tvmaze.com/uploads/images/original_untouched/67/168214.jpg" alt="" />

          </Col>
          <Col xs={0} md={{ span: 7, offset: 1 }} className='second-div'>
          <h1 className=' text-start mt-5 name-h'>MOVIE TIME</h1>
            <h3 className='text-light text-start mt-5'>Welcome to MY-MOVIE</h3> 
          
          </Col>
            </Row>

       
      </Carousel.Item>
    </Carousel>
    </Container>
    </div>
  );
}

export default CarouselFadeExample;