<?php

use App\Taxes;
use Illuminate\Database\Seeder;

class TaxesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	//start impuestos
       Taxes::create([
       		"rate_type"=>0,
            "tax_name" => "Exento",
            "value" => 0.00
        ]);
       Taxes::create([
       		"rate_type"=>1,
            "tax_name" => "IVA G",
            "value" => 0.12
        ]);
       Taxes::create([
       		"rate_type"=>2,
            "tax_name" => "IVA R",
            "value" => 0.08
        ]);
       Taxes::create([
       		"rate_type"=>3,
            "tax_name" => "IVA A",
            "value" => 0.22
        ]);
    	//end impuestos
    }
}
