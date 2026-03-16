// เรียกใช้ database
use("sample_mflix");

// เรียกข้อมูลจาก movies
// ที่ข้อมูล genres = Drama และ History
// และ released มากกว่าวันที่ 1970-01-01
// แล้วนับว่ามีกี่รายการ
db.movies.find({ 
  genres: { $all: ["Drama", "History"] },
  released: { $gt: ISODate("1970-01-01T00:00:00Z") }
}).count();