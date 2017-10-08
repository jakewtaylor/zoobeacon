<?php

require 'vendor/autoload.php';

require 'php/models/Animal.php';
require 'php/controllers/AnimalController.php';

// Routes
Flight::route('GET /@animal:[A-Fa-f0-9]{24}', [
    'AnimalController',
    'show',
]);

// TEMP

Flight::route('GET /el', function () {
    Flight::render('animals/show', [
        'api_url' => 'https://example.com/',
    ]);
});

// Set Views Directory
Flight::set('flight.views.path', './php/views');

// Start Flight
Flight::start();
