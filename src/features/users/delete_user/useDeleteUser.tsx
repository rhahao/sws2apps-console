import { useState } from 'react';
import { DeleteUserProps } from './index.types';

const useDeleteUser = ({ onConfirm }: DeleteUserProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    onConfirm?.();
    setOpen(false);
  };

  return { open, handleOpen, handleClose, handleConfirm };
};

export default useDeleteUser;
