import React from 'react';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/Jake-Jake0037" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
    <div>
      <a href="https://www.instagram.com/jakejakelml123_official/?hl=es" target="_blank" rel="noreferrer"><BsInstagram /></a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/jasson-cu-614672233/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
    </div>
  </div>
);

export default SocialMedia;
