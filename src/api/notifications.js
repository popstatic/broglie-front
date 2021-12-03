import { get } from './fetch';

export const getNotifications = () => {  
  return get('/notifications/getAllNotifications');
};