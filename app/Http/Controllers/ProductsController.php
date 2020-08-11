<?php

namespace App\Http\Controllers;

use App\Products;
use Illuminate\Http\Request;
use Validator;
class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    // $products= Products::orderBy('id', 'DESC')->get();

    $products = Products::leftJoin("providers","products.provider_id","=","providers.id")
        ->join('categories',"products.category_id","=","categories.id")
        ->join('taxes',"products.tax_id","=","taxes.id")
        ->select('products.id','description','category_name','name','unit_price','tax_name','quantity')
        ->orderBy('products.id', 'DESC')
        ->get();
    return response()->json($products,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'description' => 'required|string',
            'unit_price' => 'required|numeric',
            'quantity' => 'required|numeric',
            'provider_id' => 'required|numeric',
            'category_id' => 'required|numeric',
            'tax_id' => 'required|numeric',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $products = Products::create($validator->validated());
        return response()->json([
            'message' => 'Product successfully registered',
            'producto' => $products
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
         $product = Products::findOrFail($id);
        return response()->json($product,200);
    }
    public function productTax($id)
    {
         $product = Products::findOrFail($id);
         $product->tax;
        return response()->json($product,200);
    }
    

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $prod = Products::findOrFail($id);
        $prod->description=$request->description;
        $prod->unit_price=$request->unit_price;
        $prod->quantity=$request->quantity;
        $prod->provider_id=$request->provider_id;
        $prod->category_id=$request->category_id;
        $prod->tax_id=$request->tax_id;
        $prod->save();
        return response()->json(['mensaje'=>'actualización exitosa'],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       $product = Products::findOrFail($id);
        $product->delete();
        return response()->json(['mensaje'=>'Producto eliminado exitosamente'],200);
    }
}
