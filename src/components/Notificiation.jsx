import React, { useState } from 'react'

function Notificiation() {
    const [notificiation ,setNotificiation] = useState(0)
  return (
    <div>
        <button onClick={() => setNotificiation(notificiation + 1)}>Add notificiation</button>
        <p>{notificiation === 0 ? "No notifications" : `You have ${notificiation} new notifications`}</p>
    </div>
  )
}

export default Notificiation