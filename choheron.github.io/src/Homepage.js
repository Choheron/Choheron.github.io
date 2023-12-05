import { Container, Typography, Grow } from "@mui/material";
import React, { useState, useEffect } from "react";
import CodingGraph from "./components/CodingGraph";
import AboutMeBubble from "./components/AboutMeBubble";
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
						<Grow in={true} {... (true ? { timeout: 2000 } : {})} >
							<Typography variant="subtitle1" component="p">DevOps Engineer - Full Stack Dev - Software Engineer - Homelab Enthusiast - Game Designer</Typography>
						</Grow>
					</div>
					{ /* Display links to relevant social medias and websites of mine */}
					<LinkBlock />
				</div>
				<div className="pageBlock">
					<WorkExperienceBubble
						fadeinTimeout='3000'
					/>
					<AboutMeBubble 
						fadeinTimeout='3500'
					/>
					<ProjectTray 
						fadeinTimeout='4000'
					/>
				</div>
				<br />
			</div>
		</div>
	);
}