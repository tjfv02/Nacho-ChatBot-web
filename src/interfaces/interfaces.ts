export interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface MessageProps {
  message: string;
  timestamp: Date;
}

export interface UserAvatarProps {
  imageUrl: string;
  altText: string;
}

export interface NachoResponsesProps {
  message: string;
  timestamp: string;
}
