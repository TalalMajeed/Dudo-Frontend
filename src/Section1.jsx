import React, { useState } from 'react';
import './Section1.css';

function Section1() {
  const [activeTab, setActiveTab] = useState('recommended');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="business-container">
      <h1>What's first up for your business?</h1>

      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === 'domains' ? 'active' : ''}`}
          onClick={() => handleTabClick('domains')}
        >
          Domains
        </button>
        <button
          className={`tab-button ${activeTab === 'recommended' ? 'active' : ''}`}
          onClick={() => handleTabClick('recommended')}
        >
          Recommended
        </button>
        <button
          className={`tab-button ${activeTab === 'wordpress-security' ? 'active' : ''}`}
          onClick={() => handleTabClick('wordpress-security')}
        >
          WordPress and Security
        </button>
      </div>

      {/* Content */}
      <div className="content-container">
        {activeTab === 'recommended' && (
          <div className='recomended-section'>
            {/* First Card */}
            <div className="card-large">
              <div className="card-image email-image"></div>
              <div className="card-content">
                <h3>Professional Email Rs199 per user/mo</h3>
                <p>Earn trust from your customers with an email address that matches your domain.</p>
                <button className="cta-button">Get Started</button>
              </div>
            </div>

            {/* Two smaller cards */}
            <div className="small-cards-container">
              <div className="card-small">
                <h3>Websites Rs849/mo</h3>
                <p>Start for free and quickly design a beautiful, mobile-friendly site.</p>
                <button className="cta-button">Create Your Site</button>
              </div>
              <div className="card-small">
                <h3>Web Hosting Rs499/mo</h3>
                <p>Get fast load times and 99.9% uptime guaranteed.</p>
                <button className="cta-button">View Plans and Pricing</button>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder content for other tabs */}
        {activeTab === 'domains' && (
          <div className="card-large-1">
           <div className="card-image email-image-1"></div>
           <div className="card-content-1">
             <h3>Professional Domain Rs199 per user/mo</h3>
             <p>Earn trust from your customers with a domain name that matches your brand.</p>
             <button className="cta-button">Get Started</button>
           </div>
         </div>
        )}
        {activeTab === 'wordpress-security' && (
          <div className="wp">
          <div className="card-large-3-1">
          <div className="card-image email-image-3-1"></div>
          <div className="card-content-3-1">
            <h3>Wordpress</h3>
            <p>Experience lightning-fast WordPress hosting tailored to elevate your website's performance and scalability.</p>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
        <div className="card-large-3">
        <div className="card-image email-image-3"></div>
        <div className="card-content-3">
          <h3>Security</h3>
          <p>Help keep sensitive data secure on your site and boost search ranking with an SSL Certificate</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
      </div>
        )}
      </div>
    </div>
  );
}

export default Section1;
