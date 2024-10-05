import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButtons from './LogoutButtons'

const Sidebar = () => {
    return (
        <div className='sidebar' >
            <div className='d-flex justify-content-center'>
                <SearchInput />
            </div>
            <div>
                <Conversations />
            </div>
            <div>
                <LogoutButtons />
            </div>
        </div>
    )
}

export default Sidebar