class Mahasiswa {
  constructor(nama, nim, nilai) {
    this.nama = nama; 
    this.nim = nim;   

    let _nilai = nilai; 

    // 1. Getter untuk nilai
    this.getNilai = function() {
      return _nilai;
    };

    // 2. Setter untuk mengubah nilai dengan validasi
    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log('Nilai harus antara 0 dan 100');
      }
    };

    // 3. Method untuk menampilkan semua info mahasiswa
    this.getInfo = function() {
      return `Nama: ${this.nama}, NIM: ${this.nim}, Nilai: ${_nilai}`;
    };

    // 4. Method untuk mengupdate nama
    this.updateNama = function(namaBaru) {
      if (namaBaru.trim() !== "") {
        this.nama = namaBaru;
      } else {
        console.log("Nama tidak boleh kosong!");
      }
    };
  }
}

// 🔹 Object 1
let mhs1 = new Mahasiswa('RIZKI', '202401110063', 85);
console.log(mhs1.getInfo()); 

mhs1.setNilai(100);
console.log("Nilai baru mhs1:", mhs1.getNilai());

mhs1.updateNama("DANI");
console.log(mhs1.getInfo());

// 🔹 Object 2
let mhs2 = new Mahasiswa('LUTFI', '29292929229', 80);
console.log(mhs2.getInfo());

mhs2.setNilai(90);
console.log("Nilai baru mhs2:", mhs2.getNilai());

mhs2.updateNama("ANDRA");
console.log(mhs2.getInfo());
