export const getStyles = () => {
  return {
    aboutContainer: {
      minHeight: '100vh',
      backgroundColor: 'background.default'
    },
    heroSection: {
      py: { xs: 4, sm: 5, md: 6 },
      background:
        'linear-gradient(90deg, rgba(37, 99, 235, 0.1) 0%, rgba(16, 185, 129, 0.1) 50%, rgba(245, 158, 11, 0.1) 100%)'
    },
    heroContent: {
      textAlign: 'center',
      px: { xs: 2, sm: 3, md: 0 }
    },
    heroTitle: {
      fontSize: {
        xs: '2rem', // 320px-375px
        sm: '2.25rem', // 376px-425px
        md: '2.5rem', // 426px-768px
        lg: '3rem' // 769px-1024px+
      },
      fontWeight: 700,
      mb: { xs: 1, sm: 1.5, md: 2 },
      background: 'linear-gradient(90deg, #2563eb 0%, #10b981 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: { xs: 1.2, md: 1.3 }
    },
    heroSubtitle: {
      fontSize: {
        xs: '0.875rem', // 320px-375px
        sm: '1rem', // 376px-425px
        md: '1.125rem' // 426px+
      },
      color: 'text.secondary',
      maxWidth: '800px',
      mx: 'auto',
      px: { xs: 2, sm: 3, md: 0 },
      lineHeight: { xs: 1.4, md: 1.6 }
    },
    missionSection: {
      padding: { xs: '48px 0', md: '64px 0' }
    },
    missionBadge: {
      marginBottom: { xs: '12px', md: '16px' }
    },
    missionTitle: {
      fontSize: { xs: '1.5rem', md: '1.875rem' },
      fontWeight: 'bold',
      marginBottom: { xs: '16px', md: '24px' }
    },
    missionText: {
      color: 'text.secondary',
      marginBottom: { xs: '16px', md: '24px' },
      lineHeight: { xs: 1.6, md: '1.75' }
    },
    missionImageContainer: {
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: 3,
      height: { xs: '250px', sm: '300px', md: 'auto' }
    },
    missionImageOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)'
    },
    valuesSection: {
      padding: { xs: '48px 0', md: '64px 0' },
      background:
        'linear-gradient(to right, primary.lighter, secondary.lighter)'
    },
    sectionTitle: {
      fontSize: { xs: '1.5rem', md: '1.875rem' },
      fontWeight: 'bold',
      marginBottom: { xs: '12px', md: '16px' },
      textAlign: 'center'
    },
    sectionSubtitle: {
      color: 'text.secondary',
      textAlign: 'center',
      maxWidth: '800px',
      margin: { xs: '0 auto 32px auto', md: '0 auto 48px auto' },
      fontSize: { xs: '0.875rem', md: '1rem' }
    },
    valueCard: {
      textAlign: 'center',
      transition: 'all 0.3s ease',
      height: '100%',
      p: { xs: 2, md: 3 },
      '&:hover': {
        boxShadow: { xs: 3, md: 6 },
        transform: { xs: 'scale(1.03)', md: 'scale(1.05)' }
      }
    },
    valueIconContainer: {
      width: { xs: '48px', md: '64px' },
      height: { xs: '48px', md: '64px' },
      margin: '0 auto 16px auto',
      borderRadius: '50%',
      background:
        'linear-gradient(to bottom right, background.paper, background.default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    valueTitle: {
      fontWeight: '600',
      fontSize: { xs: '1rem', md: '1.125rem' },
      marginBottom: '8px'
    },
    valueDescription: {
      fontSize: { xs: '0.8125rem', md: '0.875rem' },
      color: 'text.secondary'
    },
    timelineSection: {
      padding: '64px 0'
    },
    timelineLine: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '4px',
      height: '100%',
      background:
        'linear-gradient(90deg,rgba(173, 29, 29, 1) 20%, rgba(252, 176, 69, 1) 80%)',
      zIndex: 1
    },
    milestoneContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '32px',
      '&:nth-of-type(odd)': {
        flexDirection: 'row-reverse'
      }
    },
    milestoneContent: {
      width: '50%',
      padding: { xs: '0 16px', md: '0 32px' },
      textAlign: { xs: 'left', md: 'right' },
      '&:nth-of-type(odd)': {
        textAlign: { xs: 'left', md: 'left' }
      }
    },
    milestoneCard: {
      backgroundColor: 'background.paper',
      padding: '24px',
      borderRadius: '8px',
      margin: '0px 30px',
      boxShadow: 2,
      '&:hover': {
        boxShadow: 4
      }
    },
    milestoneYear: {
      marginBottom: '8px',
      backgroundColor: '#f39b2ade',
      color: 'common.black'
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
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '16px',
      height: '16px',
      backgroundColor: 'rgba(173, 29, 29, 1)',
      borderRadius: '50%',
      border: '4px solid',
      borderColor: 'background.default',
      zIndex: 2
    },
    teamSection: {
      padding: { xs: '48px 0', md: '64px 0' },
      background:
        'linear-gradient(to right, primary.lighter, secondary.lighter)'
    },
    teamCard: {
      textAlign: 'center',
      transition: 'all 0.3s ease',
      height: '100%',
      p: { xs: 2, md: 3 },
      '&:hover': {
        boxShadow: { xs: 3, md: 6 },
        transform: { xs: 'scale(1.03)', md: 'scale(1.05)' }
      }
    },
    teamImageContainer: {
      width: { xs: '80px', md: '96px' },
      height: { xs: '80px', md: '96px' },
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
      fontSize: { xs: '1rem', md: '1.125rem' },
      marginBottom: '4px'
    },
    teamPosition: {
      marginBottom: { xs: '8px', md: '12px' },
      fontSize: { xs: '0.8125rem', md: '0.875rem' }
    },
    teamDescription: {
      fontSize: { xs: '0.8125rem', md: '0.875rem' },
      color: 'text.secondary'
    },
    impactSection: {
      padding: { xs: '48px 0', md: '64px 0' }
    },
    impactStat: {
      textAlign: 'center',
      p: { xs: 2, md: 3 }
    },
    impactNumber: {
      fontSize: { xs: '1.75rem', md: '2.25rem' },
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    impactTitle: {
      fontSize: { xs: '1rem', md: '1.125rem' },
      fontWeight: '600',
      marginBottom: '8px'
    },
    impactDescription: {
      fontSize: { xs: '0.8125rem', md: '0.875rem' },
      color: 'text.secondary'
    },
    joinSection: {
      padding: { xs: '48px 0', md: '64px 0' },
      background: 'linear-gradient(to right, primary.main, secondary.main)',
      color: 'common.white',
      textAlign: 'center'
    },
    joinTitle: {
      fontSize: { xs: '1.5rem', md: '1.875rem' },
      fontWeight: 'bold',
      marginBottom: { xs: '12px', md: '16px' }
    },
    joinText: {
      fontSize: { xs: '1rem', md: '1.125rem' },
      opacity: 0.9,
      maxWidth: '800px',
      margin: { xs: '0 auto 24px auto', md: '0 auto 32px auto' },
      px: { xs: 2, md: 0 }
    },
    joinButtons: {
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: { xs: '12px', sm: '16px' },
      justifyContent: 'center'
    }
  };
};
export default getStyles;
