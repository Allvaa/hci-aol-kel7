export const reviewsData = {
    "0": [
        { username: "Kevin Gaming", rating: 3, ulasan: "Menu variatif dan unik." },
        { username: "user54", rating: 5, ulasan: "Enak banget, bakal balik lagi!" },
        { username: "user67", rating: 5, ulasan: "Kurang pedas menurut saya." },
        { username: "user7", rating: 3, ulasan: "Pelayanan ramah dan cepat." },
        { username: "user5", rating: 4, ulasan: "Rasa biasa saja, tidak terlalu spesial." }
    ],
    "1": [
        { username: "Kevin ganteng", rating: 2, ulasan: "Menu variatif dan unik." },
        { username: "user83", rating: 3, ulasan: "Menu variatif dan unik." },
        { username: "user76", rating: 3, ulasan: "Sambalnya juara!" },
        { username: "user72", rating: 3, ulasan: "Bumbu khas dan terasa autentik." },
        { username: "user37", rating: 4, ulasan: "Pelayanan ramah dan cepat." }
    ],
    "2": [
        { username: "Kevin bau", rating: 4, ulasan: "Sambalnya juara!" },
        { username: "user52", rating: 5, ulasan: "Menu variatif dan unik." },
        { username: "user91", rating: 2, ulasan: "Menu variatif dan unik." },
        { username: "user90", rating: 3, ulasan: "Sambalnya juara!" },
        { username: "user21", rating: 1, ulasan: "Tempatnya nyaman dan bersih." }
    ],
    "3": [
        { username: "user81", rating: 2, ulasan: "Enak banget, bakal balik lagi!" },
        { username: "user36", rating: 3, ulasan: "Kurang pedas menurut saya." },
        { username: "user10", rating: 3, ulasan: "Rasa biasa saja, tidak terlalu spesial." },
        { username: "user54", rating: 5, ulasan: "Harga terjangkau dengan porsi besar." },
        { username: "user28", rating: 2, ulasan: "Tempatnya nyaman dan bersih." }
    ],
    "4": [
        { username: "user74", rating: 5, ulasan: "Makanannya kurang sesuai ekspektasi." },
        { username: "user35", rating: 4, ulasan: "Makanannya kurang sesuai ekspektasi." },
        { username: "user1", rating: 4, ulasan: "Kurang pedas menurut saya." },
        { username: "user96", rating: 5, ulasan: "Kurang pedas menurut saya." },
        { username: "user70", rating: 3, ulasan: "Bumbu khas dan terasa autentik." }
    ],
    "5": [
        { username: "user52", rating: 3, ulasan: "Enak banget, bakal balik lagi!" },
        { username: "user89", rating: 5, ulasan: "Sambalnya juara!" },
        { username: "user86", rating: 3, ulasan: "Enak banget, bakal balik lagi!" },
        { username: "user31", rating: 5, ulasan: "Menu variatif dan unik." },
        { username: "user43", rating: 3, ulasan: "Kurang pedas menurut saya." }
    ],
    "6": [
        { username: "user99", rating: 4, ulasan: "Makanannya kurang sesuai ekspektasi." },
        { username: "user69", rating: 4, ulasan: "Enak banget, bakal balik lagi!" },
        { username: "user90", rating: 1, ulasan: "Makanannya kurang sesuai ekspektasi." },
        { username: "user66", rating: 2, ulasan: "Enak banget, bakal balik lagi!" },
        { username: "user47", rating: 3, ulasan: "Pelayanan ramah dan cepat." }
    ],
    "7": [
        { username: "user17", rating: 3, ulasan: "Sambalnya juara!" },
        { username: "user63", rating: 5, ulasan: "Kurang pedas menurut saya." },
        { username: "user14", rating: 4, ulasan: "Pelayanan ramah dan cepat." },
        { username: "user61", rating: 3, ulasan: "Sambalnya juara!" },
        { username: "user96", rating: 5, ulasan: "Makanannya kurang sesuai ekspektasi." }
    ],
    "8": [
        { username: "user73", rating: 2, ulasan: "Sambalnya juara!" },
        { username: "user34", rating: 3, ulasan: "Makanannya kurang sesuai ekspektasi." },
        { username: "user77", rating: 1, ulasan: "Makanannya kurang sesuai ekspektasi." },
        { username: "user93", rating: 3, ulasan: "Menu variatif dan unik." },
        { username: "user5", rating: 3, ulasan: "Rasa biasa saja, tidak terlalu spesial." }
    ]
};

