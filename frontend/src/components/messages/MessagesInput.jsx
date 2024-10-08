import React, { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';
import { RiSendPlaneLine } from 'react-icons/ri';
import { PiImage } from "react-icons/pi";
import { useAuthContext } from '../../context/AuthContext';

const MessagesInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();
    const { authUser } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    }

    return (
        <div className='message-input'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='user-image'>
                    <img src={authUser.profilePic} alt="" />
                </div>
                <div className='input-box'>
                    <textarea
                        className='textarea'
                        placeholder='Type a message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={1}
                    />
                    <div className='message-send-button'>
                        <button type='button' className='send-image-button'>
                            <PiImage className='send-image-icon' />
                        </button>
                        <button type='submit' className='send-button'> {/* Burada type 'submit' olmalıdır */}
                            <RiSendPlaneLine className='send-icon' />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default MessagesInput;
