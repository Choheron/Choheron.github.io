import { Box, Container, Typography, Grow } from "@mui/material";
import React from "react";
import '../css/elementBubble.css';

export default function JobCard(props) {

	return (
		<div className="body">
			<div className="experienceDiv">
				<div className="header">
					<h2>{ props.jobTitle }</h2>
					<h4><i>{ props.jobDuration }</i></h4>
				</div>
				<div className="subHeader">
					<h4>{ props.company }</h4>
				</div>
				<div className="description">
					<p>{ props.jobDescription }</p>
					<p><b>Skills:</b><i>{ props.skillsList }</i></p>
				</div>
			</div>
		</div>
	)
}