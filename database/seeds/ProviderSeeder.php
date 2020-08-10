<?php

use App\Providers;
use Illuminate\Database\Seeder;

class ProviderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(Providers::class,10)->create();
        //start proveedores
        Providers::create([
         	"name" => "suavitel",
            "address" => "suavitel1234 calle siempre viva",
         	"phone" => "+534149017184",
            "email" => "suavitel1234@gmail.com",
            "rif" => "r-235331234521",
         ]);
        Providers::create([
         	"name" => "perla",
            "address" => "perla1234 calle nunca viva",
         	"phone" => "+534149017184",
            "email" => "perla1234@gmail.com",
            "rif" => "r-25641258983",
         ]);
        Providers::create([
         	"name" => "Electrolu",
            "address" => "Electrolu1234 calle siempre viva",
         	"phone" => "+534149017184",
            "email" => "Electrolu1234@gmail.com",
            "rif" => "r-2354157895",
         ]);
        Providers::create([
         	"name" => "lacoste",
            "address" => "lacoste1234 calle siempre viva",
         	"phone" => "+534149017184",
            "email" => "lacoste1234@gmail.com",
            "rif" => "r-98564212854",
         ]);
        Providers::create([
         	"name" => "colgate",
            "address" => "colgate1234 calle siempre viva",
         	"phone" => "+534149017184",
            "email" => "colgate1234@gmail.com",
            "rif" => "r-69851745896",
         ]);
        Providers::create([
         	"name" => "family farm",
            "address" => "family farm1234 calle siempre viva",
         	"phone" => "+534149017184",
            "email" => "familyfarm1234@gmail.com",
            "rif" => "r-98568745236",
         ]);
        //end proveedores
    }
}
