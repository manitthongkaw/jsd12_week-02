SELECT
    Ingredients.name,
    RecipeItems.quantity_needed,
    Ingredients.unit
FROM RecipeItems
JOIN MenuItems ON RecipeItems.item_id = MenuItems.item_id
JOIN Ingredients ON RecipeItems.ingredient_id = Ingredients.ingredient_id
WHERE MenuItems.name = 'Bacon Cheeseburger';