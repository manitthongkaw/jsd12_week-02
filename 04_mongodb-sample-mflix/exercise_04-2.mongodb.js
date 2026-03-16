// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก movies ที่มีข้อความท้ายสุดในข้อมูล plot ตามที่ระบุ โดยหาทั้งตัวใหญ่และตัวเล็ก
// แล้วนับว่ามีกี่รายการ
db.movies.find({ plot: { $regex: "street.$", $options: "i" } }).count();