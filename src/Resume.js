import React from 'react';
import './App.css';

export default function Resume() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '70vh', display: 'flex' }}>
      <iframe
        src="/David J. Ortiz - Resume.pdf#toolbar=0&navpanes=0"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="David J. Ortiz Resume"
      />
    </div>
  );
}
