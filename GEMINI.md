# Project Overview: JSD12 Week 02

This directory serves as a learning environment for **Week 02** of the JSD12 course. It encompasses two primary components: a design and logic prototype for a custom furniture ecommerce platform, and a comprehensive set of PostgreSQL database exercises for a restaurant management system.

## Directory Structure & Key Files

### 1. Custom Furniture Ecommerce (Design & Logic)
This part of the project focuses on the product requirements and initial logic for a store selling solid wood furniture with custom variations (wood type, upholstery, steel color).

- **`01_my-ecommerce.md`**: Problem statement and proposed solutions for the custom furniture shop.
- **`02` - `04` (.excalidraw)**: Visual diagrams including Business Model Canvas, Use Case Diagram, and ER Diagram.
- **`05_product-backlog.md`**: User stories for both customers and administrators, emphasizing SKU-based variations.
- **`06_bring-it-to-javascript.js`**: A JavaScript prototype demonstrating SKU management and a basic shopping cart system using objects and arrays.

### 2. Restaurant Management System (PostgreSQL Exercises)
The `postgresql/` directory contains a full database schema and a series of SQL practice exercises.

- **`postgresql/create-tables.sql`**: The primary schema defining tables for `Suppliers`, `Staff`, `Ingredients`, `MenuItems`, `RecipeItems`, `Orders`, and `OrderItems`.
- **`postgresql/01_*.sql` to `07_*.sql`**: Seed data scripts for populating the tables.
- **`postgresql/exercise/`**: A collection of 10 SQL exercise files (`exercise_01.sql` to `exercise_10.sql`) ranging from simple selects to complex multi-table joins.

## Usage & Development

### Database Practice
To practice the SQL exercises:
1.  Run `create-tables.sql` in a PostgreSQL environment.
2.  Import the data using the numbered SQL files (`01_suppliers.sql`, etc.).
3.  Solve the queries in the `exercise/` folder.

### JavaScript Logic
The `06_bring-it-to-javascript.js` file can be executed directly using Node.js to see the sample output of the product and cart logic:
```bash
node 06_bring-it-to-javascript.js
```

## Development Conventions
- **Naming**: Database tables use `PascalCase`, while JavaScript variables use `camelCase`.
- **SKU Logic**: Variations of products are distinguished by unique SKUs (e.g., `1n1`, `1n2`) to allow for easy inventory and visual mapping.
- **Data Integrity**: The SQL schema enforces relational integrity through foreign keys and `SERIAL` primary keys.
