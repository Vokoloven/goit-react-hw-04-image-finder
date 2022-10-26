import axios from 'axios';

const getApi = axios.create({
  baseURL: 'https://pixabay.com/api/',
  method: 'get',
  params: {
    key: '30004460-7b1cd4f1171d7a16584b31c7f',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getApiService = async params => {
  const response = await getApi.get('', { params });
  const data = response.data.hits;

  return data;
};
