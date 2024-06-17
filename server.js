const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing body dari request
app.use(express.json());

// Middleware untuk mengaktifkan CORS
app.use(cors());

// Data dummy review produk pertanian
let productReviews = [
    { id: 1, name: "Faisal Ahmad", review: "Saya sangat senang dengan hasil tanaman jagung yang saya dapatkan dari Tanija. Benih berkualitas dan tanaman tumbuh subur dengan bantuan pupuk organik yang disarankan oleh Tanija." },
    { id: 2, name: "Dewi Susanti", review: "Saya baru saja membeli bibit tomat dari Tanija dan saya sangat puas dengan kualitasnya. Bibit tumbuh dengan baik dan menghasilkan buah yang segar dan berkualitas." },
    { id: 3, name: "Budi Santoso", review: "Saya menggunakan pestisida yang direkomendasikan oleh Tanija untuk mengatasi hama pada tanaman sayuran saya. Pestisida tersebut sangat efektif dan ramah lingkungan. Terima kasih Tanija!" },
    { id: 4, name: "Rina Fitriani", review: "Tanija memberikan layanan pelanggan yang sangat baik. Saya mendapatkan informasi yang jelas dan solusi yang tepat terkait permasalahan tanaman saya. Sangat direkomendasikan!" },
    { id: 5, name: "Irfan Setiawan", review: "Produk-produk Tanija selalu berkualitas. Saya sudah beberapa kali membeli berbagai jenis pupuk dan benih, semuanya memberikan hasil yang memuaskan. Terima kasih Tanija!" },
    { id: 6, name: "Siti Rahmawati", review: "Saya sangat terkesan dengan kecepatan pengiriman produk dari Tanija. Pesanan saya selalu sampai tepat waktu dan dalam kondisi yang baik. Pelayanan yang sangat baik!" }
];

// Mendapatkan semua review produk pertanian
app.get('/product-reviews', (req, res) => {
    res.json(productReviews);
});

// Menambahkan review baru tentang produk pertanian
app.post('/product-reviews', (req, res) => {
    const { name, review } = req.body;
    const id = productReviews.length + 1;
    productReviews.push({ id, name, review });
    res.status(201).json({ message: "Review produk berhasil ditambahkan", review: { id, name, review } });
});

// Menghapus review berdasarkan ID
app.delete('/product-reviews/:id', (req, res) => {
    const { id } = req.params;
    const index = productReviews.findIndex(review => review.id === parseInt(id));
    if (index !== -1) {
        productReviews.splice(index, 1);
        res.json({ message: `Review dengan ID ${id} berhasil dihapus` });
    } else {
        res.status(404).json({ message: `Review dengan ID ${id} tidak ditemukan` });
    }
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
