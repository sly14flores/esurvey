<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAspectItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aspect_items', function (Blueprint $table) {
            $table->id();			
			$table->foreignId('aspect_id')->constrained('section_aspects')
				  ->onDelete('cascade')
				  ->onUpdate('no action');
			$table->tinyInteger('required')->nullable();				  
			$table->string('item_name')->nullable();
			$table->string('translated')->nullable();			
			$table->integer('item_type')->nullable();
			$table->integer('item_presentation')->nullable();
			$table->integer('max_checkbox_selections')->nullable();
			$table->longText('item_infographic')->nullable();
			$table->tinyInteger('use_images')->nullable();					  
			$table->tinyInteger('text_is_multiple')->nullable();					  
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
        Schema::dropIfExists('aspect_items');
    }
}
