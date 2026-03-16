export const getStyles = () => ({
  root: {
    backgroundColor: '#fff',
    minHeight: '100vh',
    paddingTop: { xs: '40px', md: '80px' },
    paddingBottom: '80px'
  },
  heroSection: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  title: {
    fontSize: { xs: '2rem', md: '3.5rem' },
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '16px',
    fontFamily: "'Poppins', sans-serif"
  },
  lastUpdated: {
    fontSize: '1rem',
    color: '#666',
    fontStyle: 'italic'
  },
  contentGrid: {
    marginTop: '40px'
  },
  sidebar: {
    position: { md: 'sticky' },
    top: '120px',
    height: 'fit-content',
    padding: '24px',
    backgroundColor: '#f9f9f9',
    borderRadius: '16px',
    display: { xs: 'none', md: 'block' }
  },
  navItem: {
    padding: '12px 16px',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    marginBottom: '8px',
    '&:hover': {
      backgroundColor: 'rgba(173, 29, 29, 0.05)',
      color: 'rgba(173, 29, 29, 1)'
    }
  },
  activeNavItem: {
    backgroundColor: 'rgba(173, 29, 29, 0.1)',
    color: 'rgba(173, 29, 29, 1)',
    fontWeight: 600
  },
  section: {
    marginBottom: '48px',
    scrollMarginTop: '120px'
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#1a1a1a',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    '&::before': {
      content: '""',
      width: '4px',
      height: '24px',
      backgroundColor: 'rgba(173, 29, 29, 1)',
      marginRight: '12px',
      borderRadius: '2px'
    }
  },
  text: {
    color: '#444',
    lineHeight: 1.8,
    fontSize: '1rem'
    // marginBottom: '16px'
  },
  list: {
    paddingLeft: '24px',
    marginBottom: '10px'
  },
  listItem: {
    marginBottom: '10px',
    color: '#444',
    position: 'relative',
    '&::marker': {
      color: 'rgba(173, 29, 29, 1)'
    }
  },
  contactBox: {
    backgroundColor: '#fff',
    border: '1px solid #ebebeb',
    borderRadius: '12px',
    padding: '24px',
    marginTop: '24px'
  },
  contactLink: {
    color: 'rgba(173, 29, 29, 1)',
    textDecoration: 'none',
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});
