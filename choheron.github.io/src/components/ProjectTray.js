import { Box, Container, Typography, Grow } from "@mui/material";
import React from "react";
import '../css/elementBubble.css';

export default function ProjectTray(props) {
	const containerRef = React.useRef(null);

	return (
		<div className="body">
			<Box className="masterContainer">
				<Typography variant="h3" className="text">Side Projects</Typography>
				<Grow
					in={true}
					{... (true ? { timeout: parseInt(props.fadeinTimeout) } : {})}
				>
					<div className="graphContainer" ref={containerRef}>
						<div className="flexDiv">
							<a href="https://www.thiswebsitedoesnothing.com/"><p className="projectText"><u>thiswebsitedoesnothing.com</u></p></a>
							<a href="http://trc-aws-solutions-architect-cert-testing-static-site.s3-website-us-east-1.amazonaws.com/"><p className="projectText"><u>What is that?</u></p></a>
						</div>
					</div>
				</Grow>
			</Box>
		</div>
	)
}