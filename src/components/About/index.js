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
          <p className='aboutText'>
            My name is Reed, and I'm not your typical data engineer. While I have a passion for coding and all things data-related, my journey to this field has been anything but conventional.
          </p>
          <p className='aboutText' align="LEFT">
            I started my career with a degree in Biology from Stockton University, but instead of heading straight into the workforce, I joined the Peace Corps. I spent two years in Tanzania, where I taught math and science at a secondary school and funded a girls' dormitory to give 40 girls access to a secondary school education. Oh, and did I mention that I learned Swahili during my time there? Nailed it.
          </p>
          <p className='aboutText'>
            After my Tanzanian adventure, I moved to Norway and studied for my Masters in Public Health. But the fun didn't stop there! I had the opportunity to travel to the Republic of Georgia to write my thesis, where I worked with their National Center for Disease Control to analyze their birth registry and determine if teen mothers were receiving adequate antenatal care.
          </p>
          <p className='aboutText'>
            But wait, there's more! I then moved to Alaska to become a wilderness guide for at-risk youth. I took teens out on backpacking and kayaking expeditions in SouthEast Alaska, all while working in the behavioral health department of the SouthEast Alaska Regional Health Consortium. And if that wasn't enough, I hiked the Pacific Crest Trail - all 2,500 miles of it - which took me just about five months.
          </p>
          <p className='aboutText'>
            After my trek, I decided to try something new and learn to code. So, I enrolled in a coding bootcamp to learn data engineering. It was the perfect opportunity to use my diverse set of skills and experiences while still changing course.
          </p>
          <p className='aboutText'>
            Now, as a data engineer, I approach each problem with a creative and innovative mindset. I'm always eager to learn new technologies and tools to improve my craft, and my background in biology, public health, and wilderness guiding has given me a unique perspective that sets me apart from the rest.
          </p>
          <p className='aboutText'>
            Thanks for taking the time to get to know me, and I can't wait to bring my unconventional background and diverse skillset to your team as a data engineer.
          </p>
        </div>
          <div className="portrait-pic">
          <div className='leaflet-container'>
          <img src={selfPortrait}></img>
          </div>
          </div>
        </div>
      <Loader type="pacman" />
    </>
  )
}

export default About