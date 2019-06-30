import React from 'react'
import PropTypes from 'prop-types'
import myface from '../images/myface.jpg'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
        <span className="image main"><img src={myface} alt="" /></span>
        </div>
        <div className="content">
            <div className="inner">
                <span><h1>Jesse Bell</h1><h2>Web Dev</h2></span>
                <p>My Interactive Resume</p>
                <p>Kingston, ON K7M 4W5 Canada</p>
                <p>1(613)-449-4000</p>
                <p>Jbell08@student.sl.on.ca</p>
            </div>
        </div>
        <div className="content">
            <div className="inner">
                <h2>PROFILE</h2>
                <p>Wrote my first HTML webpages when I was 11 years old and have been programming since. 
                    I love programming and solving puzzles. Extremely creative, imaginatively driven. 
                    I believe virtually nothing is impossible in this world if you just put your mind to it and maintain 
                    a positive attitude. I recently completed the Computer Programming Analyst Course at St. 
                    Lawrence College in Kingston Ontario. Which greatly accelerated my skills and in-depth understanding of 
                    programming fundamentals. I also was a ISSC member and volunteer for two years. Excited to being part of a team,
                     a career in what I love to do the most: learning and developing</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('experience')}}>Experience</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Hard Skills</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Soft Skills</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Reference</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
