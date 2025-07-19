"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Playfair } from "next/font/google";
import { Button } from "@mui/material";
import { useState } from "react";
import DownloadMyResume from "./DownloadMyResume";
import Contact from "./Contact";

const playfair = Playfair({
    subsets: ["latin"],
});

export default function NavBar() {
    const [active, setActive] = useState("home");
    return (
        <>
            <Navbar
                expand="lg"
                className="navbar"
                style={{
                    backgroundColor: "#D9EFDE",
                    color: "#232E26",
                }}
            >
                <Container>
                    <div className={playfair.className}>
                        <Navbar.Brand
                            href="#home"
                            style={{
                                borderRadius: "10px",
                                padding: "5px",
                                fontWeight: "600",
                                fontSize: "30px",
                            }}
                        >
                            My Portfolio
                        </Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div
                            className="navLinks"
                            style={{
                                width: "70%",
                            }}
                        >
                            <Nav className="d-flex justify-content-between align-items-center">
                                <Nav.Link
                                    href="#home"
                                    onClick={() => setActive("home")}
                                    className={
                                        active == "home"
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Home
                                </Nav.Link>
                                <Nav.Link
                                    href="#about"
                                    onClick={() => setActive("about")}
                                    className={
                                        active == "about"
                                            ? "active"
                                            : ""
                                    }
                                >
                                    About
                                </Nav.Link>
                                <Nav.Link
                                    href="#skills"
                                    onClick={() =>
                                        setActive("skills")
                                    }
                                    className={
                                        active == "skiils"
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Skills
                                </Nav.Link>
                                <Nav.Link
                                    href="#projects"
                                    onClick={() =>
                                        setActive("projects")
                                    }
                                    className={
                                        active == "projects"
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Projects
                                </Nav.Link>

                                <Contact />

                                <DownloadMyResume />
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
