<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectCostInformationTable extends Migration
{
    /**
     * Creates the following columns for the Project Cost Information,
     * in the Database.
     * @return void
     */
    public function up() 
    {
        Schema::create('project_cost_information', function (Blueprint $table) {
            $table->increments('id');                       // Unique ID for each row.
            $table->integer('Non-Construction_Project');
            $table->integer('Construction');
            $table->integer('Construction_Engineering_(CE)');
            $table->integer('Contingencies');
            $table->integer('Potential_Change_Order');
            $table->integer('Preliminary_Engineering');
            $table->integer('Indirects');
            $table->integer('Right-Of-Way');
            $table->integer('FTA_Transfer');
            $table->integer('Construction_Subtotal');
            $table->integer('Total_Project_Cost');
            $table->timestamps();   
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_cost_information');
    }
}
