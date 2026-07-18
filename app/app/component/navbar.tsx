import Link from "next/link"

export default function NavBar() {
    return (
      <div
      style={{
        maxWidth:"300px",
        margin:"0 auto"
      }}
      >
          <div
            style={{
                // position:"fixed",
                display: "flex",
                border: "1px solid rgb(211, 211, 211)",
                // background:"#1f1e1e",
                maxWidth:"450px",
                // minHeight:"100px",
                padding: "14px",
                color: "black",
                borderRadius:"12px",
                justifyContent:"center",
                alignItems:"center"
            }}
        >
            <div
                style={{
                    display: "flex",
                    maxWidth:"1px",
                    margin:"0 auto",
                    justifyContent:"center",
                    alignContent:"center"
                    // lineHeight:"1.8"
                }}
            >

                <Link href="/Home">
                <img
                    style={{
                        width: "50px",
                        height: "50px",
                        // display:"flex",
                        // justifyItems:"center",
                        maxWidth: "2000px",
                        margin: "0 auto",
                    }}
                    src="home-icon.svg" alt="" />
                    </Link>
             
                <img
                    style={{
                        width: "50px",
                        height: "50px",
                        // display:"flex",
                        // justifyItems:"center",
                        maxWidth: "2000px",
                        margin: "0 auto"
                    }}
                    src="envelop.svg" alt="" />
             
                <img
                    style={{
                        width: "50px",
                        height: "50px",
                        // display:"flex",
                        // justifyItems:"center",
                        maxWidth: "2000px",
                        margin: "0 auto"
                    }}
                    src="hammer.svg" alt="" />
            
            <img 
              style={{
                        width: "50px",
                        height: "50px",
                        // display:"flex",
                        // justifyItems:"center",
                        maxWidth: "2000px",
                        margin: "0 auto"
                    }}
            src="notebook.svg" alt="" />

            </div>

        </div>
      </div>
    )
}