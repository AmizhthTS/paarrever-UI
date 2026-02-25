import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Chip
} from '@mui/material';
import {
  Star as StarIcon,
  CardGiftcard as GiftIcon,
  Percent as PercentIcon,
  MilitaryTech as CrownIcon
} from '@mui/icons-material';
import getStyles from './styles';

const PaarclubSection = () => {
  const styles = getStyles();

  const benefits = [
    {
      icon: StarIcon,
      title: 'Earn Points',
      description: 'Get 1 point for every ₹10 spent',
      color: 'culturalSaffron.main'
    },
    {
      icon: GiftIcon,
      title: 'Exclusive Rewards',
      description: 'Redeem points for free products',
      color: 'primary.main'
    },
    {
      icon: PercentIcon,
      title: 'Member Discounts',
      description: 'Special prices on festival items',
      color: 'secondary.main'
    },
    {
      icon: CrownIcon,
      title: 'Early Access',
      description: 'First to know about new arrivals',
      color: 'culturalCurry.main'
    }
  ];

  return (
    <Box component="section" sx={styles.container}>
      <Container maxWidth="xl">
        <Box sx={styles.header}>
          <Chip label="PAARR Club" color="secondary" sx={styles.badge} />
          <Typography variant="h2" sx={styles.title}>
            Join the Family, Enjoy the Benefits
          </Typography>
          <Typography variant="body1" sx={styles.subtitle}>
            Become a PAARR Club member and unlock exclusive rewards, discounts,
            and early access to the best South Indian products
          </Typography>
        </Box>
        <Grid container spacing={3} sx={styles.benefitsGrid}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={styles.benefitCard}>
                  <CardContent>
                    <Box sx={styles.benefitIconContainer}>
                      <Icon sx={{ fontSize: 32, color: benefit.color }} />
                    </Box>
                    <Typography variant="h6" sx={styles.benefitTitle}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" sx={styles.benefitDescription}>
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Box sx={styles.ctaBanner}>
          <Typography variant="h3" sx={styles.ctaTitle}>
            Ready to Start Saving?
          </Typography>
          <Typography variant="body1" sx={styles.ctaText}>
            Join over 50,000 happy customers who are already earning rewards
            with every purchase. It s free, fast, and full of benefits!
          </Typography>
          <Box sx={styles.ctaButtons}>
            <Button
              variant="contained"
              size="large"
              sx={{
                fontSize: '1.125rem',
                padding: '12px 24px',
                backgroundColor: '#FFC74F',
                color: 'common.black'
              }}
            >
              Join PAARR Club Free
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                fontSize: '1.125rem',
                padding: '12px 24px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'common.white',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.2)'
                }
              }}
            >
              Learn More
            </Button>
          </Box>
          <Typography variant="body2" sx={styles.ctaFootnote}>
            No fees. No commitments. Just rewards.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PaarclubSection;
