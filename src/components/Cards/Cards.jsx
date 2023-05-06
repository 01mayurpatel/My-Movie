import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cards.css';

import Button from 'react-bootstrap/Button'

function Cards() {
  const url = 'https://api.tvmaze.com/search/shows?q=all';
  const [movie, setMovie] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setMovie(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-md-center w-100">
          {movie.map((val) => {
            return (
              <Col xs={12} md={4} className="my-2 p-3" key={val.show.id}>
                <Card style={{ width: '18rem', background:'rgb(33,37,41)' }} className='whole-c'>
                  <Card.Img
                    variant="top"
                    src={
                      val.show.image == null
                        ? 'https://i.pinimg.com/originals/eb/0d/74/eb0d74d2e028a02d4f7e989c63799c82.jpg'
                        : val.show.image.original
                    }
                    style={{ height: '400px' }}
                  />
                  <Card.Body className='card-body text-light'>
                    <Card.Title>{val.show.name}</Card.Title>
                    <div className="border-box"></div>
                    <Card.Text className='mt-3'>
                      <h6>Ratings : {val.show.rating.average}</h6>
                      <h6>Genres : {val.show.genres[0]}</h6>
                      <h6>Language : {val.show.language}</h6>
                    </Card.Text>
                        <Button><Link to="/page2" state={{data:val}} className='text-light' style={{textDecoration:'none'}}>View details</Link></Button>
                        
                    
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
     
    </>
  );
}



export default Cards;
