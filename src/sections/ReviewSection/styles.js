const getStyles = () => {
  return {
    page: {
      minHeight: '100vh',
      background:
        'radial-gradient(circle at top left, #fff1eb 0%, #ace0f9 100%)',
      padding: '60px 0 80px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '"DM Sans", "Segoe UI", sans-serif'
    },
    blob1: {
      position: 'absolute',
      top: '-8%',
      right: '-4%',
      width: 420,
      height: 420,
      background: 'rgba(255,75,43,0.12)',
      borderRadius: '50%',
      filter: 'blur(55px)',
      zIndex: 0
    },
    blob2: {
      position: 'absolute',
      bottom: '8%',
      left: '-6%',
      width: 320,
      height: 320,
      background: 'rgba(78,84,200,0.10)',
      borderRadius: '50%',
      filter: 'blur(45px)',
      zIndex: 0
    },
    heroLabel: {
      display: 'inline-block',
      background: 'linear-gradient(90deg,#ff416c,#ff4b2b)',
      color: '#fff',
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      padding: '5px 18px',
      borderRadius: '50px',
      marginBottom: '18px'
    },
    heroTitle: {
      fontWeight: 900,
      fontSize: 'clamp(2rem, 5vw, 3.2rem)',
      color: '#0d1b2a',
      lineHeight: 1.1,
      marginBottom: '14px',
      fontFamily: '"DM Serif Display", Georgia, serif'
    },
    heroSub: {
      fontSize: '1.05rem',
      color: '#445',
      maxWidth: 580,
      margin: '0 auto',
      lineHeight: 1.65
    },
    // ── Form card
    formPanel: {
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(24px)',
      borderRadius: '32px',
      padding: '48px',
      boxShadow: '0 24px 64px rgba(0,0,0,0.08)',
      border: '1px solid rgba(255,255,255,0.6)',
      maxWidth: '800px',
      margin: '0 auto',
      '@media (max-width:600px)': { padding: '32px 24px', borderRadius: '24px' }
    },
    sectionTitle: {
      fontWeight: 800,
      fontSize: '1.4rem',
      color: '#0d1b2a',
      marginBottom: '24px',
      marginTop: '32px',
      fontFamily: '"DM Serif Display", Georgia, serif',
      borderBottom: '2px solid #e0e7ef',
      paddingBottom: '8px',
      display: 'inline-block'
    },
    btnSubmit: {
      width: '100%',
      padding: '16px',
      borderRadius: '50px',
      background: 'linear-gradient(90deg,#ff416c,#ff4b2b)',
      color: '#fff',
      fontWeight: 800,
      fontSize: '1.1rem',
      letterSpacing: '0.04em',
      border: 'none',
      cursor: 'pointer',
      marginTop: '40px',
      boxShadow: '0 8px 24px rgba(255,75,43,0.35)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 14px 32px rgba(255,75,43,0.5)'
      }
    }
  };
};

export default getStyles;
