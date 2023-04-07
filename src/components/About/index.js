import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import selfPortrait from '../../assets/images/self_portrait.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
        
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
    
    return () => {
                clearTimeout(timeoutId)
            }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <h2 className='text-header'>Introduction: </h2>
          <p className='aboutText'>
            Hello, my name is Reed and I'm a data engineer who took an unconventional path to get here. Though I'm passionate about coding and everything data-related, my journey has been anything but typical.
          </p>
          <h2 className='text-header'>The Peace Corps: </h2>
          <p className='aboutText' align="LEFT">
            After earning a degree in Biology from Stockton University, I decided to embark on an adventure by joining the Peace Corps. I spent two years in Tanzania, where I taught math and science at Kitandililo secondary school and was awarded/managed a grant to fund a dormitory so that 40 high-school aged girls could have access to an education. Immersing myself in the Tanzanian culture also gave me the perfect opportunity to learn Swahili, which has felt very similar to learning to code!
          </p>
          <h2 className='text-header'>Graduate School and working as a wilderness guide: </h2>
          <p className='aboutText'>
            Following my experience in Tanzania, I pursued a Master's degree in Public Health at The Arctic University of Norway - the most northern university in the world! During my degree, my thesis work took me to The Republic of Georgia, where I collaborated with their National Center for Disease Control to analyze their birth registry in order to determine if teenage mothers were recieving adequate antenatal care. I then moved to an island called Sitka in South East Alaska to work for a hospital in the behavioral health department where I was a wilderness guide for at-risk youth. 
          </p>
          <h2 className='text-header'>The Pacific Crest Trail: </h2>
          <p className='aboutText'>
            The real adventure began when I decided to hike the Pacific Crest Trail. This trail spans over 2,500 miles from the border of Mexico to Canada, passing through California, Oregon, and Washington. The trail offered a diverse range of landscapes, including deserts, mountains, and forests, and it took me about five months to complete!
          </p>
          <h2 className='text-header'>Coding School: </h2>
          <p className='aboutText'>
            After my trek, I decided to try something new and learn to code. So, I enrolled in a coding bootcamp to learn data engineering. Since completing the coding bootcamp, I have honed my skills in data engineering, including proficiency in Python, SQL, Pandas, BigQuery, Airflow, Spark, Looker Studio, DBT, data modeling, data management, and data manipulation. I have also developed a solid foundation in statistical analysis, machine learning, and programming languages such as Python and SQL. I have worked on several projects, including the development of a weather forecasting machine learning model that created a 10-day forecast for various cities around the US, an ETL pipeline that normalized airline ticket information using Python and Pandas to create a relational database in BigQuery and even scraped and arranged hundreds of thousands of contacts into neat and organized tables to input into a CRM for targeting marketing purposes for the startup SignedPic.
          </p>
          <h2 className='text-header'>Contact me: </h2>
          <p className='aboutText'>
            Anyway, If you think theres an opportunitty for me to contribute to your team or project in anyway id love to hear about it. Thanks for getting to know me!
          </p>
        </div>
          <div className="portrait-pic">
          <div className='leaflet-container'>
          <img src={selfPortrait} alt='selfPortrait'></img>
          </div>
          </div>
        </div>
      <Loader type="pacman" />
    </>
  )
}

export default About