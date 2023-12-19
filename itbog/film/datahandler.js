var express = require('express');
var app = express();
const fs = require('fs');
const path = require('path');
const { resourceUsage } = require('process');


async function getFilmList() {
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    return data.results;
}

async function getOpeningCrawl(id) {
    const response = await fetch('https://swapi.dev/api/film/' + id);
    const data = await response.json();
    return data.results;
}

module.exports = { 
    getFilmList, 
    getOpeningCrawl
};
    
