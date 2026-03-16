// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก movies
// ที่ข้อมูล directors ที่มีชื่อตามที่ระบุ (or)
db.movies.find({ directors: { $in: ["Hal Roach"] } });