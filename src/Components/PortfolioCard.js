import React from "react";
import {Github} from '@styled-icons/boxicons-logos/Github';
import styled from "styled-components";

const LittleGithub = styled(Github)`
color: #FFA630;

cursor: pointer;
&:hover {
    color: white;
    
}
`;

function PortfolioCard(props) {
    return(
        <div className="card">
            <div className="img-container">
               
            </div>
            <div className="content">
                
                    <li href={props.url}>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                    </li>
                    <LittleGithub 
                            size="40"
                            href={props.github}
                            />
                
            </div>
        </div>
    );
}

export default PortfolioCard;