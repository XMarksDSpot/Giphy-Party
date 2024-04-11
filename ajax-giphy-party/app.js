$(document).ready(function() {
    $('#gif-search-form').on('submit', function(e) {
      e.preventDefault();
      
      const searchTerm = $('#gif-search-input').val();
      
      axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: 'WKoH9VEnVxN2qGtBkwslegp5jfxZbrKY',
          q: searchTerm
        }
      })
      .then(function(response) {
        if (response.data.data.length > 0) {
          const firstGifUrl = response.data.data[0].images.original.url;
          
          $('#gifs-container').append(`<img src="${firstGifUrl}" alt="GIF" />`);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    });
  
    $('#clear-gifs-btn').on('click', function() {
      $('#gifs-container').empty(); 
    });
  });
  
