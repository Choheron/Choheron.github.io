import { Box, Container, Typography, Grow } from "@mui/material";
import React from "react";
import '../css/elementBubble.css';

export default function ProjectTray(props) {
	const containerRef = React.useRef(null);

	return (
		<div className="body">
			<Box className="masterContainer">
				<Typography variant="h3" className="text">Side Projects</Typography>
        <div className="graphContainer" ref={containerRef}>
          <div className="flexDiv">
            <p className="projectText"><a href="https://www.thiswebsitedoesnothing.com/"><u>thiswebsitedoesnothing.com</u></a></p>
            <p className="projectText"><a href="http://trc-aws-solutions-architect-cert-testing-static-site.s3-website-us-east-1.amazonaws.com/"><u>What is that?</u></a></p>
          </div>
        </div>
			</Box>
		</div>
	)
}