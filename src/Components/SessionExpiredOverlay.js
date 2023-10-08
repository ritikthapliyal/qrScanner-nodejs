import React from 'react'
import SessionExpired from './SessionExpired'
import reactDom from 'react-dom'

function SessionExpiredOverlay({setShowSessionExpired}) {
    
    const portal = document.getElementById('portal')
    
    return reactDom.createPortal(<SessionExpired setShowSessionExpired={setShowSessionExpired}/>,portal)
}

export default SessionExpiredOverlay