import { Container, Typography, Paper } from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import '../css/codeGraph.css';


export default function CodingGraph() {
    return (
        <Container className="masterContainer">
            <Typography variant="h4" className="text">Lets talk Code...</Typography>
            <Container className="graphContainer" component={Paper}>
                <table>
                    <tr>
                        <th style={{width: "10%"}}></th>
                        <th style={{width: "30%"}}>Beginner</th>
                        <th style={{width: "30%"}}>Intermediate</th>
                        <th style={{width: "30%"}}>Advanced</th>
                    </tr>
                    <tr>
                        <td><Typography variant="subtitle1" className="graphText">Java</Typography></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><Typography variant="subtitle1" className="graphText">Python</Typography></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><Typography variant="subtitle1" className="graphText">Javascript</Typography></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><Typography variant="subtitle1" className="graphText">C</Typography></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><Typography variant="subtitle1" className="graphText">C#</Typography></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><Typography variant="subtitle1" className="graphText">HTML</Typography></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><Typography variant="subtitle1" className="graphText">CSS</Typography></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </Container>
        </Container>
    )
}