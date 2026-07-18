import Link from "next/link"

export default function NavBar(){
    return(
        <div
        style={{
            // position:"fixed",
            display:"flex",
            border:"1px solid #000",
            // background:"#000",
            maxWidth:"200rem",
            minHeight:"100px",
            padding:"14px"
        }}
        >
            <h1>Asmit_Coder</h1>
            <img src="home-icon.svg" alt="" />
        </div>
    )
}