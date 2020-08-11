<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products_Invoices extends Model
{
	protected $fillable = [
        'product_id',
   		'invoice_id'
    ];
}
