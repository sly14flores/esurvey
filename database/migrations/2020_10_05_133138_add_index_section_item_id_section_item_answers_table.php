<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIndexSectionItemIdSectionItemAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('section_item_answers', function (Blueprint $table) {
            $table->index('section_item_id');
            $table->foreign('section_item_id')->references('id')->on('section_items');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('section_item_answers', function (Blueprint $table) {
            //
        });
    }
}
