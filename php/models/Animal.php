<?php

class Animal {
    public static $apiUrl = 'http://api.zoobcn.co';

    public static function url (string $id) {
        return "/api/animals/$id";
        $url = self::$apiUrl . "/animals/$id";
        return $url;
    }

    public static function get (string $id) {
        $url = self::$apiUrl . "/animals/$id";
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        $data = curl_exec($ch);
        curl_close($ch);
        return $data;
    }
}