import React, { useState } from 'react'
import './Page2.css'
import Navbar from '../components/Navbar/NavTop'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import Form from 'react-bootstrap/Form';
function Page2(props) {
  const location = useLocation();

  const val = location.state?.data;
  console.log(val)
  const [modal, setmodal] = useState(false);

  return (
    <>

      <div className='main-div text-light top-d' >
        <Navbar />
        <Modal
          size='lg'
          isOpen={modal}
          toggle={() => setmodal(!modal)}
        >
          <ModalHeader
            toggle={() => setmodal(!modal)}

          >
            Book by filling this form
          </ModalHeader>
          <ModalBody>
            <Form>
              <div style={{color:'rgb(158, 158, 255)'}}>
                <h6>Movie : {val.show.name}</h6>
                <p>Charge : 4$ per person</p>
              </div>
              <Row>
                <Col xs={6} md={6}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter Name" />
              </Form.Group>
                </Col>
                <Col xs={6} md={6}>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="password" placeholder="Enter Email" />
              </Form.Group>
                </Col>
              </Row>
              
              
              <Row>
                <Col xs={4} md={4}>
                  <Form.Label>Persons: </Form.Label>
                  <Form.Select defaultValue="1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Select>

                </Col>
                <Col xs={4} md={4}>
                  <Form.Label>Seat: </Form.Label>
                  <Form.Select defaultValue="Select">
                    <option>Silver</option>
                    <option>Gold</option>
                    <option>Platinum</option>
                    <option>VIP</option>
                  </Form.Select>

                </Col>
              </Row>
              <Button className='mt-3'>Search Nearest Hall</Button>
            </Form>
          </ModalBody>
        </Modal>
        <Container className='top-d pb-4 pt-4'>
          <Row className=''>
            <Col xs={12} md={4} className='img-box'>
              <img className='main-img' src={val.show.image == null
                ? 'https://i.pinimg.com/originals/eb/0d/74/eb0d74d2e028a02d4f7e989c63799c82.jpg'
                : val.show.image.original} alt="" />
            </Col>
            <Col xs={12} md={{ span: 7, offset: 1 }} className='second-div '>
              <h4 className='name-text mt-4 mb-3'>{val.show.name}</h4>



              <div className='small-text text-start '>
                <h4>Released : {val.show.premiered}</h4>

                {val.show.rating.average != null ? <h4 className='rating'>Ratings : {val.show.rating.average}</h4> : null}
                {val.show.runtime != null ? <h4 className='rating'>Runtime : {val.show.runtime} minutes</h4> : null}
                <h4 className='rating'>Genres : {val.show.genres[0]}</h4>
                <h4 className='rating'>Language : {val.show.language}</h4>
              </div>
              <Button className='mt-2' onClick={() => setmodal(true)}>Book now</Button>
            </Col>
          </Row>
          <div className='summ  pt-5' style={{ color: 'rgb(175, 175, 255)' }}>

            <h2 className='pt-3 des-tag' >Description</h2>
            <div dangerouslySetInnerHTML={{ __html: val.show.summary }} />
          </div>
        </Container>

      </div>
    </>
  )
}

export default Page2
