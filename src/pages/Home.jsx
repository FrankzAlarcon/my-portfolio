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
import useOnScroll from '../hooks/useOnScroll';

function Home() {
  const { showModal } = useContext(context);
  const { showFixed } = useOnScroll();

  return (
    <div className="App">
      {showModal && <Modal />}
      <Header showFixed={showFixed} />
      <section className="presentation">
        <Presentation image={Me} text="Hi, my name is " boldText="Frankz">
          <p className="presentation-overview-text">I am a student and web developer from Orellana, Ecuador 🇪🇨</p>
        </Presentation>
        <Button text="Go to projects" href="#my-projects" />
        <AboutMe>
          <div>
            <p className="aboutme-text-description">
              Currently studying software engineering at EPN Ecuador
              and web development at Platzi 💚.
              I am a fan of React ⚛ and enjoy developing web apps and SPAs with it.
              In my free time, I like to watch soccer and keep up with JS technology.
            </p>
            <Technologies />
          </div>
        </AboutMe>
        <MyWork>
          <p className="my-work-description">These are some of my personal projects, each one uses different web technologies</p>
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
