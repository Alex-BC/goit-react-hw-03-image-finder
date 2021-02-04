function fetchPictures(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '19201386-219bb908558d098454af3ef41';
  return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Something is wrong, please try again'));
  });
}

const API = {
  fetchPictures,
};

export default API;
