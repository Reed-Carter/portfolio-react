import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        
      let timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover')
      }, 3000)
      
      return () => {
                  clearTimeout(timeoutId)
              }
    }, [])


    const renderPortfolio = (portfolio) => {
      return (
          <div className="images-container">
              {
                  portfolio.map((port, idx) => {
                      return (
                          <div className="image-box" key={idx}>
                              <img 
                              src={port.cover}
                              className="portfolio-image"
                              alt="portfolio" />
                              <div className="content">
                                  <p className="title">{port.title}</p>
                                  <h4 className="description">{port.description}</h4>
                                    {idx === 0 ? (
                                        <button className="btn" onClick={() => window.open(port.git_pages_url)}>
                                            see project
                                        </button>
                                    ) : null}
                                    {idx === 1 ? (
                                        <button className="btn" onClick={() => window.open(port.weather_visualizations_looker_studio)}>
                                            see project
                                        </button>
                                    ) : null}


                                  <button
                                      className="btn"
                                      onClick={() => window.open(port.url)}
                                  >Source Code</button>
                              </div>
                          </div>
                      )
                      
                  })
              }
          </div>
      );
  }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Featured Projects".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;