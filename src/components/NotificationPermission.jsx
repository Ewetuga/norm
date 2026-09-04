import React, { useState, useEffect } from 'react';
import './NotificationPermission.css';

const NotificationPermission = () => {
  const [permission, setPermission] = useState('default');
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
      if (Notification.permission === 'default') {
        setShowBanner(true);
      }
    }
  }, []);

  const requestPermission = async () => {
    const result = await Notification.requestPermission();
    setPermission(result);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="notification-banner">
      <div className="notification-banner-content">
        <div className="notification-banner-icon">🔔</div>
        <div className="notification-banner-text">
          <h4>Enable Medication Reminders</h4>
          <p>Get notified when it's time to take your medication</p>
        </div>
        <button className="btn btn-primary btn-small" onClick={requestPermission}>
          Enable Notifications
        </button>
        <button className="btn btn-ghost btn-small" onClick={() => setShowBanner(false)}>
          Later
        </button>
      </div>
    </div>
  );
};

export default NotificationPermission;