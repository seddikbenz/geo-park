<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCarmarksTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('carmarks', function (Blueprint $table) {
      $table->increments('id');
      $table->string('name')->unique();
      $table->binary('logo')->unique();
      $table->integer('user_id')->unsigned()->index()->references('id')->on('users');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('carmarks');
  }
}
