import React, { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage';

const MessagesInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    }

    return (
        <div className='message-input'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='input-box'>
                    <input type="text" placeholder='Your message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} />
                    <button className='message-send-button'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default MessagesInput