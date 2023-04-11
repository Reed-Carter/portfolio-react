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
        <div className='text-zone-about'>
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
              Hey there! I'm Reed, and I've got a bit of an unconventional story for a data engineer. My journey to this career hasn't been a straight line, but each experience along the way has helped me develop skills and perspectives that I bring to the table as a data professional.            </p>
            <h2 className='text-header'>The Peace Corps: </h2>
            <p className='aboutText' align="LEFT">
              After college, I wasn't sure what direction I wanted to take, so I decided to join the Peace Corps and go on an adventure. I spent two years teaching math and science at a secondary school in Tanzania, and it was an incredible experience. One of my proudest accomplishments during my time there was securing a grant to fund a dormitory for 40 girls so they could access education. I also learned Swahili, which was a challenging but rewarding process that actually reminds me a lot of learning to code!
            </p>
            <h2 className='text-header'>Graduate School and working as a wilderness guide: </h2>
            <p className='aboutText'>
              After Tanzania, I pursued a Master's degree in Public Health in Norway, where I focused on global health issues. For my thesis, I collaborated with the National Center for Disease Control in Georgia to analyze their birth registry and evaluate antenatal care for teenage mothers. Later, I moved to Sitka, Alaska, to work as a wilderness guide for at-risk youth. Both of these experiences taught me the value of being adaptable and creative in finding solutions to complex problems.
            </p>
            <h2 className='text-header'>The Pacific Crest Trail: </h2>
            <p className='aboutText'>
              One of the most challenging and rewarding experiences of my life was hiking the Pacific Crest Trail, which spans over 2,500 miles from Mexico to Canada. The trail took me through deserts, mountains, and forests, and it was a lesson in persistence and resilience. It also gave me an opportunity to disconnect from technology and connect with nature.
            </p>
            <h2 className='text-header'>Coding School: </h2>
            <p className='aboutText'>
              After my trek, I decided to pivot and try something new, so I enrolled in a coding bootcamp to learn data engineering. It was a challenging but exciting experience, and since then, I've developed proficiency in Python, SQL, Pandas, BigQuery, Airflow, Spark, Looker Studio, DBT, data modeling, data management, and data manipulation. I've also worked on several projects, including developing a weather forecasting machine learning model that created a 10-day forecast for various cities around the US, building an ETL pipeline to normalize airline ticket information, and organizing hundreds of thousands of contacts for a startup's CRM system to improve their targetted marketing campaign.
            </p>
            <h2 className='text-header'>Contact me: </h2>
            <p className='aboutText'>
              While my path to data engineering may have been unconventional, each experience has taught me valuable skills and perspectives that I bring to the table as a data professional. I'm always eager to continue learning and applying my skills to new challenges, so if you think I could be a good fit for your team or project, I'd love to chat about it!
            </p>
          </div>
            <div className="portrait-pic">
              <div className='leaflet-container'>
              <img src={selfPortrait} alt='selfPortrait'></img>
              </div>
            </div>
          </div>
        </div>
      <Loader type="pacman" />
    </>
  )
}

export default About