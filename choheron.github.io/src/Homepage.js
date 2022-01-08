import { Container } from "@mui/material";
import React from "react";
import BEVIProjectBubble from "./components/BEVIProjectBubble";
import LinkBlock from "./components/Linkblock";
import './css/defLayout.css';

export default function Homepage() {
    return (
        <div class="application">
            <div class="content">
                <div class="staticHeader">
                    <h1>Thomas Campbell</h1>
                    <p>Software Engineer - Game Designer - Artist - Programmer - Web Developer</p>
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