<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAivSubItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aiv_sub_items', function (Blueprint $table) {
            $table->id();
			$table->foreignId('vsi_id')->constrained('aspect_item_values')
				  ->onDelete('cascade')
				  ->onUpdate('no action');
			$table->string('display')->nullable();				  
			$table->string('display_translated')->nullable();				  
			$table->string('vsi_value')->nullable();				  
			$table->tinyInteger('vsi_value_other')->nullable();
			$table->string('vsi_min')->nullable();
			$table->tinyInteger('min_below')->nullable();
			$table->string('vsi_max')->nullable();
			$table->tinyInteger('max_above')->nullable();
			$table->integer('data_type')->nullable();				
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
        Schema::dropIfExists('aiv_sub_items');
    }
}
