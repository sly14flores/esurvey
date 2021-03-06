<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddInfographicsAspectItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('aspect_items', function (Blueprint $table) {
            $table->longText('item_infographic_left')->nullable()->after('item_infographic');
            $table->longText('item_infographic_right')->nullable()->after('item_infographic_left');
            $table->longText('item_infographic_bottom_logo')->nullable()->after('item_infographic_right');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('aspect_items', function (Blueprint $table) {
            //
        });
    }
}
