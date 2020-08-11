<?php

namespace App;

use App\Taxes;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'description',
        'unit_price',
        'quantity',
        'provider_id',
        'category_id',
        'tax_id',
    ];
    public function tax(){
      return $this->belongsTo(Taxes::class);
    }
}
