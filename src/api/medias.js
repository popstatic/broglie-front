import { get } from './fetch';

export const getMedias = () => {  
  return get('/medias/getAllMedias');
};