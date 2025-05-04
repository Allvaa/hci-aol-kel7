const reviewsData = {
    "Warung Makan Sederhana": [
        { username: "user11", rating: 3, ulasan: "Menu variatif dan unik." },
        { username: "user54", rating: 5, ulasan: "Enak banget, bakal balik lagi!" },
        { username: "user67", rating: 5, ulasan: "Kurang pedas menurut saya." },
        { username: "user7", rating: 3, ulasan: "Pelayanan ramah dan cepat." },
        { username: "user5", rating: 4, ulasan: "Rasa biasa saja, tidak terlalu spesial." }
    ],
    "Resto Padang Maknyus": [
        { username: "user61", rating: 2, ulasan: "Menu variatif dan unik." },
        { username: "user83", rating: 3, ulasan: "Menu variatif dan unik." },
        { username: "user76", rating: 3, ulasan: "Sambalnya juara!" },
        { username: "user72", rating: 3, ulasan: "Bumbu khas dan terasa autentik." },
        { username: "user37", rating: 4, ulasan: "Pelayanan ramah dan cepat." }
    ],
    "Bakso Joss": [
        { username: "user23", rating: 4, ulasan: "Sambalnya juara!" },
        { username: "user52", rating: 5, ulasan: "Menu variatif dan unik." },
        { username: "user91", rating: 2, ulasan: "Menu variatif dan unik." },
        { username: "user90", rating: 3, ulasan: "Sambalnya juara!" },
        { username: "user21", rating: 1, ulasan: "Tempatnya nyaman dan bersih." }
    ],
    "Ayam Bakar Mbok Berek": [
        { username: "user81", rating: 2, ulasan: "Enak banget, bakal balik lagi!" },
        { username: "user36", rating: 3, ulasan: "Kurang pedas menurut saya." },
        { username: "user10", rating: 3, ulasan: "Rasa biasa saja, tidak terlalu spesial." },
        { username: "user54", rating: 5, ulasan: "Harga terjangkau dengan porsi besar." },
        { username: "user28", rating: 2, ulasan: "Tempatnya nyaman dan bersih." }
    ],
    "Mie Aceh Seulawah": [
        { username: "user74", rating: 5, ulasan: "Makanannya kurang sesuai ekspektasi." },
        { username: "user35", rating: 4, ulasan: "Makanannya kurang sesuai ekspektasi." },
        { username: "user1", rating: 4, ulasan: "Kurang pedas menurut saya." },
        { username: "user96", rating: 5, ulasan: "Kurang pedas menurut saya." },
        { username: "user70", rating: 3, ulasan: "Bumbu khas dan terasa autentik." }
    ],
    "Soto Betawi Bang Dul": [
        { username: "user52", rating: 3, ulasan: "Enak banget, bakal balik lagi!" },
        { username: "user89", rating: 5, ulasan: "Sambalnya juara!" },
        { username: "user86", rating: 3, ulasan: "Enak banget, bakal balik lagi!" },
        { username: "user31", rating: 5, ulasan: "Menu variatif dan unik." },
        { username: "user43", rating: 3, ulasan: "Kurang pedas menurut saya." }
    ],
    "Pecel Lele Lela": [
        { username: "user99", rating: 4, ulasan: "Makanannya kurang sesuai ekspektasi." },
        { username: "user69", rating: 4, ulasan: "Enak banget, bakal balik lagi!" },
        { username: "user90", rating: 1, ulasan: "Makanannya kurang sesuai ekspektasi." },
        { username: "user66", rating: 2, ulasan: "Enak banget, bakal balik lagi!" },
        { username: "user47", rating: 3, ulasan: "Pelayanan ramah dan cepat." }
    ],
    "Seafood Kiloan Makassar": [
        { username: "user17", rating: 3, ulasan: "Sambalnya juara!" },
        { username: "user63", rating: 5, ulasan: "Kurang pedas menurut saya." },
        { username: "user14", rating: 4, ulasan: "Pelayanan ramah dan cepat." },
        { username: "user61", rating: 3, ulasan: "Sambalnya juara!" },
        { username: "user96", rating: 5, ulasan: "Makanannya kurang sesuai ekspektasi." }
    ],
    "Nasi Goreng Mafia": [
        { username: "user73", rating: 2, ulasan: "Sambalnya juara!" },
        { username: "user34", rating: 3, ulasan: "Makanannya kurang sesuai ekspektasi." },
        { username: "user77", rating: 1, ulasan: "Makanannya kurang sesuai ekspektasi." },
        { username: "user93", rating: 3, ulasan: "Menu variatif dan unik." },
        { username: "user5", rating: 3, ulasan: "Rasa biasa saja, tidak terlalu spesial." }
    ],
    "Ramen Rasa Nusantara": [
        { username: "user4", rating: 1, ulasan: "Pelayanan ramah dan cepat." },
        { username: "user91", rating: 3, ulasan: "Bumbu khas dan terasa autentik." },
        { username: "user50", rating: 4, ulasan: "Bumbu khas dan terasa autentik." },
        { username: "user77", rating: 5, ulasan: "Kurang pedas menurut saya." },
        { username: "user12", rating: 2, ulasan: "Enak banget, bakal balik lagi!" }
    ]
};

