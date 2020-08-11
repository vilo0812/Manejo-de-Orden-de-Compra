<?php

use App\Products;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(Products::class,10)->create();
        Products::create([
         	"description" => "neverra electrolux mediana",
            "unit_price" => 5.99,
         	"quantity" => 150,
            "provider_id" => 3,
            "category_id" => 4,
            "tax_id" => 4,
         ]);
        Products::create([
         	"description" => "carne",
            "unit_price" => 10.99,
         	"quantity" => 200,
            "provider_id" => 6,
            "category_id" => 3,
            "tax_id" => 4,
         ]);
        Products::create([
         	"description" => "crema dental 250gr",
            "unit_price" => 3.99,
         	"quantity" => 250,
            "provider_id" => 5,
            "category_id" => 2,
            "tax_id" => 1,
         ]);
        Products::create([
         	"description" => "camisa amarilla",
            "unit_price" => 5.99,
         	"quantity" => 100,
            "provider_id" => 4,
            "category_id" => 2,
            "tax_id" => 3,
         ]);
        Products::create([
         	"description" => "camisa verde",
            "unit_price" => 6.99,
         	"quantity" => 100,
            "provider_id" => 4,
            "category_id" => 2,
            "tax_id" => 3,
         ]);
        Products::create([
         	"description" => "remedio",
            "unit_price" => 10.99,
         	"quantity" => 100,
            "provider_id" => 6,
            "category_id" => 1,
            "tax_id" => 4,
         ]);
    }
}
