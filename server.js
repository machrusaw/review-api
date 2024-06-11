const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing body dari request
app.use(express.json());

// Data dummy review
let reviews = [
    { id: 1, name: "Savannah Nguyen", review: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque." },
    { id: 2, name: "Esther Howard", review: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque." },
    { id: 3, name: "Esther Howard", review: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque." },
    // Tambahkan review lain di sini
];

// Mendapatkan semua review
app.get('/reviews', (req, res) => {
    res.json(reviews);
});

// Menambahkan review baru
app.post('/reviews', (req, res) => {
    const { name, review } = req.body;
    const id = reviews.length + 1;
    reviews.push({ id, name, review });
    res.status(201).json({ message: "Review berhasil ditambahkan", review: { id, name, review } });
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
