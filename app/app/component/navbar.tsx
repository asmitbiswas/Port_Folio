import Link from "next/link"

export default function NavBar(){
    return(
        <div
        style={{
            // position:"fixed",
            display:"flex",
            border:"1px solid rgb(211, 211, 211)",
            // background:"#1f1e1e",
            // maxWidth:"200rem",
            // minHeight:"100px",
            padding:"14px",
            color:"black"
        }}
        >
            <h1>Asmit_Coder</h1>
            <div
            style={{
                display:"flex",
                maxWidth:"1px",
                margin:"0 auto",
                // lineHeight:"1.8"
            }}
            >
              
                    <img 
            style={{
                width:"50px",
                height:"50px",
                // display:"flex",
                // justifyItems:"center",
                maxWidth:"2000px",
                margin:"0 auto",
            }}
            src="home-icon.svg" alt="" />
              <p style={{
                    color:"rgb(212 212 212 )"
                }}>a</p>
            <img
              style={{
                width:"50px",
                height:"50px",
                // display:"flex",
                // justifyItems:"center",
                maxWidth:"2000px",
                margin:"0 auto"
            }}
            src="envelop.svg" alt="" />
                  <p style={{
                    color:"rgb(212 212 212 )"
                }}>a</p>
            <img 
               style={{
                width:"50px",
                height:"50px",
                // display:"flex",
                // justifyItems:"center",
                maxWidth:"2000px",
                margin:"0 auto"
            }}
            src="hammer.svg" alt="" />
              <p style={{
                    color:"rgb(212 212 212 )"
                }}>a</p>

            </div>

        </div>
    )
}