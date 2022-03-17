import { Box, Container, Typography, Paper, Slide, Grow } from "@mui/material";
import React from "react";
import '../css/codeGraph.css';

export default function CodingGraph() {
    const containerRef = React.useRef(null);

    return (
        <div className="body">
            <Box className="masterContainer">
                <Typography variant="h4" className="text"><i>Lets talk Code...</i></Typography>
                <Grow 
                    in={true}
                    {...(true ? { timeout: 1000 } : {})}   
                >
                    <Container className="graphContainer" ref={containerRef}>
                        <table>
                            <tr>
                                <th style={{width: "10%"}}></th>
                                <th style={{width: "30%"}}>
                                    <Typography variant="h6" className="graphText"><b>Beginner</b></Typography>
                                </th>
                                <th style={{width: "30%"}}>
                                    <Typography variant="h6" className="graphText"><b>Intermediate</b></Typography>
                                </th>
                                <th style={{width: "30%"}}>
                                    <Typography variant="h6" className="graphText"><b>Advanced</b></Typography>
                                </th>
                            </tr>
                            <tr>
                                <td className="headerCol"><Typography variant="h5" className="graphText">Java</Typography></td>
                                <td colSpan={3} >
                                    <Container className="experienceBar">
                                        5 Years of Regular Coursework and Experience
                                    </Container>
                                </td>
                            </tr>
                            <tr>
                                <td className="headerCol"><Typography variant="h5" className="graphText">Python</Typography></td>
                                <td colSpan={2} >
                                    <Container className="experienceBar">
                                        4 Years of Experience - Multiple Projects
                                    </Container>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="headerCol"><Typography variant="h5" className="graphText">Javascript</Typography></td>
                                <td colSpan={2} >
                                    <Container className="experienceBar">
                                        1 Year of Rigorous Experience through Employment and Coursework
                                    </Container>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="headerCol"><Typography variant="h5" className="graphText">C</Typography></td>
                                <td colSpan={2}>
                                    <Container className="experienceBar">
                                        2.5 Years of Experience through Coursework
                                    </Container>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="headerCol"><Typography variant="h5" className="graphText">C#</Typography></td>
                                <td>
                                    <Container className="experienceBar">
                                        Scripting/Project Experience
                                    </Container>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="headerCol"><Typography variant="h5" className="graphText">C++</Typography></td>
                                <td>
                                    <Container className="experienceBar">
                                        OpenGL, Visual Computing
                                    </Container>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </Container>
                </Grow>
            </Box>
        </div>
    )
}