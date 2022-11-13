import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picture1 from "../assets/skilvul-ui-ux.jpg";
import picture2 from "../assets/skilvul-web-pemula.jpg";
import Button from 'react-bootstrap/Button';


function Portfolio() {
  return (
   <div>
    <h2 className="porto-text">Project & Sertifikasi</h2>
     <div className="card-konten">
      <Row>
        <Col>
          <Card Card className="card-porto">
            <Card.Img variant="top" src={picture1} alt="picture1" className="picture"/>
            <Card.Body className="card-body-porto">
              <Card.Title><h3>UI/UX Dasar</h3></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card Card className="card-porto">
            <Card.Header><h3>Movie</h3></Card.Header><br/>
            <Card.Body className="card-body-porto">
              <Card.Title>Movie app with TMDB API</Card.Title>
              <Card.Text>
              Webiste Movie app ini dibuat menggunakan HTML, CSS dan JavaScript, 
              JavaScript disini berfungsi untuk mengambil data film dari API TMDB Movie dan kemudian diproses lalu ditampilkan dihalaman website.
              </Card.Text>
              <Button href="https://tugas-tpa3-movie-api-diego-fe18.netlify.app">Links</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card className="card-porto">
            <Card.Img variant="top" src={picture2} alt="picture2" className="picture"/>
            <Card.Body className="card-body-porto">
              <Card.Title><h3>WEB DEV Dasar</h3></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card Card className="card-porto">
          <Card.Header><h3>Todo List Apps</h3></Card.Header><br/>
          <Card.Body className="card-body-porto">
            <Card.Title>Building with ReactJS</Card.Title>
            <Card.Text>
            to-do list adalah salah satu cara untuk meningkatkan produktivitas sehari-hari. 
            Dengan membuat daftar tugas, kamu mampu mengatur jadwal hingga menyusun pekerjaan berdasarkan prioritasnya.
            </Card.Text>
            <Button href="https://tugas-tpa5-todolist-diego-fe18.netlify.app/">Links</Button>
          </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
   </div>
  );
}

export default Portfolio