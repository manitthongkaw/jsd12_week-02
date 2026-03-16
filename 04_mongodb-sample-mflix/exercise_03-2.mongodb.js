// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก theaters ที่ข้อมูล location.address.city ตามที่ระบุ
// แล้วนับว่ามีกี่รายการ
db.theaters.find({ "location.address.city": "La Quinta" }).count();