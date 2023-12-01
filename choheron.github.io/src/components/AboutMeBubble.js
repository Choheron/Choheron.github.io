import { Box, Container, Typography, Grow } from "@mui/material";
import React from "react";
import '../css/elementBubble.css';

export default function AboutMeBubble(props) {
	const containerRef = React.useRef(null);

	return (
		<div className="body">
			<Box className="masterContainer">
				<Typography variant="h3" className="text">About Me</Typography>
				<Grow
					in={true}
					{... (true ? { timeout: parseInt(props.fadeinTimeout) } : {})}
				>
					<Container className="graphContainer" ref={containerRef}>
						
					</Container>
				</Grow>
			</Box>
		</div>
	)
}