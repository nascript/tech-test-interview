# Palindrome (dengan normalisasi)

### 🎯 Tujuan

* Mengecek apakah sebuah string adalah **palindrom**:

  * Dibaca sama dari depan dan belakang,
  * Setelah:

    * diubah ke huruf kecil (`lowercase`), dan
    * semua karakter non-alphanumeric (`[^a-z0-9]`) dihapus.

### 📥 Input

* String `s` (bisa berisi huruf, angka, spasi, tanda baca, dll).

### 📤 Output

* `true` jika `s` adalah palindrome setelah normalisasi.
* `false` jika bukan.

### 🧠 Algoritma & Cara Kerja

1. Terima input `s`.
2. Normalisasi:

   * Ubah ke huruf kecil: `s.toLowerCase()`.
   * Hapus semua karakter non-alphanumeric: `.replace(/[^a-z0-9]/g, "")`.
   * Simpan hasilnya ke variabel `clean`.
3. Balik string:

   * `reversed = clean.split('').reverse().join('')`.
4. Bandingkan:

   * Jika `clean === reversed` → `true`.
   * Else → `false`.

*(Ini versi pendek, algoritma pakai “reverse string”)*

### 🧾 Pseudocode

```text
FUNCTION isPalindrome(s):
    clean = toLowerCase(s)
    clean = removeNonAlphanumeric(clean)

    reversed = reverseString(clean)

    IF clean == reversed:
        RETURN true
    ELSE:
        RETURN false
END FUNCTION
```

### 💻 Kode JavaScript

```js
function isPalindrome(s) {
  // Normalisasi: lowercase + buang non-alphanumeric
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = clean.split('').reverse().join('');
  return clean === reversed;
}

// Contoh
console.log(isPalindrome('racecar'));                       // true
console.log(isPalindrome('RaceCar'));                       // true
console.log(isPalindrome('A man, a plan, a canal: Panama'));// true
console.log(isPalindrome('hello'));                         // false

module.exports = { isPalindrome };
```
