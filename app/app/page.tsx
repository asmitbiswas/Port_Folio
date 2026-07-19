import Image from "next/image";
import NavBar from "./component/navbar";
import Link from "next/link";
import "./Style.css";

export default function Home() {
  return (
    <div
    style={{
    maxWidth:"900px",
    margin:"0 auto",
    // border:"1px solid #666565",
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
        // border:"1px solid #666565",
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
      <pre
      style={{
        border:"1px solid rgb(235 245 251)",
        borderRadius:"20px",
        padding:"14px",
        background:"rgb(235 245 251)",
      }}
      >
        {`
        let developer = {
        name : " Asmit ",
        age : " 12 " ,
        hobbie : " coding &  gaming ",
        graduation : " None ",
        
        whileAlive(){
        code()
        sleep()
        eat()
        rest()
        imporveMyself()
        game()
        }
        }
        `}
      </pre>
      </div>
    </div>
  
  );
}
