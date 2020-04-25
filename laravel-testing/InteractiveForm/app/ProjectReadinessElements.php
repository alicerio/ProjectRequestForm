<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Handles Mass Asignment Exception. 
 * Array that contains all columns from Project Cost Information Table.
 */
class ProjectReadinessElements extends Model
{
    protected $fillable = ['Element', 'Est_Start_Date', 'Est_End_Date', 'Progress', 'Resp_Agency'];
}
