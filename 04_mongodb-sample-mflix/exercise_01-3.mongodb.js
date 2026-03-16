// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก comments ที่ข้อมูล email ตามที่ระบุ (เพียง 1 รายการ)
db.comments.findOne({ email: "john_bishop@fakegmail.com" });