import React from 'react';
import { MessageProps } from '../interfaces/interfaces';
import { Typography } from '@mui/material';

const Message: React.FC<MessageProps> = ({ message, isUser, timestamp }) => {
  return (
    <div style={{ textAlign: isUser ? 'right' : 'left', margin: '8px' }}>
      {isUser ? (
        <>
          <div>
            <Typography variant="caption" color="textSecondary">
              {timestamp.toLocaleTimeString()} {/* Formatea la marca de tiempo como prefieras */}
            </Typography>
          </div>
          <Typography
            variant="body1"
            component="p"
            style={{
              backgroundColor: '#2196F3',
              color: 'white',
              padding: '8px',
              borderRadius: '8px',
              display: 'inline-block',
            }}
          >
            {message}
          </Typography>
        </>
      ) : (
        <>
          <Typography
            variant="body1"
            component="p"
            style={{
              backgroundColor: '#f5f5f5',
              color: 'black',
              padding: '8px',
              borderRadius: '8px',
              display: 'inline-block',
            }}
          >
            {message}
          </Typography>
          <div>
            <Typography variant="caption" color="textSecondary">
              {timestamp.toLocaleTimeString()} {/* Formatea la marca de tiempo como prefieras */}
            </Typography>
          </div>
        </>
      )}
    </div>
  );
};

export default Message;
