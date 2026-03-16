// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก comments ที่ข้อมูล name ตามที่ระบุ (เพียง 1 รายการ)
db.comments.findOne({ name: "John Bishop" });