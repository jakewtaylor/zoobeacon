<?php

require 'vendor/autoload.php';

require 'php/models/Animal.php';
require 'php/controllers/AnimalController.php';

// Routes
Flight::route('GET /@animal:[A-Fa-f0-9]{24}', [
    'AnimalController',
    'show',
]);

// Set Views Directory
Flight::set('flight.views.path', './php/views');

// Start Flight
Flight::start();
