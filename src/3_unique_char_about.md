
## `unique(s)` – First Non-Repeating Character

### 🎯 Tujuan

* Menemukan **karakter pertama** di string `s` yang muncul **tepat sekali**.
* Case-sensitive: `'A'` dan `'a'` dianggap beda.

### 📥 Input

* String `s`.

### 📤 Output

* Karakter pertama yang frekuensinya = 1.
* Jika tidak ada, kembalikan string kosong `""`.

Contoh:

```js
unique("abacabad"); // "c"
unique("aabb");     // ""
```

### 🧠 Algoritma & Cara Kerja

Konsepnya 2-pass:

1. **Pass 1** – Hitung frekuensi:

   * Buat object `freq = {}`.
   * Loop semua karakter `char` di `s`:

     * `freq[char] = (freq[char] || 0) + 1`.
2. **Pass 2** – Cari yang pertama unik:

   * Loop lagi string `s` dari awal.
   * Untuk tiap `char`, cek:

     * Jika `freq[char] === 1` → return `char`.
3. Jika selesai loop dan tidak ketemu → return `""`.

Kenapa 2-pass?
Supaya **tetap tahu urutan asli** (yang diminta adalah karakter pertama).

### 🧾 Pseudocode

```text
FUNCTION unique(s):
    freq = empty map
    FOR each char IN s:
        freq[char] = freq[char] + 1 (default 0)
    ENDFOR

    FOR each char IN s:
        IF freq[char] == 1:
            RETURN char
    ENDFOR

    RETURN ""
END FUNCTION
```

### 💻 Kode JavaScript

```js
function unique(s) {
  const freq = {};

  // Hitung frekuensi
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Cari karakter pertama yang unik
  for (const char of s) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return '';
}

// Contoh
console.log(unique('abacabad')); // "c"
console.log(unique('aabb'));     // ""
console.log(unique('Hello'));    // "H"

module.exports = { unique };
```


---
## DETAIL CARA KERJA

Siap, kita bedah pelan-pelan ya 🔍
Aku tulis dulu versi lengkap fungsinya biar enak diikuti:

```js
function unique(s) {
  const freq = {};

  // Hitung jumlah kemunculan setiap karakter
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Cari karakter pertama yang unik
  for (const char of s) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return '';
}
```

Aku akan jelaskan:

1. **Apa yang terjadi di setiap baris (step)**
2. **Detail di dalam tiap perulangan**
3. Pakai contoh konkret: `s = "abacabad"`

---

## 1. Inisialisasi

```js
const freq = {};
```

* Dibuat sebuah **object kosong** bernama `freq`.
* Ini akan dipakai sebagai **map/dictionary**:

  * key   → karakter
  * value → jumlah kemunculan karakter tersebut

Awal kondisi memori:

```js
freq = {}
```

---

## 2. Loop Pertama – Hitung Frekuensi

```js
for (const char of s) {
  freq[char] = (freq[char] || 0) + 1;
}
```

### 2.1. Makna `for (const char of s)`

* `s` adalah string. Misal: `"abacabad"`.
* `for...of` akan mengambil **setiap karakter** dari kiri ke kanan.
* Di setiap iterasi, variabel `char` berisi satu karakter.

Untuk `s = "abacabad"`, urutan `char` per iterasi:

1. `'a'`
2. `'b'`
3. `'a'`
4. `'c'`
5. `'a'`
6. `'b'`
7. `'a'`
8. `'d'`

### 2.2. Makna baris ini:

```js
freq[char] = (freq[char] || 0) + 1;
```

Ini sebenarnya shortcut untuk:

1. Ambil nilai sekarang: `freq[char]`
2. Kalau belum ada (`undefined`), pakai `0` sebagai default
3. Tambah 1
4. Simpan kembali ke `freq[char]`

Karena:

* `freq[char] || 0`

  * Kalau `freq[char]` **ada dan truthy** → pakai itu
  * Kalau `freq[char]` **undefined** → pakai `0`

Jadi ini sama seperti:

```js
if (freq[char] === undefined) {
  freq[char] = 0;
}
freq[char] = freq[char] + 1;
```

---

### 2.3. Simulasi Per Iterasi (s = "abacabad")

#### 🔁 Iterasi 1

* `char = 'a'`
* `freq['a']` belum ada → `undefined`
* `(freq['a'] || 0)` → `0`
* `0 + 1` → `1`
* Set: `freq['a'] = 1`

`freq` sekarang:

```js
{ a: 1 }
```

---

#### 🔁 Iterasi 2

* `char = 'b'`
* `freq['b']` belum ada → `undefined`
* `(freq['b'] || 0)` → `0`
* `0 + 1` → `1`
* Set: `freq['b'] = 1`

`freq` sekarang:

```js
{ a: 1, b: 1 }
```

---

#### 🔁 Iterasi 3

* `char = 'a'`
* `freq['a']` sudah ada → `1`
* `(freq['a'] || 0)` → `1`
* `1 + 1` → `2`
* Set: `freq['a'] = 2`

`freq` sekarang:

```js
{ a: 2, b: 1 }
```

---

#### 🔁 Iterasi 4

* `char = 'c'`
* `freq['c']` belum ada → `undefined`
* `(freq['c'] || 0)` → `0`
* `0 + 1` → `1`
* Set: `freq['c'] = 1`

`freq` sekarang:

```js
{ a: 2, b: 1, c: 1 }
```

