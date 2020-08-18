<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSectionAspectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('section_aspects', function (Blueprint $table) {
            $table->id();
			$table->foreignId('section_id')->constrained('survey_sections')
				  ->onDelete('cascade')
				  ->onUpdate('no action');
			$table->string('aspect_name')->nullable();
			$table->string('translated')->nullable();			
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
        Schema::dropIfExists('section_aspects');
    }
}
