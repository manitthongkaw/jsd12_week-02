// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก theaters ที่ข้อมูล location.address.city ตามที่ระบุ (เพียง 1 รายการ)
db.theaters.findOne({ "location.address.city": "La Quinta" });