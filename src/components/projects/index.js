import { useEffect, useState } from 'react'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders';
import weatherVisualizationImage from '../../assets/images/weather_visualization.png'
import weatherForecaster from '../../assets/images/weather_forecaster.png'
import globalGasPrice from '../../assets/images/world_gas_price_gif.gif'
import globalEmissionsETL from '../../assets/images/ETL_pipeline.png'
import airportCode from '../../assets/images/airport_code.png'
import WebpagePic from '../../assets/images/webpage_cropped.png'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
        
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
    
    return () => {
                clearTimeout(timeoutId)
            }
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't','s']}
              idx={15}
            />
          </h1>
          <div className="project-list">
          <div className="project">
              <h2>Weather Visualizations</h2>
                <img src={weatherVisualizationImage} alt="weather_visualization" />
                <p span className='text-description'>Webscraping ETL using data from the US National Weather Servicee</p>
              <div className="button-container">
                <button className="flat-button">
                  <a href="https://lookerstudio.google.com/reporting/186edd53-7b48-4350-8921-8c654fdfc5ae" target="_blank" rel="noopener noreferrer">try it</a>
                </button>
                <button className="flat-button">
                  <a href="https://github.com/Reed-Carter/team-week3" target="_blank" rel="noopener noreferrer">source code</a>
                </button>
              </div>
            </div>
            <div className="project">
              <h2>Airline Relational Database Design</h2>
                <img src={airportCode} alt="Project 1" />
                <p span className='text-description'>ETL pipeline was developed in order to normalize airline ticket information into facts and dimension tables and loads the tables into a BigQuery dataset</p>
                <button className="flat-button">
                  <a href="https://github.com/Reed-Carter/Airport_Data_Model" target="_blank" rel="noopener noreferrer">source code</a>
                </button>
            </div>
            <div className="project">
              <h2>Machine Learning Weather Forecaster</h2>
              <img src={weatherForecaster} alt="weather_visualization" />
              <p span className='text-description'>Uses machine learning to predict the weather automated with airflow</p>
              <div className="button-container">
                <button className="flat-button">
                  <a href="https://github.com/Reed-Carter/Weather_Forcaster" target="_blank" rel="noopener noreferrer">source code</a>
                </button>
              </div>
            </div>
            <div className="project">
              <h2>Global Emissions ETL</h2>
                <img src={globalEmissionsETL} alt="Project 1" />
                <p span className='text-description'>ETL pipeline that downloads CSV's, transforms the data, uploads the data to BigQuery and creates visualizations in looker studio</p>
                <button className="flat-button">
                  <a href="https://github.com/Reed-Carter/Emissions-by-Country" target="_blank" rel="noopener noreferrer">source code</a>
                </button>
            </div>
            <div className="project">
              <h2>Global Cost of Living</h2>
                <img src={globalGasPrice} alt="Project 1" />
                <p span className='text-description'>A team project where we used Python to analyze global cost of living using various metrics</p>
                <button className="flat-button">
                  <a href="https://github.com/Reed-Carter/Emissions-by-Country" target="_blank" rel="noopener noreferrer">source code</a>
                </button>
            </div>
            <div className="project">
              <h2>This Webpage</h2>
                <img src={WebpagePic} alt="this webpage pic" />
                <p span className='text-description'>A webpage created using javascript to allow people to get to know me a bit better and see what kind of data engineering projects ive done</p>
                <button className="flat-button">
                  <a href="https://github.com/Reed-Carter/portfolio-react" target="_blank" rel="noopener noreferrer">source code</a>
                </button>
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Projects