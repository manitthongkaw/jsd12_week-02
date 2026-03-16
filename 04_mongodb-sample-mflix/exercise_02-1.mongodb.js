// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก movies ที่ข้อมูล type,rated ตามที่ระบุ (เพียง 1 รายการ)
db.movies.findOne({ type: "movie", rated: "TV-G" });