export let reviews = localStorage.getItem("reviews");

if (!reviews) {
    localStorage.setItem("reviews", JSON.stringify(reviewsData));
    reviews = JSON.parse(localStorage.getItem("reviews"));
} else {
    reviews = JSON.parse(reviews);
}

export function addReview(resto, user, rating, ulasan) {
    reviews[resto].push({
        username: user,
        rating: rating,
        ulasan: ulasan
    });
    localStorage.setItem("reviews", JSON.stringify(reviews));
}

export const restoranData = [
    {
        id: 0,
        nama: "Warung Makan Sederhana",
        alamat: "Jl. Merdeka No. 10, Jakarta",
        rating: 4.2,
        jenis_masakan: ["Indonesia", "Rumahan"],
        jam_buka: "08:00 - 21:00"
    },
    {
        id: 1,
        nama: "Resto Padang Maknyus",
        alamat: "Jl. Gajah Mada No. 45, Bandung",
        rating: 4.8,
        jenis_masakan: ["Padang", "Minang", "Pedas"],
        jam_buka: "10:00 - 22:00"
    },
    {
        id: 2,
        nama: "Bakso Joss",
        alamat: "Jl. Solo No. 123, Yogyakarta",
        rating: 3.9,
        jenis_masakan: ["Indonesia", "Bakso", "Street Food"],
        jam_buka: "09:00 - 20:00"
    },
    {
        id: 3,
        nama: "Ayam Bakar Mbok Berek",
        alamat: "Jl. Pemuda No. 88, Semarang",
        rating: 3.5,
        jenis_masakan: ["Ayam", "Tradisional"],
        jam_buka: "11:00 - 22:00"
    },
    {
        id: 4,
        nama: "Mie Aceh Seulawah",
        alamat: "Jl. Teuku Umar No. 27, Medan",
        rating: 4.7,
        jenis_masakan: ["Aceh", "Mie", "Pedas"],
        jam_buka: "10:00 - 21:30"
    },
    {
        id: 5,
        nama: "Soto Betawi Bang Dul",
        alamat: "Jl. Fatmawati No. 20, Jakarta",
        rating: 3.2,
        jenis_masakan: ["Soto", "Betawi", "Indonesia"],
        jam_buka: "08:00 - 18:00"
    },
    {
        id: 6,
        nama: "Pecel Lele Lela",
        alamat: "Jl. Diponegoro No. 70, Surabaya",
        rating: 2.6,
        jenis_masakan: ["Lele", "Goreng", "Lalapan"],
        jam_buka: "17:00 - 00:00"
    },
    {
        id: 7,
        nama: "Seafood Kiloan Makassar",
        alamat: "Jl. Rajawali No. 18, Makassar",
        rating: 4.1,
        jenis_masakan: ["Seafood", "Makassar", "Grill"],
        jam_buka: "16:00 - 23:00"
    },
    {
        id: 8,
        nama: "Nasi Goreng Mafia",
        alamat: "Jl. Dago No. 14, Bandung",
        rating: 4.9,
        jenis_masakan: ["Nasi Goreng", "Pedas", "Kreatif"],
        jam_buka: "11:00 - 23:00"
    },
    {
        id: 9,
        nama: "Ramen Rasa Nusantara",
        alamat: "Jl. Margonda Raya No. 99, Depok",
        rating: 4.3,
        jenis_masakan: ["Jepang", "Fusion", "Halal"],
        jam_buka: "12:00 - 22:00"
    }
];

export let restoran = restoranData; /*localStorage.getItem("restoran");

if (!restoran) {
    localStorage.setItem("restoran", JSON.stringify(restoranData));
    restoran = JSON.parse(localStorage.getItem("restoran"));
} else {
    restoran = JSON.parse(restoran);
}*/
