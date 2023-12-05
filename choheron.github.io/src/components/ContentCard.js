import { Box, Container, Typography, Grow } from "@mui/material";
import React from "react";
import '../css/contentCard.css';

export default function ContentCard(props) {

	const listItems = props.bulletList.map((bullet) =>
		<li>{bullet}</li>
	);

	return (
		<div className="contentCardWrapper">
			<div className="body">
				<div className="descDiv">	
					{props.contentTitle.length > 0 &&
						<div className="header">
							<h2>{ props.contentTitle }</h2>
						</div>
					}
					{props.contentSubTitle.length > 0 &&
						<div className="subHeader">
							<h4>{ props.contentSubTitle }</h4>
						</div>
					}
					<div className="description">
						<p>
							<div dangerouslySetInnerHTML={{ __html: props.contentDescription }}/>
						</p>
						{props.bulletList.length > 0 &&
							<ul>
								{listItems}
							</ul>
						}
					</div>
				</div>
			</div>
		</div>
	)
}