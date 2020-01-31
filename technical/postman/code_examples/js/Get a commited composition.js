var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://cdr.code4health.org/rest/v1/composition/e787715f-4018-4a1d-8991-b99c7fc0559d::bb264bce-c407-4982-9017-97d3727fcfa4::1?format=FLAT',
  'headers': {
    'Content-Type': 'application/json',
    'Ehr-Session-disabled': '{{Ehr-Session}}'
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
