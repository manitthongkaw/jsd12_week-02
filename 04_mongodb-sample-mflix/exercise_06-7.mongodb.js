// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก movies
// ที่ข้อมูล year และ genres ที่มีค่าตามที่ระบุ (and)
// และแสดงข้อมูลเฉพาะ title, year และ genres เท่านั้น
db.movies.find({
    year: 1995,
    genres: "Action"
  }, {
    _id: 0,
    title: 1,
    year: 1,
    genres: 1
  });