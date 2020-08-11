<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoices extends Model
{
    protected $fillable = [
        'sub_total',
        'total',
        'quantity_product_sold',
        'IVA'
    ];
}
