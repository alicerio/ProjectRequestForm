<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\UsersExport;
use App\User;

class UserController extends Controller
{
    /**
     * Exports database data to PDF
     */
    public function exportPdf()
    {
        $users = User::get();
        $pdf = PDF::loadView('pdf.users',compact('users'));
        return $pdf->download('user-list.pdf');
    }

    /**
     * Exports data to an excel file.
     */
    public function exportExcel()
    {
        return Excel::download(new UsersExport, 'user-list.xlsx');
    }
}
