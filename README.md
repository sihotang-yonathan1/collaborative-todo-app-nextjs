# Aplikasi Todo App kolaboratif

Aplikasi ini merupakan aplikasi untuk mencatat setiap tugas yang ada dan orang lain dapat berinteraksi dengan memberikan komentar.

Aplikasi ini dibuat dengan beberapa tech stack seperti:
- Nextjs
- TailwindCSS
- Prisma

Aplikasi ini dibuat sebagai Tugas Project untuk MK Rekayasa Perangkat Lunak.

## Instalasi
Untuk dapat menggunakan aplikasi ini ada beberapa tahap yang perlu dilakukan

### Persiapan
Pastikan anda sudah menginstal nodejs, DBMS (Seperti mariadb). Untuk mempermudah, silakan untuk memasukkan path NodeJS ke PATH agar command `npm` dapat diakses melalui direktori manapun.  
Anda dapat mendownload NodeJS melalui link berikut https://nodejs.org/en, gunakan versi LTS dan sesuaikan dengan sistem operasi yang anda gunakan

### 1. Download atau clone repository ini  
Jika anda menggunakan git, anda dapat mengetikkan perintah ini pada terminal atau command prompt
```shell
# clone dari server
git clone "https://github.com/sihotang-yonathan1/collaborative-todo-app-nextjs.git"

# pindah ke direktori program
cd collaborative-todo-app-nextjs
```

atau sebagai alternatifnya, anda dapat mendownload bentuk arsip (zip) dan kemudian ekstrak dan masuk ke direktori `collaborative-todo-app-nextjs-main`

### 2. Install dependency yang dibutuhkan
Pastikan anda sudah menginstal nodejs
```shell
npm install
```
### 3. Nyalakan database dan configurasi di file `.env` 
Buatlah file baru (jika belum ada) yang bername `.env` tepat didalam direktori `collaborative-todo-app-nextjs` sehingga terlihat seperti:
```tree
collaborative-todo-app-nextjs
    .env
    app/
    test_db/
    ...
```
Buatlah sebuah database baru sebagai tempat penyimpanan data pada aplikasi ini.  
Template configurasinya sebagai berikut
```ini
DATABASE_URL="db_type://username:password@host:post/db_name"
``` 
Jadi, jika anda memiliki username `joko` dengan password `mypassword` dan database `mydb` dengan port 3306, anda dapat membuatnya seperti ini (dengan asumsi pengguna tersebut menggunakan `mysql`):
```ini
DATABASE_URL="mysql://joko:mypassword@localhost:3306/mydb"
``` 
Bagian password dapat dihilangkan jika tidak memiliki password
```ini
# jika tidak memiliki password
DATABASE_URL="mysql://joko@localhost:3306/mydb"
```

Untuk memasukkan data ke dalam database, terdapat dua cara yaitu secara manual atau mengimpor file yang ada di `test_db`

#### a. Secara Manual
Setelah menyalakan dan mengoneksikan database, pastikan anda telah membuat tabel-tabel yang dibutuhkan. Jika ingin lebih mudah, anda dapat memakai schema prisma untuk memasukkan tabel.

```
npx prisma db push
```

Untuk menampilkan data, anda dapat memasukkan data-data dahulu ke tabel yang sudah dibuat pada DBMS anda. Untuk login, anda dapat memasukkan data ke tabel `account` dengan perintah seperti berikut:
```sql
INSERT INTO user (username, password, role) VALUES ('admin', 'admin', 'admin')
```
Pastikan memasukkan role sebagai admin untuk memiliki hak akses penuh

#### b. Menggunakan database tes
Anda dapat menggunakan database yang digunakan untuk uji coba dengan cara mengimport file sql yang ada pada `test_db/collaborative_todo_app_nextjs.sql`.
Untuk mengimpor file tersebut, masukkan command berikut di command prompt (Windows) atau terminal (Linux, MacOS)
```shell
## untuk mysql atau mariadb
mysql -u username -p nama_database < path/ke/sql/collaborative_todo_app_nextjs.sql
```

### 4. Nyalakan web server
Nyalakan web servernya dengan cara mengetikkan
```shell
npx next dev
# atau dapat menggunakan command dibawah
npm run dev
```

### 5. Buka browser dengan alamat konfigurasi web server
Secara default, aplikasi ini berjalan pada `http://localhost:3000`. Anda dapat mengetikkan url ini di browser untuk mengakses aplikasi

## Tentang Pengembang
Aplikasi ini dibuat oleh:
- Jennifer Laluyan (220211060162)
- Stefanus Kaseger (220211060203)
- Yonathan Sihotang (220211060127)
- Jourgent Ligouw (220211060362)
