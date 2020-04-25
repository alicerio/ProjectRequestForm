<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProjectReadinessElements;       // Calls the folder.

class ProjectReadinessElementsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Displays view file in browser.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('ProjectReadinessElements.create');
    }

    /**
     * Stores data into Mysql table.
     * Validates that all data fields are filled.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'Element'           => 'required', 
            'Est_Start_Date'    => 'required',
            'Est_End_Date'      => 'required',
            'Progress'          => 'required',
            'Resp_Agency'       => 'required',
        ]);
        $ProjectReadinessElements = new ProjectReadinessElements([ // Creates object that contains each column.
            'Element'           => $request->get('Element'),
            'Est_Start_Date'    => $request->get('Est_Start_Date'),
            'Est_End_Date'      => $request->get('Est_End_Date'),
            'Progress'          => $request->get('Progress'),
            'Resp_Agency'       => $request->get('Resp_Agency')
        ]);
        $ProjectReadinessElements->save(); // Saves the input from the user.
        return redirect()->route('ProjectReadinessElements.create')->with('success', 'Data Added');
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
