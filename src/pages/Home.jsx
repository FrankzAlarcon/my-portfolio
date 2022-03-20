import React, { useContext } from 'react';
import { SiGithub } from 'react-icons/si';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Button from '../components/Button';
import Presentation from '../containers/Presentation';
import Me from '../images/me.jpg';
import AboutMe from '../containers/AboutMe';
import MyWork from '../containers/MyWork';
import ProjectsContainer from '../containers/ProjectsContainer';
import Technologies from '../containers/Technologies';
import Modal from '../containers/Modal';
import { context } from '../context/Context';
import '../styles/home.css';

function Home() {
  const { showModal } = useContext(context);
  return (
    <div className="App">
      {showModal && <Modal />}
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
          <Technologies />
        </AboutMe>
        <MyWork>
          <p>These are some of my personal projects.</p>
          <ProjectsContainer />
        </MyWork>
        <div className="more-info">
          <h2 className="more-info-text">More in</h2>
          <div className="more-info-icons">
            <a href="https://github.com/FrankzAlarcon" aria-label="github" target="_blank" rel="noreferrer"><SiGithub size={25} /></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;