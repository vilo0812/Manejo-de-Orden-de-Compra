<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    $this->truncateTable([
        'users',
        'providers',
        'categories',
        'taxes',
        'products'
        ]);
        $this->call(UserSeeder::class);
        $this->call(ProviderSeeder::class);
        $this->call(CategoriesSeeder::class);
        $this->call(TaxesSeeder::class);
        $this->call(ProductsSeeder::class);
    }
    public function truncateTable(array $tables){
      DB::statement('SET FOREIGN_KEY_CHECKS = 0;');
      foreach($tables as $table){
          DB::table($table)->truncate();
      }
      DB::statement('SET FOREIGN_KEY_CHECKS = 1;');
    }
}
