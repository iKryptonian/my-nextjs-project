
import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

type AdBannerProps = {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
};

const BannerImageComp: React.FC<AdBannerProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: background, padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
      <Box sx={{ flex: '0 0 40%', height: '100%', marginRight: '16px' }}>
        <img src={image} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      </Box>
      <Box sx={{ flex: '1 1 auto' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
        <Button variant="contained" color="primary">
          {cta}
        </Button>
      </Box>
      <IconButton onClick={onEdit} sx={{ marginLeft: 'auto' }}>
        <EditIcon />
      </IconButton>
    </Box>
  );
};

export default BannerImageComp;

