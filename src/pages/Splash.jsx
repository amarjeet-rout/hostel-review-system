import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/select-hostel');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>🏢</div>
        <h1 style={styles.title}>Hostel Review System</h1>
        <p style={styles.subtitle}>Loading application...</p>
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
    padding: '40px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },
  logo: {
    fontSize: '64px',
    marginBottom: '16px',
  },
  title: {
    fontSize: '28px',
    color: '#1e293b',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#64748b',
  },
};

export default Splash;