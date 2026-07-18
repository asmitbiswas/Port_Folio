import Image from "next/image";
import NavBar from "./component/navbar";
import Link from "next/link";
import "./Style.css";

export default function Home() {
  return (
    <div
      style={{
        fontSize: "20px",
        display:"flex",
        padding: "30px",
        // marginTop: "2rem",
        lineHeight: "1.8",
        color:"Black",

      }}

    >
      <div>
        <img 
      style={{
        width:"100px",
        height:"100px",
        borderRadius:"50px",
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
  );
}
