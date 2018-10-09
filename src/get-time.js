const getJsonOrThrow = response => {
  if( response.ok ){
    return response.json();
  } else {
    throw response.text();
  }
};

export default timezone =>
  fetch(`http://worldclockapi.com/api/json/${ timezone }/now`)
    .then( getJsonOrThrow );


