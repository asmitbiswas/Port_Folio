import Link from "next/link"

export default function NavBar(){
    return(
        <div
        style={{
            // display:"flex",
            // border:"1px solid #151515",
            width:"205vh",
            height:"90px",
            padding:"5px",
            lineHeight:"2.8",
            background:"rgb(15, 15, 15)",
            borderRadius:"12px",
            fontSize:"16px",
            display:"flex",
        }}
        >
            <h1
            style={{
                fontSize:"20px",
                display:"flex",
                padding:"10px",
                fontFamily:"poppins"
            }}
            >Asmit Biswas</h1>
        </div>
    )
}