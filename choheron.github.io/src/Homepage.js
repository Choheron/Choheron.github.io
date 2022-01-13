import { Container, Typography } from "@mui/material";
import React from "react";
import BEVIProjectBubble from "./components/BEVIProjectBubble";
import LinkBlock from "./components/Linkblock";
import './css/defLayout.css';

export default function Homepage() {
    return (
        <div class="application">
            <div class="content">
                <div class="staticHeader">
                    <Typography variant="h1" component="h1">Thomas Campbell</Typography>
                    <Typography variant="subtitle1" component="p">Software Engineer - Game Designer - Programmer - Web Developer - Artist</Typography>
                </div>
                <LinkBlock />
                <div class="navHeader">Projects</div>
                <Container class="menuContainer">
                    <BEVIProjectBubble />
                    <div class="projectBubble">
                        <p>UNDER CONSTRUCTION PART 2</p>
                    </div>
                </Container>
            </div>
        </div>
    );
}