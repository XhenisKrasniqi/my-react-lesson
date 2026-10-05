import React from 'react'

function ConditionalRendering() {
    const isLoggedIn = false;
    const isAdmin = true;
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    } 

    return (
        <div>
            {
                isAdmin ? (
                    <h1>Welcome, Admin!</h1>
                ) : (
                    <h1>Welcome, User!</h1>
                )
            }
        </div>

    )

}

export default ConditionalRendering