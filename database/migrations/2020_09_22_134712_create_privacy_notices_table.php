<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrivacyNoticesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('privacy_notices', function (Blueprint $table) {
            $table->id();
			$table->foreignId('survey_id')->constrained()
				  ->onDelete('cascade')
				  ->onUpdate('no action');
			$table->longText('content')->nullable();				  
			$table->longText('translated')->nullable();				  
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
        Schema::dropIfExists('privacy_notices');
    }
}
