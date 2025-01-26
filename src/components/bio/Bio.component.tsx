import React from 'react';

import './Bio.styles.scss'
import {Link} from "react-router-dom";

const Bio = () => (
  <div>
    <div className="bio-content">
      <section className="bio-section">
        <h1 className={'header'}>Professional</h1>
        <p>
          I’m a passionate software engineer and technical lead with over 11 years of experience
          designing and building high-performance web applications. My expertise lies in solving
          challenging frontend usability problems using React and Redux, while also leveraging
          deep backend knowledge to deliver scalable, reliable solutions. I love crafting
          technology that empowers users and makes their lives easier.
        </p>
        <p>
          Throughout my career, I’ve worked on a wide range of projects, from creating seamless
          enterprise workflows at Block Inc. (Square) to developing mission-critical applications
          for the Department of Defense. I thrive on collaboration and take pride in building
          tools that leave a meaningful impact.
        </p>
      </section>

      <section className="bio-section">
        <h1 className={'header'}>Personal</h1>
        <p>
          <strong>Snowboarding 🏂</strong> Over the past 5 years, snowboarding has become one of my
          absolutely favorite hobbies. Whether it’s at my local resort or traveling to Breckenridge,
          I try to get out on the slopes whenever I can. My current ride of choice is
          the <a href={'https://thegoodride.com/snowboard-reviews/arbor-bryan-iguchi-pro-camber-2017-2024-snowboard-review/#gsc.tab=0'}>
            Bryan Iguchi Pro Camber Arbor board.</a>
        </p>
        <p>
          <strong>Sand Volleyball 🏐</strong> For nearly a decade, I’ve played sand volleyball with
          various teams and a ton of different people. The mix of teamwork, strategy, and physical
          challenge make this one of my favorite sports.
        </p>
        <p>
          <strong>Reading 📚</strong> I’m an avid reader and especially enjoy diving into the works
          of <a href={'https://www.brandonsanderson.com/'}>Brandon Sanderson</a>. Exploring the Cosmere
          universe is one of my favorite pastimes – from the intricate magic system of <em>Mistborn</em> to
          the epic storytelling of <em>The Stormlight Archive</em>. I love discussing theories and
          uncovering connections between the books with other fans.
        </p>
        <p>
          <strong>Gaming 🎲</strong> Tabletop and board games are another passion of mine. I’m
          currently part of a Star Wars Force and Destiny campaign, and my favorite board games include
          <em> Eclipse</em>, <em>Betrayal at the House on the Hill</em>, and <em>Mysterium</em>.
        </p>
        <p>
          <strong>Laser Engraving </strong> I enjoy creating intricate designs with
          my <a href={'https://www.xtool.com/products/xtool-s1-laser-cutter'}>xTool S1</a> laser engraver.
          It’s a fun way to blend technology and creativity to make some great
          gifts. <Link to={'/laser'}>See some of my projects!</Link>
        </p>
      </section>
    </div>
  </div>
);

export default Bio;