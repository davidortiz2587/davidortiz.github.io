import React from 'react';

export default function SportsTalk() {
  return (
    <div className="about-content">
      <div className="about-header">
        <h1 className="about-title">Sports Talk AI</h1>
        <div className="title-underline"></div>
      </div>

      <div className="intro-card">
        <h2 className="intro-heading">"I want to talk about sports."</h2>
        <div className="intro-text">
          <p>
            Sports Talk AI is an interactive web application that allows users to select a sport and learn more about current happenings through an AI-powered interface.
            Currently, users can pick from American Football, Basketball, and Hockey. The app works by fetching the selection and asking Google Gemini AI to provide relevant 
            information about recent news, scores, and updates in the chosen sport. The user will then be presented with a concise summary of the latest developments, 
            making it easy to learn topics in sports that they can talk about with friends.
          </p>
          <p>
            This website was a "vibe coded" project that I built using the Google AI Studio. I focused on prompt engineering through the Google Provided interface and used 
            Google Gemini API to fetch and summarize the information. I was able to style everything the way I wanted using React and CSS after being provided with the base code from the AI Studio.
            Scroll down to see a demo video of the app in action and click here to access it yourself!
          </p>
        </div>
      </div>
        <div className="demo-video">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="whiteboard-demo"
            controls
            onError={(e) => console.error('Video error:', e)}>
              
            <source src={`${process.env.PUBLIC_URL}/sports_demo.mov`} type="video/quicktime"/>
            <source src={`${process.env.PUBLIC_URL}/sports_demo.mov`} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  );
}
