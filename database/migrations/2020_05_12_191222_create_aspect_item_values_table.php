<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAspectItemValuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aspect_item_values', function (Blueprint $table) {
            $table->id();
			$table->foreignId('aspect_item_id')->constrained('aspect_items')
				  ->onDelete('cascade')
				  ->onUpdate('no action');
			$table->string('display')->nullable();				  
			$table->string('display_translated')->nullable();				  
			$table->string('siv_value')->nullable();				  
			$table->tinyInteger('siv_value_other')->nullable();
			$table->string('siv_min')->nullable();
			$table->tinyInteger('min_below')->nullable();
			$table->string('siv_max')->nullable();
			$table->tinyInteger('max_above')->nullable();		
			$table->integer('data_type')->nullable();		
			$table->integer('row_type')->nullable();
			$table->longText('siv_infographic')->nullable();
			$table->tinyInteger('highest')->nullable();
			$table->tinyInteger('lowest')->nullable();
			$table->tinyInteger('required')->nullable();			
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
        Schema::dropIfExists('aspect_item_values');
    }
}
