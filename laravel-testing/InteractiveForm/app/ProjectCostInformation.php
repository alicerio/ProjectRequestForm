<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Handles Mass Asignment Exception. 
 * Array that contains all columns from Project Cost Information Table.
 */
class ProjectCostInformation extends Model
{
    protected $fillable = ['Non-Construction_Project', 'Construction', 'Construction_Engineering_(CE)', 
                            'Contingencies', 'Potential_Change_Order', 'Preliminary_Engineering', 'Indirects',
                            'Right-Of-Way', 'FTA_Transfer', 'Construction_Subtotal', 'Total_Project_Cost'];
}
