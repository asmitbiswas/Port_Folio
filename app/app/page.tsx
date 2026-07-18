import Image from "next/image";
import NavBar from "./component/navbar";
import Link from "next/link";


export default function Home() {
  return (
    <div
      style={{
        fontSize: "20px",
        // display:"flex",
        padding: "5px",
        marginTop: "2rem",
        lineHeight: "1.8",
        color:"white",
      }}

    >
      {/* <NavBar/> */}
      <p
        style={{
          display: "flex",
          // padding:"20px",
          // width:"900px",
          fontSize: "14px",
          maxWidth: "900px",
          margin: "0 auto",
          color: "#666",
          marginTop: "20px"
        }}
      >Hello Friends,👋</p>
      {/* <img src="" alt="" /> */}
      <h1
        style={{
          font: "icon",
          maxWidth: "900px",
          margin: "0 auto",
          fontSize: "40px"
        }}
      > I'm Asmit Biswas</h1>
      <p
        style={{
          display: "flex",
          // justifyContent:"center"
          maxWidth: "900px",
          margin: "0 auto",
          fontSize: "14px",
          color: "#666"
        }}
      >Frontend-designer | School Student</p>
      {/* <p
            style={{
        display:"flex",
        padding:"20px",
        // justifyContent:"center"
              maxWidth:"900px",
              margin:"0 auto"
      }}
         >I'm Asmit Biswas</p> */}
      <h2
        style={{
          padding: "10px",
          maxWidth: "900px",
          margin: "0 auto",
          color: "rgb(124, 124, 124)",
          display: 'flex'
        }}
      >
        About me  .
      </h2>
      {/* <p style={{color:"purple", display:"flex"}}>.</p> */}
      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          fontSize: "16px",
          color: "rgb(124, 124, 124)"
        }}
      >
        I'm a teen school student and a Web designer. I've 1+ years of experience in web-dev. I can also do simple backend too..  I contribute to Github, built DevVault and worked in JISCE Gaming Club web 👾. Also i worked in frameworks like React, Next etc. I am intrested in Music, Gaming, Coding and Badminton sports.
      </p>
      
    </div>
  );
}
