import { Container, Typography, Paper, Icon } from "@mui/material";
import React, { useState, useEffect } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CodingGraph from "./components/CodingGraph";
import WebDevGraph from "./components/WebDevGraph"
import LinkBlock from "./components/Linkblock";
import './css/homepage.css';

// 1.5s ease-in-out 1200ms infinite alternate none running upDown
export default function Homepage() {
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
                <Container className="floatingScroll">
                    <h2>Scroll to see more!</h2>
                    <KeyboardArrowDownRoundedIcon fontSize="medium" />
                </Container>
                <div className="codePage">
                    <CodingGraph />
                    <WebDevGraph />
                </div>
            </div>
        </div>
    );
}