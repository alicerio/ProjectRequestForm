<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;                         // Database class
use Excel;                      // Excel 
class ExportExcelController extends Controller

{
    function index()
    {
        $data = DB::table('excels')->get();
        return view('export_excel')->with('data',$data);
    }
    
    function excel()
    {
        $data = DB::table('excels')->get()->toArray();
        $data_array[] = array('name', 'year', 'age');
        foreach($data as $mydata)
        {
            $data_array[] = array(
                'name' => $mydata->name,
                'year' => $mydata->year,
                'age' => $mydata->age
            );
        }
        Excel::create("Data", function($excel)use(
            $data_array){
            $excel->setTitle("Data");
            $excel->sheet("Data",function($sheet)
                use ($data_array){
                $sheet->fromArray($data_array, null, 'A1',false,false);
            });
        })->download('xlsx');
    }
}
