// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลทั้งหมดจาก movies
// เรียงข้อมูล runtime จากมากไปน้อย
// แล้วแสดงรายการตามจำนวนที่กำหนด
db.movies.find({}).sort({ runtime: -1 }).limit(5);