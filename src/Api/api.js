import axios from 'axios';

const APIKEY = '36806774-40bfb6ea6dc234a9fdb87e4ab';
export const perPage = 15; //за умовою завдання 12 

export const fetchImages = async (query, page) => {
  const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
  
//   await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await axios.get(URL);
  return response.data;
};

