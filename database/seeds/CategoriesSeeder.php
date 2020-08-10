<?php

use App\Categories;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(Categories::class,10)->create();
        //start categorias
         Categories::create([
         	"category_name" => "clinica",
            "code" => "277dsbe27132b132173gydb213xsads",
         ]);
         Categories::create([
         	"category_name" => "hogar",
            "code" => "pgonmklmgimfimakfmioamdamsdowek",
         ]);
         Categories::create([
         	"category_name" => "comida",
            "code" => "sadsa1312321321j3jx3ni21j3xi213",
         ]);
         Categories::create([
         	"category_name" => "electrodomesticos",
            "code" => "aklmndsakdn12321mn2kn2n3k213212",
         ]);
        //end categorias
    }
}
