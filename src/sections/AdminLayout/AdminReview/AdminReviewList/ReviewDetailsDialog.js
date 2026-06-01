// import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Rating,
  Chip,
  Avatar,
  //   CardMedia,
  Button
  //   Divider,
  //   Grid
} from '@mui/material';

// ─── Inline styles (drop-in replacement for getStyles entries used here) ────

const s = {
  dialogPaper: {
    borderRadius: '28px',
    overflow: 'hidden',
    maxWidth: '680px',
    width: '100%',
    boxShadow: '0 32px 80px rgba(0,2,58,0.18)',
    fontFamily: '"DM Sans", "Segoe UI", sans-serif'
  },

  // ── Hero banner (with image OR gradient-only)
  heroBanner: (hasImage) => ({
    position: 'relative',
    width: '100%',
    height: hasImage ? 220 : 130,
    overflow: 'hidden',
    background:
      'linear-gradient(135deg, #00023A 0%, #020671 60%, #4e54c8 100%)',
    display: 'flex',
    alignItems: 'flex-end',
    transition: 'height 0.3s'
  }),
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(to top, rgba(0,2,58,0.82) 0%, rgba(0,2,58,0.1) 100%)',
    zIndex: 1
  },
  heroBg: {
    position: 'absolute',
    inset: 0,
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    zIndex: 0
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    padding: '20px 28px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  avatarLg: {
    width: 56,
    height: 56,
    background: 'linear-gradient(135deg,#ff416c,#ff4b2b)',
    fontWeight: 900,
    fontSize: '1.5rem',
    border: '3px solid rgba(255,255,255,0.35)',
    boxShadow: '0 4px 16px rgba(255,65,108,0.4)',
    flexShrink: 0
  },
  heroName: {
    fontWeight: 800,
    fontSize: '1.25rem',
    color: '#fff',
    lineHeight: 1.2,
    fontFamily: '"DM Serif Display", Georgia, serif'
  },
  heroBranch: {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.65)',
    fontWeight: 500,
    mt: 0.3
  },
  noImageBadge: {
    position: 'absolute',
    top: 18,
    right: 18,
    zIndex: 2,
    background: 'rgba(255,255,255,0.12)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.18)',
    borderRadius: '50px',
    padding: '4px 14px',
    color: 'rgba(255,255,255,0.7)',
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.08em'
  },

  // ── Body
  body: {
    padding: '28px 28px 8px',
    '@media (max-width:480px)': { padding: '20px 16px 8px' }
  },

  // ── Info row pills
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '20px',
    '@media (max-width:480px)': { gridTemplateColumns: '1fr' }
  },
  infoCard: {
    background: '#f5f7ff',
    borderRadius: '14px',
    padding: '12px 16px',
    borderLeft: '4px solid #020671'
  },
  infoLabel: {
    fontSize: '0.68rem',
    color: '#8890b5',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    mb: 0.4
  },
  infoValue: {
    fontSize: '0.92rem',
    color: '#00023A',
    fontWeight: 600,
    wordBreak: 'break-word'
  },

  // ── Ratings strip
  ratingsStrip: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginBottom: '20px',
    '@media (max-width:480px)': { gridTemplateColumns: '1fr 1fr' }
  },
  ratingPill: {
    background: '#fff',
    border: '1.5px solid #e8ecf8',
    borderRadius: '14px',
    padding: '10px 14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  ratingPillLabel: {
    fontSize: '0.7rem',
    color: '#8890b5',
    fontWeight: 700,
    letterSpacing: '0.09em',
    textTransform: 'uppercase'
  },

  // ── Feedback box
  feedbackBox: {
    background: 'linear-gradient(135deg,#f5f7ff 0%,#fff1eb 100%)',
    borderRadius: '16px',
    padding: '16px 20px',
    position: 'relative',
    marginBottom: '20px',
    borderLeft: '4px solid #ff4b2b'
  },
  feedbackQuote: {
    fontSize: '2.5rem',
    color: '#ff4b2b',
    lineHeight: 0.8,
    fontFamily: 'Georgia, serif',
    opacity: 0.3,
    position: 'absolute',
    top: 10,
    left: 16
  },
  feedbackText: {
    fontSize: '0.95rem',
    color: '#334',
    lineHeight: 1.7,
    fontStyle: 'italic',
    paddingLeft: '8px'
  },

  // ── Bought chips
  boughtRow: { display: 'flex', gap: '8px', flexWrap: 'wrap', mb: 2.5 },
  boughtChip: {
    background: 'linear-gradient(90deg,#020671,#4e54c8)',
    color: '#fff',
    fontWeight: 700,
    fontSize: '0.78rem',
    borderRadius: '50px'
  },

  // ── Section label
  sectionLabel: {
    fontSize: '0.72rem',
    color: '#8890b5',
    fontWeight: 800,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    mb: 1.2,
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },

  // ── Close button
  closeBtn: {
    background: 'linear-gradient(90deg,#00023A,#020671)',
    color: '#fff',
    borderRadius: '50px',
    padding: '10px 36px',
    fontWeight: 700,
    fontSize: '0.95rem',
    border: 'none',
    textTransform: 'none',
    boxShadow: '0 6px 18px rgba(0,2,58,0.25)',
    '&:hover': {
      opacity: 0.9,
      transform: 'translateY(-2px)',
      transition: 'all 0.2s'
    }
  }
};

