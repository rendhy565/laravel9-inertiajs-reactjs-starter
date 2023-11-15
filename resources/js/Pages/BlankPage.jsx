import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Base from '../Layouts/Base';

export default function BlankPage() {
  // State to manage form data
  const [formData, setFormData] = useState({
    noUrut: '',
    noPks: '',
    mitra: '',
    pic: '',
    noPic: '',
    alamat: '',
    namaDirektur: '',
    jabatan: '',
    tanggalMulaiPks: '',
    tanggalAkhirPks: '',
    judulPekerjaan: '',
    kategoriPekerjaan: '',
    bank: '',
    noRek: '',
    atasNama: '',
    tglPks: '',
    pksInduk: '',
    amandemenKe: '',
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = async () => {
    // Reset form errors
    setFormErrors({});

    // Check for blank fields
    const errors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = 'This field is required';
      }
    });

    // If there are errors, update state and stop submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // If no errors, submit the form data to the Laravel backend
    try {
      await Inertia.post('/submit-form', formData, {
        onError: (errors) => {
          // Handle form validation errors
          setFormErrors(errors);
        },
        onSuccess: () => {
          // Handle success if needed
          alert('Form submitted successfully!');
          // You can also redirect to another page if needed
          // Inertia.visit('/another-page');
        },
      });
    } catch (error) {
      // Handle error if needed
      console.error(error);
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to clear input form
  const handleClear = () => {
    // Clear all form fields
    setFormData({
      noUrut: '',
      noPks: '',
      mitra: '',
      pic: '',
      noPic: '',
      alamat: '',
      namaDirektur: '',
      jabatan: '',
      tanggalMulaiPks: '',
      tanggalAkhirPks: '',
      judulPekerjaan: '',
      kategoriPekerjaan: '',
      bank: '',
      noRek: '',
      atasNama: '',
      tglPks: '',
      pksInduk: '',
      amandemenKe: '',
    });

    // Reset form errors
    setFormErrors({});
  };

  return (
    <div>
      <h1>This is a Blank Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="noUrut">NO URUT:</label>
          <input
            type="text"
            id="noUrut"
            name="noUrut"
            value={formData.noUrut}
            onChange={handleChange}
          />
          {formErrors.noUrut && <div style={{ color: 'red' }}>{formErrors.noUrut}</div>}
        </div>

        <div>
          <label htmlFor="noPks">NO PKS:</label>
          <input
            type="text"
            id="noPks"
            name="noPks"
            value={formData.noPks}
            onChange={handleChange}
          />
          {formErrors.noPks && <div style={{ color: 'red' }}>{formErrors.noPks}</div>}
        </div>

        <div>
          <label htmlFor="mitra">MITRA:</label>
          <input
            type="text"
            id="mitra"
            name="mitra"
            value={formData.mitra}
            onChange={handleChange}
          />
          {formErrors.mitra && <div style={{ color: 'red' }}>{formErrors.mitra}</div>}
        </div>

        <div>
          <label htmlFor="pic">PIC:</label>
          <input
            type="text"
            id="pic"
            name="pic"
            value={formData.pic}
            onChange={handleChange}
          />
          {formErrors.pic && <div style={{ color: 'red' }}>{formErrors.pic}</div>}
        </div>

        <div>
          <label htmlFor="noPic">NO PIC:</label>
          <input
            type="text"
            id="noPic"
            name="noPic"
            value={formData.noPic}
            onChange={handleChange}
          />
          {formErrors.noPic && <div style={{ color: 'red' }}>{formErrors.noPic}</div>}
        </div>

        <div>
          <label htmlFor="alamat">ALAMAT:</label>
          <input
            type="text"
            id="alamat"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
          />
          {formErrors.alamat && <div style={{ color: 'red' }}>{formErrors.alamat}</div>}
        </div>

        <div>
          <label htmlFor="namaDirektur">NAMA DIREKTUR:</label>
          <input
            type="text"
            id="namaDirektur"
            name="namaDirektur"
            value={formData.namaDirektur}
            onChange={handleChange}
          />
          {formErrors.namaDirektur && (
            <div style={{ color: 'red' }}>{formErrors.namaDirektur}</div>
          )}
        </div>

        <div>
          <label htmlFor="jabatan">JABATAN:</label>
          <input
            type="text"
            id="jabatan"
            name="jabatan"
            value={formData.jabatan}
            onChange={handleChange}
          />
          {formErrors.jabatan && <div style={{ color: 'red' }}>{formErrors.jabatan}</div>}
        </div>

        <div>
          <label htmlFor="tanggalMulaiPks">TANGGAL MULAI PKS:</label>
          <input
            type="date"
            id="tanggalMulaiPks"
            name="tanggalMulaiPks"
            value={formData.tanggalMulaiPks}
            onChange={handleChange}
          />
          {formErrors.tanggalMulaiPks && (
            <div style={{ color: 'red' }}>{formErrors.tanggalMulaiPks}</div>
          )}
        </div>

        <div>
          <label htmlFor="tanggalAkhirPks">TANGGAL AKHIR PKS:</label>
          <input
            type="date"
            id="tanggalAkhirPks"
            name="tanggalAkhirPks"
            value={formData.tanggalAkhirPks}
            onChange={handleChange}
          />
          {formErrors.tanggalAkhirPks && (
            <div style={{ color: 'red' }}>{formErrors.tanggalAkhirPks}</div>
          )}
        </div>

        <div>
          <label htmlFor="judulPekerjaan">JUDUL PEKERJAAN:</label>
          <input
            type="text"
            id="judulPekerjaan"
            name="judulPekerjaan"
            value={formData.judulPekerjaan}
            onChange={handleChange}
          />
          {formErrors.judulPekerjaan && (
            <div style={{ color: 'red' }}>{formErrors.judulPekerjaan}</div>
          )}
        </div>

        <div>
          <label htmlFor="kategoriPekerjaan">KATEGORI PEKERJAAN:</label>
          <input
            type="text"
            id="kategoriPekerjaan"
            name="kategoriPekerjaan"
            value={formData.kategoriPekerjaan}
            onChange={handleChange}
          />
          {formErrors.kategoriPekerjaan && (
            <div style={{ color: 'red' }}>{formErrors.kategoriPekerjaan}</div>
          )}
        </div>

        <div>
          <label htmlFor="bank">BANK:</label>
          <input
            type="text"
            id="bank"
            name="bank"
            value={formData.bank}
            onChange={handleChange}
          />
          {formErrors.bank && <div style={{ color: 'red' }}>{formErrors.bank}</div>}
        </div>

        <div>
          <label htmlFor="noRek">NOREK:</label>
          <input
            type="text"
            id="noRek"
            name="noRek"
            value={formData.noRek}
            onChange={handleChange}
          />
          {formErrors.noRek && <div style={{ color: 'red' }}>{formErrors.noRek}</div>}
        </div>

        <div>
          <label htmlFor="atasNama">ATAS NAMA:</label>
          <input
            type="text"
            id="atasNama"
            name="atasNama"
            value={formData.atasNama}
            onChange={handleChange}
          />
          {formErrors.atasNama && <div style={{ color: 'red' }}>{formErrors.atasNama}</div>}
        </div>

        <div>
          <label htmlFor="tglPks">TANGGAL PKS:</label>
          <input
            type="date"
            id="tglPks"
            name="tanggal_pks"
            value={formData.tanggal_pks}
            onChange={handleChange}
          />
          {formErrors.tanggal_pks && <div style={{ color: 'red' }}>{formErrors.tanggal_pks}</div>}
        </div>

        <div>
          <label htmlFor="pksInduk">PKS INDUK:</label>
          <input
            type="text"
            id="pksInduk"
            name="pks_induk"
            value={formData.pks_induk}
            onChange={handleChange}
          />
          {formErrors.pks_induk && <div style={{ color: 'red' }}>{formErrors.pks_induk}</div>}
        </div>

        <div>
          <label htmlFor="amandemenKe">AMANDEMEN KE:</label>
          <input
            type="text"
            id="amandemenKe"
            name="amandemen_ke"
            value={formData.amandemen_ke}
            onChange={handleChange}
          />
          {formErrors.amandemen_ke && (
            <div style={{ color: 'red' }}>{formErrors.amandemen_ke}</div>
          )}
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

BlankPage.layout = (page) => <Base children={page} title={'Blank Page'} />;