<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products__invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')
              ->nullable()
              ->constrained('products')
              ->onDelete('cascade');
            $table->foreignId('invoice_id')
              ->nullable()
              ->constrained('invoices')
              ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::table('products__invoices', function (Blueprint $table) {
        $table->dropForeign(['product_id']);
        $table->dropForeign(['invoice_id']);
        });
        Schema::dropIfExists('products__invoices');
    }
}
