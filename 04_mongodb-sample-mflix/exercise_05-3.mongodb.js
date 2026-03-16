// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก movies
// ที่ข้อมูล year > มากกว่า 1954 และ < น้อยกว่า 1966
// เรียงข้อมูล runtime จากน้อยไปมาก
// แล้วแสดงรายการตามจำนวนที่กำหนด
db.movies.find({ year: { $gt: 1954, $lt: 1966 } }).sort({ year: 1 }).limit(3);