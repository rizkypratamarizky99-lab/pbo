class Mahasiswa {
  constructor(nama,nim,jurusan) {
  this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

belajar() {
  console.log(`${this.nama} sedang belajar.`);
  }
}

let mhs1 = new Mahasiswa("lutfi", 54321, 'RPL')
mhs1.belajar()

let mhs2 = new Mahasiswa("rizki", 12345, 'informatika')
mhs2.belajar()
