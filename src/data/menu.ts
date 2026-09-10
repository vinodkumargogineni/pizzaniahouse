export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  priceAlt?: string;
  tags?: ("veg" | "spicy" | "new" | "popular")[];
};

export type PriceTier = { label: string; price: string };

export type MenuCategory = {
  slug: string;
  title: string;
  blurb: string;
  note?: string;
  image?: string;
  priceTiers?: PriceTier[];
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    slug: "specialty-pizzas",
    image: "/img/pizza-specialty.jpg",
    title: "Specialty Pizzas",
    blurb: "Our loaded pies, built on hand-tossed dough.",
    priceTiers: [
      { label: "Medium", price: "$15.99" },
      { label: "Large", price: "$17.99" },
      { label: "X-Large", price: "$19.99" },
    ],
    items: [
      {
        name: "Ultimate Pepperoni Pizza",
        description:
          "Pizza sauce, pizza cheese, pepperoni, asiago, shredded provolone, oregano.",
        tags: ["popular"],
      },
      {
        name: "BBQ Chicken Pizza",
        description: "BBQ sauce, pizza cheese, chicken, onions, cheddar.",
      },
      {
        name: "Buffalo Chicken Pizza",
        description:
          "Buffalo sauce, pizza cheese, chicken, onions, American & cheddar cheese.",
        tags: ["spicy"],
      },
      {
        name: "Meat Lovers Pizza",
        description:
          "Pizza sauce, pizza cheese, pepperoni, salami, sausage, ham, beef.",
        tags: ["popular"],
      },
      {
        name: "Hawaiian Pizza",
        description: "Pizza sauce, pizza cheese, ham, bacon, pineapple.",
      },
      {
        name: "Veg Delight Pizza",
        description:
          "Pizza sauce, pizza cheese, spinach, corn, mushrooms, onions, green peppers, tomatoes, black olives, jalapeños, banana peppers.",
        tags: ["veg"],
      },
      {
        name: "Four Cheese Pizza",
        description:
          "Pizza sauce, pizza cheese, asiago, cheddar, parmesan, oregano.",
        tags: ["veg"],
      },
      {
        name: "Mushroom Delight Pizza",
        description:
          "Pizza sauce, pizza cheese, mushrooms, green peppers, onions, tomatoes.",
        tags: ["veg"],
      },
      {
        name: "Golden Corn Delight Pizza",
        description:
          "Pizza sauce, pizza cheese, corn, jalapeños, black olives, onions.",
        tags: ["veg"],
      },
      {
        name: "Chicken Bacon Ranch Pizza",
        description:
          "Ranch base, pizza cheese, chicken, bacon, tomatoes, onions.",
        tags: ["popular"],
      },
      {
        name: "Philly Steak Pizza",
        description:
          "American cheese, pizza cheese, steak, onions, green peppers, mushrooms.",
      },
      {
        name: "Cheese Burger Pizza",
        description: "Burger sauce, pizza cheese, tomatoes, pickles.",
        tags: ["new"],
      },
      {
        name: "Honey Mustard Magic Pizza",
        description:
          "Honey mustard sauce, pizza cheese, chicken, bacon, onions, corn, jalapeños.",
        tags: ["new"],
      },
      {
        name: "Supreme Pizza",
        description:
          "Pizza sauce, pizza cheese, pepperoni, sausage, green peppers, onions, mushrooms, black olives.",
        tags: ["popular"],
      },
    ],
  },
  {
    slug: "pizzas",
    image: "/img/pizza-classic.jpg",
    title: "Classic Pizzas",
    blurb: "The simple ones, done right.",
    priceTiers: [
      { label: "Medium", price: "$10.99" },
      { label: "Large", price: "$12.99" },
      { label: "X-Large", price: "$14.99" },
    ],
    items: [
      { name: "Pepperoni Pizza", description: "Pizza sauce, pizza cheese, pepperoni.", tags: ["popular"] },
      { name: "Cheese Pizza", description: "Pizza sauce, pizza cheese.", tags: ["veg"] },
    ],
  },
  {
    slug: "make-your-own-pizza",
    image: "/img/pizza-slices.jpg",
    title: "Make Your Own Pizza",
    blurb:
      "Start with a base and build it. Every topping, sauce, and cheese is $0.99 — extra toppings $0.99 each.",
    priceTiers: [
      { label: 'Medium 12"', price: "$10.99" },
      { label: 'Large 14"', price: "$12.99" },
      { label: 'X-Large 16"', price: "$14.99" },
    ],
    items: [
      {
        name: "Protein toppings — $0.99",
        description:
          "Pepperoni · Sausage · Ham · Bacon · Chicken · Steak · Salami · Capicola · Beef.",
      },
      {
        name: "Veggie toppings — $0.99",
        description:
          "Mushrooms · Onions · Green peppers · Black olives · Jalapeños · Banana peppers · Sweet corn · Tomatoes · Spinach.",
        tags: ["veg"],
      },
      { name: "Cheese options — $0.99", description: "Cheddar · Asiago.", tags: ["veg"] },
      {
        name: "Sauce options — $0.99",
        description:
          "Classic pizza · Garlic parmesan · Alfredo · BBQ · Buffalo · Honey mustard · Ranch · Burger sauce.",
      },
    ],
  },
  {
    slug: "hoagies",
    image: "/img/hoagie-club.jpg",
    title: "Hoagies",
    blurb: "Griddled and stacked on fresh rolls.",
    priceTiers: [
      { label: '8"', price: "$8.99" },
      { label: '12"', price: "$12.99" },
    ],
    items: [
      {
        name: "Philly Steak Hoagie",
        description:
          "Philly steak, grilled onions, mushrooms, green peppers & provolone cheese.",
        tags: ["popular"],
      },
      {
        name: "Chicken Parmesan Hoagie",
        description: "Grilled chicken, pizza sauce, asiago & provolone cheese.",
      },
      {
        name: "Italian Hoagie",
        description:
          "Pepperoni, salami, capicola, ham, onions, green peppers, banana peppers, provolone cheese & Italian dressing.",
      },
      {
        name: "Veggie Delight Hoagie",
        description:
          "Mushrooms, green peppers, onions, lettuce, tomatoes, pickles, provolone cheese & ranch dressing.",
        tags: ["veg"],
      },
      {
        name: "Grilled Chicken Hoagie",
        description:
          "Grilled chicken, lettuce, tomatoes, onions, provolone cheese & mayonnaise.",
      },
      {
        name: "Ham & Cheese Hoagie",
        description:
          "Ham, lettuce, tomatoes, onions, provolone cheese & mayonnaise.",
      },
      {
        name: "Chicken Bacon Hoagie",
        description:
          "Grilled chicken, crispy bacon, onions, cheddar & provolone, ranch dressing.",
        tags: ["popular"],
      },
      {
        name: "Steak Bacon Deluxe Hoagie",
        description:
          "Steak, crispy bacon, cheddar & provolone, lettuce, tomatoes, onions & mayonnaise.",
      },
      {
        name: "Buffalo Chicken Hoagie",
        description:
          "Grilled chicken, cheddar & provolone, onions & buffalo sauce.",
        tags: ["spicy"],
      },
      {
        name: "Fish Hoagie",
        description: "Crispy fried fish, lettuce, tomatoes & ranch dressing.",
      },
    ],
  },
  {
    slug: "burgers",
    image: "/img/burger-board.jpg",
    title: "Burgers",
    blurb: "",
    items: [
      {
        name: "Chicken Burger",
        description:
          "Chicken patty, lettuce, tomatoes, pickles, American cheese & mayonnaise.",
        price: "$5.99",
      },
      {
        name: "Cheese Burger",
        description:
          "Grilled beef patty, lettuce, tomatoes, pickles & American cheese.",
        price: "$5.99",
        tags: ["popular"],
      },
      {
        name: "Fish Burger",
        description: "Crispy fried fish fillet, lettuce, tomatoes & pickles.",
        price: "$6.99",
      },
    ],
  },
  {
    slug: "appetizers",
    image: "/img/appetizers.jpg",
    title: "Appetizers",
    blurb: "",
    items: [
      { name: "French Fries", price: "$3.99", tags: ["veg"] },
      { name: "Onion Rings", price: "$4.99", tags: ["veg"] },
      { name: "Cheese Fries", price: "$5.99", tags: ["veg"] },
      { name: "Aloo Samosa", price: "$6.99", tags: ["veg"] },
      { name: "Cheese Balls", price: "$6.99", tags: ["veg"] },
      { name: "Mac Bites", price: "$7.99", tags: ["veg"] },
      { name: "Breaded Mushroom", price: "$7.99", tags: ["veg"] },
      { name: "Boneless Chicken (6 pcs)", price: "$7.99" },
      { name: "Chicken Tenders (6 pcs)", price: "$8.99" },
      { name: "Chicken Wings (6 pcs)", price: "$8.99", tags: ["popular"] },
      { name: "Breaded Shrimp", price: "$8.99" },
      { name: "Fish Nuggets", price: "$9.99" },
      { name: "Crispy Fried Finger Fish", price: "$10.99" },
    ],
  },
  {
    slug: "spring-rolls",
    image: "/img/loaded-fries.jpg",
    title: "Spring Rolls",
    blurb: "",
    items: [
      { name: "Veg Rolls", price: "$5.99", tags: ["veg"] },
      { name: "Egg Rolls", price: "$6.99" },
      { name: "Chicken Rolls", price: "$6.99" },
      { name: "Shrimp Rolls", price: "$7.99" },
    ],
  },
  {
    slug: "cheesy-bread-bites",
    image: "/img/loaded-fries.jpg",
    title: "Stuffed Cheesy Bread Bites",
    blurb: "",
    items: [
      { name: "Breadsticks", price: "$6.99", tags: ["veg"] },
      { name: "Cheese Bites", price: "$8.99", tags: ["veg", "popular"] },
      { name: "Pepperoni Bites", price: "$8.99" },
      { name: "Jalapeno Bites", price: "$8.99", tags: ["spicy"] },
      { name: "Spinach Bites", price: "$8.99", tags: ["veg"] },
      { name: "Steak Bites", price: "$8.99" },
    ],
  },
  {
    slug: "pastas",
    image: "/img/pasta.jpg",
    title: "Pastas",
    blurb: "",
    items: [
      {
        name: "Chicken Alfredo Pasta",
        description: "Grilled chicken, Alfredo sauce & parmesan cheese.",
        price: "$9.99",
        tags: ["popular"],
      },
      {
        name: "Pasta Primavera",
        description:
          "Mushrooms, spinach, onions, green peppers & Alfredo sauce.",
        price: "$9.99",
        tags: ["veg"],
      },
      {
        name: "Classic Marinara Pasta",
        description: "Marinara sauce, sausage & cheese.",
        price: "$9.99",
      },
      {
        name: "Mac & Cheese Pasta",
        description: "Alfredo sauce, Asiago, cheddar & mozzarella blend.",
        price: "$9.99",
        tags: ["veg"],
      },
    ],
  },
  {
    slug: "rice-noodles",
    image: "/img/pasta.jpg",
    title: "Rice / Noodles",
    blurb: "",
    items: [
      { name: "Vegetable Rice / Noodles", price: "$12.99", tags: ["veg"] },
      { name: "Chicken Rice / Noodles", price: "$13.99" },
      { name: "Shrimp Rice / Noodles", price: "$13.99" },
      { name: "Steak Rice / Noodles", price: "$14.99" },
    ],
  },
  {
    slug: "salads",
    image: "/img/fresh-veg.jpg",
    title: "Salads",
    blurb: "",
    items: [
      { name: "Classic Garden Salad", price: "$7.99", tags: ["veg"] },
      { name: "Chicken Caesar Salad", price: "$8.99" },
    ],
  },
  {
    slug: "breakfast",
    image: "/img/breakfast.jpg",
    title: "Breakfast",
    blurb: "Served in the morning.",
    note: "Pancake flavours: Chocolate Chip & Blueberries +$1.99",
    items: [
      { name: "Oat Meal", price: "$3.99", tags: ["veg"] },
      { name: "Bagel with Cream Cheese", price: "$3.99", tags: ["veg"] },
      { name: "Egg & Cheese English Muffin", price: "$4.99", tags: ["veg"] },
      { name: "Egg & Cheese Croissant", price: "$5.99", tags: ["veg"] },
      { name: "French Toast (3 slices)", price: "$8.99", tags: ["veg", "popular"] },
      { name: "Pancakes (3 pcs)", price: "$8.99", tags: ["veg", "popular"] },
    ],
  },
  {
    slug: "desserts",
    image: "/img/dessert-cake.jpg",
    title: "Desserts",
    blurb: "",
    items: [
      { name: "Oreo Cheesecake", price: "$6.99", tags: ["veg"] },
      { name: "Funnel Cake Fries", price: "$6.99", tags: ["veg", "popular"] },
      { name: "Raspberry Cheesecake Bites", price: "$7.99", tags: ["veg"] },
      { name: "Dubai Style Chocolate Torte", price: "$7.99", tags: ["veg", "new"] },
      { name: "Bavarian Churros", price: "$8.99", tags: ["veg"] },
    ],
  },
  {
    slug: "drinks",
    image: "/img/dessert-tiramisu.jpg",
    title: "Drinks",
    blurb: "",
    items: [
      { name: "20 oz Drink", price: "$2.99" },
      { name: "2 Liter Bottle", price: "$3.99" },
      { name: "Coffee", price: "$2.99" },
      { name: "Orange Juice", price: "$2.99" },
      { name: "Apple Juice", price: "$2.99" },
      { name: "Sweet Tea", price: "$2.99" },
      { name: "Unsweetened Tea", price: "$2.99" },
      { name: "Milk", price: "$2.99" },
      { name: "Chocolate Milk", price: "$2.99" },
    ],
  },
];

export const combos = [
  {
    name: "Breakfast Combo",
    price: "$11.99",
    includes: "Choice of pancakes (3) or French toast (3), bacon, eggs & drink",
  },
  {
    name: "Rice / Noodles Combo",
    price: "$18.99",
    includes: "Rice or noodles, 2 spring rolls & drink",
  },
  {
    name: "Pasta Combo",
    price: "$15.99",
    includes: "Any pasta, breadsticks & drink",
  },
  {
    name: "Pizza Combo",
    price: "$21.99",
    includes: "Large specialty pizza, 6 wings & 2L drink",
  },
  {
    name: "Burger Combo",
    price: "$10.99",
    includes: "Any burger, fries & drink",
  },
  {
    name: 'Hoagie Combo — 8"',
    price: "$12.99",
    includes: '8" hoagie, fries & drink',
  },
  {
    name: 'Hoagie Combo — 12"',
    price: "$15.99",
    includes: '12" hoagie, fries & drink',
  },
];

export const tagLabels: Record<string, string> = {
  veg: "Vegetarian",
  spicy: "Spicy",
  new: "New",
  popular: "Fan favorite",
};
