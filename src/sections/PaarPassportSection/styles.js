// export const getStyles = () => {
//   return {
//     passportContainer: {
//       backgroundColor: 'background.default'
//     }
//   };
// };
// export default getStyles;
export const getStyles = () => {
  return {
    missionSection: {
      padding: '30px 0'
    },
    missionBadge: {
      marginBottom: '16px',
      backgroundColor: '#f39b2ade',
      color: 'common.black'
    },
    missionTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '24px',
      color: 'rgba(173, 29, 29, 1)'
    },
    missionText: {
      color: 'text.secondary',
      marginBottom: '24px',
      lineHeight: '1.75',
      fontSize: '18px',
      textAlign: 'justify'
    },
    missionImageContainer: {
      borderRadius: '12px',
      width: '60%'
    },
    missionImageOverlay: {
      width: '100%',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)'
    },
    passportImage: {
      marginBottom: '100px',
      width: '70%'
    },
    missionImage: {
      // textAlign: 'center'
    }
  };
};
export default getStyles;
