<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSectionItemAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('section_item_answers', function (Blueprint $table) {
            $table->id();
			$table->foreignId('respondent_id')->constrained()
				  ->onDelete('cascade')
				  ->onUpdate('no action');
            $table->bigInteger('section_item_id')->nullable();
			$table->string('answer')->nullable();
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
        Schema::dropIfExists('section_item_answers');
    }
}
