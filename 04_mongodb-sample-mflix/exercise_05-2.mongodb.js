// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก movies
// ที่ข้อมูล runtime < น้อยกว่าที่กำหนด
// เรียงข้อมูล runtime จากมากไปน้อย
// แล้วแสดงรายการตามจำนวนที่กำหนด
db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1 }).limit(5);