import React from 'react';
import '../index.css';
import '../sass/main.scss';
import '../main';

function Chatbot() {
    return(
        <df-messenger
        chat-icon="https://www.breakthroughs.com/sites/default/files/screen_shot_2020-02-20_at_1.06.10_pm.png"
        intent="WELCOME"
        chat-title="NIRI"
        agent-id="995289b0-a227-41c3-9a9f-e5ee1db71677"
        language-code="en"
      ></df-messenger>
      
    )
}

export default Chatbot;