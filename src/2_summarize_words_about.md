
## `summarize(words)` – Frequency Counter

### 🎯 Tujuan

* Menghitung **berapa kali** setiap kata muncul di dalam sebuah array string.
* Menghasilkan objek yang berisi: `{ kata: jumlahKemunculan }`.

### 📥 Input

* `words`: array of string, misal: `["apple", "banana", "apple"]`.

### 📤 Output

* Object (record) dengan key = kata, value = jumlah kemunculan.

Contoh:

```js
summarize(["apple", "banana", "apple"]);
// { apple: 2, banana: 1 }
```

### 🧠 Algoritma & Cara Kerja

1. Buat objek kosong: `result = {}`.
2. Loop setiap elemen `word` di dalam `words`.
3. Untuk setiap `word`:

   * Jika `result[word]` sudah ada → increment: `result[word]++`.
   * Jika belum → inisialisasi: `result[word] = 1`.
4. Setelah loop selesai, `result` berisi semua kata dan hitungannya.
5. Return `result`.

### 🧾 Pseudocode

```text
FUNCTION summarize(words):
    result = empty object
    FOR each word IN words:
        IF word in result:
            result[word] = result[word] + 1
        ELSE:
            result[word] = 1
    ENDFOR
    RETURN result
END FUNCTION
```

### 💻 Kode JavaScript

```js
function summarize(words) {
  const result = {};

  for (const word of words) {
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  return result;
}

// Contoh
console.log(summarize(['apple', 'banana', 'apple']));
// { apple: 2, banana: 1 }

module.exports = { summarize };
```

---

DETAIL CARA KERJA
Siap, kita bedah satu per satu persis seperti tadi di `unique`, tapi sekarang untuk `summarize(words)` 🍎🍌

Aku tulis dulu fungsi lengkapnya biar enak ngikutinnya:

```js
function summarize(words) {
  const result = {};

  for (const word of words) {
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  return result;
}

console.log(summarize(['apple', 'banana', 'apple']));
```

Anggap input yang kita pakai untuk simulasi:

```js
words = ['apple', 'banana', 'apple'];
```

---

## 1. Inisialisasi objek hasil

```js
const result = {};
```

* Dibuat sebuah **object kosong** bernama `result`.
* Fungsinya sebagai **kamus/frequency map**:

  * key   → kata
  * value → berapa kali kata itu muncul.

Kondisi awal di memori:

```js
result = {}
```

Belum ada data sama sekali.

---

## 2. Loop `for...of` – membaca array `words`

```js
for (const word of words) {
  ...
}
```

* `words` adalah array: `['apple', 'banana', 'apple']`
* `for...of` akan mengambil **satu elemen per iterasi** dari kiri ke kanan.
* Di setiap iterasi:

  * variabel `word` berisi **satu string** dari array itu.

Urutan nilai `word` di tiap iterasi:

1. Iterasi 1 → `'apple'`
2. Iterasi 2 → `'banana'`
3. Iterasi 3 → `'apple'`

Di dalam loop, ada blok:

```js
if (result[word]) {
  result[word]++;
} else {
  result[word] = 1;
}
```

Ini adalah logika inti untuk:

* kalau kata sudah pernah dicatat → tambah 1
* kalau baru muncul → mulai dari 1

Kita simulasi satu-satu 👇

---

## 3. Simulasi Per Iterasi (Step by Step)

### 🔁 Iterasi 1

**Nilai sekarang:**

* `word = 'apple'`
* `result = {}` (masih kosong)

Cek kondisi:

```js
if (result[word]) {
```

Artinya:
`if (result['apple]) { ... }`

* Karena `result` masih kosong, `result['apple']` adalah `undefined`.
* Di JavaScript, `if (undefined)` dianggap **false**.

Jadi yang jalan adalah blok `else`:

```js
} else {
  result[word] = 1;
}
```

→ ini sama dengan:

```js
result['apple'] = 1;
```

Sekarang `result` menjadi:

```js
result = {
  apple: 1
}
```

Iterasi 1 selesai ✅

---

### 🔁 Iterasi 2

**Nilai sekarang:**

* `word = 'banana'`
* `result = { apple: 1 }`

