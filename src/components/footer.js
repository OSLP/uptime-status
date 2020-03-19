import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>Powered By <Link to="https://uptimerobot.com/" text="UptimeRobot" /> API | Check every 5 min</p>
        <p>&copy; 2020 <Link to="https://jaw.jp" text="株式会社JAW" /></p>
      </div>
    </div>
  );
}

export default Footer;
