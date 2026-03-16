// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก movies ที่มีข้อความในข้อมูลตามที่ระบุ
// แล้วนับว่ามีกี่รายการ
db.movies.find({ plot: { $regex: "American", $options: "i" } }).count();