export let reviews = localStorage.getItem("reviews");

if (!reviews) {
    localStorage.setItem("reviews", JSON.stringify(reviewsData));
    reviews = JSON.parse(localStorage.getItem("reviews"));
} else {
    reviews = JSON.parse(reviews);
}

export function addReview(resto, user, rating, ulasan, photo) {
    reviews[resto].push({
        username: user,
        rating: rating,
        ulasan: ulasan,
        photo
    });
    localStorage.setItem("reviews", JSON.stringify(reviews));
    reviews = localStorage.getItem("reviews");
}

const restoranData = [
    {
        id: 0,
        nama: "Kwetiau 79",
        alamat: "Jalan Anggrek cakra no 17 Kemanggisan, RT.4/RW.6, Sukabumi Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11450",
        rating: 4.5,
        jenis_masakan: ["Chinese", "Kwetiau"],
        jam_buka: "10:00 - 22:00",
        gambar: "kwetiau_79.jpg"
    },
    {
        id: 1,
        nama: "Rocky Rooster",
        alamat: "Jl. Rw. Belong No.82B, RT.9/RW.15, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
        rating: 4.6,
        jenis_masakan: ["Western", "Fried Chicken"],
        jam_buka: "10:00 - 22:00",
        gambar: "Rocky Rooster.jpg"
    },
    {
        id: 2,
        nama: "Geisha The Sushi House",
        alamat: "4, Jl. Anggrek Cakra No.7, RT.4/RW.3, Sukabumi Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11540",
        rating: 4.5,
        jenis_masakan: ["Japanese", "Sushi"],
        jam_buka: "11:00 - 22:00",
        gambar: "Geisha.jpg"
    },
    {
        id: 3,
        nama: "Koka Ramen Express",
        alamat: "DEPAN BINUS SYAHDAN, Jl. Kyai H. Syahdan No.105, RT.2/RW.11, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
        rating: 4.1,
        jenis_masakan: ["Japanese", "Ramen"],
        jam_buka: "10:00 - 22:00",
        gambar: "Koka Ramen.jpg"
    },
    {
        id: 4,
        nama: "Fore Go",
        alamat: "Jl. Anggrek Cakra No.20, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
        rating: 4.6,
        jenis_masakan: ["Coffee", "Beverages"],
        jam_buka: "07:00 - 22:00",
        gambar: "Fore.jpg"
    },
    {
        id: 5,
        nama: "Waroeng Western",
        alamat: "2, Jl. K. H. Cholil No.121, RT.2/RW.12, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
        rating: 4.3,
        jenis_masakan: ["Western", "Steak"],
        jam_buka: "10:00 - 22:00",
        gambar: "waroeng_western.jpg"
    },
    {
        id: 6,
        nama: "Sky Pasta",
        alamat: "Jl. Rw. Belong No.38-34, RT.7/RW.15, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11540",
        rating: 4.9,
        jenis_masakan: ["Western", "Pasta"],
        jam_buka: "11:00 - 22:00",
        gambar: "Sky Pasta.jpg"
    },
    {
        id: 7,
        nama: "Texas Chichken Rawa Belong",
        alamat: "Jl. Rw. Belong No.50a, RT.7/RW.15, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
        rating: 4.4,
        jenis_masakan: ["Western", "Fast Food"],
        jam_buka: "10:00 - 22:00",
        gambar: "Texas Chicken.jpeg"
    },
    {
        id: 8,
        nama: "The Cortado",
        alamat: "Jl. Keluarga No.36 6, RT.6/RW.12, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
        rating: 4.4,
        jenis_masakan: ["Cafe", "Coffee"],
        jam_buka: "08:00 - 22:00",
        gambar: "Cortado-pica.png"
    }
];

export let restoran = restoranData;