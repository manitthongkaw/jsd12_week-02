# Mongo DB

### Setting on website
Database & Network Access > IP Access List = `0.0.0.0/0` (เพื่อให้ต่อ ip อะไรก็ได้)

## Standard JSON-Compatible Types
| Type | Description | Example |
| --- | --- | --- |
| String | UTF-8 string | “hello world” |
|Number (Double) |64-bit floating-point number | 42.42 |
| Boolean | Boolean values (true or false) | true, false |
| Object | Embedded document | { “key”: “value” } |
| Array | Ordered list of values | [ 1, 2, 3 ] |
| Null | Represents null value | null |

### MongoDB จะเก็บข้อมูลเป็น JSON คล้าย ๆ Object
- MongoDB = ห้องเก็บของ
- Database = ตู้เก็บของ
- Collection = กล่องเก็บของ
- Document = กระดาษข้อมูล 1 ใบ

`show dbs` ดูฐานข้อมูลทั้งหมด  
`show collections` ดู Collection ทั้งหมด  
`use("databaseName");` เรียกใช้ Database

**ตัวอย่างข้อมูล**  
```
{
  "_id": ObjectId("65f100000000000000000001"),
  "name": "Somchai",
  "age": 10
}
```

### เพิ่มข้อมูล (ทีละ 1 และหลายข้อมูล)
`db.students.insertOne({ name: "Somchai", age: 10 })`  
`db.students.insertMany([{ name: "Somchai", age: 10 }, { name: "Anan", age: 9 }])`

### ค้นหาข้อมูล
`db.students.find({ age: 10 })`  
`db.students.find({ name: "Somchai" })`

### แก้ไขข้อมูล
`db.students.updateOne({ name: "Somchai" }, { $set: { age: 11 } })`

### ลบข้อมูล
`db.students.deleteOne({ name: "Somchai" })`

## โครงสร้าง Syntax
```
db.collection.find(query, projection, options)
  .sort({ field: 1 or -1 }) // 1:น้อยไปมาก , -1:มากไปน้อย
  .limit(limit)             // แสดงรายการตามจำนวนที่กำหนด 
  .skip(number)             // ข้ามรายการตามจำนวนที่กำหนด
  .count()                  // แสดงเป็นเลขจำนวนรายการตามที่ระบุ
```
`projection: 1 or 0 (boolean values = true or false)`

**ตัวอย่าง**
```
db.students
  .find({ age: { $gte: 10 } }, { name: 1, age: 1, _id: 0 })
  .sort({ age: -1 })
  .limit(5)
  .skip(10)
```

**ความหมาย**
- หา students ที่ age >= 10
- แสดง name และ age
- เรียงอายุจากมากไปน้อย
- เอาแค่ 5 คน
- ข้าม 10 คนแรก

---

## ค้นหาข้อความใน String
db.coolection.find({ field: { `$regex: "string"`, `$options: "i"` } });  
`$regex: "\^string"` หาข้อความที่ **ขึ้นต้น** ด้วยข้อความที่ระบุบ  
`$regex: "string"` หาข้อความ **ตำแหน่งไหนก็ได้** ด้วยข้อความที่ระบุบ  
`$regex: "$string"` หาข้อความที่ **ต่อท้าย** ด้วยข้อความที่ระบุบ  
`$options: "i"` โดยหาทั้งตัวใหญ่ และตัวเล็ก  

db.coolection.find({ field: { `$in: ["value1", "value2"]` } });  
db.coolection.find({ field: { `$all: ["value1", "value2"]` } });  
`field` string / array  
`$in` มีค่าใดค่าหนึ่งก็ได้ (OR)  
`$all` ต้องมีทุกค่าในลิสต์ (AND)  
`$regex` แค่ มีคำนี้อยู่ในข้อความก็พอ  

---

## ค้นจำนวนนับ
condition = num_field > 300  
db.collection.find({ num_field: {`$gt: 300`} });

### Numerical Comparison 
| Human | Mathematic | MongoDB |
| --- | --- | --- |
| greater than | > | $gt |
| greater than or equal | >= | $gte |
| less than | < | $lt |
| less than or equal | <= | $lte |
| equal | == | $eq |

---

## Aggregate

> Filter → Project → Unwind → Group → Sort → Limit → Join

**Filter:** `$match` , `$search` or `$expr`  
**Project:** `$project` or `$unset`  
**Unwind:** `$unwind`  
**Group:** `$group`  
**Sort:** `$sort`  
**Limit:** `$facet` or `$skip`/`$limit`  
**Join:** `$lookup`  

`db.collection.aggregate([]);`  
`db.collection.aggregate([ {stage1}, {stage2}, … , {stageX} ])`
```
db.ingredients.aggregate([
  {
    $match: { field:"value" } // ดึงข้อมูล
  },{
    $project: {               // จัดเรียงใหม่แบบเสมือน
      _id: 0,                 // ไม่แสดง field นี้
      field: 1,               // แสดง field นี้
      newFieldName: $field    // ตั้งชื่อใหม่ และดึงค่าจาก field ที่กำหนด
    }
  }
]);
```