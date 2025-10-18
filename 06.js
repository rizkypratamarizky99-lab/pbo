 class Kendaraan {
   constructor(merk) {
     this.merk = merk;
 }
 // Method abstrak (harus diimplementasikan oleh subclass)
 maju() {
     throw new Error("Method 'maju()' harus 
   diimplementasikan!");
   }
 }


