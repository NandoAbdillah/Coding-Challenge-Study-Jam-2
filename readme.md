# Study Jam 2 — DOM & Events Challenges

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWRvNzkwMWpucHRiN2VhaGdxcHh0dGpjbGp0dng4ZXdoMHVyMjFyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Dps6uX4XPOKeA/giphy.gif" width=400>

<br>  

Repo ini berisi versi **challenge yang sudah “fikss”** untuk:

1. [**Challenge 1: Click GIF Upgrade 🗿**](#ch1)
2. [**Challenge 2: Hover to Stop 😸**](#ch2)
3. [**Challenge 3: Move The Avatar 🛸**](#ch3)

Fokus utama challenge ini: **DOM Manipulation + Event Handling**.

---

## Cara Menjalankan

### Opsi A - Playcode/CodePen/Sandbox (copy–paste per challenge)

1. Buka Playcode dan buat project baru.
2. Buat folder sesuai challenge yang mau kamu coba:
   - `Challenge 1/` atau `Challenge 2/` atau `Challenge 3/`
3. Copy–paste file dari repo ini ke Playcode sesuai folder challenge:
   - **Challenge 1** : copy isi folder `Challenge 1/` (HTML/CSS/JS yang ada di situ)
   - **Challenge 2** : copy isi folder `Challenge 2/`
   - **Challenge 3** → copy isi folder `Challenge 3/`
4. Jalankan (Run) di Playcode.

> Tips: Jangan campur file antar challenge dalam 1 folder yang sama biar selector/asset ga tabrakan.

---

### Opsi B — Local (offline, clone repo)

Kalau mau jalanin di laptop:

#### 1) Clone repo

```bash
git clone https://github.com/NandoAbdillah/Coding-Challenge-Study-Jam-2.git
```

Masuk ke folder repo:

```bash
cd Coding-Challenge-Study-Jam-2
```

#### 2) Jalankan challenge di browser

Buka salah satu file ini langsung di browser:

- `Challenge 1/index.html`
- `Challenge 2/index.html`
- `Challenge 3/index.html`

> Cara cepat: klik kanan `index.html` → **Open with** → Chrome/Edge.

#### (Opsional) Pakai Live Server (lebih enak)

Kalau kamu pakai VS Code:

1. Install extension **Live Server**
2. Klik kanan `Challenge X/index.html` → **Open with Live Server**

<br>

---


<a id="ch1"></a>
# 🗿 Challenge 1 : Click GIF Upgrade

<img src="assets/challenge1.gif" width="500" />

### Target Perilaku

Web ini harus jadi “game klik gif”:

- klik tombol : **counter naik**
- di milestone tertentu : **GIF auto upgrade**
- ada pesan berubah tiap klik
- pas 100 klik : tombol disabled
- reset → balik seperti awal

### Aturan Validasi (Important)

Kamu cuma boleh ngubah / nambahin **4 poin** di `script.js`:

1. ambil tombol `btn`
2. ambil counter `countEl`
3. pasang event click
4. isi 1 baris update angka ke DOM

---

## Jawaban / Fix yang Dilakukan (4 poin)

### (1) Ambil tombol dari HTML

- Kamu ambil tombol klik utama dari DOM dan simpan di variabel **`btn`**
- Ini penting karena event click dipasang ke `btn`

### (2) Ambil elemen counter dari HTML

- Kamu ambil elemen angka display dan simpan di **`countEl`**

### (3) Pasang event click (addEventListener)

- Kamu pasang: `btn.addEventListener("click", ...)`
- Lalu **tempel logika inti yang sudah disediakan** (jangan diacak)

### (4) Update angka ke DOM

- Kamu isi 1 baris yang kosong: update `countEl.textContent = String(clicks)` (atau innerText)
- Tanpa ini: clicks naik “di belakang layar”, tapi angka di UI tetap 0

---

## Poin Belajar (DOM + Event)

- `getElementById/querySelector` buat ambil elemen
- `addEventListener("click")`
- update UI via `textContent/innerText`
- state (clicks) → UI (counter + gif + message)


<br>

---

<a id="ch2"></a>
# 😸 Challenge 2 : Hover to Stop

<img src="assets/challenge2.gif" width="500" />

### Target Perilaku

- gambar muter terus
- mouse masuk (mouseenter) → **stop**
- mouse keluar (mouseleave) → **muter lagi**
- status text berubah sesuai kondisi
- derajat (#angle) ikut update


### Aturan Validasi (Important)

Cuma boleh ngubah / nambahin **4 poin**:

1. ambil elemen gambar
2. isi event mouseleave
3. buat event mouseenter
4. terapkan rotasi ke style.transform


---

## Jawaban / Fix yang Dilakukan (4 poin)

### (1) Ambil elemen gambar dari HTML

- Ambil elemen gambar yang diputar via selector DOM 

### (2) Lengkapi event `mouseleave`

- Saat mouse keluar:
  - `spinning = true`
  - status text jadi “Spinning”
    
### (3) Buat event `mouseenter`

- Saat mouse masuk:
  - `spinning = false`
  - status text jadi “Stopped/Paused”

### (4) Terapkan rotasi ke DOM (transform)

- Di loop animasi, update:
  - `img.style.transform = "rotate(...deg)"`
- Tanpa ini: `angle` berubah, tapi gambar tidak muter 

---

## Poin Belajar (DOM + Event)

- bedain `mouseenter` vs `mouseleave`
- update UI realtime pakai `style.transform`
- loop animation (requestAnimationFrame) + state `spinning`
- teks status & angka derajat itu contoh “UI feedback”

<br>

---

<a id="ch3"></a>
# 🛸 Challenge 3 : Move The Avatar

<img src="assets/challenge1.gif" width="500" />

### Target Perilaku

Mini arena:

- player gerak pakai **W A S D**
- nama player bisa diganti tapi harus valid
- background arena & avatar bisa diganti via dropdown

Requirement resminya: 

### Aturan Validasi (Important)

Cuma boleh ngubah / nambahin **4 poin** sesuai TODO:

1. event keydown WASD
2. event input validasi nama
3. event change dropdown
4. update DOM/style biar perubahan kelihatan


---

## Jawaban / Fix yang Dilakukan (4 poin)

### (1) EVENT `keydown` — WASD untuk gerak

- Pasang event `document.addEventListener("keydown", (e) => ...)`
- Mapping:
  - W = atas, A = kiri, S = bawah, D = kanan 
- Catatan penting:
  - saat fokus di input nama, WASD harus non-aktif biar gak ganggu ngetik 

### (2) EVENT `input` — Validasi nama

- Pasang event input pada field nama:
  - valid → update tag + hint “Nama valid”
  - invalid → tambah class “bad” + hint error 
- Rule nama:
  - minimal 3 karakter
  - hanya huruf dan spasi 

### (3) EVENT `change` — Dropdown background & avatar

- dropdown background → ganti class arena
- dropdown avatar → ganti src gambar avatar 

### (4) UPDATE DOM/STYLE — Terapkan perubahan ke tampilan

Yang harus kelihatan berubah: 

- posisi player (style.left/top)
- nama player (textContent)
- hint (class + textContent)
- arena (className)
- avatar (src)

---

## Poin Belajar (DOM + Event)

- `keydown` untuk kontrol game/shortcut
- “focus guard”: jangan jalanin shortcut kalau user sedang ngetik
- `input` untuk validasi realtime
- `change` untuk dropdown
- update style (left/top) untuk gerak + batas arena (keepInsideArena)




