<?php

// database/migrations/2023_11_12_000000_create_database_pks_mitra_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatabasePksMitraTable extends Migration
{
    public function up()
    {
        Schema::create('database_pks_mitra', function (Blueprint $table) {
            $table->id();
            $table->integer('no_urut')->nullable();
            $table->string('no_pks')->nullable();
            $table->string('mitra')->nullable();
            $table->string('pic')->nullable();
            $table->string('no_pic')->nullable();
            $table->text('alamat')->nullable();
            $table->string('nama_direktur')->nullable();
            $table->string('jabatan')->nullable();
            $table->date('tanggal_mulai_pks')->nullable();
            $table->date('tanggal_akhir_pks')->nullable();
            $table->string('judul_pekerjaan')->nullable();
            $table->string('kategori_pekerjaan')->nullable();
            $table->string('bank')->nullable();
            $table->string('norek')->nullable();
            $table->string('atas_nama')->nullable();
            $table->date('tanggal_pks')->nullable();
            $table->string('pks_induk')->nullable();
            $table->integer('amandemen_ke')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('database_pks_mitra');
    }
}
