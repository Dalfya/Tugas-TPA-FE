import React from "react";

function About(props) {
  return (
    <section>
      <h1>About me...</h1>
      <h2>{props.name}</h2>
      <p>
      Halo saya Diego Alfiandro, Mahasiswa prodi Teknik Informatika dari Universitas Muhammadiyah Surakarta. Saat ini saya sedang mengikuti program Kampus merdeka
      yang diadakan oleh KEMENDIKBUD RISTEK Batch 3. Saya mengikuti program Kampus Merdeka Batch 3 dengan Mitra SKILVUL.
      </p>
      <h3>SKILVUL Front End with React JS</h3>
      <p>
        DiSkilvul saya memilih track Front-end Web Dev, alasan saya memilih track ini karena ketertarikan saya
        dengan dunia web development dan untuk sementara ini pelan pelan saya mulai mendalami Front-end web dev dan
        nantinya akan melanjutkan belajar mempelajari bagian Back-end web dev.
      </p>
      <br/>
      <h3>Thanks For Coming . . .</h3>
    </section>
  );
}

export default About