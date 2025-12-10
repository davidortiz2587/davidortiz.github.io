import React, { useState } from 'react';
import { Home, Search } from 'lucide-react';
import WebWhiteboard from './WebWhiteboard';
import GrammyLLM from './GrammyLLM';
import BillSplitter from './BillSplitter';
import SportsTalk from './SportsTalk';
import Resume from './Resume';
import './App.css';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('About Me');

  const sidebarItems = [
    { label: 'About Me', icon: '👤' },
    { label: 'GitHub', icon: '🖥️', url: 'https://github.com/davidortiz2587' },
    { label: 'LinkedIn', icon: '📱', url: 'https://www.linkedin.com/in/david-jack-ortiz/' },
    { label: 'Resume', icon: '📄' }
  ];

  const projectItems = [
    { label: 'Grammy LLM', icon: '🎶' },
    { label: 'Excludle Word Game', icon: '🧩' },
    { label: 'Bill Splitter App', icon: '🧾' },
    { label: 'Web Whiteboard', icon: '📊' },
    { label: 'Sports Talk AI', icon: '🏀' }
  ];

  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="portfolio-container" style={{ backgroundImage: 'url(/jaguar.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="window-wrapper">
        {/* Window Frame */}
        <div className="window-frame">
          {/* Title Bar */}
          <div className="title-bar">
            <div className="window-controls">
              <div className="control-btn red"></div>
              <div className="control-btn yellow"></div>
              <div className="control-btn green"></div>
            </div>
            <div className="title-content">
              <Home size={14} />
              <span className="title-text">Welcome!</span>
            </div>
            <div className="title-spacer"></div>
          </div>

          {/* Toolbar */}
          <div className="toolbar">
            <div className="nav-buttons">
              <button className="nav-btn">
                <div className="nav-icon">←</div>
              </button>
              <button className="nav-btn">
                <div className="nav-icon">→</div>
              </button>
            </div>
            
            <div className="view-controls">
              <button className="view-btn">
                <div className="icon-grid">
                  <div className="grid-cell"></div>
                  <div className="grid-cell"></div>
                  <div className="grid-cell"></div>
                  <div className="grid-cell"></div>
                </div>
              </button>
              <button className="view-btn">
                <div className="icon-list">
                  <div className="list-line"></div>
                  <div className="list-line"></div>
                  <div className="list-line"></div>
                </div>
              </button>
              <button className="view-btn">
                <div className="icon-columns">
                  <div className="column-small"></div>
                  <div className="column-large"></div>
                </div>
              </button>
              <button className="view-btn">
                <div className="icon-box">
                  <div className="box-inner"></div>
                </div>
              </button>
            </div>

            <div className="search-box">
              <Search size={14} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search"
                className="search-input"
              />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="main-content">
            {/* Sidebar */}
            <div className="sidebar">
              <div className="sidebar-content">
                <div className="sidebar-section-title">DEVICES</div>
                <div className="sidebar-items">
                  <div className="sidebar-item">
                    <span>💻</span>
                    <span>Macintosh HD</span>
                  </div>
                  <div className="sidebar-item">
                    <span>💿</span>
                    <span>iDisk</span>
                  </div>
                </div>

                <div className="sidebar-section-title">SECTIONS</div>
                <div className="sidebar-items">
                  {sidebarItems.map((item) => {
                    // If item has a URL, render it as an external link that opens in a new tab.
                    if (item.url) {
                      return (
                        <a
                          key={item.label}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            setActiveSection(item.label);
                            setActiveProject(null);
                          }}
                          className={`sidebar-item-btn link-item ${activeSection === item.label ? 'active' : ''}`}
                        >
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </a>
                      );
                    }

                    return (
                      <button
                        key={item.label}
                        onClick={() => {
                          setActiveSection(item.label);
                          setActiveProject(null);
                        }}
                        className={`sidebar-item-btn ${activeSection === item.label ? 'active' : ''}`}
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="sidebar-section-title">PROJECTS</div>
                <div className="sidebar-items small">
                  {projectItems.map((item) => (
                    <button
                      key={item.label}
                      className={`sidebar-search-item ${activeSection === item.label || activeProject === item.label ? 'active' : ''}`}
                      onClick={() => {
                        if (item.label === 'Web Whiteboard' || item.label === 'Grammy LLM' || item.label === 'Bill Splitter App' || item.label === 'Sports Talk AI') {
                          setActiveProject(item.label);
                          setActiveSection(item.label);
                        } else {
                          setActiveProject(null);
                          setActiveSection(item.label);
                        }
                      }}
                    >
                      <span className="search-item-icon">{item.icon}</span>
                      <span className="search-item-label">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="content-area">
              {activeSection === 'Resume' ? (
                <Resume />
              ) : activeProject === 'Web Whiteboard' ? (
                <WebWhiteboard />
              ) : activeProject === 'Grammy LLM' ? (
                <GrammyLLM />
              ) : activeProject === 'Bill Splitter App' ? (
                <BillSplitter />
              ) : activeProject === 'Sports Talk AI' ? (
                <SportsTalk />
              ) : (
                <div className="about-content">
                  <div className="about-header">
                    <h1 className="about-title">About Me</h1>
                    <div className="title-underline"></div>
                  </div>
                  <div className="intro-card">
                    <h2 className="intro-heading">Hello! 👋</h2>
                    <div className="intro-text">
                      <p>
                        My name is David J. Ortiz and I am a Computer Science student at Syracuse University. 
                        I am interested in all things technology whether it be frontend and backend development, data science, 
                        technology troubleshooting, and exploring new tools and technologies.
                      </p>
                      <p>
                        Most recently, I completed an internship at OceanFirst Bank as a Software Engineer for the company's
                        Data and Engineering team. In addition, I currently work for my schools Information Technology Services
                        where I help Syracuse University solve all their technical needs. Click around to learn more about me and my work!
                      </p>
                    </div>
                  </div>
                  <div className="info-grid">
                    <div className="info-card">
                      <h3 className="card-title">
                        <span>💼</span> Role
                      </h3>
                      <p className="card-content">Senior Computer Science Student</p>
                    </div>
                    <div className="info-card">
                      <h3 className="card-title">
                        <span>📍</span> Status
                      </h3>
                      <p className="card-content">Looking for New Grad roles in tech</p>
                    </div>
                  </div>
                  <div className="skills-card">
                    <h3 className="card-title">
                      <span>🛠️</span> Skills
                    </h3>
                    <div className="skills-tags">
                      {['JavaScript', 'React', 'Python', 'C/C#/C++', 'SQL', 'Tech Troubleshooting', 'Windows Suite', 'APIs', 'Database Systems', 'UI/UX'].map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="quote-card">
                    <p className="quote-text">
                      This portfolio was inspired by the classic Mac OS interface and customly built using React! To see more of my work, click on the project tabs on the left.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div className="status-bar">
            9 items, 15.86 GB available
          </div>
        </div>
      </div>
    </div>
  );
}