Cek kondisi lagi:

```js
if (result[word]) {
```

→ `if (result['banana']) { ... }`

* `result['banana']` belum ada → `undefined`.
* `if (undefined)` → **false**.

Masuk lagi ke blok `else`:

```js
result[word] = 1;
```

→ sama dengan:

```js
result['banana'] = 1;
```

Sekarang objek `result` jadi:

```js
result = {
  apple: 1,
  banana: 1
}
```

Iterasi 2 selesai ✅

---

### 🔁 Iterasi 3

**Nilai sekarang:**

* `word = 'apple'`
* `result = { apple: 1, banana: 1 }`

Cek kondisi:

```js
if (result[word]) {
```

→ `if (result['apple']) { ... }`

* `result['apple']` sekarang = `1`.
* `if (1)` → di JavaScript dianggap **true** (karena semua angka non-0 itu truthy).

Jadi sekarang yang dijalankan adalah blok **if**, bukan `else`:

```js
result[word]++;
```

→ ini sama dengan:

```js
result['apple'] = result['apple'] + 1;
result['apple'] = 1 + 1;   // dari nilai sebelumnya
result['apple'] = 2;
```

Sekarang objek `result` jadi:

```js
result = {
  apple: 2,
  banana: 1
}
```

Iterasi 3 selesai ✅
Loop `for` juga selesai karena tidak ada elemen lagi di array `words`.

---

## 4. Mengembalikan Hasil

Setelah keluar dari loop:

```js
return result;
```

Di titik ini, nilai `result` adalah:

```js
{
  apple: 2,
  banana: 1
}
```

Jadi fungsi `summarize(['apple', 'banana', 'apple'])` akan mengembalikan:

```js
{ apple: 2, banana: 1 }
```

Dan ketika kamu `console.log` hasilnya:

```js
console.log(summarize(['apple', 'banana', 'apple']));
```

Output ke console:

```text
{ apple: 2, banana: 1 }
```

---

## 5. Intuisi dalam Bahasa Santai

Kalau dibuat cerita:

1. Kamu pegang satu **buku catatan (result)** yang awalnya kosong.
2. Kamu baca list kata **satu per satu** dari array:

   * Kata pertama: `"apple"`
   * Kata kedua: `"banana"`
   * Kata ketiga: `"apple"`
3. Setiap lihat kata:

   * Kalau **belum pernah tercatat di buku**:

     * Tulis kata itu di buku dengan nilai `1`.
   * Kalau **sudah ada di buku**:

     * Tambah angkanya +1.
4. Di akhir:

   * Buku kamu berisi:

     * `apple` → 2 kali
     * `banana` → 1 kali

Itu tepat seperti yang dilakukan object `result`.

---

## 6. Kalau Ada Kasus Lain?

### Contoh: `['a', 'a', 'b', 'c', 'b', 'a']`

Simulasi cepat:

* Iterasi:

  * `'a'` → `{ a: 1 }`
  * `'a'` → `{ a: 2 }`
  * `'b'` → `{ a: 2, b: 1 }`
  * `'c'` → `{ a: 2, b: 1, c: 1 }`
  * `'b'` → `{ a: 2, b: 2, c: 1 }`
  * `'a'` → `{ a: 3, b: 2, c: 1 }`

Hasil akhir:

```js
{ a: 3, b: 2, c: 1 }
```

---

## 7. Versi Alternatif (Tanpa `if` – pakai pola seperti tadi)

Kalau mau gaya yang lebih mirip dengan pola di `unique` (pakai `|| 0`):

```js
function summarize(words) {
  const result = {};

  for (const word of words) {
    result[word] = (result[word] || 0) + 1;
  }

  return result;
}
```

Kalimatnya:

* `result[word] || 0` → kalau belum ada, pakai 0
* tambah 1 → selesai.

Secara logika, sama persis, cuma lebih padat.

---

Kalau kamu mau, next kita bisa:

* bedah `summarize` ini dari sisi **time complexity** (O(n)) & **space (O(k))**,
* atau kamu kirim contoh array lain, nanti aku simulasi line-by-line seperti ini lagi.

Tinggal bilang aja mau dibedah yang mana lagi 🔧😄
