// Notification.js
import React, { useState, useEffect } from "react";

const Notification = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000); // Hide the notification after 3 seconds (adjust as needed)

    return () => clearTimeout(timer);
  });

  return isVisible ? (
    <div className="notification">
      <p className="notify ps-5" style={{ color: "#31ab00" }}>
        {message}
      </p>
    </div>
  ) : null;
};

export default Notification;
