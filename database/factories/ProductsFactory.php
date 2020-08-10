<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use App\Products;
use Faker\Generator as Faker;

$factory->define(Products::class, function (Faker $faker) {
    return [
        "description" => $faker->name,
        "unit_price" => $faker->randomFloat($nbMaxDecimals = NULL, $min = 0, $max = 100.00),
        "quantity" => $faker->randomNumber(2),
        "provider_id" => $faker->numberBetween($min = 1, $max = 6),
        "category_id" => $faker->numberBetween($min = 1, $max = 4),
        "tax_id" => $faker->numberBetween($min = 1, $max = 4),
    ];
});
