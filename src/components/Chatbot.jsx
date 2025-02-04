

import React, { useState } from 'react';
import './Chatbot.css'; // import the CSS for styling

const Chatbot = () => {
    const [isMinimized, setIsMinimized] = useState(false);

    // Function to toggle between minimized and maximized
    const toggleChat = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div>
            {/* Main Chatbot Container */}
            <div className={`chatbot-container ${isMinimized ? 'minimized' : ''}`}>
                {/* Chatbot Header with minimize button */}
                {!isMinimized && (
                    <div className="chatbot-header">
                        <button className="minimize-btn" onClick={toggleChat}>-</button>
                        
                    </div>
                )}
                {/* Chatbot Body */}
                {!isMinimized && (
                    <div className="chatbot-body">
                        <div className="chat-content">
                         
                        </div>
                      
                        <iframe className='bell-bot'   src="https://console.dialogflow.com/api-client/demo/embedded/21296f99-68f0-4be7-b288-2ae5ed8f8455"></iframe>
    
                    </div>
                )}
            </div>

            {/* Open Chat Button when minimized */}
            {isMinimized && (
                <button className="chatbot-open-btn" onClick={toggleChat}>Chat</button>
            )}
        </div>
    );
};

export default Chatbot;
