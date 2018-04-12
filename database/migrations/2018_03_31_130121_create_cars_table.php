<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCarsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('cars', function (Blueprint $table) {
      $table->increments('id');
      $table->string('code')->unique();
      $table->string('immatr');
      $table->string('chassis')->nullable();
      $table->string('color')->nullable();
      $table->string('color2')->nullable();
      $table->integer('nbplace')->nullable();
      $table->integer('nbdoor')->nullable();
      $table->string('radio_code')->nullable();
      $table->boolean('fuel_gpl');
      $table->integer('km_initial')->default(0);
      $table->boolean('in_mission')->default(false);

      $table->integer('user_id')->unsigned()->index()->references('id')->on('users');
      $table->integer('parc_id')->unsigned()->index()->nullable()->references('id')->on('parcs');
      $table->integer('carmark_id')->unsigned()->index()->references('id')->on('carmarks');
      $table->integer('carmodel_id')->unsigned()->index()->references('id')->on('carmodels');
      $table->integer('carcategory_id')->unsigned()->index()->references('id')->on('carcategories');
      $table->integer('cartype_id')->unsigned()->index()->references('id')->on('cartypes');
      $table->integer('fuel_id')->unsigned()->index()->references('id')->on('fuels');

      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('cars');
  }
}
