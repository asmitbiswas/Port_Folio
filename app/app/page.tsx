import Image from "next/image";
import NavBar from "./component/navbar";
import Link from "next/link";
import "./Style.css";

export default function Home() {
  return (
    <div
    style={{
    maxWidth:"1000px",
    margin:"0 auto",
    border:"1px solid #666565",
    minHeight:"930px"
    }}
>
      <div
      style={{
        // marginTop:"1.5rem"
      }}
      ></div>
  <div
      style={{
        fontSize: "20px",
        display:"flex",
        padding: "30px",
        // marginTop: "2rem",
        // lineHeight: "1.8",
        color:"Black",
        border:"1px solid #666565",
        maxWidth:"none",
        maxHeight:"none"
      }}

    >
     
      <div>
        <img 
      style={{
        width:"100px",
        height:"100px",
        borderRadius:"50px",
        marginTop:"0 auto",
        // maxWidth:"200px"
        marginRight:"16px"
      }}
      src="WhatsApp Image 2026-07-18 at 11.00.05 PM.jpeg" alt="" />
      </div>
      <h1
          style={{
        maxWidth:"1px",
        margin:"0 auto"
      }}
      >AsmitCoder</h1>
      </div>
      <p
      style={{
        padding:"14px",
        fontSize:"20px"
      }}
      >
        Who Am I ?
      </p>
      <p
        style={{
        padding:"14px"
      }}
      >
           Hello 
      </p>
    </div>
  
  );
}
