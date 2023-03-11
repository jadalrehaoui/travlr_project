const fs = require('fs'); // to read from files

let trips = JSON.parse(fs.readFileSync("./data/trips.json", 'utf8')); // read from ./data/trips


const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

const travel = (req, res, next) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    console.info('>> app_server travel controller calling '+ requestOptions.url);
    request(
        requestOptions,
        (err, {statusCode}, body) => {
            if(err) {
                console.error(err);
            } else {
                renderTravelList(req, res, body);
            }
        }
    )
}
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + " - Travel";
    if(!(responseBody instanceof Array)){
        message = 'API lookup error';
        responseBody = [];
    } else {
        if(!responseBody.length) {
            message = "No trips yet ...";
        }
    }
    res.render('travel', {title: pageTitle, trips: responseBody, message});
}

module.exports = {
    travel
}