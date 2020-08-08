<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use App\Providers;
use Faker\Generator as Faker;

$factory->define(Providers::class, function (Faker $faker) {
    return [
        "name" => $faker->name,
            "address" => $faker->address,
            "phone" => $faker->randomNumber(9),
            "email" => $faker->unique()->safeEmail,
            "rif" => 'v-' . $faker->randomNumber(9)
    ];
});
