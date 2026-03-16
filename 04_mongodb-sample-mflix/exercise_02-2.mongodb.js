// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก movies ที่ข้อมูล type,rated ตามที่ระบุ
// แล้วนับว่ามีกี่รายการ
db.movies.find({ type: "movie", rated: "TV-G" }).count();