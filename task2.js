// Buat sebuah function dengan aturan paramaternya sebagai berikut :
// Harus array
// Value dari array harus integer / number
// 5 value pertama positive 5 value terakhir negative
// Jika
//       paramater tidak memenuhi kriteria , tampilkan pesan error berupa alert
// Else
//      Jika
//           parameter positive kalikan value value tersebut
//      Else
//          Jumlah semua bilangan negative

// Lalu return kedua value yang sudah di olah kedalam array

// Contoh
// nama_Function([1,2,3,4,5, -1,-2,-3,-4,-5])
// Expected output :
// [120, -15]

// let arrAngka = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
// let positive = [];
// let negative = [];
// function kaliTambah(arrAngka) {
//   for (let index = 0; index < arrAngka.length; index++) {
//     if (Math.sign(index) == 1) {
//       positive *= arrAngka[index];
//     } else {
//       negative += arrAngka[index];
//     }
//   }
//   return [positive, negative];
// }

// console.log(kaliTambah(arrAngka));

// console.log(Math.sign(arrAngka[6]));

let arrAngka = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
let positive = 0;
let negative = 0;
function kaliTambah(arrAngka) {
  let positive = 1;
  let negative = 0;
  if (arrAngka.length && typeof arrAngka !== "string") {
    for (let index = 0; index < arrAngka.length; index++) {
      if (arrAngka[index] > 0) {
        positive *= arrAngka[index];
      } else if (arrAngka[index] < 0) {
        negative += arrAngka[index];
      }
    }
    return [positive, negative];
  } else {
    console.log("salah!");
    return [];
  }
}

console.log(kaliTambah(arrAngka));
