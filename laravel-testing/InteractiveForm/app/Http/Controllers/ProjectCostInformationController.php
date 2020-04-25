<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProjectCostInformation;       // Calls the folder.

class ProjectCostInformationController extends Controller
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
        return view('ProjectCostInformation.create');
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
            'Non-Construction_Project'       => 'required', 
            'Construction'                   => 'required',
            'Construction_Engineering_(CE)'  => 'required',
            'Contingencies'                  => 'required',
            'Potential_Change_Order'         => 'required',
            'Preliminary_Engineering'        => 'required',
            'Indirects'                      => 'required',
            'Right-Of-Way'                   => 'required',
            'FTA_Transfer'                   => 'required',
            'Construction_Subtotal'          => 'required',
            'Total_Project_Cost'             => 'required'
        ]);
        $ProjectCostInformation = new ProjectCostInformation([ // Creates object that contains each column.
            'Non-Construction_Project'       => $request->get('Non-Construction_Project'),
            'Construction'                   => $request->get('Construction'),
            'Construction_Engineering_(CE)'  => $request->get('Construction_Engineering_(CE)'),
            'Contingencies'                  => $request->get('Contingencies'),
            'Potential_Change_Order'         => $request->get('Potential_Change_Order'),
            'Preliminary_Engineering'        => $request->get('Preliminary_Engineering'),
            'Indirects'                      => $request->get('Indirects'),
            'Right-Of-Way'                   => $request->get('Right-Of-Way'),
            'FTA_Transfer'                   => $request->get('FTA_Transfer'),
            'Construction_Subtotal'          => $request->get('Construction_Subtotal'),
            'Total_Project_Cost'             => $request->get('Total_Project_Cost')
        ]);
        $ProjectCostInformation->save(); // Saves the input from the user.
        return redirect()->route('ProjectCostInformation.create')->with('success', 'Data Added');
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
