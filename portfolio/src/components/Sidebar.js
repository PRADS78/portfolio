import React, {useState} from 'react';
import AvatarBox from './AvatarBox';
import leetcode from "../assets/images/Social/leetcode.svg";
import github from "../assets/images/Social/github.svg";
import linkedin from "../assets/images/Social/linkedin.png";

const Sidebar = () => {
  const [isContact,setContact] = useState(false);

  return (
    <aside className={`sidebar ${isContact?"active":""}`} data-sidebar>
    <AvatarBox handleShowContact={setContact} isContact={isContact}/>
    <div className="sidebar-info_more">
      <div className="separator"></div>
      <ul className="contacts-list">
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Email</p>
            <a className="contact-link">gpradeepk6@gmail.com</a>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Phone</p>
            <a className="contact-link">+91-7338991624</a>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Location</p>
            <address>Chennai, India</address>
          </div>
        </li>
      </ul>
      <div className="separator"></div>
      <ul className="social-list">
        <li className="social-item">
          <a href="https://github.com/PRADS78" target="blank" className="social-link">
            <img src={github} style={{width:"35px", height:"35px"}}/>
          </a>
        </li>
        <li className="social-item">
          <a href="https://leetcode.com/u/prads_78/" target="blank" className="social-link">
            <img src={leetcode} style={{width:"30px", height:"32px"}}/>
          </a>
        </li>
        <li className="social-item">
          <a href="https://www.linkedin.com/in/pradeepkumar-g/" target="blank" className="social-link">
            <img src={linkedin} style={{width:"35px", height:"35px"}}/>
          </a>
        </li>
      </ul>
    </div>
  </aside>
  )
};

export default Sidebar;
