import React from 'react';

const SelectHostel = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Select Hostel Page</h2>
        <p style={styles.subtitle}>Coming in Phase 2</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  },
  card: {
    textAlign: 'center',
    padding: '30px 50px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },
  subtitle: {
    marginTop: '10px',
    color: '#64748b',
  },
};

export default SelectHostel;