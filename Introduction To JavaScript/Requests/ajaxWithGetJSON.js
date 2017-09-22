// Include data for accessing Google APIs

const apiKey = 'AIzaSyAQb0dSpaI7pPT9yYjGeHJaNXuL_zU7n-U';
const url = 'https://www.googleapis.com/urlshortener/v1/url';
// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
	const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
  
  $.getJSON(urlToExpand, response => {
    	$responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
  	}, 'json');
}

function shortenUrl() {
	const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();
  
  $.post(urlWithKey, {longUrl: urlToShorten}, response => $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
    }, 'json');
    
  
  xhr.open('POST', urlWithKey);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}