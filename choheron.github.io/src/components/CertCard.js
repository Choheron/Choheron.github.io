import { Box, Container, Typography, Grow } from "@mui/material";
import React from "react";
import '../css/elementBubble.css';


// NOT YET IN USE
export default function JobCard(props) {

	return (
		<div className="body">
			<div className="jobDescDiv">
				<div className="header">
					<h2>{ props.jobTitle }</h2>
					<h4><i>{ props.jobDuration }</i></h4>
				</div>
				<div className="subHeader">
					<h4>{ props.company }</h4><p><i>- { props.location }</i></p>
				</div>
				<div className="description">
					<p>{ props.jobDescription }</p>
					<p><b>Skills:</b><i>{ props.skillsList }</i></p>
				</div>
			</div>
		</div>
	)
}