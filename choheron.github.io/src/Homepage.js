import React from "react";
import LinkBlock from "./components/Linkblock";
import './css/defLayout.css';

export default function Homepage() {
    return (
        <div class="application">
            <div class="content">
                <div class="header">
                    <h1>Thomas Campbell</h1>
                    <p>Software Engineer - Game Designer - Artist - Programmer</p>
                </div>
                <LinkBlock />
                <div class="sectionHeader">Projects</div>
                <div class="bubbleHolder">
                    <div class="projectBubble">
                        <p>UNDER CONSTRUCTION</p>
                    </div>
                    <div class="projectBubble">
                        <p>UNDER CONSTRUCTION PART 2</p>
                    </div>
                </div>
            </div>
        </div>
    );
}