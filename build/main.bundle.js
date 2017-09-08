(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var getBeersApi = function getBeersApi() {
  return fetch('https://api.punkapi.com/v2/beers').then(function (response) {
    return response.json();
  }).catch(function (e) {
    return console.error('Fail');
  }).then(function (response) {
    var beers = response;
    var length = beers.length;
    var tagHtml = "<table>" + "<tr>" + "<th>Name</th>" + "<th>Tagline</th>" + "<th>First Brewed</th>" + "<th>Description</th>" + "<th>Image</th>" + "</tr>";
    for (var i = 0; i < length; i++) {
      tagHtml += "<tr>" + "<td>" + beers[i].name + "</td>" + "<td>" + beers[i].tagline + "</td>" + "<td>" + beers[i].first_brewed + "</td>" + "<td>" + beers[i].description + "</td>" + "<td><image src=" + beers[i].image_url + " height='200px;'/></td>" + "</tr>";
    }
    tagHtml += "</html>";
    console.log('Tag HTML', response);
    document.getElementById('beer_table').innerHTML = tagHtml;
  });
};
getBeersApi();

var searchBeers = function searchBeers() {
  return fetch('https://api.punkapi.com/v2/beers').then(function (response) {
    return response.json();
  }).catch(function (e) {
    return console.error('Fail');
  }).then(function (response) {
    var beers = response;
    var length = beers.length;
    var searchBeers = document.getElementById('search').value;
    var tagHtml = "<table>" + "<tr>" + "<th>Name</th>" + "<th>Tagline</th>" + "<th>First Brewed</th>" + "<th>Description</th>" + "<th>Image</th>" + "</tr>";

    var re = new RegExp(searchBeers.toLowerCase(), 'gi');
    for (var i = 0; i < length; i++) {
      var str = "" + beers[i].name + " " + beers[i].tagline + " " + beers[i].first_brewed + " " + beers[i].description;

      var res = str.match(re);
      //console.log('res :',res);
      if (res) {
        tagHtml += "<tr>" + "<td>" + beers[i].name + "</td>" + "<td>" + beers[i].tagline + "</td>" + "<td>" + beers[i].first_brewed + "</td>" + "<td>" + beers[i].description + "</td>" + "<td><image src=" + beers[i].image_url + " height='200px;'/></td>" + "</tr>";
      }
    }
    tagHtml += "</html>";
    //console.log('Tag HTML',response);
    tagHtml = tagHtml.replace(re, "<span style='background-color: yellow;'>" + re + "</span>");
    document.getElementById('beer_table').innerHTML = tagHtml;
  });
};
window.onload = function () {
  document.getElementById("searchBtn").onclick = function () {
    if (document.getElementById('search').value != "") {
      searchBeers();
    } else {
      getBeersApi();
    }
  };
};

},{}]},{},[1]);
