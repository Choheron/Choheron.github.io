import { Box, Typography } from "@mui/material";
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
            <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=1DC22C1B096A4FD2042A03CCF369EC9E729B222C3A1A67A6819F17F792894238" target="_blank" rel="noreferrer noopener" title="Oracle Cloud Infrastructure 2024 Foundations Associate Certification">
              <img className="certBadge" src={`${process.env.PUBLIC_URL}/images/OCI2024FNDCFA_BADGE.png`} alt="Oracle Cloud Infrastructure 2024 Foundations Associate Certification Badge" />
            </a>
          </div>
        </div>
			</Box>
		</div>
	)
}