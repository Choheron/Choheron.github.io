import { Container, Typography, Paper } from "@mui/material";
import React, { useState } from "react";
import BEVIProjectBubble from "./components/BEVIProjectBubble";
import CodingGraph from "./components/CodingGraph";
import LinkBlock from "./components/Linkblock";
import './css/defLayout.css';

export default function Homepage() {
    const [interests, setInterests] = useState(["Software Engineer", "Game Designer", "Programmer" , "Web Developer", "Artist"]);
    const [currInt, setCurrInt] = useState(interests[0]);

    return (
        <div class="application">
            <div class="content">
                <div class="staticHeader">
                    <Typography variant="subtitle1" className="over">Hello, my name is</Typography>
                    <Typography variant="h1" component="h1">Thomas Campbell</Typography>
                    <Typography variant="subtitle1" component="p">Software Engineer - Game Designer - Programmer - Full Stack Developer - Artist</Typography>
                </div>
                { /* Display links to relevant social medias and websites of mine */ }
                <LinkBlock />
                <CodingGraph />
            </div>
        </div>
    );
}