import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import myface from '../images/myface.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="experience" className={`${this.props.article === 'experience' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Recent Experience</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p><b>Lead web developer/QA tester/Consult</b> - GOFO, CPO1/CWO, Colonels and Captain (Navy) Professional and Self Development portals of the Defence Learning Network Learning Portals. Assumed responsibility of the monthly development of the General Officers and Flag Officers development. Replicated the system to meet over 300%- member increase.  Developed and tested over 60 webpages monthly with the content providers (Bruce Ewing and Dr. E). Consistently met with the clients to discuss future implementations and finely tuned attention to detail. Also, created instruction manuals on how to access the DLN LP via mobile device for members of the CAF and other LP users.</p>
          <p><b>Mobile Web Developer</b> - Initialized the development of CAF Campus Mobile App with Ionic 4, Cordova 9 and Angular 7.</p>
          <p><b>Mobile/Web Developer</b> - Transitions App - Assisted Marcy Steel (Lead) and Michael Poulin with preparing and inspecting content into a JSON file over 10000 lines long.</p>
          <p><b>Enterprise Web Developer (C# .NET, LINQ) - eILP</b> - Worked with Michael Bennett (Lead). Addressing assigned tasks via Jira. Fixing Bugs, Testing and implementing small changes (production - hotfix).</p>
          <p><b>Enterprise Web Developer (PHP)</b> - ISAT - Learned a lot from Matt Kasper (Supervisor) about complex enterprise web applications, how to debug and address tasks proper to workflow and programming standards, program file structure.</p>
          <p><b>Courseware Developer</b> - Dangerous Goods Certification and Re-Certification Course - Used Saba/Lectora with templates from eLearning Brothers to assist with the development of an online course to train new comers and the current 15000 members </p>

          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Hard Skills</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>HTML, CSS, SASS, JS, TypeScript, PHP, SQL, Angular 6/7, Ionic, XML, JSON, GSON, jQuery, AJAX</p>
          <p>Implementation: Cordova, Apache, Tomcat, XAMMP, NodeJS, Express, VMware, Symfony, Doctrine, Composer</p>
          <p>Workflow: Experience with Git and Gitflow methods for version control. Jira and PlanBox for task management and Confluence for central access of development documentations.</p> 
          <p>Java, C#(ASP.NET, Razer/LINQ), C++</p>
          <p>Photoshop, Lectora, Saba, eLearning - Courseware development.</p>
          <p>Strong design (UI, UX, Manuals), program structure.</p>
          <p>Quality assurance experience debugging, trouble shooting and problem-solving skills.</p>
          <p>Mainframe: Z/OS, ISPF, COBOL, JCL, CICS</p>
           {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Soft Skills</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Honest</p>
          <p>Responsible</p>
          <p>Efficient</p> 
          <p>Productive</p>
          <p>Enthusiastic</p>
          <p>Friendly</p>
          <p>Motivated</p>
          <p>Leadership</p>
          <p>Loyal</p> 
          <p>Creative</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main