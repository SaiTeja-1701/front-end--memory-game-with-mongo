import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();  // Hook to navigate programmatically
  
  const StartScreen = ({ onStartQuiz, onAdminLogin }) => {
    const [username, setUsername] = useState('');
    const [adminId, setAdminId] = useState('');
    const [adminPassword, setAdminPassword] = useState('');

    const handlePlayGame = () => {
      const username = prompt("Please enter your username:");
      onStartQuiz(username);
      navigate('/memorygame');  // Navigate to the memory game when the button is clicked
    };

    return (
      <div>
        <h2>Home</h2>
        <button onClick={handlePlayGame}>Start Game</button> {/* Button to start the game */}
      </div>
    );
  };

  return (
    <StartScreen 
      onStartQuiz={(username) => console.log('Quiz started for', username)} 
      onAdminLogin={() => console.log('Admin login')} 
    />
  );
}
