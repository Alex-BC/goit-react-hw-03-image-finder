function fetchImages(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=19201386-219bb908558d098454af3ef41&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('No response from server'));
  });
}

const api = { fetchImages };

export default api;