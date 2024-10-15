// components/Sidebar.tsx
import React from 'react';
import styles from '@/style/Sidebar.module.css'; // Import CSS module for styling

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
