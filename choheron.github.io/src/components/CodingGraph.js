import { Box, Container, Typography, Grow } from "@mui/material";
import React from "react";
import '../css/codeGraph.css';

export default function CodingGraph() {
    const containerRef = React.useRef(null);

    return (
        <div className="body">
            <Box className="masterContainer">
                <Typography variant="h3" className="text">Code Experience</Typography>
                <Grow 
                    in={true}
                    {... (true ? { timeout: 1000 } : {})}   
                >
                    <Container className="graphContainer" ref={containerRef}>
                        <table>
                            <tr>
                                <th style={{width: "10%"}}></th>
                                <th style={{width: "18%"}}>
                                    <Typography variant="h6" className="graphText"><b>Beginner</b></Typography>
                                </th>
                                <th style={{width: "18%"}}>
                                    { /* This is a spacer header */ }
                                </th>
                                <th style={{width: "18%"}}>
                                    <Typography variant="h6" className="graphText"><b>Intermediate</b></Typography>
                                </th>
                                <th style={{width: "18%"}}>
                                    { /* This is a spacer header */ }
                                </th>
                                <th style={{width: "18%"}}>
                                    <Typography variant="h6" className="graphText"><b>Advanced</b></Typography>
                                </th>
                            </tr>
                            <tr>
                                <td className="headerCol"><Typography variant="h5" className="graphText">Java</Typography></td>
                                <td colSpan={5} >
                                    <Container className="experienceBar">
                                        6 Years of Regular Coursework and Experience
                                    </Container>
                                </td>
                            </tr>
                            <tr>
                                <td className="headerCol"><Typography variant="h5" className="graphText">Python</Typography></td>
                                <td colSpan={5} >
                                    <Container className="experienceBar">
                                        5 Years of Experience through Projects and Employment
                                    </Container>
                                </td>
                            </tr>
                            <tr>
                                <td className="headerCol"><Typography variant="h5" className="graphText">Javascript</Typography></td>
                                <td colSpan={4} >
                                    <Container className="experienceBar">
                                        2 Year of Experience through Employment and Coursework
                                    </Container>
                                </td>
                            </tr>
                            <tr>
                                <td className="headerCol"><Typography variant="h5" className="graphText">C</Typography></td>
                                <td colSpan={3}>
                                    <Container className="experienceBar">
                                        2.5 Years of Experience through Coursework
                                    </Container>
                                </td>
                            </tr>
                            <tr>
                                <td className="headerCol"><Typography variant="h5" className="graphText">C++</Typography></td>
                                <td colSpan={3}>
                                    <Container className="experienceBar">
                                        Extensive Classwork, Visual Computing, OpenGL
                                    </Container>
                                </td>
                            </tr>
                            <tr>
                                <td className="headerCol"><Typography variant="h5" className="graphText">SQL</Typography></td>
                                <td colSpan={2}>
                                    <Container className="experienceBar">
                                        Coursework
                                    </Container>
                                </td>
                            </tr>
                            <tr>
                                <td className="headerCol"><Typography variant="h5" className="graphText">C#</Typography></td>
                                <td>
                                    <Container className="experienceBar">
                                        Project Experience
                                    </Container>
                                </td>
                            </tr>
                        </table>
                    </Container>
                </Grow>
            </Box>
        </div>
    )
}