<?php

namespace App\Http\Controllers;

use App\Models\DatabasePksMitra;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlankPageController extends Controller
{
    public function index()
    {
        return Inertia::render('BlankPage');
    }

    public function submitForm(Request $request)
    {
        try{
        $request->validate([
            'noUrut' => 'required',
            'noPks' => 'required',
            'mitra' => 'required',
            'pic' => 'required',
            'noPic' => 'required',
            'alamat' => 'required',
            'namaDirektur' => 'required',
            'jabatan' => 'required',
            'tanggalMulaiPks' => 'required|date',
            'tanggalAkhirPks' => 'required|date',
            'judulPekerjaan' => 'required',
            'kategoriPekerjaan' => 'required',
            'bank' => 'required',
            'noRek' => 'required',
            'atasNama' => 'required',
            'tanggal_pks' => 'required',
            'pks_induk' => 'required',
            'amandemen_ke' => 'required',
            // Add validation rules for other fields
        ]);

        // If validation passes, save the data to the database
        DatabasePksMitra::create($request->all());

        // Clear the form fields
        $request->session()->flash('success', 'Form submitted successfully!');
        return redirect()->back();
        }
        catch (\Exception $e) {
            // Log the exception for debugging
            \Log::error('Exception caught while submitting form: ' . $e->getMessage());
    
            // Rethrow the exception
            throw $e;
        }
    }
}
