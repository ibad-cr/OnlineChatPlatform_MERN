import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../hooks/useGetConversations';

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    
    return (
        <div className='conversations'>
            <ul className='users-list'>
                {conversations.map((conversation, index) => (
                    <li className='list-group-item'
                        key={conversation._id}
                        conversation={conversation}
                        lastIndex={index === conversations.length - 1}
                    >
                        <Conversation conversation={conversation} lastIndex={index === conversations.length - 1} />
                    </li>
                ))}
                {loading ? <div>Loading...</div> : null}
            </ul>
        </div>
    )
}

export default Conversations;
