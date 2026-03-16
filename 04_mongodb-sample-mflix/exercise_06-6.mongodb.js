// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก movies
// ที่ข้อมูล directors ที่มีชื่อตามที่ระบุ (or)
// และแสดงข้อมูลเฉพาะ title และ awards.wins เท่านั้น
db.movies.find({ 
    directors: { $in: ["Hal Roach"] } 
  }, {
    title: 1,
    "awards.wins": 1,
    _id: 0 
  });