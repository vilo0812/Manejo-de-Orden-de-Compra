<?php

namespace App;

use App\Products;
use Illuminate\Database\Eloquent\Model;

class Taxes extends Model
{
    public $timestamps = false;
    public function product()
    {
        return $this->hasMany(Products::class);
    }
}
