<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('agency_id');

            $table->unsignedBigInteger('parent_id')->nullable(); // use this field to reference a previous project / revision; if it's a new project then it won't have a parent id

            // only admins can edit mpo_id and csj_cn
            $table->string('mpo_id')->nullable();
            $table->string('csj_cn')->nullable();

            $table->string('name');
            $table->string('description')->nullable();
            $table->string('limit_from')->nullable();
            $table->string('limit_to')->nullable();
            $table->string('relationship_description')->nullable();
            $table->string('need_purpose')->nullable();
            $table->string('agency_comments')->nullable();

            $table->tinyInteger('existing_lanes')->nullable();
            $table->tinyInteger('projected_lanes')->nullable();

            $table->boolean('hwrw_funds_request')->nullable();
            $table->boolean('transit_funds_request')->nullable();
            $table->tinyInteger('fiscal_year')->nullable();
            $table->string('hwrw_name')->nullable();
            $table->tinyInteger('network_year')->nullable();
            $table->tinyInteger('type')->nullable();

            $table->boolean('on_state')->nullable();
            $table->boolean('off_state')->nullable();
            $table->boolean('capacity_project')->nullable();

            $table->tinyInteger('classification')->nullable();
            $table->tinyInteger('classification')->nullable();
            $table->tinyInteger('existing_lanes')->nullable();
            $table->tinyInteger('district')->nullable();
            $table->tinyInteger('projected_lanes')->nullable();
            $table->tinyInteger('county')->nullable();
            $table->tinyInteger('incorporated_city')->nullable();
            $table->string('sponsor_entity')->nullable();

            $table->boolean('psp_1')->nullable();
            $table->boolean('psp_2')->nullable();
            $table->boolean('psp_3')->nullable();
            $table->boolean('psp_4')->nullable();
            $table->boolean('psp_5')->nullable();
            $table->boolean('psp_6')->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('projects');
    }
}