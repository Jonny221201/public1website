import React from 'react';
import './Styles/SettingsCategories.css';

function Notifications() {
    return(
        <div className = 'notificationsContainer'>
            <h1 className = 'notificationsHeader'>Eslatmalarni Tahrirlash</h1>
            <ul className = 'notificationsUl'>
                <li>Uzbek</li>
                <li>Russian</li>
            </ul>
        </div>
    )
    
}

export default Notifications;