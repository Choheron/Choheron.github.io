import { Container, Typography, Paper, Icon } from "@mui/material";
import React, { useState, useEffect } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CodingGraph from "./components/CodingGraph";
import WebDevGraph from "./components/WebDevGraph"
import LinkBlock from "./components/Linkblock";
import ProjectTray from "./components/ProjectTray";
import './css/homepage.css';

// 1.5s ease-in-out 1200ms infinite alternate none running upDown
export default function Homepage() {
    // Keep track of scroll position
    const [scrollPosition, setScrollPosition] = useState(0);
    const [floatOpacity, setFloatOpacity] = useState(100);

    // Scroll handler callback
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        
        let opacity = 100 - (100 * position/window.innerHeight);
        if(opacity < 0) {
            opacity = 0;
        }
        setFloatOpacity(opacity);
    };

    // Add scrollbar event listener with removal on return as cleanup
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Master return statement
    return (
        <div className="application">
            <div className="content">
                <div className="landing">
                    <div className="staticHeader">
                        <Typography variant="subtitle1" className="over">Hello, my name is</Typography>
                        <Typography variant="h1" component="h1">Thomas Campbell</Typography>
                        <Typography variant="subtitle1" component="p">Software Engineer - Full Stack Developer - Data Engineer - Game Developer - Artist</Typography>
                    </div>
                    { /* Display links to relevant social medias and websites of mine */ }
                    <LinkBlock />
                </div>
                <Container className="floatingScroll" style={{ opacity: floatOpacity + "%" }}>
                    <h2>Scroll to see more!</h2>
                    <KeyboardArrowDownRoundedIcon fontSize="medium" />
                </Container>
                <div className="codePage">
                    <CodingGraph />
                    <WebDevGraph />
                </div>
                <div className="projectPage">
                    <ProjectTray />
                </div>
                <br />
            </div>
        </div>
    );
}