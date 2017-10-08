<?php

require 'vendor/autoload.php';

require 'php/models/Animal.php';
require 'php/controllers/AnimalController.php';

// Routes
Flight::route('/@animal:[A-Fa-f0-9]{24}', [
    'AnimalController',
    'show',
]);

Flight::route('/api/animals/@animal:[A-Fa-f0-9]{24}', [
    'AnimalController',
    'apiProxy',
]);

// Configurate Views
Flight::set('flight.views.path', './php/views');

// Start Router
Flight::start();
