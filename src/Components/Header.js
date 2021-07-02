import React from "react";
import { Link, withRouter} from "react-router-dom";
import {Github} from '@styled-icons/boxicons-logos/Github';
import { EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline';
import {LinkedinWithCircle} from '@styled-icons/entypo-social/LinkedinWithCircle';
import styled from "styled-components";

const Linkedin = styled(LinkedinWithCircle)`
color: #C42021;
cursor: pointer;
&:hover {
    color: white;
    
}
`;

const LittleGithub = styled(Github)`
color: #FFA630;

cursor: pointer;
&:hover {
    color: white;
    
}
`;

const Email = styled(EmailOutline)`
color: #329F5B;
cursor: pointer;
&:hover {
    color: white;
    
}
`;

function Header(props) {
    return(
        <div className="navigation">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        Andy Pedonti
                    </Link>
                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li class={`nav-item ${
                                props.location.pathname==="/" ? "active" : ""
                            }`}
                            >
                                <Link class="nav-link" to="/">
                                    Home
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                class={`nav-item ${
                                    props.location.pathname==="portfolio" ? "active" : ""
                                }`}
                                >
                                    <Link class="nav-link" to="/portfolio">
                                        Portfolio
                                    </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                            <Email 
                            size="40" 
                            onClick={event => window.location.href="mailto:andy.pedonti@gmail.com"}
                            />
                            <LittleGithub 
                            size="40"
                            onClick={event => window.location.href="https://github.com/andypedonti"}
                            />
                            <Linkedin
                            size="35" 
                            onClick={event => window.location.href="https://www.linkedin.com/in/andy-pedonti/"}
                            />
                    </div>
        
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Header);