import React from 'react';

export default function BillSplitter() {
  return (
    <div className="about-content">
      <div className="about-header">
        <h1 className="about-title">Bill Splitter</h1>
        <div className="title-underline"></div>
      </div>

      <div className="intro-card">
        <h2 className="intro-heading">Bill Splitter</h2>
        <div className="intro-text">
          <p>
            A simple web application that helps users split bills among a group. 
            Users can input the persons name and the amount they owe, and the app will calculate the total amount each person needs to pay, including tax and tip.
            If a person paid for two items, their name can be added twice and the prices will be added up at the end. 
            And if two or more people split an item, their names can be entered seperated by a comma and the program will split the price accordingly. 
          </p>
          <p>
            This project was built using HTML, CSS, and JavaScript to provide a user-friendly interface for splitting bills. 
            Scroll down to see a video demo and access the website <a href="https://davidortiz2587.github.io/bill-splitter/" target="_blank" rel="noopener noreferrer">here</a>.
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
              
            <source src={`${process.env.PUBLIC_URL}/bill_demo.mov`} type="video/quicktime"/>
            <source src={`${process.env.PUBLIC_URL}/bill_demo.mov`} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  );
}
