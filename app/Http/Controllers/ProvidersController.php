<?php

namespace App\Http\Controllers;

use App\Providers;
use Illuminate\Http\Request;
use Validator;

class ProvidersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    $providers= Providers::orderBy('id', 'DESC')->get();
    return response()->json($providers,200);
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
            'name' => 'required|string|between:2,100',
            'address' => 'required|string|between:2,100',
            'phone' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'rif' => 'required|string|min:3',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $provider = Providers::create($validator->validated());
        return response()->json([
            'message' => 'Provider successfully registered',
            'provider' => $provider
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
       $prov = Providers::findOrFail($id);
        $prov->name=$request->name;
        $prov->address=$request->address;
        $prov->phone=$request->phone;
        $prov->email=$request->email;
        $prov->rif=$request->rif;
        $prov->save();
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
        $prov = Providers::findOrFail($id);
        $prov->delete();
        return response()->json(['mensaje'=>'usuario eliminado exitosamente'],200);
    }
}
