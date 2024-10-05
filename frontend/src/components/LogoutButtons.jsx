import React from 'react'
import useLogout from '../hooks/useLogout'

const LogoutButtons = () => {

    const { loading, logout } = useLogout();

    return (
        <div>
            {!loading ? (
                <button
                    onClick={logout}
                    type='button'
                    style={{ cursor: 'pointer' }}>LogoutButtons</button>

            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default LogoutButtons