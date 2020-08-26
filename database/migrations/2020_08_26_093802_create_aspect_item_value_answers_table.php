<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAspectItemValueAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aspect_item_value_answers', function (Blueprint $table) {
            $table->id();
			$table->foreignId('respondent_id')->constrained()
				  ->onDelete('cascade')
				  ->onUpdate('no action');
            $table->bigInteger('aspect_item_value_id')->nullable();
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
        Schema::dropIfExists('aspect_item_value_answers');
    }
}
