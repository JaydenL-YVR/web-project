const fetchDataFromSpotify = async () => {
    const url = 'https://spotify23.p.rapidapi.com/genre_view/?id=0JQ5DAqbMKFEC4WFtoNRpw&content_limit=10&limit=20';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'eda2ac737dmshf7f602f728a15edp1b0398jsn17f6c188d2c5',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.text();
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  export default fetchDataFromSpotify;
  