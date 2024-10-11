import { Box, Container, Typography, Grow } from "@mui/material";
import React from "react";
import '../css/elementBubble.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



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

  // WIP: Toggleable drop downs for job descriptions
  // return (
	// 	<Accordion className="body">
  //     <AccordionSummary
  //       className="header"
  //       expandIcon={<ArrowDropDownIcon />}
  //       id={ props.jobTitle + "-header" }
  //     >
  //       <h2>{ props.jobTitle }</h2>
  //       <h4><i>{ props.jobDuration }</i></h4>
  //     </AccordionSummary>
  //     <AccordionDetails>
  //       <h4>{ props.company }</h4><p><i>- { props.location }</i></p>
  //       <p>{ props.jobDescription }</p>
  //       <p><b>Skills:</b><i>{ props.skillsList }</i></p>
  //     </AccordionDetails>
	// 	</Accordion>
	// )
}