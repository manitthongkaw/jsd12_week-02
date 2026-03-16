// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก movies
// ที่ข้อมูล year มากกว่าปี 2010
// และมีข้อมูล genres = Drama (or) imdb.rating >= 8
// และแสดงข้อมูลเฉพาะ title, year, genres และ imdb.rating เท่านั้น
// แล้วแสดงรายการเพียง 10 รายการ
db.movies.find({
    year: { $gt: 2010 },                         
    $or: [
      { genres: "Drama" },                       
      { "imdb.rating": { $gte: 8 } }             
    ]
  },{ 
    _id: 0,
    title: 1,
    year: 1,
    genres: 1,
    "imdb.rating": 1
  }).limit(10);