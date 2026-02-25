export const getStyles = () => {
  return {
    aboutContainer: {
      minHeight: '100vh',
      backgroundColor: 'background.default'
    },
    heroSection: {
      py: 6,
      background:
        'linear-gradient(90deg, rgba(37, 99, 235, 0.1) 0%, rgba(16, 185, 129, 0.1) 50%, rgba(245, 158, 11, 0.1) 100%)'
    },
    heroContent: {
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: { xs: '2.5rem', md: '3rem' },
      fontWeight: 700,
      mb: 2,
      background: 'linear-gradient(90deg, #2563eb 0%, #10b981 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    heroSubtitle: {
      fontSize: '1.125rem',
      color: 'text.secondary',
      maxWidth: '800px',
      mx: 'auto'
    },
    missionSection: {
      padding: '64px 0'
    },
    missionBadge: {
      marginBottom: '16px'
    },
    missionTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '24px'
    },
    missionText: {
      color: 'text.secondary',
      marginBottom: '24px',
      lineHeight: '1.75'
    },
    missionImageContainer: {
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: 3
    },
    missionImageOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)'
    },
    valuesSection: {
      padding: '64px 0',
      background:
        'linear-gradient(to right, primary.lighter, secondary.lighter)'
    },
    sectionTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      textAlign: 'center'
    },
    sectionSubtitle: {
      color: 'text.secondary',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 48px auto'
    },
    valueCard: {
      textAlign: 'center',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: 6,
        transform: 'scale(1.05)'
      }
    },
    valueIconContainer: {
      width: '64px',
      height: '64px',
      margin: '0 auto 16px auto',
      borderRadius: '50%',
      background:
        'linear-gradient(to bottom right, background.paper, background.default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        animation: 'float 2s ease-in-out infinite'
      }
    },
    valueTitle: {
      fontWeight: '600',
      fontSize: '1.125rem',
      marginBottom: '8px'
    },
    valueDescription: {
      fontSize: '0.875rem',
      color: 'text.secondary'
    },
    timelineSection: {
      padding: '64px 0'
    },
    timelineLine: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '2px',
      height: '100%',
      background: 'linear-gradient(to bottom, primary.main, secondary.main)'
    },
    milestoneContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '32px',
      '&:nth-of-type(even)': {
        flexDirection: 'row-reverse'
      }
    },
    milestoneContent: {
      width: '50%',
      padding: { xs: '0 16px', md: '0 32px' },
      textAlign: { xs: 'left', md: 'right' },
      '&:nth-of-type(even)': {
        textAlign: { xs: 'left', md: 'left' }
      }
    },
    milestoneCard: {
      backgroundColor: 'background.paper',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: 2,
      '&:hover': {
        boxShadow: 4
      }
    },
    milestoneYear: {
      marginBottom: '8px'
    },
    milestoneTitle: {
      fontWeight: '600',
      fontSize: '1.125rem',
      marginBottom: '8px'
    },
    milestoneDescription: {
      fontSize: '0.875rem',
      color: 'text.secondary'
    },
    milestoneDot: {
      width: '16px',
      height: '16px',
      backgroundColor: 'primary.main',
      borderRadius: '50%',
      border: '4px solid',
      borderColor: 'background.default',
      zIndex: 10
    },
    teamSection: {
      padding: '64px 0',
      background:
        'linear-gradient(to right, primary.lighter, secondary.lighter)'
    },
    teamCard: {
      textAlign: 'center',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: 6,
        transform: 'scale(1.05)'
      }
    },
    teamImageContainer: {
      width: '96px',
      height: '96px',
      margin: '0 auto 16px auto',
      borderRadius: '50%',
      overflow: 'hidden'
    },
    teamImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.1)'
      }
    },
    teamName: {
      fontWeight: '600',
      fontSize: '1.125rem',
      marginBottom: '4px'
    },
    teamPosition: {
      marginBottom: '12px'
    },
    teamDescription: {
      fontSize: '0.875rem',
      color: 'text.secondary'
    },
    impactSection: {
      padding: '64px 0'
    },
    impactStat: {
      textAlign: 'center'
    },
    impactNumber: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    impactTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '8px'
    },
    impactDescription: {
      fontSize: '0.875rem',
      color: 'text.secondary'
    },
    joinSection: {
      padding: '64px 0',
      background: 'linear-gradient(to right, primary.main, secondary.main)',
      color: 'common.white',
      textAlign: 'center'
    },
    joinTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    joinText: {
      fontSize: '1.125rem',
      opacity: 0.9,
      maxWidth: '800px',
      margin: '0 auto 32px auto'
    },
    joinButtons: {
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: '16px',
      justifyContent: 'center'
    }
  };
};
export default getStyles;
