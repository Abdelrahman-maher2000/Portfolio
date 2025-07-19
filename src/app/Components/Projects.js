"use client";

import {
    Button,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from "@mui/material";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Projects() {
    const [shown, setShown] = useState(3);
    const [word, setWord] = useState("See More");
    const [apper, setApper] = useState(false);
    return (
        <>
            <h1
                style={{
                    color: "#D9EFDE",
                    textAlign: "center",
                    marginTop: "100px",
                    marginBottom: "50px",
                }}
            >
                My Projects
            </h1>
            <section
                id="projects"
                style={{
                    backgroundColor: "#132124",
                    color: "#D9EFDE",
                    padding: "30px",
                    // marginBottom: "120px",
                }}
            >
                <Container>
                    <Row>
                        {projects.map((e, index) => {
                            if (index < shown) {
                                return (
                                    <Col xs="12" md="4" key={e.id}>
                                        <a
                                            href={e.url}
                                            target="_blank"
                                        >
                                            <div className="project-img">
                                                <img
                                                    src={e.img}
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>

                                        <h3
                                            style={{
                                                marginTop: "16px",
                                            }}
                                        >
                                            {e.title}
                                        </h3>
                                        <p>{e.description}</p>
                                    </Col>
                                );
                            }
                        })}
                        <div className="d-flex align-items-center justify-content-center">
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#172C1C",
                                    color: "white",
                                    fontSize: "20px",
                                }}
                                onClick={() => {
                                    setApper(!apper);
                                    if (apper) {
                                        setShown(3);
                                        setWord("See More");
                                    } else {
                                        setShown(projects.length);
                                        setWord("See Less");
                                    }
                                }}
                            >
                                {word}
                            </Button>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
}

const projects = [
    {
        img: "/project.jpg",
        title: "First Project",
        description: "description of first Project",
        id: "1",
        url: "#",
    },
    {
        img: "/project.jpg",
        title: "Second Project",
        description: "description of second Project",
        id: "2",
        url: "#",
    },
    {
        img: "/project.jpg",
        title: "Third Project",
        description: "description of third Project",
        id: "3",
        url: "#",
    },
    {
        img: "/project.jpg",
        title: "Fourth Project",
        description: "description of fourth Project",
        id: "4",
        url: "#",
    },
    {
        img: "/project.jpg",
        title: "Fifth Project",
        description: "description of fifth Project",
        id: "5",
        url: "#",
    },
    {
        img: "/project.jpg",
        title: "Sixth Project",
        description: "description of sixth Project",
        id: "6",
        url: "#",
    },
];
