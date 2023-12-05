import React from "react";
import '../css/linkBlock.css';

export default function LinkBlock() {
	return (
		<div className="linkBlockWrapper">
			<div className="container">
				<div className="linkBlock">
					<a href="https://www.linkedin.com/in/thomasrichardcampbell/" target="_blank" rel="noreferrer noopener" title="LinkedIn"><i className='fab fa-linkedin-in'></i></a>
					<a href="https://github.com/Choheron" target="_blank" rel="noreferrer noopener" title="GitHub"><i className='fab fa-github'></i></a>
					<a href="./data/Thomas_Campbell_Resume.pdf" target="_blank" rel="noreferrer noopener" title="Resume"><i className="fas fa-file"></i></a>
					<a href="https://choheron.artstation.com/" target="_blank" rel="noreferrer noopener" title="ArtStation"><i className='fab fa-artstation'></i></a>
					<a href="mailto:trc527@gmail.com" target="_blank" rel="noreferrer noopener" title="Email: trc527@gmail.com"><i className='fa fa-envelope'></i></a>
				</div>
			</div>
		</div>
	)
}