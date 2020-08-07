<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeingsIdToProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->foreignId('provider_id')
              ->nullable()
              ->constrained('providers')
              ->onDelete('cascade');
            $table->foreignId('category_id')
              ->nullable()
              ->constrained('categories')
              ->onDelete('cascade');
            $table->foreignId('tax_id')
              ->nullable()
              ->constrained('taxes')
              ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
        $table->dropForeign(['provider_id']);
        $table->dropForeign(['category_id']);
        $table->dropForeign(['tax_id']);
        });
        Schema::table('products', function (Blueprint $table) {
        $table->dropColumn([
            'provider_id',
            'category_id',
            'tax_id'
        ]);
        });
    }
}
