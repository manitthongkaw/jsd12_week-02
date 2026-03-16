// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก movies
// ที่ข้อมูล directors ตามที่ระบุ
// แล้วนับว่ามีกี่รายการ
db.movies.find({ directors: "Hal Roach" }).count();