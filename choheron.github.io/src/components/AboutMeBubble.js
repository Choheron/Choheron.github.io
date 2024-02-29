import { Box, Container, Typography, Grow } from "@mui/material";
import React from "react";
import ContentCard from "./ContentCard";
import '../css/elementBubble.css';

export default function AboutMeBubble(props) {
	const containerRef = React.useRef(null);

	let aboutMeText = `	
	  I'm <b>Thomas Campbell</b>, a <i>DevOps Engineer</i> based in Centreville, VA. With a professional passion for Automation,
		CI/CD, Agile, and all things DevOps, I strive to constantly improve and learn! Finding satisfaction in enhancing my skills,
		I am dedicated to creating functional and practical systems/content.
		<br/><br/>
		In my time as a DevOps Engineer, I have focused on Agile principles with an emphasis on pipeline creation and refactoring 
		using Jenkins, Code Quality Gating with Sonarqube and Prismacloud, Kubernetes cluster administration and upkeep, as well
		as extensive work with AWS including RDS, CFN, EKS, etc. 
		<br/><br/>
		In my free time I keep busy maintaining a homelab, working on coding projects, woodworking, tending to my animals, and 
		playing games.
	`

	let skillsText = `
		
	`

	return (
		<div className="body">
			<Box className="masterContainer">
				<Typography variant="h3" className="text">About Me</Typography>
        <Container className="graphContainer" ref={containerRef}>
          <ContentCard
            contentTitle=""
            contentSubTitle=""
            contentDescription={ aboutMeText }
            bulletList={[]}
          />
          <ContentCard
            contentTitle=""
            contentSubTitle="Skills:"
            contentDescription={ skillsText }
            bulletList={["CI/CD", "Agile", "IaC", "Automation", "Kubernetes", "Helm", "AWS", "Docker", "Containerization", "Full Stack Development",
                          "Java","Python","Javascript","C","C++"]}
          />
        </Container>
			</Box>
		</div>
	)
}