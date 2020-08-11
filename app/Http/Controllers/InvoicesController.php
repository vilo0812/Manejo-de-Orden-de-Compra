<?php

namespace App\Http\Controllers;

use App\Invoices;
use App\Products;
use App\Products_Invoices;
use Illuminate\Http\Request;
use Validator;
class InvoicesController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $prod = Products::findOrFail($request->product_id);
        $validator = Validator::make($request->all(), [
            'sub_total' => 'required|numeric',
            'total' => 'required|numeric',
            'product_id' => 'required|numeric',
            'quantity_product_sold' => 'required|numeric|between:0,'.$prod->quantity,
            'IVA' => 'required|numeric',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $invoices = Invoices::create($validator->validated());
        
		$prod->quantity =  ($prod->quantity - $request->quantity_product_sold);
		$prod->save();
		$total = Products_Invoices::create([
			'product_id' => $prod->id,
			'invoice_id' => $invoices->id,
		]);
        return response()->json([
            'message' => 'Invoice successfully registered',
            'producto' => $total
        ], 201);
    }
}
