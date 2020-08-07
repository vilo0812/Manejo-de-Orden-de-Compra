<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "first_name" => "gabriel",
            "last_name" => "viloria",
            "identification_card" => "27167028",
            "phone" => "04149017184",
            "email" => "admin@gmail.com",
            "password" => bcrypt("123456")
            // "password" => Hash::make('1234')
        ]);
        factory(User::class,10)->create();
    }
}