import { Box, Container, Typography, Grow } from "@mui/material";
import React from "react";
import '../css/codeGraph.css';

export default function ProjectTray() {
    const containerRef = React.useRef(null);

    return (
        <div className="body">
            <Box className="masterContainer">
                <Typography variant="h3" className="text">Side Projects</Typography>
                <Grow 
                    in={true}
                    {... (true ? { timeout: 1000 } : {})}   
                >
                    <Container className="graphContainer" ref={containerRef}>
                        <div className="flexDiv">
                            <p className="projectText">THE WEBSITE THAT DOES NOTHING:</p>
                            <a href="https://www.thiswebsitedoesnothing.com/"><p className="projectText"><u>thiswebsitedoesnothing.com</u></p></a>
                        </div>
												<div className="flexDiv">
                            <p className="projectText">"WTH is that?":</p>
                            <a href="http://trc-aws-solutions-architect-cert-testing-static-site.s3-website-us-east-1.amazonaws.com/"><p className="projectText"><u>WTH is that?</u></p></a>
                        </div>
                    </Container>
                </Grow>
            </Box>
        </div>
    )
}