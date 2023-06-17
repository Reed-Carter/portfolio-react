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
            <p className='aboutText'>
            <h2 className='text-header'>Introduction: </h2>
            I'm a data engineer with a unique background that sets me apart from other candidates. I bring new perspective and real life experience to the field and can apply it to all my endeavors and projects.<br></br>
            <h2 className='text-header'>Master's in Public Health: </h2>
            During my Master's program in Public Health at The University of Tromsø, I had the opportunity to work alongside the Republic of Georgia's Center for Disease Control. This experience enabled me to develop expertise in the analysis of intricate health data, identifying noteworthy trends and insights for the Georgian healhcare system. By combining my skills in data engineering with my understanding of public health and statistical analysis I bring a unique perspective and the ability to deliver meaningful outcomes. See my research <a href="https://munin.uit.no/handle/10037/18794" target="_blank" rel="noopener noreferrer" style={{color: '#ffd700'}}>here</a>!<br></br>

            <h2 className='text-header'>Data Stack Academy in partnership with Epicodus: </h2>
            During an recent  6 month coding boot camp, I have furthered my proficiency in a wide range of tools and technologies, including Python, SQL, Pandas, BigQuery, Airflow, Spark, Looker Studio, DBT, data modeling, and data management. I am also experienced with Looker Studio allowing me to create compelling and insightful visualizations that bring data to life using interactive dashboards, enabling both layman and company stakeholders to make informed decisions.<br></br>

            <h2 className='text-header'>Working at the startup SignedPic: </h2>
            Additionally, my experience in organizing vast amounts of data for a startup's CRM system has honed my attention to detail and problem-solving skills. I am a continuous learner, and always seeking new challenges and opportunities to apply my expertise. I believe everything is 'figureoutable' <br></br><br></br>

            View my portfolio page to see some recent work.

            
            
            </p>
              {/* Hey there! I'm Reed, and I've got a bit of an unconventional story for a data engineer. My journey to this career hasn't been a straight line, but each experience along the way has helped me develop skills and perspectives that I bring to the table as a data professional.            </p>
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
            </p> */}
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