// ─── Component ───────────────────────────────────────────────────────────────

const ReviewDetailsDialog = ({ open, selected, onClose }) => {
  const hasImage = Boolean(selected?.imageName);
  const initials = selected?.firstName?.charAt(0)?.toUpperCase() || 'U';

  const ratings = [
    { label: '🍽️ Menu', val: selected?.menuRating || 0, color: '#ff416c' },
    { label: '😋 Food', val: selected?.foodRating || 0, color: '#ff4b2b' },
    { label: '👨‍🍳 Staff', val: selected?.staffRating || 0, color: '#020671' },
    { label: '🚀 Service', val: selected?.serviceRating || 0, color: '#4e54c8' }
  ];

  const infoItems = [
    { label: 'Email', value: selected?.email || '-', icon: '✉️' },
    { label: 'Phone', value: selected?.phoneNumber || '-', icon: '📞' },
    { label: 'Branch', value: selected?.branchName || '-', icon: '📍' }
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{ sx: s.dialogPaper }}
    >
      {/* ── Hero Banner ── */}
      <Box sx={s.heroBanner(hasImage)}>
        {hasImage && (
          <Box
            component="img"
            src={selected.imageName}
            alt="Review"
            sx={s.heroBg}
          />
        )}
        <Box sx={s.heroOverlay} />

        {!hasImage && <Box sx={s.noImageBadge}>No Photo</Box>}

        <Box sx={s.heroContent}>
          <Avatar sx={s.avatarLg}>{initials}</Avatar>
          <Box>
            <Typography sx={s.heroName}>
              {selected?.firstName || ''} {selected?.lastName || ''}
            </Typography>
            <Typography sx={s.heroBranch}>
              {selected?.branchName || 'PAARR Ever'}
            </Typography>
          </Box>
        </Box>
      </Box>

      <DialogContent sx={{ p: 0 }}>
        <Box sx={s.body}>
          {/* ── Contact Info Cards ── */}
          <Typography sx={s.sectionLabel}>📋 Contact Info</Typography>
          <Box sx={s.infoGrid}>
            {infoItems.map((item) => (
              <Box key={item.label} sx={s.infoCard}>
                <Typography sx={s.infoLabel}>
                  {item.icon} {item.label}
                </Typography>
                <Typography sx={s.infoValue}>{item.value}</Typography>
              </Box>
            ))}

            {/* Bought Items card spans full row on desktop if items exist */}
            {selected?.boughtItems?.length > 0 && (
              <Box
                sx={{
                  ...s.infoCard,
                  gridColumn: 'span 2',
                  borderLeftColor: '#ff4b2b'
                }}
              >
                <Typography sx={s.infoLabel}>🛍️ Bought Items</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    mt: 0.8
                  }}
                >
                  {selected.boughtItems.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      sx={s.boughtChip}
                    />
                  ))}
                </Box>
              </Box>
            )}
          </Box>

          {/* ── Ratings ── */}
          <Typography sx={s.sectionLabel}>⭐ Ratings</Typography>
          <Box sx={s.ratingsStrip}>
            {ratings.map((r) => (
              <Box key={r.label} sx={s.ratingPill}>
                <Typography sx={s.ratingPillLabel}>{r.label}</Typography>
                <Rating
                  value={r.val}
                  readOnly
                  size="small"
                  sx={{ '& .MuiRating-iconFilled': { color: r.color } }}
                />
              </Box>
            ))}
          </Box>

          {/* ── Feedback ── */}
          <Typography sx={s.sectionLabel}>✍️ Feedback</Typography>
          <Box sx={s.feedbackBox}>
            <Typography sx={s.feedbackQuote}>&quot;</Typography>
            <Typography sx={s.feedbackText}>
              {selected?.feedbackMessage || 'No feedback provided.'}
            </Typography>
          </Box>
        </Box>
      </DialogContent>

      {/* ── Actions ── */}
      <DialogActions sx={{ justifyContent: 'center', pb: 3, pt: 1 }}>
        <Button onClick={onClose} sx={s.closeBtn}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewDetailsDialog;
