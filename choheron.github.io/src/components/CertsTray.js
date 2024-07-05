import { Box, Container, Typography, Grow } from "@mui/material";
import React from "react";
import '../css/elementBubble.css';;

export default function CertsTray(props) {
	const containerRef = React.useRef(null);

	return (
		<div className="body">
			<Box className="masterContainerCert">
				<Typography variant="h3" className="text">Certifications</Typography>
        <div className="graphContainerCert" ref={containerRef}>
          <div className="certFlexDiv">
            <a href="https://www.credly.com/badges/fd660734-8fa0-4b83-888c-fa516e14c5db/public_url" target="_blank" rel="noreferrer noopener" title="AWS Certified Solutions Architect Associate">
              <img className="certBadge" src={`${process.env.PUBLIC_URL}/images/AWS_ASA_BADGE.png`} alt="AWS Certified Solutions Architect Associate Badge" />
            </a>
          </div>
        </div>
			</Box>
		</div>
	)
}