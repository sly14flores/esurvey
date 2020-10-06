<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeySectionItemValueAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('section_item_value_answers', function (Blueprint $table) {
			$table->unsignedBigInteger('section_item_answer_id')->after('section_item_value_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('section_item_value_answers', function (Blueprint $table) {
            //
        });
    }
}
