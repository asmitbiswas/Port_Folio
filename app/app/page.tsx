import Image from "next/image";


export default function Home() {
  return (
    <div
    style={{
         fontSize:"20px",
        // display:"flex",
        padding:"5px",
        marginTop:"2rem"
        
    }}
    
    >

      <p
      style={{
        display:"flex",
        // padding:"20px",
        // width:"900px",
        fontSize:"14px",
        maxWidth:"900px",
        margin:"0 auto",
        color:"#555"
      }}
      >Hello Friends,👋</p>
         {/* <img src="" alt="" /> */}
         <h1 
         style={{
          font:"icon",
             maxWidth:"900px",
        margin:"0 auto",
        fontSize:"40px"
         }}
         > I'm Asmit Biswas</h1>
         <p
         style={{
          display:"flex",
          // justifyContent:"center"
          maxWidth:"900px",
          margin:"0 auto"
         }}
         >Frontend-designer</p>
         {/* <p
            style={{
        display:"flex",
        padding:"20px",
        // justifyContent:"center"
              maxWidth:"900px",
              margin:"0 auto"
      }}
         >I'm Asmit Biswas</p> */}
  
    </div>
  );
}
