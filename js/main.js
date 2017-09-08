var getBeersApi = function getBeersApi(){
  return fetch('https://api.punkapi.com/v2/beers').then(function (response) {
    return response.json();
  }).catch(function(e) {
    return console.error('Fail');
  }).then(function(response) {
    var beers = response;
    var length = beers.length;
    var tagHtml = "<table>"+
    "<tr>"+
      "<th>Image</th>"+
      "<th>Name</th>"+
      "<th>Tagline</th>"+
      "<th>First Brewed</th>"+
      "<th>Description</th>"+
    "</tr>";
    for(var i = 0; i < length; i++){
      tagHtml += "<tr>"+
          "<td style='text-align:center;'><image src=" + beers[i].image_url + " height='200px;'/></td>"+
          "<td>" + beers[i].name + "</td>"+
          "<td>" + beers[i].tagline + "</td>"+
          "<td>" + beers[i].first_brewed + "</td>"+
          "<td>" + beers[i].description + "</td>"+
        "</tr>";
    }
    tagHtml += "</html>";
    console.log('Tag HTML',response);
    document.getElementById('beer_table').innerHTML = tagHtml;
  })
};
getBeersApi();

var searchBeers = function searchBeers(){
  return fetch('https://api.punkapi.com/v2/beers').then(function (response) {
    return response.json();
  }).catch(function(e) {
    return console.error('Fail');
  }).then(function(response) {
    var beers = response;
    var length = beers.length;
    var searchBeers = document.getElementById('search').value;
    var tagHtml = "<table>"+
    "<tr>"+
      "<th>Image</th>"+
      "<th>Name</th>"+
      "<th>Tagline</th>"+
      "<th>First Brewed</th>"+
      "<th>Description</th>"+
    "</tr>";

    var re = new RegExp(searchBeers.toLowerCase(), 'gi');
    for(var i = 0; i < length; i++){
      var str = "" + beers[i].name + " " + beers[i].tagline + " " + beers[i].first_brewed + " " + beers[i].description;
      var res = str.match(re);
      //console.log('res :',res);
      if(res){ 
        tagHtml += "<tr>"+
          "<td style='text-align:center;'><image src=" + beers[i].image_url + " height='200px;'/></td>"+
          "<td id='value'>" + beers[i].name + "</td>"+
          "<td id='value'>" + beers[i].tagline + "</td>"+
          "<td id='value'>" + beers[i].first_brewed + "</td>"+
          "<td id='value'>" + beers[i].description + "</td>"+
        "</tr>";
      }
      
    }
    tagHtml += "</html>";
    //console.log('Tag HTML',response);
    //tagHtml = tagHtml.replace(re, "<span style='background-color: yellow;'>" + searchBeers + "</span>");
    document.getElementById('beer_table').innerHTML = tagHtml;
    //console.log('res :',tagHtml);
    //document.getElementById('value').innerHTML = document.getElementById('value').innerHTML.replace(re, "<span style='background-color: yellow;'>" + searchBeers + "</span>");
  })
};
window.onload = function(){ 
  document.getElementById("searchBtn").onclick = function() {
    if(document.getElementById('search').value != ""){
      searchBeers()
    } else {
      getBeersApi();
    }
  };
};