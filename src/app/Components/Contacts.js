"use client";

import { Col, Container, Row } from "react-bootstrap";
import Contact from "./Contact";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contacts() {
    return (
        <>
            <Container style={{ color: "#D9EFDE" }}>
                <Row>
                    <Col xs="12" md="6">
                        <h2>Abdelrahman Maher</h2>
                    </Col>
                    <Col
                        xs="12"
                        md="6"
                        style={{
                            display: "flex",
                            // justifyContent: "end",
                        }}
                        className="socials"
                    >
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
                    </Col>
                </Row>
                <div style={{ marginTop: "20px" }} className="phone">
                    <h4
                        style={{
                            display: "inline-block",
                            marginBottom: "0",
                        }}
                    >
                        Phone Number:
                    </h4>
                    <span
                        style={{
                            fontSize: "20px",
                            marginBottom: "0",
                        }}
                    >
                        {" "}
                        +201067423926
                    </span>
                </div>
            </Container>
        </>
    );
}
