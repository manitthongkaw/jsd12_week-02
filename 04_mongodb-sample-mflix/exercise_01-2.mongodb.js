// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก comments ที่ข้อมูล id ตามที่ระบุ (เพียง 1 รายการ)
db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5") });