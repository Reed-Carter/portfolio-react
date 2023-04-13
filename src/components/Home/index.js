import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-r.png';
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './logo'
import Loader from 'react-loaders';
import ResumeFile from '../../assets/resume/Reed_Carter_Resume.pdf';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['e', 'e','d', ' ', 'C','a','r','t','e','r', ',']
  const jobArray = ['A', ' ','D','a','t','a',' ','E','n','g','i','n','e','e','r','.']

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
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>e</span>
        <span className={`${letterClass} _13`}>y</span>
        <span className={`${letterClass} _13`}>!</span>
        <br />
        <span className={`${letterClass} _16`}>I</span>
        <span className={`${letterClass} _17`}>'</span>
        <span className={`${letterClass} _18`}>m</span>
        <img src={LogoTitle} alt='developer' />
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15} />
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={20} />
        </h1>
        <h2>Data Engineer / Data Scientist</h2>
        <Link to="portfolio" className='flat-button'>MY PROJECTS</Link>
        <Link to="about" className='flat-button'>ABOUT ME</Link>
        <Link to="contact" className='flat-button'>CONTACT ME</Link>
        <Link to={{ pathname: ResumeFile }} target="_blank" className='flat-button' rel="noopener noreferrer" download>DOWNLOAD RESUME</Link>
      </div>
      <Logo /> 
    </div>
    <Loader type='pacman' />
  </>
  )

}

export default Home