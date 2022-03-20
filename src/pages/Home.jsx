import React from 'react';
import {
  SiReact, SiJavascript, SiPlatzi, SiGitbook,
} from 'react-icons/si';
import { GiSoccerBall } from 'react-icons/gi';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Button from '../components/Button';
import Presentation from '../containers/Presentation';
import Me from '../images/me.jpg';
import AboutMe from '../containers/AboutMe';
import MyWork from '../containers/MyWork';
import ProjectsContainer from '../containers/ProjectsContainer';
import '../styles/home.css';

function Home() {
  return (
    <div className="App">
      <Header />
      <section className="presentation">
        <Presentation image={Me} text="Hi, my name is " boldText="Frankz">
          <p>I am a student and web developer from Orellana, Ecuador 🇪🇨</p>
        </Presentation>
        <Button text="Go to projects" />
        <AboutMe>
          <p>
            Currently studying software engineering at EPN Ecuador and web development at Platzi 💚.
            I am a fan of React ⚛ and enjoy developing web apps and SPAs with it.
            In my free time, I like to watch soccer and keep up with JS technology.
          </p>
          <div className="technologies">
            <SiReact size={30} color="#35a9ff" />
            <SiJavascript size={30} color="#ffff00" />
            <GiSoccerBall size={30} color="#fff" />
            <SiPlatzi size={30} color="#6aff22" />
            <SiGitbook size={30} color="#aa5f00" />
          </div>
        </AboutMe>
        <MyWork>
          <p>These are some of my personal projects.</p>
          <ProjectsContainer />
        </MyWork>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
