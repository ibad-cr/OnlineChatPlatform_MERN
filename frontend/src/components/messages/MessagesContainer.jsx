import React, { useEffect, useState } from 'react'
import Messages from './Messages'
import MessagesInput from './MessagesInput'
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessagesContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        return () => setSelectedConversation();
    }, [setSelectedConversation]);

    return (
        <div className='messages-container'>
            {!selectedConversation ? (<NoChatSelected />) :
                (<>
                    <header className='header'>
                        To: <span>{selectedConversation.fullname}</span>
                    </header>
                    <main>
                        <div>
                            <Messages />
                        </div>
                        <div className='messages-container-inputjsx'>
                            <MessagesInput />
                        </div>
                    </main>
                </>)}
        </div>
    )
}

export default MessagesContainer;

const NoChatSelected = () => {

    const { authUser } = useAuthContext();
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <h1>Welcome {authUser.fullname}</h1>
        </div>
    )
}