<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCartypesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('cartypes', function (Blueprint $table) {
      $table->increments('id');
      $table->string('name')->unique();
      $table->integer('user_id')->unsigned()->index()->references('id')->on('users');
      $table->integer('carcategory_id')->unsigned()->index()->references('id')->on('carcategories');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('cartypes');
  }
}
