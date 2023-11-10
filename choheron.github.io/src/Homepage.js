import { Container, Typography, Grow } from "@mui/material";
import React, { useState, useEffect } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CodingGraph from "./components/CodingGraph";
import WebDevGraph from "./components/WebDevGraph"
import LinkBlock from "./components/Linkblock";
import ProjectTray from "./components/ProjectTray";
import WorkExperienceBubble from "./components/WorkExperienceBubble";
import './css/homepage.css';

// 1.5s ease-in-out 1200ms infinite alternate none running upDown
export default function Homepage() {
	// Master return statement
	return (
		<div className="application">
			<div className="content">
				<div className="landing">
					<div className="staticHeader">
						<Typography variant="subtitle1" className="over">Hello, my name is</Typography>
						<Grow in={true} {... (true ? { timeout: 1500 } : {})} >
							<Typography variant="h1" component="h1">Thomas Campbell</Typography>
						</Grow>
						<Grow in={true} {... (true ? { timeout: 3000 } : {})} >
							<Typography variant="subtitle1" component="p">DevOps Engineer - Full Stack Developer - Software Engineer - Homelab Enthusiast</Typography>
						</Grow>
					</div>
					{ /* Display links to relevant social medias and websites of mine */}
					<LinkBlock />
				</div>
				<div className="pageBlock">
					<WorkExperienceBubble/>
					{/* <WebDevGraph /> */}
					<CodingGraph />
					<ProjectTray />
				</div>
				<br />
			</div>
		</div>
	);
}