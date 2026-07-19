import Image from "next/image";
import NavBar from "./component/navbar";
import Link from "next/link";
import "./Style.css";

export default function Home() {
  return (
    <div
    style={{
      maxWidth:"900px",
      display:"flex"
    }}
    >
      <div className="SVG">
     {/* <img src="github-commit.svg" alt="" /> */}
      </div>
    </div>

  );
}
