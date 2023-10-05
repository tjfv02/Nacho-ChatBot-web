import React from 'react';
import Avatar from '@mui/material/Avatar';
import { UserAvatarProps } from '../interfaces/interfaces';



const UserAvatar: React.FC<UserAvatarProps> = ({ imageUrl, altText }) => {
  return (
    <Avatar
      alt={altText}
      src={imageUrl}
      style={{ width: '40px', height: '40px' }}
    />
  );
};

export default UserAvatar;
