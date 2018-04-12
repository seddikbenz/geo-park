<?php

namespace App\Http\Controllers;

use App\Park;
use Illuminate\Http\Request;

class ParkController extends Controller {
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index() {
    return Park::all();
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create() {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request) {
    return Park::create($request->all());
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Park $parc
   * @return \Illuminate\Http\Response
   */
  public function show(Park $parc) {
    return $parc;
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Park $parc
   * @return \Illuminate\Http\Response
   */
  public function edit(Park $parc) {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  \App\Park $parc
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Park $parc) {
    $name = $request->get('name');
    $parc->name = $name;
    $parc->save();
    return $parc;
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Park $parc
   * @return \Illuminate\Http\Response
   */
  public function destroy(Park $parc) {
    $parc->delete();
    return ['status'=> 204];
  }
}
