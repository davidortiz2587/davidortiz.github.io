import React from 'react';

export default function WebWhiteboard() {
  return (
    <div className="about-content">
      <div className="about-header">
        <h1 className="about-title">Web Whiteboard</h1>
        <div className="title-underline"></div>
      </div>

      <div className="intro-card">
        <h2 className="intro-heading">Web Whiteboard</h2>
        <div className="intro-text">
          <p>
            A web-based whiteboard application that allows users to draw on a virtual canvas without having
            to worry about complex tools, setting up an account, or downloading software. Perfect for quick
            sketches, written out math problems, and even annotating images that can be uploaded to the canvas.
          </p>
          <p>
            This project was built using HTML5 Canvas and JavaScript to provide a smooth drawing experience directly in the browser. 
            Users can choose from various brush sizes and colors, and even toggle a grid overlay to help with alignment. Check out a demo video below and access the website 
            <a href="https://davidortiz2587.github.io/web-whiteboard/" target="_blank" rel="noopener noreferrer">here</a>.
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
              
            <source src={`${process.env.PUBLIC_URL}/whiteboard_demo.mov`} type="video/quicktime"/>
            <source src={`${process.env.PUBLIC_URL}/whiteboard_demo.mov`} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  );
}
