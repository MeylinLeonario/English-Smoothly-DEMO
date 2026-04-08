import Navbar from "../components/navbar";
import { Link } from "react-router-dom";


export default function Landing() {
  return (
    <>
      <Navbar />
      <div id="title">
        <div id="title-words">
            <h1>Welcome to Smoothly!</h1>
        </div>
        <div id="title-image">
            <img src="hello" alt="Smoothly certificates"/>
        </div>
      </div>

    <div id="gen-info">
        <div id="info1">
            <div id="info-title">
                <h2>Gana experiencia mientras juegas</h2>
            </div>
            <div id="info-image">
                <img/>
            </div>
        </div>
        <div id="info2">
            <div id="info-title">
                <h2>Habla desde el día 1</h2>
            </div>
            <div id="info-image">
                <img/>
            </div>
        </div>
        <div id="info1">
            <div id="info-title">
                <h2>Supera el miedo a equivocarte</h2>
            </div>
            <div id="info-image">
                <img/>
            </div>
        </div>
    </div>

    <div id="button">
        <Link to="/login">
            <button>Get started</button>
        </Link>
    </div>
    </>
  );
}