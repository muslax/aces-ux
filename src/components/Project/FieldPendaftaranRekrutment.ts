export type FieldPendaftaran = {
  id: string;
  type: 'input' | 'attachment';
  label: string;
  obligatory?: boolean;
  included?: boolean;
  required?: boolean;
};

export const FieldPendaftaranRekrutmen: FieldPendaftaran[] = [
  { id: 'FDR01', type: 'input', label: 'Email', obligatory: true },
  { id: 'FDR02', type: 'input', label: 'Nama Lengkap', obligatory: true },
  { id: 'FDR03', type: 'input', label: 'Jenis Kelamin' },
  { id: 'FDR04', type: 'input', label: 'Tempat Lahir' },
  { id: 'FDR05', type: 'input', label: 'Tanggal Lahir' },
  { id: 'FDR06', type: 'input', label: 'Telepon/HP' },
  { id: 'FDR07', type: 'input', label: 'Agama' },
  { id: 'FDR08', type: 'input', label: 'Suku Bangsa' },
  { id: 'FDR09', type: 'input', label: 'Kewarganegaraan' },
  //
  { id: 'FDR10', type: 'input', label: 'Status Perkawinan' },
  { id: 'FDR11', type: 'input', label: 'Nomor KTP' },
  { id: 'FDR12', type: 'input', label: 'Alamat sesuai KTP' },
  { id: 'FDR13', type: 'input', label: 'Kota sesuai KTP' },
  { id: 'FDR14', type: 'input', label: 'Propinsi sesuai KTP' },
  { id: 'FDR15', type: 'input', label: 'Kode Pos sesuai KTP' },
  { id: 'FDR16', type: 'input', label: 'Alamat Domisili' },
  { id: 'FDR17', type: 'input', label: 'Kota Domisili' },
  { id: 'FDR18', type: 'input', label: 'Propinsi Domisili' },
  { id: 'FDR19', type: 'input', label: 'Kode Pos Domisili' },
  { id: 'FDR20', type: 'input', label: 'Pendidikan Terakhir' },
  { id: 'FDR21', type: 'input', label: 'Perguruan Tinggi' },
  { id: 'FDR22', type: 'input', label: 'Akreeditasi Fakultas' },
  { id: 'FDR23', type: 'input', label: 'Jurusan' },
  { id: 'FDR24', type: 'input', label: 'IPK' },
  { id: 'FDR25', type: 'input', label: 'Bahasa Inggris' },
  { id: 'FDR26', type: 'input', label: 'Pengalaman Bekerja Akademis' },
  { id: 'FDR27', type: 'input', label: 'Lama dan Gambaran Pekerjaan' },
  { id: 'FDR28', type: 'input', label: 'Pengalaman Bekerja Non Akademis' },
  { id: 'FDR29', type: 'input', label: 'Lama dan Gambaran Pekerjaan' },
  { id: 'FDR30', type: 'input', label: 'Pengalaman di luar Pekerjaan' },
  { id: 'FDR31', type: 'input', label: 'Hobi' },
  { id: 'FDR32', type: 'input', label: 'Keahlian Khusus' },
  { id: 'FDR33', type: 'input', label: 'Bersedia ditempatkan di luar kota' },
  { id: 'FDR34', type: 'attachment', label: 'Foto diri' },
  { id: 'FDR35', type: 'attachment', label: 'Foto ijazah SLTA' },
  { id: 'FDR36', type: 'attachment', label: 'Foto ijazah S1' },
  { id: 'FDR37', type: 'attachment', label: 'Foto sertifikat prestasi' },
  // */
];
