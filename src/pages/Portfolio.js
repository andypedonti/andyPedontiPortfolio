import React, {Component} from "react";
import portfoliothings from "../portfolioInfo.json";
import Wrapper from "../Components/Wrapper";
import PortfolioCard from "../Components/PortfolioCard";

class Portfolio extends Component {
    state = {
        portfoliothings
    };
render() {
    return(
        
        <Wrapper>
            {this.state.portfoliothings.map(portfoliostuff => (
                <PortfolioCard
                id={portfoliostuff.id} 
                key={portfoliostuff.id}
                title={portfoliostuff.title}
                image={portfoliostuff.image}
                url={portfoliostuff.url}
                description={portfoliostuff.description}
                github={portfoliostuff.github}

                />
            ))}
        </Wrapper>


    );
}
}
export default Portfolio;