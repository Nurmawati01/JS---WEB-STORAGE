<h1>Penjelasan Program</h1>
<hr>
<h2>Program di atas merupakan program JavaScript yang menggunakan web storage untuk menyimpan data yang diambil dari form HTML, menampilkan data yang disimpan dalam bentuk objek, serta menghapus data dari web storage.</h2>

<ol>
  <li>Fungsi pertama, yaitu addData(), digunakan untuk mengambil nilai dari form yang telah diisi oleh pengguna dan menyimpannya ke dalam web storage sesuai dengan jenis storage yang dipilih oleh pengguna. Jika pengguna memilih local storage, maka data akan disimpan di dalam local storage. Jika pengguna memilih session storage, maka data akan disimpan di dalam session storage. Jika pengguna memilih cookie, maka data akan disimpan di dalam cookie.</li>
  <li>Fungsi kedua, yaitu showData(), digunakan untuk menampilkan data yang telah disimpan dalam web storage sesuai dengan jenis storage yang dipilih oleh pengguna. Data yang disimpan di dalam storage akan diambil kembali dan kemudian ditampilkan dalam bentuk objek di dalam elemen HTML dengan id "data-container".</li>
  <li>Fungsi ketiga, yaitu clearData(), digunakan untuk menghapus data yang telah disimpan di dalam web storage sesuai dengan jenis storage yang dipilih oleh pengguna. Setelah data dihapus, maka pesan "Data berhasil dihapus." akan ditampilkan di dalam elemen HTML dengan id "data-container".</li>
  <li>Dalam program ini, pilihan akan disimpan ke dalam web storage menggunakan tipe storage yang dipilih oleh pengguna. Pilihan yang dipilih oleh pengguna akan disimpan di dalam local storage, session storage, atau cookie, tergantung dari jenis storage yang dipilih oleh pengguna.</li>
</ol> 