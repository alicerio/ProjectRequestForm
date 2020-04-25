<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectReadinessElementsTable extends Migration
{
    /**
     * Creates the following columns for the Project Readiness Elements,
     * in the Database.
     * @return void
     */
    public function up()
    {
        Schema::create('project_readiness_elements', function (Blueprint $table) {
            $table->increments('id');               // Unique ID for each row.
            $table->string('Element');
            $table->date('Est_Start_Date');
            $table->date('Est_End_Date');
            $table->integer('Progress');
            $table->string('Resp_Agency');
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
        Schema::dropIfExists('project_readiness_elements');
    }
}
