var sdk = new CitySDK(); // create the CitySDK Instance
census = sdk.modules.census; // Create an instance of the module
// census.enable('ebfc2b4e08bb16ebc53b99604e465907d6d087d5'); // enable the module with the api key

census.enable('34c1995fd27b0768996406c90a11d8ddf0024344');

var stateArray = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'
];

// var requestArr = [
//   {
//     'level':'state',
//     'state':'',
//     'variables': [
//       'income',
//       'median_home_value'
//     ],
//     api:'asc5',
//     year: '2014'
//   }
// ];

var request = {
  state: 'CA',
  level: 'state',
  sublevel: true,
  variables: [
    'median_home_value',
    'income',
    'median_gross_rent'
  ],
  api: 'acs5',
  year: '2014'
};

  // write a function taht returns the median income and median home value for every county in the usa

var callback = function(response) {
  // $('#blah').append('<p>' + response.data[0]['commute_time'] + '</p>').text;
  console.log('response = ' + response);
};

// requestArr.forEach(function(element){
stateArray.forEach(function(ele){
  census.APIRequest(request, function(response) {
    console.log('ele = ' + ele);
    console.log('response = ' + response);
  });
});

// });
