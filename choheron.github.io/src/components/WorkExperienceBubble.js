import { Box, Container, Typography } from "@mui/material";
import React from "react";
import JobCard from "./JobCard";
import '../css/elementBubble.css';

export default function WorkExperienceBubble(props) {
	const containerRef = React.useRef(null);

	return (
		<div className="body">
			<Box className="masterContainer">
				<Typography variant="h3" className="text">Work Experience</Typography>
        <Container className="graphContainer" ref={containerRef}>
        <JobCard
            jobTitle="Site Reliability Developer"
            jobDuration="October 2024 - Present"
            company="Oracle"
            location="Hybrid - Austin, TX"
            jobDescription=""
            skillsList="CI/CD, Agile, IaC, Terraform, Kuberenetes, OCI"
          />
          <JobCard
            jobTitle="DevOps Engineer"
            jobDuration="December 2022 - September 2024"
            company="INADEV"
            location="Remote, USA"
            jobDescription="Devops Engineer focusing on Governmental Contracts. Working with cutting edge technologies to facilitate proper CI/CD and Agile Design Principals. 
              Implements, Develops, and maintains CI/CD pipelines using Jenkins, Docker, and Kubernetes/Helm to automate the build, test, and deployment processes.
              Participates in daily stand-ups and on call rotations to swiftly address and resolve incidents with minimal downtime."
            skillsList="CI/CD, Agile, IaC, Automation, Jenkins, Code Quality Platforms, Docker, Kubernetes, Helm, AWS (EC2,EKS,S3,SQS,RDS,Lambda,etc.)"
          />
          <JobCard
            jobTitle="Full Stack Dev/DevOps Intern"
            jobDuration="Jun 2022 - Dec 2022"
            company="INADEV"
            location="McLean, VA"
            jobDescription="Deveoped a deduplication script using Python, utilizing libraries such as numpy and recordlinkage. Worked to optimize algorithms and adapt to changing project requirements. 
              Trained in DevOps to company standards in Terraform, AWS, Docker, Kubernetes, etc. to prepare for a transition to a full time DevOps Engineer."
            skillsList="DevOps, Terraform, AWS, Docker, Python, Data Engineering, REST APIs, Full Stack Web Development"
          />
          {/* <JobCard
            jobTitle="Undergraduate Research Assistant"
            jobDuration="Nov 2021 - May 2022"
            company="GMU/Commonwealth Cyber Institute"
            location="Fairfax, VA"
            jobDescription="Undergraduate position as a research assistant for the MVSF (Mason Vulnerability Scoring Framework) project at GMU doing 
              Full Stack Web Dev and assisting in writing and reviewing scientific papers for the project. Frontend build in ReactJS with the backend 
              dockerized running on Python and Flask."
            skillsList="Full Stack Web Development, Python, Javascript, ReactJS, Flask, Docker"
          /> */}
        </Container>
			</Box>
		</div>
	)
}