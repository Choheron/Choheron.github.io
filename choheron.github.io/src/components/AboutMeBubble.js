import { Box, Container, Typography, Grow } from "@mui/material";
import React from "react";
import ContentCard from "./ContentCard";
import '../css/elementBubble.css';

export default function AboutMeBubble(props) {
	const containerRef = React.useRef(null);

	let aboutMeText = `	
	  I'm <b>Thomas Campbell</b>, a <i>DevOps Engineer</i> based in Centreville, VA. With a professional passion for Creation, Automation,
		CI/CD, Agile, and all things DevOps, I strive to constantly improve and learn! Finding satisfaction in enhancing my skills,
		I am dedicated to creating functional, practical, and scaleable systems/content.
		<br/><br/>
		In my time as a DevOps Engineer, I have focused on Agile principles with an emphasis on pipeline creation and refactoring 
		using Jenkins, Code Quality Gating, Kubernetes administration and upkeep, as well as extensive work with AWS including RDS, CFN, EKS, etc. 
		<br/><br/>
		In my free time I keep busy maintaining a homelab, climbing, coding, woodworking, tending to my animals, and 
		playing games.
    <br/><br/>
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
          <div className="horizFlexDiv">
            <ContentCard
              contentTitle=""
              contentSubTitle="Skills:"
              contentDescription=""
              bulletList={["CI/CD", "Agile", "IaC", "Automation", "Kubernetes", "Helm", "AWS", "Docker", "Containerization", "Full Stack Development",
                            "Java","Python","Javascript"]}
            />
            <ContentCard
              contentTitle=""
              contentSubTitle="Favorite Books:"
              contentDescription=""
              bulletList={["Dune", "Neuromancer", "Do Androids Dream of Electric Sheep", "The Pheonix Project", "To Kill a Mockingbird"]}
            />
            <ContentCard
              contentTitle=""
              contentSubTitle="Favorite Movies:"
              contentDescription=""
              bulletList={["Blade Runner (1982)", "Dune (Part 1)", "Dune (Part 2)", "Alien", "Interstellar", "Goodfellas", "The Secret World of Arrietty"]}
            />
          </div>
        </Container>
			</Box>
		</div>
	)
}