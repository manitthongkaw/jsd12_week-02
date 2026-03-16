// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก movies
// ที่ข้อมูล languages = French (or) Spanish
// และแสดงข้อมูลเฉพาะ title และ languages เท่านั้น
db.movies.find({
    $or: [
      { languages: "French" },
      { languages: "Spanish" }
    ]
  }, {
    _id: 0,
    title: 1,
    languages: 1
});