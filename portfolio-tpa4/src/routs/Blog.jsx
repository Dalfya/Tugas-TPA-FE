import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Blog() {
  return (
    <div>
    <h2 className="porto-text">Articel</h2>
     <div className="card-konten">
      <Row>
      <Col>
          <Card card className="card-porto">
            <Card.Header><h3>React JS</h3></Card.Header><br/>
            <Card.Body className="card-body-porto">
              <Card.Text>
              React adalah pustaka JavaScript front-end sumber terbuka dan gratis untuk membangun antarmuka pengguna berdasarkan komponen UI.
              Dikelola oleh Meta dan komunitas pengembang individu dan perusahaan.
              </Card.Text>
              <a href="https://reactjs.org/">Read More...</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card card className="card-porto">
            <Card.Header><h3>Node JS</h3></Card.Header><br/>
            <Card.Body className="card-body-porto">
              <Card.Text>
              Node.js adalah platform perangkat lunak yang dirancang oleh Ryan Dahl. 
              Node.js adalah runtime untuk lingkungan JavaScript di luar peramban web yang dibangun di atas mesin JavaScript V8.
              </Card.Text>
              <a href="https://nodejs.org/en/">Read More...</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col>
          <Card card className="card-porto">
            <Card.Header><h3>React Native</h3></Card.Header><br/>
            <Card.Body className="card-body-porto">
              <Card.Text>
              React Native adalah framework yang digunakan untuk membuat mobile app di dua sistem operasi sekaligus, yaitu Android dan iOS. 
              React Native disebut juga dengan cross-platform network.
              </Card.Text>
              <a href="https://reactnative.dev/">Read More...</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card card className="card-porto">
            <Card.Header><h3>Vue JS</h3></Card.Header><br/>
            <Card.Body className="card-body-porto">
              <Card.Text>
              Vue.js adalah kerangka kerja JavaScript yang bersifat progresif, bersumber terbuka untuk membangun antarmuka pengguna. 
              Integrasinya mudah dilakukan dengan Vue karena ia dirancang untuk bisa berjalan hanya di beberapa bagian halaman web.
              </Card.Text>
              <a href="https://docs.vuejs.id/v2/guide/">Read More...</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
   </div>
  );
}

export default Blog