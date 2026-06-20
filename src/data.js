export const problemsData = [
  {
    "id": "08A",
    "title": "08A. Praktikum 8 Soal 1 - Ganjil",
    "timeLimit": "1500 ms",
    "memoryLimit": "256 MB",
    "description": "Buat program untuk membaca input berupa N buah bilangan bulat, kemudian carilah nilai terkecil, terbesar dan jumlah dari semua bilangan yang ganjil.",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "5\n1 -1 -9 7 5",
    "outputExample": "-9 7 3",
    "referenceMaterials": [
      {
        "name": "KOM120C - K09 - FUNCTIONAL (1).pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "08B",
    "title": "08B. Praktikum 8 Soal 2 - Mutlak",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Buat program untuk membaca dua buah array berukuran sama (N) masing-masing bisa positif/negatif. Kemudian hitunglah hasil perkalian antara nilai mutlak terbesar dari array pertama dengan nilai mutlak terbesar dari array kedua.",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "5\n1 -1 -9 7 5\n20 7 -32 2 50",
    "outputExample": "450",
    "referenceMaterials": [
      {
        "name": "KOM120C - K09 - FUNCTIONAL (1).pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "08C",
    "title": "08C. Praktikum 8 Soal 3 - Faktorial",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Buatlah sebuah program yang menggunakan rekursi untuk menghitung nilai faktorial dari n, di mana n adalah bilangan bulat positif",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "5",
    "outputExample": "120",
    "referenceMaterials": [
      {
        "name": "KOM120C - K09 - FUNCTIONAL (1).pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "09A",
    "title": "09A. Praktikum 9 - Pengolah Nilai Ujian dengan Pure Functions dan Higher-Order Functions",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Diberikan N nilai ujian. Nilai bisa saja kurang dari 0 atau lebih dari 100. Program harus:\n\nmenormalkan setiap nilai ke rentang 0 s.d. 100,\nmenambahkan bonus 5 poin ke setiap nilai, tetapi nilai akhir tetap maksimal 100,\nmengambil hanya nilai yang lulus (nilai akhir >= 60),\nmenghitung jumlah seluruh nilai akhir,\nmenghitung rata-rata nilai akhir,\nmencari nilai akhir maksimum.\nKetentuan\n\nProgram harus menggunakan:\n\nminimal 2 fungsi murni,\nminimal 1 higher-order function buatan sendiri,\nmap,\nfilter,\nfoldLeft.\nFungsi yang wajib dibuat\n\nnormalizeScore(x: Int): Int\nMengubah nilai agar berada pada rentang 0 sampai 100.\nbonusScore(x: Int): Int\nMenambahkan 5 poin, tetapi hasil tetap maksimum 100.\ntransformScores(scores: List[Int], f: Int => Int): List[Int]\nMenerapkan sebuah fungsi ke seluruh elemen list.",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "Baris pertama: N\nBaris kedua: N bilangan bulat",
    "outputExample": "Cetak:\n\nlist nilai akhir,\nlist nilai yang lulus,\nbanyak mahasiswa lulus,\njumlah seluruh nilai akhir,\nrata-rata nilai akhir,\nnilai akhir maksimum.\nContoh Masukan 1\n6\n45 80 -10 60 98 120\nContoh Keluaran 1\nList(50, 85, 5, 65, 100, 100)\nList(85, 65, 100, 100)\n4\n405\n67.5\n100",
    "referenceMaterials": [
      {
        "name": "KOM120C - K09 - FUNCTIONAL (1).pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "10A",
    "title": "10A. Pengelompokan Kata",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Sebelum memulai praktikum utama pada mata kuliah KOM120C Pemrograman, mahasiswa diberikan sebuah latihan awal (warmup) untuk melatih kemampuan dasar dalam mengolah data.\n\nPada latihan ini, mahasiswa diminta untuk mengolah sekumpulan kata. Ia memperhatikan bahwa setiap kata memiliki huruf terakhir yang dapat digunakan sebagai dasar pengelompokan.\n\nMahasiswa tersebut ingin mengelompokkan semua kata berdasarkan huruf terakhirnya, lalu menghitung berapa banyak kata yang termasuk dalam setiap kelompok.\n\nAgar hasilnya mudah dibaca, ia menyusun hasil tersebut dengan aturan:\n\nKelompok dengan jumlah kata lebih banyak ditampilkan terlebih dahulu.\nJika terdapat kelompok dengan jumlah yang sama, maka diurutkan berdasarkan huruf secara alfabet.\nTugas Anda adalah membantu mahasiswa tersebut menyelesaikan latihan ini dengan menghasilkan daftar huruf terakhir beserta jumlah kemunculannya sesuai aturan yang diberikan.\n\nBatasan\n1\n≤\nN\n≤\n1000\n1≤N≤1000\nSetiap string terdiri dari huruf kecil (a–z)\nPanjang setiap string minimal 1 karakter",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "Masukan diberikan dalam format:\n\nBaris pertama berisi sebuah bilangan bulat\nN\nN\nN\nN baris berikutnya masing-masing berisi sebuah string\nN\nS1\nS2\n...\nSN",
    "outputExample": "Untuk setiap huruf terakhir yang muncul, tampilkan dalam format:\n\n<karakter> : <jumlah>\nDiurutkan berdasarkan:\n\nJumlah terbesar → terkecil\nJika sama, urut berdasarkan karakter (a–z)\nContoh Masukan 1\n6\nmakan\njalan\npemrograman\nmain\nminum\nmakan\nContoh Keluaran 1\nn : 5\nm : 1",
    "referenceMaterials": [
      {
        "name": "KOM120C - K10 - HOF - STUDENT.pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "10B",
    "title": "10B. Teman Setia Bilangan.txt",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Memory limit\t256 MB\nDescription\nDosen Pemrograman kelas K92 sering melakukan kuis dan menganalisis hasilnya untuk mengetahui kemampuan mahasiswa. Nilai kuis berupa bilangan bulat dengan selang 0-100, dan dosen memilih mahasiswa dengan nilai sedikitnya 75. Dosen hanya tertarik pada 5 mahasiswa (top-five).\n\nUntuk membantu dosen, buatlah program fungsional Scala untuk menganalisis nilai kuis mahasiswa dan menampilkan mahasiswa yang masuk ke dalam top-five sesuai dengan kriteria yang ditentukan. Daftar yang ditampilkan terurut berdasarkan nilai kuis secara ascending. Jika beberapa mahasiswa memiliki nilai yang sama, maka urutan dibuat berdasarkan urutan data masuk.\n\nConstraints\nStyle : pemrograman fungsional.\nDilarang : var, while, for imperatif, mutasi data kecuali pada proses membaca input data.\nWajib: fungsi murni (pure function), HOF, struktur data dan container.\nInput\nBaris pertama adalah banyaknya data nilai mahasiswa, misalnya N. Sebanyak N baris berikutnya adalah pasangan nama dan nilai kuis yang dipisahkan oleh tanda koma (,).\n\nOutput\nPaling banyak 5 baris nama dan nilai kuis yang memenuhi ketentuan, dan diurutkan berdasarkan nilai secara descending..\n\nSample Input\n10\nAni Ratnawati,65\nBudi Santoso,70\nCitra Permata Sari,90\nDodi Rinaldi,60\nEfi Tamala,95\nFitra Khadijah,57\nGina Marsela,72\nHani Saranggi,70\nIman Surahman,94\nJoko Santoso,66\nSample Output\nEfi Tamala : 95\nIman Surahman : 94\nCitra Permata Sari : 90",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "",
    "outputExample": "",
    "referenceMaterials": [
      {
        "name": "KOM120C - K10 - HOF - STUDENT.pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "11A",
    "title": "11A. Analisi Nilai Mahasiswa.txt",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Memory limit\t256 MB\nDescription\nDosen Pemrograman kelas K92 sering melakukan kuis dan menganalisis hasilnya untuk mengetahui kemampuan mahasiswa. Nilai kuis berupa bilangan bulat dengan selang 0-100, dan dosen memilih mahasiswa dengan nilai sedikitnya 75. Dosen hanya tertarik pada 5 mahasiswa (top-five).\n\nUntuk membantu dosen, buatlah program fungsional Scala untuk menganalisis nilai kuis mahasiswa dan menampilkan mahasiswa yang masuk ke dalam top-five sesuai dengan kriteria yang ditentukan. Daftar yang ditampilkan terurut berdasarkan nilai kuis secara ascending. Jika beberapa mahasiswa memiliki nilai yang sama, maka urutan dibuat berdasarkan urutan data masuk.\n\nConstraints\nStyle : pemrograman fungsional.\nDilarang : var, while, for imperatif, mutasi data kecuali pada proses membaca input data.\nWajib: fungsi murni (pure function), HOF, struktur data dan container.\nInput\nBaris pertama adalah banyaknya data nilai mahasiswa, misalnya N. Sebanyak N baris berikutnya adalah pasangan nama dan nilai kuis yang dipisahkan oleh tanda koma (,).\n\nOutput\nPaling banyak 5 baris nama dan nilai kuis yang memenuhi ketentuan, dan diurutkan berdasarkan nilai secara descending..\n\nSample Input\n10\nAni Ratnawati,65\nBudi Santoso,70\nCitra Permata Sari,90\nDodi Rinaldi,60\nEfi Tamala,95\nFitra Khadijah,57\nGina Marsela,72\nHani Saranggi,70\nIman Surahman,94\nJoko Santoso,66\nSample Output\nEfi Tamala : 95\nIman Surahman : 94\nCitra Permata Sari : 90",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "",
    "outputExample": "",
    "referenceMaterials": [
      {
        "name": "KOM120C - K09 - FUNCTIONAL (1).pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "12A",
    "title": "12A. Algoritme Merge",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Description\nDiketahui dua kelompok data bilangan bulat. Buat program fungsional untuk menggabungkan kedua kelompok data tersebut sehingga menjadi satu kelompok data yang terurut menaik (ascending) menggunakan algoritme merge. Tentu Anda harus mengurutkan data di setiap kelompok dahulu, namun pada saat menggabungkan, tidak boleh menggunakan fungsi sort.\n\nConstraints\nStyle : pemrograman fungsional.\nDilarang : var, while, for imperatif, mutasi data kecuali pada proses membaca input data.\nWajib: fungsi murni (pure function), HOF, struktur data dan container, fungsi rekursif.\nInput\nInput data diberikan dengan format\n\nA1 A2 … AM\nB1 B2 … BN\nOutput\nSebaris data yang sudah terurut dari kecil ke besar, yang masing-masing nilai dipisahkan oleh satu spasi.\n\nSample Input\n50 20 40 30 10\n45 17 15\nSample Output\n10 15 17 20 30 40 45 50",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "",
    "outputExample": "",
    "referenceMaterials": [
      {
        "name": "KOM120C - K12 - CONTAINER - STUDENT.pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "12A",
    "title": "12A. Algoritme Merge",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Description\nDiketahui dua kelompok data bilangan bulat. Buat program fungsional untuk menggabungkan kedua kelompok data tersebut sehingga menjadi satu kelompok data yang terurut menaik (ascending) menggunakan algoritme merge. Tentu Anda harus mengurutkan data di setiap kelompok dahulu, namun pada saat menggabungkan, tidak boleh menggunakan fungsi sort.\n\nConstraints\nStyle : pemrograman fungsional.\nDilarang : var, while, for imperatif, mutasi data kecuali pada proses membaca input data.\nWajib: fungsi murni (pure function), HOF, struktur data dan container, fungsi rekursif.\nInput\nInput data diberikan dengan format\n\nA1 A2 … AM\nB1 B2 … BN\nOutput\nSebaris data yang sudah terurut dari kecil ke besar, yang masing-masing nilai dipisahkan oleh satu spasi.\n\nSample Input\n50 20 40 30 10\n45 17 15\nSample Output\n10 15 17 20 30 40 45 50",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "",
    "outputExample": "",
    "referenceMaterials": [
      {
        "name": "KOM120C - K12 - CONTAINER - STUDENT.pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "12B",
    "title": "12B. Hapus Elemen List",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Description\nBuat program fungsional Scala untuk menghapus semua elemen bilangan bulat yang sama dan bersebelahan.\n\nConstraints\nStyle : pemrograman fungsional.\nDilarang : var, while, for imperatif, mutasi data kecuali pada proses membaca input data.\nWajib : fungsi murni (pure function), HOF, struktur data dan container, fungsi rekursif.\nInput\nInput data diberikan dengan format:\n\nA1 A2 … AN\nOutput\nDeretan bilangan bulat hasil penghapusan elemen yang sama dan bersebelahan.\n\nSample Input\n1 1 1 4 3 4 1 1 1 1 1 7\nSample Output\n4 3 4 7",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "",
    "outputExample": "",
    "referenceMaterials": [
      {
        "name": "KOM120C - K12 - CONTAINER - STUDENT.pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "12C",
    "title": "12C. Sub List",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Description\nDiketahui N pasangan list A dan B yang masing-masing berisi bilangan bulat. Buatlah program fungsional Scala untuk memeriksa apakah list A merupakan sub list dari list B dengan menggunakan fungsi rekursif.\n\nConstraints\nStyle : pemrograman fungsional.\nDilarang : var, while, for imperatif, forall, mutasi data kecuali pada proses membaca input data.\nWajib: fungsi murni (pure function), HOF, struktur data dan container, fungsi rekursif.\nInput\nInput data diberikan dengan format:\n\nN\nA1 A2 … AN\nB1 B2 … BN\n…\n…\nA1 A2 … AN\nB1 B2 … BN\nOutput\nSebanyak N baris teks YA atau TIDAK.\n\nSample Input\n3\n2 3 4\n1 2 3 4 5\n1 2\n1 2 3 4 5\n1 3 4\n1 2 3 4 5\nSample Output\nYA\nYA\nTIDAK",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "",
    "outputExample": "",
    "referenceMaterials": [
      {
        "name": "KOM120C - K12 - CONTAINER - STUDENT.pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "13A",
    "title": "13A. Fungsi Rekursif Jumlah List.txt",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Diberikan sebuah input berupa nilai bulat positif\nn\nn dan diikuti dengan\nn\nn buah bilangan bulat, tentukan jumlah kuadrat dari semua bilangan yang ganjil dari\nn\nn bilangan yang diberikan. Anda mendefinisikan fungsi rekursif dan menggunakan pemecahan List menjadi head dan tail pada soal ini.\n\nBatasan\n1\n≤\nn\n\n≤\n1000\n1≤n ≤1000\n1\n≤\nA\ni\n≤\n1\n000\n000\n1≤A\ni\n​\n≤1000000\nBatasan Solusi\nHarus menggunakan List\nHarus mendefinisikan fungsi solusi secara rekursif\nHarus menggunakan head::tail\nTidak boleh menggunakan HOF seperti reduce atau filter",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "Masukan diberikan dalam format berikut:\n\nn\nA1 A2 … AN",
    "outputExample": "Keluarkan sebuah baris berisi jumlah kuadrat dari semua elemen data yang bernilai ganjil.\n\nContoh Masukan 1\n3\n1 2 3\nContoh Keluaran 1\n10",
    "referenceMaterials": [
      {
        "name": "KOM120C - K12 - CONTAINER - STUDENT.pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "13B",
    "title": "13B. Kelulusan Mahasiswa",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Diberikan data nilai\nn\nn orang mahasiswa. Setiap mahasiswa memiliki nama unik dan sebuah nilai akhir.\n\nBuatlah program Scala yang menyimpan data tersebut ke dalam sebuah Map[String, Int], lalu menyaring mahasiswa yang nilainya lebih besar atau sama dengan batas kelulusan.\n\nProgram harus menggunakan fungsi filter pada Map untuk mendapatkan mahasiswa yang lulus.\n\nBatasan\n1\n≤\nn\n\n≤\n1000\n1≤n ≤1000\nBatasan Solusi\nHarus menggunakan container Map\nHarus menggunakan filter pada Map",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "Masukan diberikan dalam format berikut: baris pertama berisi\n\nn batas\nBaris-baris berikutnya (\nn\nn) berisi data nama dan nilai masing-masing mahasiswa.",
    "outputExample": "Cetak banyak mahasiswa yang lulus. Kemudian cetak daftar mahasiswa yang lulus dalam urutan nama secara alfabetis, dengan format: nama diikuti nilainya.\n\nContoh Masukan 1\n7 75\nAndi 80\nBudi 60\nCitra 90\nDewi 75\nEka 70\nFajar 85\nGina 55\nContoh Keluaran 1\n4\nAndi 80\nCitra 90\nDewi 75\nFajar 85",
    "referenceMaterials": [
      {
        "name": "KOM120C - K12 - CONTAINER - STUDENT.pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "14A",
    "title": "14A. Transaksi Bank",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Description\nDiketahui N data transaksi yang terdiri atas akun bank (String) dan nilai transaksi (Int). Nilai transaksi positif berarti akun melakukan proses menabung (kredit), sedangkan nilai transaksi negatif berarti akun melakukan penarikan uang (debit).\n\nBuatlah program Scala dengan paradigma OOP dan fungsional untuk mengolah data transaksi yang ada dan menghasilkan daftar saldo terakhir dari setiap akun yang melakukan transaksi. Anda harus mengimplementasikan OOP dengan membuat class BankAccount dengan properti accNumber dan balance (saldo). Implementasikan methods untuk menabung (kredit) atau mengambil uang (debit) dari akun tertentu.\n\nConstraints\nStyle : pemrograman berorientasi objek dan fungsional.\nDilarang : var, while, for imperatif, mutasi data kecuali pada proses membaca input data.\nWajib : fungsi murni (pure function), HOF, struktur data dan container, class dan object. Data yang dibaca, sebelum diolah, harus dimasukkan ke dalam struktur Map[String, List[Int]].\nInput\nInput data diberikan dengan format:\n\nN\nA1 A2\n…\n…\nOutput\nOutput berupa daftar saldo dari setiap akun yang melakukan transaksi.\n\nSample Input\n4\nID-1234 1000\nID-8121 5000\nID-1234 3000\nID-1234 -500\nSample Output\nID-1234 : 3500.0\nID-8121 : 5000.0",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "",
    "outputExample": "",
    "referenceMaterials": [
      {
        "name": "KOM120C - K14 - OOPScala.pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "14B",
    "title": "14B. Statistik dari Suatu Kalimat",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Description\nBuat program Scala berbasis OOP dan fungsional untuk menampilkan statistik dari suatu kalimat: jumlah kata, jumlah huruf, jumlah huruf vokal, dan jumlah huruf konsonan.\n\nConstraints\nStyle : pemrograman berorientasi objek dan fungsional.\nDilarang : var, while, for imperatif, mutasi data kecuali pada proses membaca input data.\nWajib : fungsi murni (pure function), HOF, struktur data dan container, class dan object.\nInput\nInput berupa sebuah kalimat.\n\nOutput\nStatistik dari suatu kalimat yang terdiri atas: jumlah kata, jumlah huruf, jumlah huruf vokal, dan jumlah huruf konsonan. Semuanya dituliskan dalam satu baris yang dipisahkan hanya oleh satu spasi.\n\nSample Input\nHalo Dunia.\nSample Output\n2 9 5 4\nExplanation of Sample\nJumlah kata: 2\nJumlah huruf: 9\nJumlah huruf vokal: 5\nJumlah huruf konsonan: 4.",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "",
    "outputExample": "",
    "referenceMaterials": [
      {
        "name": "KOM120C - K14 - OOPScala.pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "15A",
    "title": "15A. Data Poin Pelanggan",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Sebuah toko memiliki data poin\nn\nn loyalitas customer. Setiap customer memiliki id unik dan jumlah poin awal.\n\nData customer awal disimpan dalam bentuk pasangan:\n\nid poin\nSetelah itu, toko menerima\nq\nq data transaksi. Setiap transaksi berisi:\n\nid perubahan\nArtinya, poin customer dengan ID tersebut berubah sebesar perubahan.\n\nNilai perubahan dapat bernilai positif atau negatif.\n\nTugas Anda adalah memperbarui poin setiap customer berdasarkan seluruh transaksi. Setelah semua transaksi diproses, tampilkan hanya customer yang pernah muncul dalam data transaksi, beserta poin akhirnya.\n\nProgram harus menggunakan:\n\nMap untuk menyimpan dan memperbarui poin setiap customer berdasarkan ID.\nSet untuk menyimpan ID customer yang muncul dalam transaksi.\nBatasan\n1 ≤\nn\nn ≤ 5000\n1 ≤\nq\nq ≤ 5000\n1 ≤ id ≤ 1000000\n0 ≤ poin awal ≤ 1000000\n-10000 ≤ perubahan ≤ 10000\nStyle : pemrograman berorientasi objek dan fungsional.\nDilarang : var, while, for imperatif, mutasi data kecuali pada proses membaca input data.\nWajib : fungsi murni (pure function), HOF, struktur data dan container, class dan object, Java Collection.",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "Baris pertama berisi dua bilangan bulat:\n\nn q\ndengan:\n\nn = banyak customer awal\nq = banyak transaksi\nKemudian diikuti n baris, masing-masing berisi:\n\nid poin\nKemudian diikuti q baris, masing-masing berisi:\n\nid perubahan\nSemua id pada transaksi dijamin sudah ada pada data customer awal.",
    "outputExample": "Cetak banyak customer yang pernah muncul dalam transaksi.\n\nKemudian cetak daftar customer tersebut dalam urutan id menaik, dengan format:\n\nid poin_akhir\nContoh Masukan 1\n6 8\n101 50\n102 120\n103 75\n104 200\n105 0\n106 90\n103 10\n101 -20\n105 40\n103 -5\n102 30\n105 -10\n101 100\n103 25\nContoh Keluaran 1\n4\n101 130\n102 150\n103 105\n105 30\nPenjelasan Contoh 1\nData awal:\n\n101 -> 50\n102 -> 120\n103 -> 75\n104 -> 200\n105 -> 0\n106 -> 90\nTransaksi yang terjadi:\n\n103 +10  => 85\n101 -20  => 30\n105 +40  => 40\n103 -5   => 80\n102 +30  => 150\n105 -10  => 30\n101 +100 => 130\n103 +25  => 105\nCustomer yang muncul dalam transaksi adalah:\n\n101, 102, 103, 105\nMaka output hanya menampilkan ID tersebut, bukan semua customer.",
    "referenceMaterials": [
      {
        "name": "KOM120C - K15 - ScalaJava - STUDENT.pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "15B",
    "title": "15B. Frekuensi Kata",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Diberikan n baris teks. Setiap baris dapat berisi beberapa kata, spasi, dan tanda baca seperti titik, koma, tanda seru, tanda tanya, tanda hubung, dan sebagainya. Teks tidak mengandung angka.\n\nTugas Anda adalah menentukan semua kata yang muncul pada seluruh teks, serta menghitung frekuensi kemunculan masing-masing kata.\n\nDalam soal ini, sebuah kata didefinisikan sebagai rangkaian huruf alfabet A-Z atau a-z. Karakter selain huruf, seperti spasi dan tanda baca, dianggap sebagai pemisah antar kata.\n\nPerhitungan kata tidak membedakan huruf besar dan huruf kecil. Artinya, kata Scala, scala, dan SCALA dianggap sebagai kata yang sama, yaitu scala.\n\nGunakan container seperti Map atau Set untuk menyimpan kata dan frekuensinya.\n\nBatasan\n1\n≤\nn\n\n≤\n100\n1≤n ≤100\nPanjang string di setiap baris maksimal 100 karakter\nTeks hanya terdiri dari huruf alfabet, spasi, dan tanda baca. Teks tidak mengandung angka.\nStyle : pemrograman berorientasi objek dan fungsional.\nDilarang : var, while, for imperatif, mutasi data kecuali pada proses membaca input data.\nWajib : fungsi murni (pure function), HOF, struktur data dan container, class dan object, Java Collection.",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "Masukan diberikan dalam format berikut:\n\nn\nstring_1\n...\nstring_n",
    "outputExample": "Cetak semua kata yang muncul, beserta frekuensi kemunculannya. Keluaran diurutkan secara alfabetis berdasarkan katanya. Setiap baris keluaran berisi:\n\nkata frekuensi\nContoh Masukan 1\n4\nScala is fun, and Scala is powerful.\nFunctional programming is fun!\nMap and Set are useful containers.\nScala, map, set, and list.\nContoh Keluaran 1\nand 3\nare 1\ncontainers 1\nfun 2\nfunctional 1\nis 3\nlist 1\nmap 2\npowerful 1\nprogramming 1\nscala 3\nset 2\nuseful 1",
    "referenceMaterials": [
      {
        "name": "KOM120C - K15 - ScalaJava - STUDENT.pdf",
        "type": "PDF"
      }
    ]
  },
  {
    "id": "15C",
    "title": "15C. Penjualan Barang",
    "timeLimit": "2 s",
    "memoryLimit": "256 MB",
    "description": "Sebuah toko memiliki data transaksi penjualan. Setiap transaksi terdiri dari ID produk, jumlah barang yang terjual, dan harga satuan barang tersebut.\n\nNilai pendapatan dari sebuah transaksi dihitung dengan rumus:\n\npendapatan = jumlah_barang × harga_satuan\n\nNamun, toko hanya ingin menganalisis transaksi besar, yaitu transaksi dengan jumlah barang yang dibeli lebih besar atau sama dengan batas minimum jumlah barang.\n\nTugas Anda adalah menghitung total pendapatan untuk setiap produk berdasarkan seluruh transaksi besar. Setelah itu, tampilkan hanya produk yang total pendapatannya lebih besar atau sama dengan batas minimum pendapatan.\n\nGunakan pendekatan berbasis Higher Order Function Scala seperti map(), filter(), groupBy(), dan agregasi seperti sum. Gunakan juga container seperti Map untuk mengelompokkan dan menyimpan total pendapatan setiap produk.",
    "constraints": "Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).",
    "inputExample": "Baris pertama berisi tiga bilangan bulat:\n\nn minJumlah batasPendapatan\ndengan:\n\nn = banyak transaksi\nminJumlah = jumlah barang minimum agar sebuah transaksi dianggap sebagai transaksi besar\nbatasPendapatan = batas minimum total pendapatan agar sebuah produk ditampilkan\nKemudian diikuti n baris. Setiap baris berisi tiga bilangan bulat:\n\nidProduk jumlahBarang hargaSatuan\ndengan:\n\nidProduk = ID produk\njumlahBarang = jumlah barang yang terjual pada transaksi tersebut\nhargaSatuan = harga satuan produk pada transaksi tersebut",
    "outputExample": "Cetak banyak produk yang memenuhi syarat.\n\nKemudian cetak daftar produk tersebut dalam urutan idProduk menaik, dengan format:\n\nidProduk totalPendapatan\nProduk yang dicetak hanyalah produk yang total pendapatannya, setelah dihitung dari transaksi besar saja, lebih besar atau sama dengan batasPendapatan.\n\nJika tidak ada produk yang memenuhi syarat, cukup cetak:\n\n0\nBatasan\n1\n≤\nn\n≤\n5000\n1≤n≤5000\n1\n≤\nm\ni\nn\nJ\nu\nm\nl\na\nh\n≤\n1000\n1≤minJumlah≤1000\n1\n≤\nb\na\nt\na\ns\nP\ne\nn\nd\na\np\na\nt\na\nn\n≤\n\n1000000000\n1≤batasPendapatan≤ 1000000000\n1\n≤\ni\nd\nP\nr\no\nd\nu\nk\n≤\n100000\n1≤idProduk≤100000\n1\n≤\nj\nu\nm\nl\na\nh\nB\na\nr\na\nn\ng\n≤\n1000\n1≤jumlahBarang≤1000\n1\n≤\nh\na\nr\ng\na\nS\na\nt\nu\na\nn\n\n≤\n100000\n1≤hargaSatuan ≤100000\nStyle : pemrograman berorientasi objek dan fungsional.\nDilarang : var, while, for imperatif, mutasi data kecuali pada proses membaca input data.\nWajib : fungsi murni (pure function), HOF, struktur data dan container, class dan object, Java Collection.\nContoh Masukan 1\n10 3 100000\n101 2 30000\n102 1 50000\n101 3 25000\n103 5 10000\n102 4 40000\n104 5 10000\n101 4 20000\n103 4 30000\n104 2 5000\n105 3 30000\nContoh Keluaran 1\n3\n101 155000\n102 160000\n103 170000\nPenjelasan Contoh 1\nDiketahui:\n\nminJumlah = 3\nbatasPendapatan = 100000\nArtinya, hanya transaksi dengan jumlahBarang >= 3 yang dihitung.\n\nTransaksi yang dihitung adalah:\n\n101 3 25000  →  3 × 25000 = 75000\n103 5 10000  →  5 × 10000 = 50000\n102 4 40000  →  4 × 40000 = 160000\n104 5 10000  →  5 × 10000 = 50000\n101 4 20000  →  4 × 20000 = 80000\n103 4 30000  →  4 × 30000 = 120000\n105 3 30000  →  3 × 30000 = 90000\nTotal pendapatan setiap produk dari transaksi besar adalah:\n\n101 → 75000 + 80000 = 155000\n102 → 160000\n103 → 50000 + 120000 = 170000\n104 → 50000\n105 → 90000\nProduk yang total pendapatannya lebih besar atau sama dengan 100000 adalah:\n\n101, 102, 103\nMaka ketiga produk tersebut dicetak dalam urutan ID menaik.",
    "referenceMaterials": [
      {
        "name": "KOM120C - K15 - ScalaJava - STUDENT.pdf",
        "type": "PDF"
      }
    ]
  }
];

export const allMaterials = [
  "KOM120C - K09 - FUNCTIONAL (1).pdf",
  "KOM120C - K10 - HOF - STUDENT.pdf",
  "KOM120C - K10 - HOF2 - STUDENT.pdf",
  "KOM120C - K12 - CONTAINER - STUDENT.pdf",
  "KOM120C - K13 - CONTAINER CONT - STUDENT.pdf",
  "KOM120C - K14 - OOPScala.pdf",
  "KOM120C - K15 - ScalaJava - STUDENT.pdf"
];