---

#### 🔁 Iterasi 5

* `char = 'a'`
* `freq['a'] = 2`
* `(freq['a'] || 0)` → `2`
* `2 + 1` → `3`
* Set: `freq['a'] = 3`

`freq` sekarang:

```js
{ a: 3, b: 1, c: 1 }
```

---

#### 🔁 Iterasi 6

* `char = 'b'`
* `freq['b'] = 1`
* `(freq['b'] || 0)` → `1`
* `1 + 1` → `2`
* Set: `freq['b'] = 2`

`freq` sekarang:

```js
{ a: 3, b: 2, c: 1 }
```

---

#### 🔁 Iterasi 7

* `char = 'a'`
* `freq['a'] = 3`
* `(freq['a'] || 0)` → `3`
* `3 + 1` → `4`
* Set: `freq['a'] = 4`

`freq` sekarang:

```js
{ a: 4, b: 2, c: 1 }
```

---

#### 🔁 Iterasi 8

* `char = 'd'`
* `freq['d']` belum ada → `undefined`
* `(freq['d'] || 0)` → `0`
* `0 + 1` → `1`
* Set: `freq['d'] = 1`

`freq` akhir setelah loop 1:

```js
{
  a: 4,
  b: 2,
  c: 1,
  d: 1
}
```

Loop pertama selesai ✅
Sekarang kita punya peta frekuensi lengkap.

---

## 3. Loop Kedua – Cari Karakter Pertama yang Unik

```js
for (const char of s) {
  if (freq[char] === 1) {
    return char;
  }
}
```

### 3.1. Konsep

* Kita ulang lagi string `s` **dari awal**, karakter per karakter.
* Untuk setiap `char`, kita cek:

  * Kalau `freq[char] === 1` → berarti karakter itu **unik** (hanya muncul sekali).
  * Karena kita cek dari kiri ke kanan, *karakter unik pertama* yang ketemu → langsung `return`.

Begitu `return` dieksekusi, fungsi langsung berhenti.

---

### 3.2. Simulasi per Iterasi (masih s = "abacabad")

Ingat, `freq`:

```js
{ a: 4, b: 2, c: 1, d: 1 }
```

#### 🔁 Iterasi 1

* `char = 'a'`
* `freq['a'] = 4`
* `4 === 1`? → **false**
* Tidak `return`, lanjut ke karakter berikutnya.

#### 🔁 Iterasi 2

* `char = 'b'`
* `freq['b'] = 2`
* `2 === 1`? → **false**
* Lanjut lagi.

#### 🔁 Iterasi 3

* `char = 'a'`
* `freq['a'] = 4`
* `4 === 1`? → **false**
* Lanjut lagi.

#### 🔁 Iterasi 4

* `char = 'c'`
* `freq['c'] = 1`
* `1 === 1`? → **true ✅**

Di titik ini:

```js
return char; // return 'c'
```

* Fungsi langsung **berhenti** di sini.
* Nilai kembalian fungsi: `'c'`.
* Iterasi berikutnya (`'a'`, `'b'`, `'a'`, `'d'`) **tidak pernah dijalankan** karena fungsi sudah `return`.

---

## 4. Bagian `return ''` di Akhir

```js
return '';
```

Ini hanya akan dieksekusi kalau:

* Loop kedua selesai, **tidak ada satupun karakter** dengan `freq[char] === 1`.

Contoh kasus: `s = "aabb"`
Simulasinya singkat:

### Loop 1 (hitung frekuensi)

`s = "aabb"`:

* `a` → freq: `{ a: 1 }`
* `b` → freq: `{ a: 1, b: 1 }`
* `a` → freq: `{ a: 2, b: 1 }`
* `b` → freq: `{ a: 2, b: 2 }`

Hasil:

```js
{ a: 2, b: 2 }
```

### Loop 2 (cari yang unik)

* `char = 'a'`, `freq['a'] = 2` → bukan 1
* `char = 'a'` (lagi) → masih 2
* `char = 'b'`, `freq['b'] = 2` → bukan 1
* `char = 'b'` (lagi) → masih 2

Tidak ada yang `=== 1`, jadi tidak pernah `return` di dalam loop.
Setelah loop selesai → eksekusi:

```js
return '';
```

Output: string kosong `""`.

---

## 5. Ringkas Cara Kerja dalam Bahasa Santai

1. **Bikin kamus kosong** (`freq`) buat nyatet “huruf ini muncul berapa kali sih?”
2. **Loop pertama**:

   * Baca string dari kiri ke kanan.
   * Setiap ketemu huruf, catat di `freq`.
   * Kalau baru muncul → mulai dari 1.
   * Kalau sudah pernah muncul → tambah 1.
3. **Loop kedua**:

   * Baca lagi string dari kiri ke kanan.
   * Sekarang, setiap huruf dicek ke kamus `freq`:

     * Kalau jumlahnya **1** → langsung balikin huruf itu → itulah “first unique character”.
4. Kalau sampai habis string dan **nggak ada yang jumlahnya 1**:

   * Balikin `''` (string kosong).

---

Kalau kamu mau next level, kita bisa:

* hitung **time complexity** & **space complexity** per langkah,
* atau rewrite dengan **Manual if** (tanpa `||`) biar lebih kelihatan prosesnya,
* atau kamu kirim string lain, nanti aku simulasikan lagi persis langkahnya.
