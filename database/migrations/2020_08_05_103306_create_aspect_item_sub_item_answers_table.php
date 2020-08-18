<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAspectItemSubItemAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aspect_item_sub_item_answers', function (Blueprint $table) {
            $table->id();
			$table->foreignId('respondent_id')->constrained()
				  ->onDelete('cascade')
				  ->onUpdate('no action');
            $table->bigInteger('aspect_item_sub_item_id')->nullable();
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
        Schema::dropIfExists('aspect_item_sub_item_answers');
    }
}
