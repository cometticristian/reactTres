var express = require('express');

let api = {
    api: (req, res, next) => {
        res.render('index', { title: 'Express' });
    }
}

module.exports = api;