import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NaVBar";
import About from "./Components/About";

// font
import { Libertinus_Math } from "next/font/google";
import Skiils from "./Components/Skills";
import Projects from "./Components/Projects";
import { Container } from "react-bootstrap";
import Contact from "./Components/Contact";
import Contacts from "./Components/Contacts";

const mainFont = Libertinus_Math({
    weight: "400",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <>
            <div
                className={mainFont.className}
                style={{ marginBottom: "30px" }}
            >
                <NavBar />
                <About />
                <Skiils />
                <Projects />
                <Container>
                    <hr
                        style={{
                            border: "1px solid #D9EFDE",
                            margin: " 50px auto 30px",
                        }}
                    ></hr>
                </Container>
                <Contacts />
            </div>
        </>
    );
}
