const base_url = 'http://api.giphy.com/v1/gifs';
const GIPHY_API_KEY = 'jjQuAQ15oADSyrRqmWII43JGfzlwr0Id';

export const searchQuery = async (query, limit = 28, offset = 0) => {
  try {
    const response = await fetch(`${base_url}/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=${limit}&offset=${offset}`);
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
}

export const searchTrending = (query) => {

}

export const searchRandom = (query) => {

}
