import { Container, Typography, Paper } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CodingGraph from "./components/CodingGraph";
import LinkBlock from "./components/Linkblock";
import './css/defLayout.css';

export default function Homepage() {

    return (
        <div class="application">
            <div class="content">
                <div class="landing">
                    <div class="staticHeader">
                        <Typography variant="subtitle1" className="over">Hello, my name is</Typography>
                        <Typography variant="h1" component="h1">Thomas Campbell</Typography>
                        <Typography variant="subtitle1" component="p">Software Engineer - Game Developer - Programmer - Full Stack Developer - Artist</Typography>
                    </div>
                    { /* Display links to relevant social medias and websites of mine */ }
                    <LinkBlock />
                </div>
                <CodingGraph />
            </div>
        </div>
    );
}