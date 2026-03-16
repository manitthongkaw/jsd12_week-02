// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก movies
// ที่ข้อมูล cast ตามที่ระบุ
// แล้วนับว่ามีกี่รายการ
db.movies.find({ cast: "Roy L. McCardell" }).count();