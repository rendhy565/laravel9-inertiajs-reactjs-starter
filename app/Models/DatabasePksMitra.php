<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DatabasePksMitra extends Model
{
    use HasFactory;

    protected $fillable = [
        'no_urut',
        'no_pks',
        'mitra',
        'pic',
        'no_pic',
        'alamat',
        'nama_direktur',
        'jabatan',
        'tanggal_mulai_pks',
        'tanggal_akhir_pks',
        'judul_pekerjaan',
        'kategori_pekerjaan',
        'bank',
        'norek',
        'atas_nama',
        'tanggal_pks',
        'pks_induk',
        'amandemen_ke',
        // Add other fields
    ];
}
