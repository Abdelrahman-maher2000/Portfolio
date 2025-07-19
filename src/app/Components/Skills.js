"use client";

import { Container, Row, Col } from "react-bootstrap";
import DownloadMyResume from "./DownloadMyResume";
import { Divider } from "@mui/material";

export default function Skiils() {
    return (
        <>
            <h1
                className="text-center"
                style={{ color: "#D9EFDE", marginBottom: "30px" }}
            >
                My Skills
            </h1>
            <section
                style={{
                    backgroundColor: "#D9EFDE",
                    color: "#232E26",
                    borderRadius: "40px",
                    padding: "40px",
                    marginBottom: "64px",
                }}
                id="skills"
            >
                {/* <Container> */}
                <Row>
                    <Col xs="12" md="3" className="tag2">
                        <h3 style={{ marginBottom: "20px" }}>
                            Lot of Skills To make any webSite
                        </h3>
                        <DownloadMyResume />
                    </Col>
                    <Col xs="12" md="9">
                        <Row className="skills-icons">
                            <Col xs="12">
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <img
                                        src={
                                            "/front-end-development-1.png"
                                        }
                                    />
                                    <h5
                                        style={{
                                            color: "#2F7E9D",
                                        }}
                                    >
                                        Front end development
                                    </h5>
                                </div>
                            </Col>
                            <Col xs="12">
                                <div className="d-flex justify-content-center align-items-center primary-skills">
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img src={"/html5.png"} />
                                        <h5
                                            style={{
                                                color: "#E34F26",
                                            }}
                                        >
                                            HTML5
                                        </h5>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img src={"/css3.png"} />
                                        <h5
                                            style={{
                                                color: "#264DE4",
                                            }}
                                        >
                                            CSS3
                                        </h5>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img src={"/bootstrap.png"} />
                                        <h5
                                            style={{
                                                color: "#7952B3",
                                            }}
                                        >
                                            Bootstrap
                                        </h5>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img
                                            src={"/javascript.png"}
                                        />
                                        <h5
                                            style={{
                                                color: "#F7DF1E",
                                            }}
                                        >
                                            Javascript
                                        </h5>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12">
                                <div className="d-flex justify-content-center align-items-center primary-skills">
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img src={"/react.png"} />
                                        <h5
                                            style={{
                                                color: "#61DAFB",
                                            }}
                                        >
                                            React JS
                                        </h5>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img src={"/zustand.png"} />
                                        <h5
                                            style={{
                                                color: "#FF955C",
                                            }}
                                        >
                                            Zustand
                                        </h5>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img src={"/redux.png"} />
                                        <h5
                                            style={{
                                                color: "#764ABC",
                                            }}
                                        >
                                            Redux
                                        </h5>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img
                                            src={"/materialui.png"}
                                        />
                                        <h5
                                            style={{
                                                color: "#007FFF",
                                            }}
                                        >
                                            Material UI
                                        </h5>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12">
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <img src={"/nextjs.png"} />
                                    <h5
                                        style={{
                                            color: "black",
                                        }}
                                    >
                                        Next Js
                                    </h5>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* </Container> */}
            </section>
        </>
    );
}
