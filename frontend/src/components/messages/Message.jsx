import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {

    const { authUser, setAuthUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderID === authUser._id;
    const chatClassName = fromMe ? 'justify-content-end' : 'justify-content-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-info-subtle' : 'bg-light-subtle';
    const formattedTime = extractTime(message.createdAt);

    const shakeClass = message ? "animate__animated animate__fadeInRight" : "";

    return (
        <>
            <div className={`message ${chatClassName} ${shakeClass}`}>
                <div className={`user-message ${bubbleBgColor} ${shakeClass} `}>
                    <span>{message.message}</span>
                </div>
                <div className='message-user-logo'>
                    <img src={profilePic} alt="" />
                </div>
                <div>
                    {formattedTime}
                </div>
            </div>
        </>
    )
}

export default Message

export function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
}

function padZero(number) {
    return number.toString().padStart(2, "0");
}