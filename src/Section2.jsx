import React from "react";
import "./Section2.css";
import marketing  from './assets/marketing.png';

function Section2() {
  return (
    <div className="container-1">
      {/* Header Section */}
      <header className="header">
        <h1>Grow your brand with Websites + Marketing</h1>
      </header>

      {/* Main Section */}
      <main className="main-content">
        <div className="image-container">
          <img
            src={marketing}
            alt="Website Builder Preview"
          />
        </div>
        <div className="features">
          <div className="feature">
            <h3>Get online fast. No design skills needed.</h3>
            <p>
              Build your site in minutes. Choose from 100s of beautiful,
              mobile-friendly templates with our Website Builder.
            </p>
          </div>
          <div className="feature">
            <h3>Build trust with email that matches your domain.</h3>
            <p>
              Help boost your credibility with customers with free Professional
              Email that's identical to your domain name.
            </p>
          </div>
          <div className="feature">
            <h3>Engage with marketing tools.</h3>
            <p>
              Help your audience find you with built-in SEO and promote your
              business with social media and email marketing tools.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      
    </div>
  );
}

export default Section2;
