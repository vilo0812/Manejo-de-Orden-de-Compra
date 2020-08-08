<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Providers extends Model
{
   public $timestamps = false;
   protected $fillable = [
        'name',
        'address',
        'phone',
        'phone',
        'email', 
        'rif',
    ];
}
