<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(User::class, function (Faker $faker) {
    return [
    	"first_name" => $faker->name,
            "last_name" => $faker->name,
            "identification_card" => $faker->randomNumber(7),
            "phone" => $faker->randomNumber(9),
            "email" => $faker->unique()->safeEmail,
            "password" => bcrypt("1234")
    ];
});
