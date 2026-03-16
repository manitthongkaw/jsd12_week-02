# PostgreSQL

- CREATE
- INSERT
- SELECT
- UPDATE
- DELETE

## Pattern
**SELECT** A_table_name.column_name, A_table_name.column_name (column ที่ต้องการข้อมูล) AS column_name_new (ชื่อใหม่ที่จะแสดงในผลลัพธ์)   
**FROM** A_table_name  
**JOIN** B_table_name  
  **ON** A_table_name.column_name = B_table_name.column_name  
**WHERE** condition (EX: category = 'Burger')  
**GROUP BY** conlumn_name (รวม conlumn_name ที่เหมือนกันจาก 2 table)  
**HAVING** condition  
**ORDER BY** column_name asc/desc (sort is asc/desc)  
**LIMIT** number;  

## Update data
**UPDATE** A_table_name  
**SET** column_age = 11  
**WHERE** column_name = 'Somchai';  

## Delete data
**DELETE** FROM A_table_name  
**WHERE** column_name = 'Somchai';  

## Delete Database
**DROP** TABLE A_table_name;  