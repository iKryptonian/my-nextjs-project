
import React, { useState } from 'react';
import { Box } from '@mui/material';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import adBannersData from '../data/adBanners.json';

const Home: React.FC = () => {
  const [adBanners, setAdBanners] = useState(adBannersData);
  const [editingBanner, setEditingBanner] = useState<any | null>(null);

  const handleEdit = (index: number) => {
    setEditingBanner({ ...adBanners[index], index });
  };

  const handleClose = () => {
    setEditingBanner(null);
  };

  const handleSave = (updatedBanner: any) => {
    const updatedBanners = [...adBanners];
    updatedBanners[editingBanner.index] = updatedBanner;
    setAdBanners(updatedBanners);
  };

  return (
    <Box sx={{ padding: '16px' }}>
      {adBanners.map((banner, index) => (
        <BannerImageComp
          key={index}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
          onEdit={() => handleEdit(index)}
        />
      ))}
      {editingBanner && (
        <EditBannerTemplateBs
          open={Boolean(editingBanner)}
          handleClose={handleClose}
          banner={editingBanner}
          onSave={handleSave}
        />
      )}
    </Box>
  );
};

export default Home;

