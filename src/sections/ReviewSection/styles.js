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
    // ── Stepper sidebar
    stepperWrap: {
      position: 'sticky',
      top: '24px',
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(16px)',
      borderRadius: '28px',
      padding: '32px 24px',
      boxShadow: '0 12px 40px rgba(0,0,0,0.07)',
      zIndex: 2
    },
    stepItem: (active, done) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      padding: '10px 0',
      cursor: 'pointer',
      opacity: done || active ? 1 : 0.45,
      transition: 'opacity 0.3s'
    }),
    stepCircle: (active, done) => ({
      width: 38,
      height: 38,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: '0.9rem',
      background: done
        ? 'linear-gradient(135deg,#ff416c,#ff4b2b)'
        : active
          ? 'linear-gradient(135deg,#2b5876,#4e54c8)'
          : '#e8edf2',
      color: done || active ? '#fff' : '#999',
      flexShrink: 0,
      boxShadow: active ? '0 4px 14px rgba(78,84,200,0.3)' : 'none',
      transition: 'all 0.3s'
    }),
    stepConnector: {
      width: 2,
      height: 28,
      background: '#e0e7ef',
      marginLeft: '18px',
      borderRadius: 2
    },
    // ── Form card
    formPanel: {
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      padding: '40px',
      boxShadow: '0 18px 48px rgba(0,0,0,0.07)',
      '@media (max-width:600px)': { padding: '24px', borderRadius: '20px' }
    },
    stepBadge: {
      background: 'linear-gradient(135deg,#ff416c,#ff4b2b)',
      color: '#fff',
      fontSize: '0.7rem',
      fontWeight: 800,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '4px 14px',
      borderRadius: '50px',
      display: 'inline-block',
      marginBottom: '10px'
    },
    stepTitle: {
      fontWeight: 800,
      fontSize: '1.6rem',
      color: '#0d1b2a',
      marginBottom: '6px',
      fontFamily: '"DM Serif Display", Georgia, serif'
    },
    navBtnRow: {
      display: 'flex',
      gap: '12px',
      marginTop: '28px',
      flexWrap: 'wrap'
    },
    btnBack: {
      flex: 1,
      minWidth: 120,
      padding: '12px',
      borderRadius: '50px',
      border: '2px solid #e0e7ef',
      background: 'transparent',
      color: '#445',
      fontWeight: 700,
      fontSize: '0.95rem',
      cursor: 'pointer',
      transition: 'all 0.2s',
      '&:hover': { borderColor: '#4e54c8', color: '#4e54c8' }
    },
    btnNext: {
      flex: 2,
      minWidth: 160,
      padding: '13px',
      borderRadius: '50px',
      background: 'linear-gradient(90deg,#ff416c,#ff4b2b)',
      color: '#fff',
      fontWeight: 800,
      fontSize: '1rem',
      letterSpacing: '0.04em',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 8px 20px rgba(255,75,43,0.3)',
      transition: 'all 0.3s',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 12px 24px rgba(255,75,43,0.4)'
      }
    },
    progressBar: {
      height: 6,
      borderRadius: 3,
      marginBottom: '28px',
      background: '#e8edf2',
      '& .MuiLinearProgress-bar': {
        background: 'linear-gradient(90deg,#ff416c,#4e54c8)',
        borderRadius: 3
      }
    },
    ratingBlock: {
      background: '#f7fafc',
      borderRadius: '16px',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '12px'
    },
    ratingLabel: {
      fontWeight: 700,
      color: '#2b5876',
      fontSize: '0.95rem'
    },
    // ── Review cards (timeline)
    timelineWrap: {
      position: 'relative',
      paddingLeft: '28px',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 10,
        top: 0,
        bottom: 0,
        width: 3,
        background: 'linear-gradient(180deg,#ff416c 0%,#4e54c8 100%)',
        borderRadius: 4
      }
    },
    timelineDot: {
      position: 'absolute',
      left: '-28px',
      top: '28px',
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#ff416c,#4e54c8)',
      boxShadow: '0 0 0 4px rgba(78,84,200,0.15)',
      flexShrink: 0
    },
    reviewCard: {
      position: 'relative',
      background: '#fff',
      borderRadius: '20px',
      padding: '24px 28px',
      boxShadow: '0 6px 24px rgba(0,0,0,0.06)',
      marginBottom: '20px',
      transition: 'all 0.3s',
      borderTop: '4px solid',
      borderImage: 'linear-gradient(90deg,#ff416c,#4e54c8) 1',
      '&:hover': {
        transform: 'translateX(6px)',
        boxShadow: '0 10px 32px rgba(0,0,0,0.10)'
      }
    },
    avatar: {
      width: 48,
      height: 48,
      background: 'linear-gradient(135deg,#4e54c8,#8f94fb)',
      fontWeight: 800,
      fontSize: '1.2rem',
      boxShadow: '0 4px 12px rgba(78,84,200,0.25)',
      marginRight: '14px'
    }
  };
};

export default getStyles;
