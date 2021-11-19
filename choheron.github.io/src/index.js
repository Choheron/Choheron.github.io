import React from 'react';
import ReactDOM from 'react-dom';
import './linkBlock.css';


// <!-- <a href="https://www.instagram.com/thomas_.campbell/" target="_blank" rel="noreferrer noopener" title="Instagram"><i class='fab fa-instagram'></i></a> COMMENTED OUT UNTIL FUTURE --->
const linkBlock = (
    <div class="container">
        <div class="linkBlock">
          <a href="https://www.linkedin.com/in/thomasrichardcampbell/" target="_blank" rel="noreferrer noopener" title="LinkedIn"><i class='fab fa-linkedin-in'></i></a>
          <a href="https://choheron.artstation.com/" target="_blank" rel="noreferrer noopener" title="ArtStation"><i class='fab fa-artstation'></i></a>
          <a href="https://github.com/Choheron" target="_blank" rel="noreferrer noopener" title="GitHub"><i class='fab fa-github'></i></a>
          <a href="%PUBLIC_URL%/data/Thomas Campbell - Resume.pdf" target="_blank" rel="noreferrer noopener" title="Resume - Updated Nov 2021"><i class="fas fa-file"></i></a>
          <a href="mailto: trc527@gmail.com&subject = Portfolio Contact - [NAME]" target="_blank" rel="noreferrer noopener" title="Email"><i class='fa fa-envelope'></i></a>
        </div>
    </div>
);

ReactDOM.render(linkBlock, document.getElementById('linkBlock'));