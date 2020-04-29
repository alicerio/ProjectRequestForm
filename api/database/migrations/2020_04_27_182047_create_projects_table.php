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

            $table->unsignedBigInteger('parent_id')->nullable(); // use this field to reference a previous project / revision; if it's a new project then it won't have a parent id

            $table->string('mpo_id');
            $table->string('csj_cn');
            $table->string('name');
            $table->string('description');
            $table->string('limit_from');
            $table->string('limit_to');
            $table->string('relationship_description');
            $table->string('need_purpose');
            $table->string('agency_comments');

            $table->tinyInteger('existing_lanes');
            $table->tinyInteger('projected_lanes');

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('projects');
    }
}