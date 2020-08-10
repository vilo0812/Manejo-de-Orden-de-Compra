<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Categories;
use Faker\Generator as Faker;

$factory->define(Categories::class, function (Faker $faker) {
     return [
        "category_name" => $faker->name,
        "code" => $faker->randomNumber(9),
    ];
});
