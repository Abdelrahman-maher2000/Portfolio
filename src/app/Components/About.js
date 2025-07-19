"use client";

import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contact from "./Contact";
import Contacts from "./Contacts";

export default function About() {
    let fullText = "Front-End Developer";
    let [word, setWord] = useState("");
    let [isDeleting, setIsDeleting] = useState(true);
    let [index, setIndex] = useState(0);

    useEffect(() => {
        const typingSpeed = isDeleting ? 150 : 80;
        const timer = setTimeout(() => {
            if (isDeleting) {
                setWord(fullText.slice(0, index + 1));
                setIndex((prev) => prev + 1);

                if (index + 1 === fullText.length) {
                    setTimeout(() => {
                        setIsDeleting(false);
                    }, 1000);
                }
            } else {
                setWord(fullText.slice(0, index - 1));
                setIndex((prev) => prev - 1);
                if (index == 0) {
                    setIsDeleting(true);
                }
            }
        }, typingSpeed);
        return () => clearTimeout(timer);
    }, [index, isDeleting]);
    return (
        <>
            <section
                id="skills"
                style={{
                    marginTop: "64px",
                    color: "#D9EFDE",
                    marginBottom: "64px",
                }}
            >
                <Container>
                    <h1 className="text-center">About Me</h1>
                    <Row
                        style={{
                            backgroundColor: "#172C1C",
                            marginTop: "30px",
                            padding: "20px",
                            borderRadius: "40px",
                        }}
                    >
                        <Col xs={12} md={3}>
                            <div
                                style={{
                                    borderRadius: "5px",

                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src={"/Abdelrahman.jpg"}
                                    className="img-fluid"
                                    style={{ borderRadius: "5px" }}
                                />
                            </div>
                        </Col>

                        <Col
                            xs="12"
                            md="9"
                            style={{ marginTop: "20px" }}
                        >
                            <h3
                                className="Tag"
                                style={{
                                    position: "relative",
                                    border: " 3px solid white",
                                    padding: "10px",
                                    width: "fit-content",
                                    // backgroundColor: "transparent",
                                    zIndex: "10",
                                }}
                            >
                                Welcome To My Portfolio
                            </h3>
                            <div>
                                <h1>
                                    I'm <span>{word}</span>
                                </h1>
                                <p style={{ fontSize: "18px" }}>
                                    I am a front-end web developer
                                    transitioning from a civil
                                    engineering background. I excel in
                                    managing projects independently
                                    and collaborating effectively
                                    within teams. My experience as a
                                    civil engineer taught me how to
                                    work under pressure and handle
                                    tight schedules, which enhances my
                                    ability to deliver quality web
                                    solutions. I am proficient in
                                    various web development
                                    technologies and eager to apply my
                                    skills in this field.
                                </p>
                                <Contacts />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
