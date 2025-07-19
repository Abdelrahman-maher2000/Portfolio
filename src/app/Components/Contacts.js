"use client";

import { Container } from "react-bootstrap";
import Contact from "./Contact";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contacts() {
    return (
        <>
            <Container style={{ color: "#D9EFDE" }}>
                <div
                    className="d-flex align-items-center justify-content-start"
                    style={{ gap: "30px" }}
                >
                    <Contact />
                    <a
                        href="https://www.facebook.com/share/15bBaWx27H/"
                        target="_blank"
                        style={{ color: "#D9EFDE" }}
                    >
                        <FacebookRoundedIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/abdelrahmanmaher/"
                        target="_blank"
                        style={{ color: "#D9EFDE" }}
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        href="https://github.com/Abdelrahman-maher2000"
                        target="_blank"
                        style={{ color: "#D9EFDE" }}
                    >
                        <GitHubIcon />
                    </a>
                </div>
            </Container>
        </>
    );
}
