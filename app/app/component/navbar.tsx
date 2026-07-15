import Link from "next/link"

export default function NavBar(){
    return(
        <div
        style={{
            // display:"flex",
            // border:"1px solid #151515",
            width:"200px",
            height:"930px",
            padding:"20px",
            lineHeight:"2.8",
            background:"rgb(15, 15, 15)",
            borderRadius:"12px",
            fontSize:"16px",
            display:"flex"
        }}
        >
         <nav>
            <ul>
                <li><Link href="/" style={{
                    textDecoration:"none",
                    color:"inherit",
                }}><h1>Home</h1></Link></li>
            </ul>
         </nav>
        </div>
    )
}