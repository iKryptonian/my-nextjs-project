
import React, { useState, useEffect } from 'react';
import { Box, Modal, TextField, Button } from '@mui/material';

type EditBannerTemplateBsProps = {
  open: boolean;
  handleClose: () => void;
  banner: {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
  onSave: (updatedBanner: {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  }) => void;
};

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ open, handleClose, banner, onSave }) => {
  const [updatedBanner, setUpdatedBanner] = useState(banner);

  useEffect(() => {
    setUpdatedBanner(banner);
  }, [banner]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedBanner((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(updatedBanner);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'white', padding: 4, boxShadow: 24 }}>
        <TextField
          fullWidth
          margin="normal"
          label="Title"
          name="title"
          value={updatedBanner.title}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          value={updatedBanner.description}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="CTA"
          name="cta"
          value={updatedBanner.cta}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Image URL"
          name="image"
          value={updatedBanner.image}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Background"
          name="background"
          value={updatedBanner.background}
          onChange={handleChange}
        />
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditBannerTemplateBs;

