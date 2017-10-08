<?php

class Animal {
    public static $apiUrl = 'http://api.zoobcn.co';

    public static function url (string $id) {
        $url = self::$apiUrl . "/animals/$id";
        return $url;
    }
}