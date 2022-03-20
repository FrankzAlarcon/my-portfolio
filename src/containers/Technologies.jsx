import React from 'react';
import {
  SiReact, SiJavascript, SiPlatzi, SiGitbook,
} from 'react-icons/si';
import { GiSoccerBall } from 'react-icons/gi';

function Technologies() {
  return (
    <div className="technologies">
      <SiReact size={30} color="#35a9ff" />
      <SiJavascript size={30} color="#ffff00" />
      <GiSoccerBall size={30} color="#fff" />
      <SiPlatzi size={30} color="#6aff22" />
      <SiGitbook size={30} color="#aa5f00" />
    </div>
  );
}

export default Technologies;
