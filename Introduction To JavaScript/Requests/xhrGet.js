// Include data for accessing Google APIs

// TODO enter here your api key
const apiKey = 'enter api key';
const url = 'https://www.googleapis.com/urlshortener/v1/url';
// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
	const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
  
  const xhr = new XMLHttpRequest();
  
  xhr.responseType = 'json';
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
 //   	console.log(xhr.response);
      $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
		}
  }
  
  xhr.open('GET', urlToExpand);
  xhr.send();
}

function shortenUrl() {

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

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);
