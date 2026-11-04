
/* =========================================================
   HOTEL HARSHVARDHAN - MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. CATEGORY DATA
   ========================================================= */

const categories = [
    {
        id: "biryani",
        name: "Biryani",
        description: "Aromatic rice, rich spices and delicious flavours.",
        image: "./assets/images/categories/biryani.jpg"
    },
    {
        id: "north-indian",
        name: "North Indian",
        description: "Enjoy delicious North Indian favourites.",
        image: "./assets/images/categories/north-indian.jpg"
    },
    {
        id: "south-indian",
        name: "South Indian",
        description: "Explore traditional South Indian flavours.",
        image: "./assets/images/categories/south-indian.jpg"
    },
    {
        id: "chinese",
        name: "Chinese",
        description: "Discover delicious Chinese-inspired dishes.",
        image: "./assets/images/categories/chinese.jpg"
    },
    {
        id: "breads",
        name: "Rotis",
        description: "Freshly prepared breads to complete your meal.",
        image: "./assets/images/categories/breads.jpg"
    },
    {
        id: "desserts",
        name: "Desserts",
        description: "Something sweet to finish your meal.",
        image: "./assets/images/categories/desserts/desserts-hero.webp"
    },
    {
        id: "beverages",
        name: "Beverages",
        description: "Refreshing drinks for every occasion.",
        image: "./assets/images/categories/beverages/beverage-hero.webp"
    }
];

/* =========================================================
   2. DISH DATA
   ========================================================= */

const menuDishes = [
    {
        id: 1,
        name: "Chicken Biryani",
        category: "biryani",
        price: 220,
        rating: 4.6,
        reviews: "2.4K",
        foodType: "non-veg",
        image: "./assets/images/categories/biryani/hyderabadi-chicken-dum-biryani.jpg"
    },
    {
        id: 2,
        name: "Butter Chicken",
        category: "north-indian",
        price: 280,
        rating: 4.5,
        reviews: "1.8K",
        foodType: "non-veg",
        image: "./assets/images/dishes/butter-chicken.jpg"
    },
    {
        id: 3,
        name: "Chicken Tandoori",
        category: "north-indian",
        price: 320,
        rating: 4.7,
        reviews: "1.2K",
        foodType: "non-veg",
        image: "./assets/images/dishes/chicken-tandoori.jpg"
    },
    {
        id: 4,
        name: "Veg Fried Rice",
        category: "chinese",
        price: 180,
        rating: 4.4,
        reviews: "950",
        foodType: "veg",
        image: "./assets/images/dishes/veg-fried-rice.jpg",
        menuGroup: "chinese-veg"
    },
    {
        id: 5,
        name: "Paneer Butter Masala",
        category: "north-indian",
        price: 260,
        foodType: "veg",
        image: "./assets/images/categories/north-indian/paneer-lababdar.jpg",
        menuGroup: "paneer-specials"
    },
    {
        id: 6,
        name: "Kadai Paneer",
        category: "north-indian",
        price: 280,
        foodType: "veg",
        image: "./assets/images/categories/north-indian/amritsari-paneer-masala.jpg",
        menuGroup: "paneer-specials"
    },
    {
        id: 7,
        name: "Shahi Paneer",
        category: "north-indian",
        price: 270,
        foodType: "veg",
        image: "./assets/images/categories/north-indian/dhaba-paneer-do-pyaza.jpg",
        menuGroup: "paneer-specials"
    },
    {
        id: 8,
        name: "Paneer Tikka",
        category: "north-indian",
        price: 240,
        foodType: "veg",
        image: "./assets/images/hero/special-food.png",
        menuGroup: "veg-starters"
    },
    {
        id: 9,
        name: "Hara Bhara Kebab",
        category: "north-indian",
        price: 190,
        foodType: "veg",
        image: "./assets/images/categories/north-indian/north-indian-deluxe-thali.jpg",
        menuGroup: "veg-starters"
    },
    {
        id: 10,
        name: "Veg Manchurian Dry",
        category: "chinese",
        price: 200,
        foodType: "veg",
        image: "./assets/images/categories/veg-starters.png",
        menuGroup: "veg-starters"
    },
    {
        id: 11,
        name: "Mixed Vegetable Curry",
        category: "north-indian",
        price: 220,
        foodType: "veg",
        image: "./assets/images/categories/north-indian/north-indian-hero.jpg",
        menuGroup: "veg-main-course"
    },
    {
        id: 12,
        name: "Veg Kofta Curry",
        category: "north-indian",
        price: 240,
        foodType: "veg",
        image: "./assets/images/categories/north-indian/makhani-soya-chaap.jpg",
        menuGroup: "veg-main-course"
    },
    {
        id: 13,
        name: "Aloo Gobi Masala",
        category: "north-indian",
        price: 200,
        foodType: "veg",
        image: "./assets/images/categories/north-indian/punjabi-veg-thali.jpg",
        menuGroup: "veg-main-course"
    },
    {
        id: 14,
        name: "Dal Tadka",
        category: "north-indian",
        price: 180,
        foodType: "veg",
        image: "./assets/images/categories/north-indian/punjabi-rajma-masala.jpg",
        menuGroup: "dal-curries"
    },
    {
        id: 15,
        name: "Dal Makhani",
        category: "north-indian",
        price: 220,
        foodType: "veg",
        image: "./assets/images/categories/north-indian/punjabi-chole-masala.jpg",
        menuGroup: "dal-curries"
    },
    {
        id: 16,
        name: "Chana Masala",
        category: "north-indian",
        price: 200,
        foodType: "veg",
        image: "./assets/images/categories/north-indian.jpg",
        menuGroup: "dal-curries"
    },
    {
        id: 17,
        name: "Veg Biryani",
        category: "biryani",
        price: 220,
        foodType: "veg",
        image: "./assets/images/categories/biryani/classic-veg-dum-biryani.jpg",
        menuGroup: "veg-biryani-rice"
    },
    {
        id: 18,
        name: "Peas Pulao",
        category: "biryani",
        price: 170,
        foodType: "veg",
        image: "./assets/images/categories/north-indian/kashmiri-saffron-pulao.jpg",
        menuGroup: "veg-biryani-rice"
    },
    {
        id: 19,
        name: "Jeera Rice",
        category: "biryani",
        price: 140,
        foodType: "veg",
        image: "./assets/images/categories/north-indian/jeera-basmati-rice.jpg",
        menuGroup: "veg-biryani-rice"
    },
    {
        id: 20,
        name: "Veg Hakka Noodles",
        category: "chinese",
        price: 190,
        foodType: "veg",
        image: "./assets/images/categories/chinese.jpg",
        menuGroup: "chinese-veg"
    },
    {
        id: 21,
        name: "Chilli Paneer",
        category: "chinese",
        price: 250,
        foodType: "veg",
        image: "./assets/images/categories/north-indian/rasoi-special-butter-paneer-garlic-naan-combo.jpg",
        menuGroup: "chinese-veg"
    },
    {
        id: 22,
        name: "Masala Dosa",
        category: "south-indian",
        price: 140,
        foodType: "veg",
        image: "./assets/images/categories/south-indian/mysore-masala-dosa.jpg",
        menuGroup: "south-indian"
    },
    {
        id: 23,
        name: "Idli Sambar",
        category: "south-indian",
        price: 110,
        foodType: "veg",
        image: "./assets/images/categories/south-indian/classic-idli-sambar.jpg",
        menuGroup: "south-indian"
    },
    {
        id: 24,
        name: "Medu Vada",
        category: "south-indian",
        price: 120,
        foodType: "veg",
        image: "./assets/images/categories/south-indian/medu-vada-sambar.jpg",
        menuGroup: "south-indian"
    },
    {
        id: 25,
        name: "Butter Naan",
        category: "breads",
        price: 55,
        foodType: "veg",
        image: "./assets/images/indian-rotis/butter-naan.jpg",
        menuGroup: "indian-breads"
    },
    {
        id: 26,
        name: "Garlic Naan",
        category: "breads",
        price: 70,
        foodType: "veg",
        image: "./assets/images/indian-rotis/garlic-butter-naan.jpg",
        menuGroup: "indian-breads"
    },
    {
        id: 27,
        name: "Tandoori Roti",
        category: "breads",
        price: 35,
        foodType: "veg",
        image: "./assets/images/indian-rotis/classic-tandoori-roti.jpg",
        menuGroup: "indian-breads"
    }
];

const popularDishes = menuDishes.slice(0, 16);

const beverageCategories = [
    { id: "iced-coffee", name: "Iced Coffee" },
    { id: "milk-based-coffee", name: "Milk-Based Coffee" },
    { id: "classic-coffee", name: "Classic Coffee" },
    { id: "specialty-coffee", name: "Specialty Coffee" },
    { id: "sweet-coffee", name: "Sweet Coffee" },
    { id: "cold-beverages", name: "Cold Beverages" },
    { id: "refreshments", name: "Refreshments" }
];

const beverageDishes = [
    {
        id: 101,
        name: "Iced Americano",
        category: "iced-coffee",
        description: "Bold espresso poured over ice with a clean finish.",
        price: 150,
        image: {
            url: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/iced-americano.webp"
        }
    },
    {
        id: 102,
        name: "Iced Latte",
        category: "iced-coffee",
        description: "Espresso and chilled milk over fresh ice.",
        price: 190,
        image: {
            url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/iced-latte.webp"
        }
    },
    {
        id: 103,
        name: "Classic Cold Brew",
        category: "iced-coffee",
        description: "Slow-steeped coffee with a smooth, mellow taste.",
        price: 200,
        image: {
            url: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/classic-cold-brew.webp"
        }
    },
    {
        id: 104,
        name: "Cappuccino",
        category: "milk-based-coffee",
        description: "Rich espresso with steamed milk and airy foam.",
        price: 170,
        image: {
            url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/cappuccino.webp"
        }
    },
    {
        id: 105,
        name: "Café Latte",
        category: "milk-based-coffee",
        description: "A mellow espresso softened with silky steamed milk.",
        price: 180,
        image: {
            url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/cafe-latte.webp"
        }
    },
    {
        id: 106,
        name: "Flat White",
        category: "milk-based-coffee",
        description: "Double espresso finished with velvety microfoam.",
        price: 185,
        image: {
            url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/flat-white.webp"
        }
    },
    {
        id: 107,
        name: "Espresso",
        category: "classic-coffee",
        description: "A short, intense shot with a golden crema.",
        price: 110,
        image: {
            url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/espresso.webp"
        }
    },
    {
        id: 108,
        name: "Americano",
        category: "classic-coffee",
        description: "Espresso lengthened with hot water.",
        price: 140,
        image: {
            url: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/americano.webp"
        }
    },
    {
        id: 109,
        name: "Long Black",
        category: "classic-coffee",
        description: "Hot water topped with a bold double espresso.",
        price: 145,
        image: {
            url: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/long-black.webp"
        }
    },
    {
        id: 110,
        name: "Cortado",
        category: "specialty-coffee",
        description: "Espresso balanced with a touch of warm milk.",
        price: 165,
        image: {
            url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/cortado.webp"
        }
    },
    {
        id: 111,
        name: "Turkish Coffee",
        category: "specialty-coffee",
        description: "Traditionally brewed, rich and aromatic.",
        price: 180,
        image: {
            url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/turkish-coffee.webp"
        }
    },
    {
        id: 112,
        name: "Café au Lait",
        category: "specialty-coffee",
        description: "Smooth brewed coffee with warm steamed milk.",
        price: 175,
        image: {
            url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/cafe-au-lait.webp"
        }
    },
    {
        id: 113,
        name: "Caramel Macchiato",
        category: "sweet-coffee",
        description: "Layered espresso, milk and buttery caramel.",
        price: 220,
        image: {
            url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/caramel-macchiato.webp"
        }
    },
    {
        id: 114,
        name: "Vanilla Latte",
        category: "sweet-coffee",
        description: "Espresso and steamed milk with vanilla sweetness.",
        price: 210,
        image: {
            url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/vanilla-latte.webp"
        }
    },
    {
        id: 115,
        name: "Mocha",
        category: "sweet-coffee",
        description: "Espresso and chocolate folded into steamed milk.",
        price: 220,
        image: {
            url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/mocha.webp"
        }
    },
    {
        id: 116,
        name: "Chocolate Frappe",
        category: "cold-beverages",
        description: "Blended chocolate, milk and ice, topped with cream.",
        price: 210,
        image: {
            url: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/chocolate-frappe.webp"
        }
    },
    {
        id: 117,
        name: "Vanilla Milkshake",
        category: "cold-beverages",
        description: "Creamy vanilla blended cold and served tall.",
        price: 190,
        image: {
            url: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/vanilla-milkshake.webp"
        }
    },
    {
        id: 118,
        name: "Iced Chocolate",
        category: "cold-beverages",
        description: "Chilled cocoa and milk poured over ice.",
        price: 175,
        image: {
            url: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/iced-chocolate.webp"
        }
    },
    {
        id: 119,
        name: "Fresh Lime Soda",
        category: "refreshments",
        description: "Fresh lime, sparkling soda and a hint of salt.",
        price: 110,
        image: {
            url: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/fresh-lime-soda.webp"
        }
    },
    {
        id: 120,
        name: "Mint Cooler",
        category: "refreshments",
        description: "Cooling mint, citrus and sparkling water.",
        price: 130,
        image: {
            url: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/mint-cooler.webp"
        }
    },
    {
        id: 121,
        name: "Fresh Orange Juice",
        category: "refreshments",
        description: "Freshly squeezed orange juice, served chilled.",
        price: 150,
        image: {
            url: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=85",
            local: "./assets/images/categories/beverages/fresh-orange-juice.webp"
        }
    }
];

const biryaniCategories = [
    { id: "hyderabadi-biryani", name: "Hyderabadi Biryani" },
    { id: "lucknowi-biryani", name: "Lucknowi Biryani" },
    { id: "kolkata-biryani", name: "Kolkata Biryani" },
    { id: "special-handi-biryani", name: "Special Handi Biryani" },
    { id: "veg-biryani", name: "Veg Biryani" }
];

const biryaniDishes = [
    {
        id: 201,
        name: "Hyderabadi Chicken Dum Biryani",
        category: "hyderabadi-biryani",
        description: "Basmati rice, marinated chicken and bold dum-cooked spices.",
        price: 280,
        image: {
            url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/biryani/hyderabadi-chicken-dum-biryani.jpg"
        }
    },
    {
        id: 202,
        name: "Hyderabadi Mutton Dum Biryani",
        category: "hyderabadi-biryani",
        description: "Tender mutton layered with saffron rice and whole spices.",
        price: 360,
        image: {
            url: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/biryani/hyderabadi-mutton-dum-biryani.jpg"
        }
    },
    {
        id: 203,
        name: "Hyderabadi Chicken 65 Biryani",
        category: "hyderabadi-biryani",
        description: "Spiced chicken 65 tucked into fragrant, slow-cooked basmati.",
        price: 310,
        image: {
            url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/biryani/hyderabadi-chicken-65-biryani.jpg"
        }
    },
    {
        id: 204,
        name: "Lucknowi Chicken Yakhni Biryani",
        category: "lucknowi-biryani",
        description: "Delicate yakhni broth, mellow spices and fragrant basmati.",
        price: 290,
        image: {
            url: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/biryani/lucknowi-chicken-yakhni-biryani.jpg"
        }
    },
    {
        id: 205,
        name: "Awadhi Mutton Biryani",
        category: "lucknowi-biryani",
        description: "Slow-braised mutton with saffron and gentle Awadhi aromatics.",
        price: 370,
        image: {
            url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/biryani/awadhi-mutton-biryani.jpg"
        }
    },
    {
        id: 206,
        name: "Lucknowi Vegetable Biryani",
        category: "lucknowi-biryani",
        description: "Seasonal vegetables, mint and delicately spiced basmati.",
        price: 230,
        image: {
            url: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/biryani/lucknowi-vegetable-biryani.jpg"
        }
    },
    {
        id: 207,
        name: "Kolkata Chicken Biryani",
        category: "kolkata-biryani",
        description: "Aromatic rice with tender chicken, potato and warm spices.",
        price: 270,
        image: {
            url: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/biryani/kolkata-chicken-biryani.jpg"
        }
    },
    {
        id: 208,
        name: "Kolkata Mutton Biryani",
        category: "kolkata-biryani",
        description: "Slow-cooked mutton, fragrant potato and subtle kewra notes.",
        price: 350,
        image: {
            url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/biryani/kolkata-mutton-biryani.jpg"
        }
    },
    {
        id: 209,
        name: "Kolkata Egg Biryani",
        category: "kolkata-biryani",
        description: "Golden egg and basmati rice with potato and fragrant masala.",
        price: 220,
        image: {
            url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/biryani/kolkata-egg-biryani.jpg"
        }
    },
    {
        id: 210,
        name: "Chicken Handi Biryani",
        category: "special-handi-biryani",
        description: "Chicken and saffron basmati sealed and finished in a handi.",
        price: 320,
        image: {
            url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/biryani/chicken-handi-biryani.jpg"
        }
    },
    {
        id: 211,
        name: "Mutton Handi Biryani",
        category: "special-handi-biryani",
        description: "Tender mutton dum-cooked with whole spices in a handi.",
        price: 390,
        image: {
            url: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/biryani/mutton-handi-biryani.jpg"
        }
    },
    {
        id: 212,
        name: "Chef's Special Dum Biryani",
        category: "special-handi-biryani",
        description: "Our signature handi layered with saffron rice, herbs and tender chicken.",
        price: 340,
        image: {
            url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1100&q=90",
            local: "./assets/images/categories/biryani/chefs-special-dum-biryani.jpg"
        }
    },
    {
        id: 213,
        name: "Classic Veg Dum Biryani",
        category: "veg-biryani",
        description: "Garden vegetables, fresh herbs and saffron dum-cooked rice.",
        price: 220,
        image: {
            url: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/biryani/classic-veg-dum-biryani.jpg"
        }
    },
    {
        id: 214,
        name: "Paneer Tikka Biryani",
        category: "veg-biryani",
        description: "Smoky paneer tikka, mint and spiced long-grain basmati.",
        price: 260,
        image: {
            url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/biryani/paneer-tikka-biryani.jpg"
        }
    },
    {
        id: 215,
        name: "Mushroom Masala Biryani",
        category: "veg-biryani",
        description: "Mushrooms tossed with aromatic masala, mint and basmati.",
        price: 240,
        image: {
            url: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/biryani/mushroom-masala-biryani.jpg"
        }
    }
];

const northIndianCategories = [
    { id: "paneer-specialities", name: "Paneer Specialities" },
    { id: "rich-gravies-dal", name: "Rich Gravies & Dal Makhani" },
    { id: "tandoori-breads", name: "Tandoori Breads & Naan" },
    { id: "rice-pulao", name: "Rice & Pulao" },
    { id: "complete-thalis", name: "Complete Thalis" }
];

const northIndianDishes = [
    {
        id: 301,
        name: "Paneer Lababdar",
        category: "paneer-specialities",
        description: "Soft paneer folded into a creamy tomato gravy with a gentle kasuri methi finish.",
        price: 290,
        image: {
            url: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/paneer-lababdar.jpg"
        }
    },
    {
        id: 302,
        name: "Amritsari Paneer Masala",
        category: "paneer-specialities",
        description: "Tandoor-kissed paneer simmered with Punjabi spices in a rich, buttery masala.",
        price: 300,
        image: {
            url: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/amritsari-paneer-masala.jpg"
        }
    },
    {
        id: 303,
        name: "Dhaba Paneer Do Pyaza",
        category: "paneer-specialities",
        description: "Paneer and crisp onion petals tossed in a rustic, smoky dhaba-style gravy.",
        price: 280,
        image: {
            url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/dhaba-paneer-do-pyaza.jpg"
        }
    },
    {
        id: 304,
        name: "Rasoi Special Butter Paneer & Garlic Naan Combo",
        category: "paneer-specialities",
        description: "Silky butter paneer with a freshly tandoor-roasted garlic naan, finished with herbs.",
        price: 360,
        image: {
            url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1100&q=90",
            local: "./assets/images/categories/north-indian/rasoi-special-butter-paneer-garlic-naan-combo.jpg"
        }
    },
    {
        id: 305,
        name: "Punjabi Chole Masala",
        category: "rich-gravies-dal",
        description: "Slow-simmered chickpeas in a bold, tangy Punjabi masala with fresh coriander.",
        price: 220,
        image: {
            url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/punjabi-chole-masala.jpg"
        }
    },
    {
        id: 306,
        name: "Punjabi Rajma Masala",
        category: "rich-gravies-dal",
        description: "Comforting red kidney beans simmered slowly in a spiced tomato-onion gravy.",
        price: 230,
        image: {
            url: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/punjabi-rajma-masala.jpg"
        }
    },
    {
        id: 307,
        name: "Dal Panchmel",
        category: "rich-gravies-dal",
        description: "Five lentils cooked together and tempered with ghee, cumin and warming spices.",
        price: 210,
        image: {
            url: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/dal-panchmel.jpg"
        }
    },
    {
        id: 308,
        name: "Makhani Soya Chaap",
        category: "rich-gravies-dal",
        description: "Charred soya chaap finished in a velvety makhani gravy with a touch of cream.",
        price: 270,
        image: {
            url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/makhani-soya-chaap.jpg"
        }
    },
    {
        id: 309,
        name: "Tandoori Garlic Naan",
        category: "tandoori-breads",
        description: "Soft naan baked in a clay tandoor, brushed with butter and fresh garlic.",
        price: 75,
        image: {
            url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/tandoori-garlic-naan.jpg"
        }
    },
    {
        id: 310,
        name: "Amritsari Kulcha",
        category: "tandoori-breads",
        description: "Golden, tandoor-roasted kulcha with a crisp crust and a tender centre.",
        price: 90,
        image: {
            url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/amritsari-kulcha.jpg"
        }
    },
    {
        id: 311,
        name: "Lachha Tandoori Paratha",
        category: "tandoori-breads",
        description: "Flaky, layered whole-wheat paratha finished with a light brush of butter.",
        price: 70,
        image: {
            url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/lachha-tandoori-paratha.jpg"
        }
    },
    {
        id: 312,
        name: "Missi Roti",
        category: "tandoori-breads",
        description: "Rustic gram-flour and whole-wheat roti seasoned with herbs and spices.",
        price: 60,
        image: {
            url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/missi-roti.jpg"
        }
    },
    {
        id: 313,
        name: "Jeera Basmati Rice",
        category: "rice-pulao",
        description: "Long-grain basmati tossed with roasted cumin and a fragrant ghee tempering.",
        price: 160,
        image: {
            url: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/jeera-basmati-rice.jpg"
        }
    },
    {
        id: 314,
        name: "Matar Pulao",
        category: "rice-pulao",
        description: "Fluffy basmati rice cooked with sweet green peas and whole spices.",
        price: 190,
        image: {
            url: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/matar-pulao.jpg"
        }
    },
    {
        id: 315,
        name: "Kashmiri Saffron Pulao",
        category: "rice-pulao",
        description: "Aromatic saffron rice with toasted nuts, raisins and gentle whole spices.",
        price: 240,
        image: {
            url: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/kashmiri-saffron-pulao.jpg"
        }
    },
    {
        id: 316,
        name: "Punjabi Veg Thali",
        category: "complete-thalis",
        description: "A satisfying spread of seasonal curry, dal, rice, roti, salad and house pickle.",
        price: 320,
        image: {
            url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/punjabi-veg-thali.jpg"
        }
    },
    {
        id: 317,
        name: "North Indian Deluxe Thali",
        category: "complete-thalis",
        description: "A generous meal with paneer curry, dal, pulao, naan, raita and a sweet finish.",
        price: 390,
        image: {
            url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/north-indian-deluxe-thali.jpg"
        }
    },
    {
        id: 318,
        name: "Chole Kulcha Thali",
        category: "complete-thalis",
        description: "Spiced Punjabi chole with warm kulcha, onion salad, chutney and raita.",
        price: 280,
        image: {
            url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/categories/north-indian/chole-kulcha-thali.jpg"
        }
    }
];

const southIndianCategories = [
    { id: "dosas-uttapams", name: "Crispy Dosas & Uttapams" },
    { id: "idli-vada", name: "Steamed Delicacies (Idli & Vada)" },
    { id: "meals-rice", name: "South Indian Meals & Rice" },
    { id: "filter-coffee-beverages", name: "Filter Coffee & Beverages" }
];

const southIndianDishes = [
    {
        id: 401,
        name: "Chef's Special Masala Dosa Combo",
        category: "dosas-uttapams",
        description: "Golden, crisp dosa filled with spiced potato, served with hot sambar and fresh coconut chutney.",
        price: 260,
        image: {
            url: "./assets/images/categories/south-indian/chefs-special-masala-dosa-combo.jpg",
            local: "./assets/images/categories/south-indian/chefs-special-masala-dosa-combo.jpg"
        }
    },
    {
        id: 402,
        name: "Mysore Masala Dosa",
        category: "dosas-uttapams",
        description: "Crisp dosa spread with fiery Mysore chutney and filled with warmly spiced potato.",
        price: 230,
        image: {
            url: "./assets/images/categories/south-indian/mysore-masala-dosa.jpg",
            local: "./assets/images/categories/south-indian/mysore-masala-dosa.jpg"
        }
    },
    {
        id: 403,
        name: "Paper Ghee Roast Dosa",
        category: "dosas-uttapams",
        description: "A thin, extra-crisp dosa roasted with ghee and served with sambar and chutneys.",
        price: 210,
        image: {
            url: "./assets/images/categories/south-indian/paper-ghee-roast-dosa.jpg",
            local: "./assets/images/categories/south-indian/paper-ghee-roast-dosa.jpg"
        }
    },
    {
        id: 404,
        name: "Onion Uttapam",
        category: "dosas-uttapams",
        description: "A soft, golden rice-and-lentil pancake topped with onion, tomato and green chilli.",
        price: 190,
        image: {
            url: "./assets/images/categories/south-indian/onion-uttapam.jpg",
            local: "./assets/images/categories/south-indian/onion-uttapam.jpg"
        }
    },
    {
        id: 405,
        name: "Ghee Podi Idli",
        category: "idli-vada",
        description: "Pillowy steamed idlis tossed in aromatic podi and warm ghee, with sambar on the side.",
        price: 170,
        image: {
            url: "./assets/images/categories/south-indian/ghee-podi-idli.jpg",
            local: "./assets/images/categories/south-indian/ghee-podi-idli.jpg"
        }
    },
    {
        id: 406,
        name: "Classic Idli Sambar",
        category: "idli-vada",
        description: "Soft, fluffy idlis served with piping hot lentil sambar and fresh coconut chutney.",
        price: 150,
        image: {
            url: "./assets/images/categories/south-indian/classic-idli-sambar.jpg",
            local: "./assets/images/categories/south-indian/classic-idli-sambar.jpg"
        }
    },
    {
        id: 407,
        name: "Medu Vada Sambar",
        category: "idli-vada",
        description: "Crisp-edged, fluffy lentil doughnuts paired with hot sambar and coconut chutney.",
        price: 160,
        image: {
            url: "./assets/images/categories/south-indian/medu-vada-sambar.jpg",
            local: "./assets/images/categories/south-indian/medu-vada-sambar.jpg"
        }
    },
    {
        id: 408,
        name: "Thatte Idli Plate",
        category: "idli-vada",
        description: "A soft, wide Karnataka-style steamed idli served with sambar and house chutney.",
        price: 180,
        image: {
            url: "./assets/images/categories/south-indian/thatte-idli-plate.jpg",
            local: "./assets/images/categories/south-indian/thatte-idli-plate.jpg"
        }
    },
    {
        id: 409,
        name: "South Indian Veg Meals",
        category: "meals-rice",
        description: "A comforting spread of rice, seasonal vegetables, sambar, rasam, curd and pickle.",
        price: 320,
        image: {
            url: "./assets/images/categories/south-indian/south-indian-veg-meals.jpg",
            local: "./assets/images/categories/south-indian/south-indian-veg-meals.jpg"
        }
    },
    {
        id: 410,
        name: "Lemon Rice",
        category: "meals-rice",
        description: "Fluffy rice tempered with lemon, mustard seeds, curry leaves and roasted peanuts.",
        price: 190,
        image: {
            url: "./assets/images/categories/south-indian/lemon-rice.jpg",
            local: "./assets/images/categories/south-indian/lemon-rice.jpg"
        }
    },
    {
        id: 411,
        name: "Curd Rice",
        category: "meals-rice",
        description: "Cool, creamy rice with yogurt, tempered spices and a bright touch of fresh herbs.",
        price: 180,
        image: {
            url: "./assets/images/categories/south-indian/curd-rice.jpg",
            local: "./assets/images/categories/south-indian/curd-rice.jpg"
        }
    },
    {
        id: 412,
        name: "Sambar Rice",
        category: "meals-rice",
        description: "Rice and lentils cooked with vegetables, tamarind and a fragrant sambar spice blend.",
        price: 200,
        image: {
            url: "./assets/images/categories/south-indian/sambar-rice.jpg",
            local: "./assets/images/categories/south-indian/sambar-rice.jpg"
        }
    },
    {
        id: 413,
        name: "Madras Filter Coffee",
        category: "filter-coffee-beverages",
        description: "Strong South Indian filter coffee with frothy milk, traditionally poured and served hot.",
        price: 100,
        image: {
            url: "./assets/images/categories/south-indian/madras-filter-coffee.jpg",
            local: "./assets/images/categories/south-indian/madras-filter-coffee.jpg"
        }
    },
    {
        id: 414,
        name: "Jigarthanda",
        category: "filter-coffee-beverages",
        description: "A chilled Madurai favourite with milk, almond gum and a rich scoop of ice cream.",
        price: 160,
        image: {
            url: "./assets/images/categories/south-indian/jigarthanda.jpg",
            local: "./assets/images/categories/south-indian/jigarthanda.jpg"
        }
    },
    {
        id: 415,
        name: "Spiced Neer Mor",
        category: "filter-coffee-beverages",
        description: "Cooling buttermilk stirred with ginger, green chilli, curry leaves and roasted cumin.",
        price: 90,
        image: {
            url: "./assets/images/categories/south-indian/spiced-neer-mor.jpg",
            local: "./assets/images/categories/south-indian/spiced-neer-mor.jpg"
        }
    },
    {
        id: 416,
        name: "Rose Milk",
        category: "filter-coffee-beverages",
        description: "Chilled milk delicately flavoured with rose and served refreshingly cold.",
        price: 120,
        image: {
            url: "./assets/images/categories/south-indian/rose-milk.jpg",
            local: "./assets/images/categories/south-indian/rose-milk.jpg"
        }
    }
];

const chineseCategories = [
    { id: "soups-starters", name: "Soups & Starters" },
    { id: "noodles-hakka", name: "Noodles & Hakka Specialties" },
    { id: "fried-rice-bowls", name: "Fried Rice & Rice Bowls" },
    { id: "gravy-manchurian", name: "Gravy & Manchurian Delights" },
    { id: "sizzlers-specials", name: "Sizzlers & Specials" }
];

const chineseDishes = [
    {
        id: 501,
        name: "Wok-Tossed Veg Hakka Noodles & Chilli Paneer Combo",
        category: "sizzlers-specials",
        description: "Garlic-kissed hakka noodles and crisp chilli paneer tossed in signature Indo-Chinese sauces.",
        price: 340,
        image: {
            url: "./assets/images/categories/chinese/wok-tossed-veg-hakka-noodles-chilli-paneer-combo.webp",
            local: "./assets/images/categories/chinese/wok-tossed-veg-hakka-noodles-chilli-paneer-combo.webp"
        }
    },
    {
        id: 502,
        name: "Veg Spring Rolls",
        category: "soups-starters",
        description: "Crisp rolls packed with wok-seasoned vegetables and served with tangy chilli dip.",
        price: 190,
        image: {
            url: "./assets/images/categories/chinese/veg-spring-rolls.webp",
            local: "./assets/images/categories/chinese/veg-spring-rolls.webp"
        }
    },
    {
        id: 503,
        name: "Crispy Chilli Potato",
        category: "soups-starters",
        description: "Golden potato fingers tossed with fresh garlic, sesame and sweet-hot chilli sauce.",
        price: 210,
        image: {
            url: "./assets/images/categories/chinese/crispy-chilli-potato.webp",
            local: "./assets/images/categories/chinese/crispy-chilli-potato.webp"
        }
    },
    {
        id: 504,
        name: "Hot & Sour Veg Soup",
        category: "soups-starters",
        description: "A warming, tangy broth with garden vegetables, pepper and a hint of chilli.",
        price: 140,
        image: {
            url: "./assets/images/categories/chinese/hot-sour-veg-soup.webp",
            local: "./assets/images/categories/chinese/hot-sour-veg-soup.webp"
        }
    },
    {
        id: 505,
        name: "Chilli Paneer Dry",
        category: "soups-starters",
        description: "Paneer cubes seared golden and tossed with bell peppers, spring onion and chilli.",
        price: 250,
        image: {
            url: "./assets/images/categories/chinese/chilli-paneer-dry.webp",
            local: "./assets/images/categories/chinese/chilli-paneer-dry.webp"
        }
    },
    {
        id: 506,
        name: "Classic Veg Hakka Noodles",
        category: "noodles-hakka",
        description: "Springy noodles wok-tossed with fresh garlic, cabbage, peppers and soy.",
        price: 220,
        image: {
            url: "./assets/images/categories/chinese/classic-veg-hakka-noodles.webp",
            local: "./assets/images/categories/chinese/classic-veg-hakka-noodles.webp"
        }
    },
    {
        id: 507,
        name: "Schezwan Noodles",
        category: "noodles-hakka",
        description: "Fiery wok-fried noodles coated in house Schezwan sauce with crisp vegetables.",
        price: 240,
        image: {
            url: "./assets/images/categories/chinese/schezwan-noodles.webp",
            local: "./assets/images/categories/chinese/schezwan-noodles.webp"
        }
    },
    {
        id: 508,
        name: "Chilli Garlic Noodles",
        category: "noodles-hakka",
        description: "Noodles tossed over a hot wok with toasted garlic, chilli flakes and greens.",
        price: 230,
        image: {
            url: "./assets/images/categories/chinese/chilli-garlic-noodles.webp",
            local: "./assets/images/categories/chinese/chilli-garlic-noodles.webp"
        }
    },
    {
        id: 509,
        name: "Pan-Fried Chilli Garlic Noodles",
        category: "noodles-hakka",
        description: "Crisp-edged noodles finished with garlic, peppers and a savoury chilli glaze.",
        price: 260,
        image: {
            url: "./assets/images/categories/chinese/pan-fried-chilli-garlic-noodles.webp",
            local: "./assets/images/categories/chinese/pan-fried-chilli-garlic-noodles.webp"
        }
    },
    {
        id: 510,
        name: "Veg Fried Rice",
        category: "fried-rice-bowls",
        description: "Fluffy rice tossed quickly with crunchy vegetables, garlic and light soy.",
        price: 210,
        image: {
            url: "./assets/images/categories/chinese/veg-fried-rice.webp",
            local: "./assets/images/categories/chinese/veg-fried-rice.webp"
        }
    },
    {
        id: 511,
        name: "Schezwan Fried Rice",
        category: "fried-rice-bowls",
        description: "Wok-fried rice with vegetables and a bold, spicy house Schezwan sauce.",
        price: 230,
        image: {
            url: "./assets/images/categories/chinese/schezwan-fried-rice.webp",
            local: "./assets/images/categories/chinese/schezwan-fried-rice.webp"
        }
    },
    {
        id: 512,
        name: "Chilli Garlic Fried Rice",
        category: "fried-rice-bowls",
        description: "Fragrant rice tossed with fresh garlic, chilli and colourful vegetables.",
        price: 230,
        image: {
            url: "./assets/images/categories/chinese/chilli-garlic-fried-rice.webp",
            local: "./assets/images/categories/chinese/chilli-garlic-fried-rice.webp"
        }
    },
    {
        id: 513,
        name: "Burnt Garlic Rice Bowl",
        category: "fried-rice-bowls",
        description: "A hearty rice bowl topped with crisp burnt garlic and wok-seared vegetables.",
        price: 250,
        image: {
            url: "./assets/images/categories/chinese/burnt-garlic-rice-bowl.webp",
            local: "./assets/images/categories/chinese/burnt-garlic-rice-bowl.webp"
        }
    },
    {
        id: 514,
        name: "Veg Manchurian Gravy",
        category: "gravy-manchurian",
        description: "Vegetable dumplings simmered in a glossy garlic, ginger and soy gravy.",
        price: 240,
        image: {
            url: "./assets/images/categories/chinese/veg-manchurian-gravy.webp",
            local: "./assets/images/categories/chinese/veg-manchurian-gravy.webp"
        }
    },
    {
        id: 515,
        name: "Paneer Chilli Gravy",
        category: "gravy-manchurian",
        description: "Tender paneer and bell peppers coated in a spicy, savoury Indo-Chinese gravy.",
        price: 270,
        image: {
            url: "./assets/images/categories/chinese/paneer-chilli-gravy.webp",
            local: "./assets/images/categories/chinese/paneer-chilli-gravy.webp"
        }
    },
    {
        id: 516,
        name: "Mushroom Manchurian",
        category: "gravy-manchurian",
        description: "Golden mushrooms tossed with ginger, garlic and a rich Manchurian sauce.",
        price: 260,
        image: {
            url: "./assets/images/categories/chinese/mushroom-manchurian.webp",
            local: "./assets/images/categories/chinese/mushroom-manchurian.webp"
        }
    },
    {
        id: 517,
        name: "Tofu in Hot Garlic Sauce",
        category: "gravy-manchurian",
        description: "Soft tofu and crisp peppers in a warming garlic sauce with a chilli finish.",
        price: 250,
        image: {
            url: "./assets/images/categories/chinese/tofu-hot-garlic-sauce.webp",
            local: "./assets/images/categories/chinese/tofu-hot-garlic-sauce.webp"
        }
    },
    {
        id: 518,
        name: "Sizzling Veg Noodle Platter",
        category: "sizzlers-specials",
        description: "Hot-plate noodles with wok vegetables and a tangy, peppery house sauce.",
        price: 320,
        image: {
            url: "./assets/images/categories/chinese/sizzling-veg-noodle-platter.webp",
            local: "./assets/images/categories/chinese/sizzling-veg-noodle-platter.webp"
        }
    },
    {
        id: 519,
        name: "Chilli Paneer & Fried Rice",
        category: "sizzlers-specials",
        description: "Savoury fried rice paired with crisp chilli paneer and fresh wok-tossed peppers.",
        price: 330,
        image: {
            url: "./assets/images/categories/chinese/chilli-paneer-fried-rice.webp",
            local: "./assets/images/categories/chinese/chilli-paneer-fried-rice.webp"
        }
    },
    {
        id: 520,
        name: "Crispy Corn Pepper Salt",
        category: "sizzlers-specials",
        description: "Sweet corn kernels fried crisp and tossed with cracked pepper, garlic and herbs.",
        price: 220,
        image: {
            url: "./assets/images/categories/chinese/crispy-corn-pepper-salt.webp",
            local: "./assets/images/categories/chinese/crispy-corn-pepper-salt.webp"
        }
    }
];

const indianRotisCategories = [
    { id: "tandoori-rotis", name: "Tandoori Rotis" },
    { id: "butter-garlic-naans", name: "Butter & Garlic Naans" },
    { id: "stuffed-parathas", name: "Stuffed Parathas" },
    { id: "lachha-special-breads", name: "Lachha & Special Breads" },
    { id: "tawa-rotis-phulkas", name: "Tawa Rotis & Phulkas" }
];

const indianRotisDishes = [
    {
        id: 601,
        name: "Classic Tandoori Roti",
        category: "tandoori-rotis",
        description: "Whole-wheat roti baked against the clay tandoor wall for a warm, smoky finish.",
        price: 35,
        image: {
            url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/classic-tandoori-roti.jpg"
        }
    },
    {
        id: 602,
        name: "Butter Tandoori Roti",
        category: "tandoori-rotis",
        description: "Freshly tandoor-baked whole-wheat roti finished with a melting brush of butter.",
        price: 45,
        image: {
            url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/butter-tandoori-roti.jpg"
        }
    },
    {
        id: 603,
        name: "Missi Tandoori Roti",
        category: "tandoori-rotis",
        description: "A rustic gram-flour and wheat roti seasoned with herbs and baked in the clay tandoor.",
        price: 55,
        image: {
            url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/missi-tandoori-roti.jpg"
        }
    },
    {
        id: 604,
        name: "Butter Naan",
        category: "butter-garlic-naans",
        description: "Pillowy naan baked in a traditional clay tandoor and brushed with golden butter.",
        price: 65,
        image: {
            url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/butter-naan.jpg"
        }
    },
    {
        id: 605,
        name: "Garlic Butter Naan",
        category: "butter-garlic-naans",
        description: "Soft tandoor-baked naan topped with fresh garlic, coriander and melting butter.",
        price: 85,
        image: {
            url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/garlic-butter-naan.jpg"
        }
    },
    {
        id: 606,
        name: "Chilli Cheese Naan",
        category: "butter-garlic-naans",
        description: "Tandoor-roasted naan filled with cheese and green chilli, finished with butter.",
        price: 120,
        image: {
            url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/chilli-cheese-naan.jpg"
        }
    },
    {
        id: 607,
        name: "Aloo Paratha",
        category: "stuffed-parathas",
        description: "Tawa-roasted whole-wheat paratha stuffed with spiced potato and served buttery-soft.",
        price: 95,
        image: {
            url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/aloo-paratha.jpg"
        }
    },
    {
        id: 608,
        name: "Paneer Paratha",
        category: "stuffed-parathas",
        description: "Golden, pan-roasted paratha generously filled with seasoned crumbled paneer.",
        price: 120,
        image: {
            url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/paneer-paratha.jpg"
        }
    },
    {
        id: 609,
        name: "Gobi Paratha",
        category: "stuffed-parathas",
        description: "Flaky wheat paratha stuffed with spiced grated cauliflower and fresh coriander.",
        price: 105,
        image: {
            url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/gobi-paratha.jpg"
        }
    },
    {
        id: 610,
        name: "Lachha Paratha",
        category: "lachha-special-breads",
        description: "Hand-layered whole-wheat paratha, tawa-roasted until crisp outside and soft within.",
        price: 65,
        image: {
            url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/lachha-paratha.jpg"
        }
    },
    {
        id: 611,
        name: "Roomali Roti",
        category: "lachha-special-breads",
        description: "Delicate, paper-thin bread stretched by hand and quickly cooked on a hot inverted tawa.",
        price: 55,
        image: {
            url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/roomali-roti.jpg"
        }
    },
    {
        id: 612,
        name: "Amritsari Kulcha",
        category: "lachha-special-breads",
        description: "A crisp, golden kulcha baked in the tandoor and finished with butter and coriander.",
        price: 95,
        image: {
            url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/amritsari-kulcha.jpg"
        }
    },
    {
        id: 613,
        name: "Tawa Roti",
        category: "tawa-rotis-phulkas",
        description: "Soft whole-wheat roti cooked fresh on a hot tawa and served straight from the griddle.",
        price: 30,
        image: {
            url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/tawa-roti.jpg"
        }
    },
    {
        id: 614,
        name: "Butter Tawa Roti",
        category: "tawa-rotis-phulkas",
        description: "Freshly griddled whole-wheat roti finished with a light layer of melted butter.",
        price: 40,
        image: {
            url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/butter-tawa-roti.jpg"
        }
    },
    {
        id: 615,
        name: "Whole-Wheat Phulka",
        category: "tawa-rotis-phulkas",
        description: "Light, puffed phulka cooked over an open flame for a tender, freshly made finish.",
        price: 25,
        image: {
            url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
            local: "./assets/images/indian-rotis/whole-wheat-phulka.jpg"
        }
    },
    {
        id: 616,
        name: "Assorted Tandoori Bread Basket",
        category: "lachha-special-breads",
        description: "A generous basket of butter naan, garlic naan and stuffed kulcha, fresh from the tandoor.",
        price: 260,
        image: {
            url: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1100&q=90",
            local: "./assets/images/indian-rotis/assorted-tandoori-bread-basket.jpg"
        }
    }
];

const dessertCategories = [
    { id: "traditional-sweets", name: "Traditional Indian Sweets" },
    { id: "cakes-pastries", name: "Rich Cakes & Pastries" },
    { id: "ice-creams-sundaes", name: "Ice Creams & Sundaes" },
    { id: "sizzling-hot-desserts", name: "Sizzling Brownies & Hot Desserts" }
];

const dessertDishes = [
    {
        id: 701,
        name: "Sizzling Brownie Sundae",
        category: "sizzling-hot-desserts",
        description: "Warm chocolate brownie on a sizzling plate with vanilla ice cream and hot fudge.",
        price: 280,
        image: {
            url: "./assets/images/categories/desserts/sizzling-brownie-sundae.webp",
            local: "./assets/images/categories/desserts/sizzling-brownie-sundae.webp"
        }
    },
    {
        id: 702,
        name: "Gulab Jamun",
        category: "traditional-sweets",
        description: "Soft golden khoya dumplings, slow-soaked in fragrant cardamom sugar syrup.",
        price: 120,
        image: {
            url: "./assets/images/categories/desserts/gulab-jamun.webp",
            local: "./assets/images/categories/desserts/gulab-jamun.webp"
        }
    },
    {
        id: 703,
        name: "Rasmalai",
        category: "traditional-sweets",
        description: "Delicate chenna patties resting in chilled saffron-and-cardamom milk.",
        price: 160,
        image: {
            url: "./assets/images/categories/desserts/rasmalai.webp",
            local: "./assets/images/categories/desserts/rasmalai.webp"
        }
    },
    {
        id: 704,
        name: "Gajar Ka Halwa",
        category: "traditional-sweets",
        description: "Slow-cooked carrots with milk, ghee and nuts, served warm and richly aromatic.",
        price: 150,
        image: {
            url: "./assets/images/categories/desserts/gajar-ka-halwa.webp",
            local: "./assets/images/categories/desserts/gajar-ka-halwa.webp"
        }
    },
    {
        id: 705,
        name: "Kesar Pista Kulfi",
        category: "traditional-sweets",
        description: "Dense, creamy kulfi infused with saffron and studded with crushed pistachios.",
        price: 140,
        image: {
            url: "./assets/images/categories/desserts/kesar-pista-kulfi.webp",
            local: "./assets/images/categories/desserts/kesar-pista-kulfi.webp"
        }
    },
    {
        id: 706,
        name: "Chocolate Truffle Pastry",
        category: "cakes-pastries",
        description: "Moist chocolate sponge layered with silky ganache and a glossy truffle finish.",
        price: 170,
        image: {
            url: "./assets/images/categories/desserts/chocolate-truffle-pastry.webp",
            local: "./assets/images/categories/desserts/chocolate-truffle-pastry.webp"
        }
    },
    {
        id: 707,
        name: "Classic Chocolate Fudge Cake",
        category: "cakes-pastries",
        description: "Rich cocoa cake layered with smooth chocolate fudge for an indulgent finish.",
        price: 210,
        image: {
            url: "./assets/images/categories/desserts/classic-chocolate-fudge-cake.webp",
            local: "./assets/images/categories/desserts/classic-chocolate-fudge-cake.webp"
        }
    },
    {
        id: 708,
        name: "Red Velvet Pastry",
        category: "cakes-pastries",
        description: "Tender cocoa sponge layered with a light, tangy cream-cheese frosting.",
        price: 180,
        image: {
            url: "./assets/images/categories/desserts/red-velvet-pastry.webp",
            local: "./assets/images/categories/desserts/red-velvet-pastry.webp"
        }
    },
    {
        id: 709,
        name: "New York Baked Cheesecake",
        category: "cakes-pastries",
        description: "Creamy baked cheesecake on a buttery biscuit base with a golden edge.",
        price: 230,
        image: {
            url: "./assets/images/categories/desserts/new-york-baked-cheesecake.webp",
            local: "./assets/images/categories/desserts/new-york-baked-cheesecake.webp"
        }
    },
    {
        id: 710,
        name: "Vanilla Bean Ice Cream",
        category: "ice-creams-sundaes",
        description: "Two smooth scoops of classic vanilla bean ice cream, served chilled.",
        price: 120,
        image: {
            url: "./assets/images/categories/desserts/vanilla-bean-ice-cream.webp",
            local: "./assets/images/categories/desserts/vanilla-bean-ice-cream.webp"
        }
    },
    {
        id: 711,
        name: "Chocolate Brownie Sundae",
        category: "ice-creams-sundaes",
        description: "Chocolate brownie, vanilla scoops, whipped cream and a generous fudge drizzle.",
        price: 240,
        image: {
            url: "./assets/images/categories/desserts/chocolate-brownie-sundae.webp",
            local: "./assets/images/categories/desserts/chocolate-brownie-sundae.webp"
        }
    },
    {
        id: 712,
        name: "Mango Kulfi Sundae",
        category: "ice-creams-sundaes",
        description: "Creamy mango kulfi served with ripe mango, pistachio and a light cream swirl.",
        price: 190,
        image: {
            url: "./assets/images/categories/desserts/mango-kulfi-sundae.webp",
            local: "./assets/images/categories/desserts/mango-kulfi-sundae.webp"
        }
    },
    {
        id: 713,
        name: "Hot Chocolate Lava Cake",
        category: "sizzling-hot-desserts",
        description: "Warm chocolate cake with a flowing molten centre, served with vanilla ice cream.",
        price: 250,
        image: {
            url: "./assets/images/categories/desserts/hot-chocolate-lava-cake.webp",
            local: "./assets/images/categories/desserts/hot-chocolate-lava-cake.webp"
        }
    },
    {
        id: 714,
        name: "Sizzling Brownie with Vanilla Ice Cream & Hot Chocolate Fudge",
        category: "sizzling-hot-desserts",
        description: "A warm brownie on a sizzling plate with vanilla ice cream and rich hot chocolate fudge.",
        price: 290,
        image: {
            url: "./assets/images/categories/desserts/sizzling-brownie-vanilla-ice-cream-hot-fudge.webp",
            local: "./assets/images/categories/desserts/sizzling-brownie-vanilla-ice-cream-hot-fudge.webp"
        }
    },
    {
        id: 715,
        name: "Warm Chocolate Chip Cookie Skillet",
        category: "sizzling-hot-desserts",
        description: "A freshly baked, gooey-centred cookie served warm with cool vanilla ice cream.",
        price: 230,
        image: {
            url: "./assets/images/categories/desserts/warm-chocolate-chip-cookie-skillet.webp",
            local: "./assets/images/categories/desserts/warm-chocolate-chip-cookie-skillet.webp"
        }
    },
    {
        id: 716,
        name: "Kesar Badam Phirni",
        category: "traditional-sweets",
        description: "Chilled, slow-cooked ground rice pudding flavoured with saffron and almonds.",
        price: 140,
        image: {
            url: "./assets/images/categories/desserts/kesar-badam-phirni.webp",
            local: "./assets/images/categories/desserts/kesar-badam-phirni.webp"
        }
    }
];

const menuCategorySources = [
    { id: "biryani", categories: biryaniCategories, dishes: biryaniDishes },
    { id: "north-indian", categories: northIndianCategories, dishes: northIndianDishes },
    { id: "south-indian", categories: southIndianCategories, dishes: southIndianDishes },
    { id: "chinese", categories: chineseCategories, dishes: chineseDishes },
    { id: "breads", categories: indianRotisCategories, dishes: indianRotisDishes },
    { id: "desserts", categories: dessertCategories, dishes: dessertDishes },
    { id: "beverages", categories: beverageCategories, dishes: beverageDishes }
];

const portionEligibleCategories = new Set(
    categories
        .filter(category => !["beverages", "desserts"].includes(category.id))
        .map(category => category.id)
);

function initializeDishPortionPrices(dish) {
    dish.portionPrices = {
        half: dish.price / 2,
        full: dish.price
    };
}

menuDishes
    .filter(dish => portionEligibleCategories.has(dish.category))
    .forEach(initializeDishPortionPrices);

menuCategorySources.forEach(source => {
    if (!portionEligibleCategories.has(source.id)) return;
    source.dishes.forEach(initializeDishPortionPrices);
});

const categoryMenuDishes = menuCategorySources.flatMap(source => {
    const menuCategory = categories.find(item => item.id === source.id);

    return source.dishes.map(dish => {
        const typeFromMenu = menuDishes.find(
            item => item.name.toLowerCase() === dish.name.toLowerCase()
        )?.foodType;
        const isMeatOrEggDish = /\b(chicken|mutton|lamb|fish|prawn|shrimp|egg)\b/i.test(dish.name);
        const useCategoryImage =
            source.id === "north-indian" && ["Dal Panchmel", "Matar Pulao"].includes(dish.name);

        return {
            ...dish,
            category: source.id,
            categoryName: menuCategory?.name || "",
            subcategoryName: source.categories.find(item => item.id === dish.category)?.name || "",
            menuImage: useCategoryImage ? menuCategory?.image || "" : dish.image.local,
            fallbackImage: menuCategory?.image || "",
            foodType: typeFromMenu || (isMeatOrEggDish ? "non-veg" : "veg")
        };
    });
});

function getDishById(dishId) {
    const numericDishId = Number(dishId);

    return menuDishes.find(dish => dish.id === numericDishId) ||
        categoryMenuDishes.find(dish => dish.id === numericDishId);
}

function getPortionLabel(portion) {
    return portion === "half" ? "Half Plate" : "Full Plate";
}

function getPortionPrice(dish, portion) {
    if (!dish.portionPrices) return portion === "full" ? dish.price : null;

    const price = dish.portionPrices[portion];
    return Number.isFinite(price) ? price : null;
}

function formatDishPrice(dish) {
    if (!dish.portionPrices) return `₹${dish.price}`;
    return `₹${dish.portionPrices.full} / ₹${dish.portionPrices.half}`;
}

function getCartItemKey(item) {
    return `${item.id}:${item.portion || "full"}`;
}


/* =========================================================
   3. CART STORAGE
   ========================================================= */

const CART_STORAGE_KEY = "rasoiExpressCart";
const ORDERS_STORAGE_KEY = "rasoiExpressDemoOrders";

const checkoutAddons = [
    { id: "extra-raita", name: "Extra raita", price: 25 },
    { id: "extra-gravy", name: "Extra gravy", price: 35 },
    { id: "cheese", name: "Cheese", price: 30 },
    { id: "sauces", name: "Sauces", price: 15 },
    { id: "toppings", name: "Extra toppings", price: 20 }
];

function getCheckoutDishType(item) {
    const dish = menuDishes.find(product => product.id === item.id) ||
        beverageDishes.find(product => product.id === item.id) ||
        biryaniDishes.find(product => product.id === item.id) ||
        northIndianDishes.find(product => product.id === item.id) ||
        southIndianDishes.find(product => product.id === item.id) ||
        chineseDishes.find(product => product.id === item.id) ||
        indianRotisDishes.find(product => product.id === item.id) ||
        dessertDishes.find(product => product.id === item.id);

    if (!dish) return "other";

    const category = dish.menuGroup || dish.category;
    const name = dish.name.toLowerCase();

    if (name.includes("biryani")) return "biryani";

    if ([
        "dal-curries",
        "paneer-specials",
        "paneer-specialities",
        "rich-gravies-dal",
        "veg-main-course"
    ].includes(category) || name === "butter chicken") {
        return "curry";
    }

    const isBreadCategory = [
        "tandoori-breads",
        "tandoori-rotis",
        "butter-garlic-naans",
        "stuffed-parathas",
        "lachha-special-breads",
        "tawa-rotis-phulkas",
        "indian-breads"
    ].includes(category);

    if (
        category === "veg-starters" ||
        category === "soups-starters" ||
        (name.includes("tandoori") && !isBreadCategory)
    ) {
        return "starter";
    }

    return "other";
}

function getCheckoutAddons(item) {
    const dishType = getCheckoutDishType(item);
    const addonIds = dishType === "biryani" || dishType === "curry"
        ? ["extra-raita", "extra-gravy"]
        : dishType === "starter"
            ? ["sauces", "toppings"]
            : [];

    return checkoutAddons.filter(addon => addonIds.includes(addon.id));
}

let cart = loadCart();
let checkoutTipSelection = "none";
let checkoutCustomTip = 0;
let isPlacingOrder = false;

function loadCart() {
    try {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        const parsed = saved ? JSON.parse(saved) : [];

        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error("Unable to load cart:", error);
        return [];
    }
}

function saveCart() {
    localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cart)
    );
}

function getCartCount() {
    return cart.reduce(
        (total, item) => total + item.quantity,
        0
    );
}

function getCartTotal() {
    return cart.reduce(
        (total, item) => total + (item.price + getItemAddonTotal(item)) * item.quantity,
        0
    );
}

function getItemAddonTotal(item) {
    const selectedAddons = item.customizations?.addons || [];

    return selectedAddons.reduce((total, addonId) => {
        const addon = checkoutAddons.find(option => option.id === addonId);
        return total + (addon ? addon.price : 0);
    }, 0);
}

function getCheckoutTip() {
    if (checkoutTipSelection === "custom") {
        return checkoutCustomTip;
    }

    return Number(checkoutTipSelection) || 0;
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

/* =========================================================
   4. HOMEPAGE CATEGORY RENDERING
   ========================================================= */

function renderCategories() {
    const container = document.getElementById("categories-grid");

    if (!container) return;

    container.innerHTML = categories.map(category => `
        <article
            class="category-card"
            data-category="${category.id}"
            tabindex="0"
            role="link"
            aria-label="${category.name}"
        >
            <div class="category-image">
                <img
                    src="${category.image}"
                    alt="${category.name}"
                    loading="lazy"
                >
            </div>

            <div class="category-info">
                <h3>${category.name}</h3>
            </div>
        </article>
    `).join("");
}


/* =========================================================
   5. POPULAR DISHES RENDERING
   ========================================================= */

function renderPopularDishes() {
    const container = document.getElementById(
        "popular-dishes-grid"
    );

    if (!container) return;

    container.innerHTML = popularDishes.map(dish => `
            <article class="dish-card">
                <div class="dish-image">
                    <img
                        src="${dish.image}"
                        alt="${dish.name}"
                        loading="lazy"
                    >
                </div>

                <div class="dish-info">
                    <h3>${dish.name}</h3>

                    <div class="dish-bottom">
                        <span class="dish-price">${formatDishPrice(dish)}</span>

                        <button
                            class="add-to-cart-button"
                            data-add-cart="${dish.id}"
                        >
                            Add
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </article>
        `).join("");
}


/* =========================================================
   6. ADD TO CART
   ========================================================= */

function addToCart(dishId, portion = "full") {
    const numericDishId = Number(dishId);
    const categoryDish = categoryMenuDishes.find(item => item.id === numericDishId);
    const dish = getDishById(numericDishId);

    if (!dish) return;

    const price = getPortionPrice(dish, portion);
    if (price === null) {
        showToast(`${getPortionLabel(portion)} pricing isn't available yet.`);
        return;
    }

    const existing = cart.find(
        item => item.id === dish.id && (item.portion || "full") === portion
    );

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: dish.id,
            name: dish.name,
            ...(dish.portionPrices ? { portion, portionLabel: getPortionLabel(portion) } : {}),
            price,
            image: categoryDish?.menuImage ||
                (typeof dish.image === "string" ? dish.image : dish.image.local),
            fallbackImage: categoryDish?.fallbackImage || "",
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();

    showToast(`${dish.name} added to cart!`, {
        actionLabel: "View Cart",
        onAction: openCart
    });
}

function updateCartCount() {
    document.querySelectorAll(".cart-count").forEach(element => {
        element.textContent = getCartCount();
    });
}

function initializeFloatingCartButton() {
    if (document.querySelector(".floating-cart-button")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "icon-button floating-cart-button";
    button.setAttribute("aria-label", "Open shopping cart");
    button.innerHTML = `
        <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
        <span class="cart-count">${getCartCount()}</span>
    `;

    document.body.appendChild(button);
}


/* =========================================================
   7. CART MODAL
   ========================================================= */

function createCartModal() {
    if (document.getElementById("cart-modal")) return;

    const modal = document.createElement("div");

    modal.id = "cart-modal";
    modal.className = "cart-modal";

    modal.innerHTML = `
        <div class="cart-modal-overlay" data-close-cart></div>

        <div class="cart-modal-content" id="cart-modal-content">
            <div class="cart-modal-header">
                <h2>
                    <i class="fa-solid fa-cart-shopping"></i>
                    Your Cart
                </h2>

                <button class="cart-close-button" data-close-cart>
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <div
                class="cart-items-container"
                id="cart-items-container"
            ></div>

            <div
                class="cart-modal-footer"
                id="cart-modal-footer"
            ></div>
        </div>
    `;

    document.body.appendChild(modal);
}

function openCart() {
    createCartModal();

    const modal = document.getElementById("cart-modal");
    modal.classList.remove("checkout-open");
    modal.classList.remove("order-confirmation-open");
    modal.classList.add("open");
    document.body.classList.add("modal-open");

    restoreCartView();
}

function closeCart() {
    const modal = document.getElementById("cart-modal");

    if (!modal) return;

    modal.classList.remove("open");
    modal.classList.remove("checkout-open");
    modal.classList.remove("order-confirmation-open");
    document.body.classList.remove("modal-open");
}

function renderCartItems() {
    const itemsContainer = document.getElementById(
        "cart-items-container"
    );

    const footer = document.getElementById("cart-modal-footer");

    if (!itemsContainer || !footer) return;

    if (cart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-basket-shopping"></i>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added anything yet.</p>
            </div>
        `;

        footer.innerHTML = `
            <button class="continue-shopping-button" data-close-cart>
                Explore Menu
            </button>
        `;

        return;
    }

    itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img
                src="${escapeHtml(item.image)}"
                onerror="this.onerror=null;if(this.dataset.fallbackImage)this.src=this.dataset.fallbackImage"
                data-fallback-image="${escapeHtml(item.fallbackImage || "")}"
                alt="${escapeHtml(item.name)}">

            <div class="cart-item-details">
                <h3>${escapeHtml(item.name)}${item.portionLabel ? ` <small>${escapeHtml(item.portionLabel)}</small>` : ""}</h3>
                <p>₹${item.price}</p>

                <div class="cart-quantity-controls">
                    <button
                        data-cart-action="decrease"
                        data-cart-key="${escapeHtml(getCartItemKey(item))}"
                    >
                        <i class="fa-solid fa-minus"></i>
                    </button>

                    <span>${item.quantity}</span>

                    <button
                        data-cart-action="increase"
                        data-cart-key="${escapeHtml(getCartItemKey(item))}"
                    >
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>

            <div class="cart-item-total">
                ₹${item.price * item.quantity}

                <button
                    class="remove-cart-item"
                    data-cart-action="remove"
                    data-cart-key="${escapeHtml(getCartItemKey(item))}"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    `).join("");

    footer.innerHTML = `
        <div class="cart-total-row">
            <span>Total</span>
            <strong>₹${getCartTotal()}</strong>
        </div>

        <button class="checkout-button" id="checkout-button">
            Proceed to Order
            <i class="fa-solid fa-arrow-right"></i>
        </button>

        <p class="cart-demo-note">
            No payment is taken and no order is sent to the restaurant.
        </p>
    `;
}

function restoreCartView() {
    const content = document.getElementById("cart-modal-content");
    if (!content) return;

    content.innerHTML = `
        <div class="cart-modal-header">
            <h2><i class="fa-solid fa-cart-shopping"></i> Your Cart</h2>
            <button class="cart-close-button" type="button" data-close-cart aria-label="Close cart">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="cart-items-container" id="cart-items-container"></div>
        <div class="cart-modal-footer" id="cart-modal-footer"></div>
    `;

    renderCartItems();
}

function initializeCheckoutCustomizations() {
    cart.forEach(item => {
        if (!item.customizations || typeof item.customizations !== "object") {
            item.customizations = {
                spice: "Medium",
                addons: [],
                instructions: ""
            };
        }

        if (!["Mild", "Medium", "Spicy"].includes(item.customizations.spice)) {
            item.customizations.spice = "Medium";
        }

        if (!Array.isArray(item.customizations.addons)) {
            item.customizations.addons = [];
        }

        const availableAddonIds = getCheckoutAddons(item).map(addon => addon.id);
        item.customizations.addons = item.customizations.addons.filter(addonId =>
            availableAddonIds.includes(addonId)
        );
        item.customizations.instructions =
            typeof item.customizations.instructions === "string"
                ? item.customizations.instructions
                : "";
    });

    saveCart();
}

function openCheckout() {
    if (cart.length === 0) {
        showToast("Your cart is empty.");
        return;
    }

    try {
        initializeCheckoutCustomizations();
    } catch (error) {
        console.error("Unable to prepare checkout:", error);
        showToast("Checkout could not be saved. Please try again.");
        return;
    }

    checkoutTipSelection = "none";
    checkoutCustomTip = 0;
    document.getElementById("cart-modal").classList.add("checkout-open");
    renderCheckout();
}

function getCheckoutSubtotal() {
    return getCartTotal();
}

function renderCheckout() {
    const modal = document.getElementById("cart-modal");
    const content = document.getElementById("cart-modal-content");

    if (!modal || !content) return;

    const subtotal = getCheckoutSubtotal();
    const tip = getCheckoutTip();
    const displayedTip = Number.isFinite(tip) && tip >= 0 ? tip : null;

    content.innerHTML = `
        <div class="checkout-header">
            <div>
                <span class="checkout-eyebrow">HOTEL HARSHVARDHAN · CHECKOUT</span>
                <h2><i class="fa-solid fa-bag-shopping"></i> Review your order</h2>
            </div>
            <div class="checkout-header-actions">
                <button class="checkout-back-button" type="button" data-back-to-cart>
                    <i class="fa-solid fa-arrow-left"></i> Cart
                </button>
                <button class="cart-close-button" type="button" data-close-cart aria-label="Close checkout">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>

        <div class="checkout-content" id="checkout-view">
            ${cart.length ? `
                <section class="checkout-section">
                    <div class="checkout-section-heading">
                        <div>
                            <span class="checkout-step">01</span>
                            <h3>Your dishes</h3>
                        </div>
                        <span>${getCartCount()} ${getCartCount() === 1 ? "item" : "items"}</span>
                    </div>

                    <div class="checkout-items">
                        ${cart.map(item => {
                            const selectedAddons = item.customizations.addons;
                            const availableAddons = getCheckoutAddons(item);
                            const showSpiceLevel = getCheckoutDishType(item) !== "other";
                            const addonTotal = getItemAddonTotal(item);
                            const cartKey = getCartItemKey(item);
                            return `
                                <article class="checkout-item" data-checkout-item="${escapeHtml(cartKey)}">
                                    <div class="checkout-item-heading">
                                        <img src="${escapeHtml(item.image)}" alt="">
                                        <div class="checkout-item-title">
                                            <h4>${escapeHtml(item.name)}</h4>
                                            ${item.portionLabel ? `<span>${escapeHtml(item.portionLabel)}</span>` : ""}
                                            <span>₹${item.price} each</span>
                                        </div>
                                        <strong class="checkout-line-total" data-line-total="${escapeHtml(cartKey)}">
                                            ₹${(item.price + addonTotal) * item.quantity}
                                        </strong>
                                    </div>

                                    <div class="checkout-item-controls">
                                        <div class="checkout-quantity-controls">
                                            <button type="button" data-cart-action="decrease" data-cart-key="${escapeHtml(cartKey)}" aria-label="Decrease ${escapeHtml(item.name)} quantity">
                                                <i class="fa-solid fa-minus"></i>
                                            </button>
                                            <span>${item.quantity}</span>
                                            <button type="button" data-cart-action="increase" data-cart-key="${escapeHtml(cartKey)}" aria-label="Increase ${escapeHtml(item.name)} quantity">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                        </div>
                                        <button class="checkout-remove-button" type="button" data-cart-action="remove" data-cart-key="${escapeHtml(cartKey)}" aria-label="Remove ${escapeHtml(item.name)} from order">
                                            <i class="fa-solid fa-trash-can" aria-hidden="true"></i>
                                        </button>
                                    </div>

                                    <details class="checkout-customizations">
                                        <summary>
                                            <span>Customize dish</span>
                                            <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                        </summary>
                                        <div class="checkout-customization-grid">
                                        ${showSpiceLevel ? `
                                        <label class="checkout-field">
                                            <span><i class="fa-solid fa-pepper-hot"></i> Spice level</span>
                                            <select data-checkout-spice="${escapeHtml(cartKey)}">
                                                ${["Mild", "Medium", "Spicy"].map(level => `
                                                    <option value="${level}" ${item.customizations.spice === level ? "selected" : ""}>${level}</option>
                                                `).join("")}
                                            </select>
                                        </label>
                                        ` : ""}

                                        ${availableAddons.length ? `
                                        <fieldset class="checkout-addons">
                                            <legend><i class="fa-solid fa-circle-plus"></i> Add-ons</legend>
                                            <div class="checkout-addon-list">
                                                ${availableAddons.map(addon => `
                                                    <label>
                                                        <input type="checkbox" data-checkout-addon="${escapeHtml(cartKey)}" value="${addon.id}" ${selectedAddons.includes(addon.id) ? "checked" : ""}>
                                                        <span>${addon.name}</span>
                                                        <strong>+₹${addon.price}</strong>
                                                    </label>
                                                `).join("")}
                                            </div>
                                        </fieldset>
                                        ` : ""}

                                        <label class="checkout-field checkout-instructions">
                                            <span><i class="fa-regular fa-note-sticky"></i> Special instructions</span>
                                            <textarea data-checkout-instructions="${escapeHtml(cartKey)}" rows="2" maxlength="300" placeholder="Anything our kitchen should know?">${escapeHtml(item.customizations.instructions)}</textarea>
                                        </label>
                                        </div>
                                    </details>
                                </article>
                            `;
                        }).join("")}
                    </div>
                </section>

                <section class="checkout-section checkout-tip-section">
                    <div class="checkout-section-heading">
                        <div>
                            <span class="checkout-step">02</span>
                            <h3>Add a tip <small>Optional</small></h3>
                        </div>
                        <i class="fa-solid fa-heart checkout-tip-heart"></i>
                    </div>
                    <div class="checkout-tip-options">
                        ${[
                            { value: "none", label: "No tip" },
                            { value: "10", label: "₹10" },
                            { value: "20", label: "₹20" },
                            { value: "50", label: "₹50" }
                        ].map(option => `
                            <label class="checkout-tip-option ${checkoutTipSelection === option.value ? "selected" : ""}">
                                <input type="radio" name="checkout-tip" value="${option.value}" ${checkoutTipSelection === option.value ? "checked" : ""}>
                                <span>${option.label}</span>
                            </label>
                        `).join("")}
                        <label class="checkout-tip-option checkout-custom-tip-option ${checkoutTipSelection === "custom" ? "selected" : ""}">
                            <input type="radio" name="checkout-tip" value="custom" ${checkoutTipSelection === "custom" ? "checked" : ""}>
                            <span>Custom</span>
                        </label>
                    </div>
                    <label class="checkout-custom-tip-field" ${checkoutTipSelection === "custom" ? "" : "hidden"}>
                        <span>Custom tip amount</span>
                        <input type="number" min="0" step="1" inputmode="numeric" data-custom-tip aria-label="Custom tip amount" placeholder="Enter amount" value="${checkoutCustomTip || ""}" ${checkoutTipSelection === "custom" ? "" : "disabled"}>
                    </label>
                </section>
            ` : `
                <div class="checkout-empty">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <h3>Your cart is empty</h3>
                    <p>Add a dish to continue with checkout.</p>
                </div>
            `}
        </div>
        ${cart.length ? `
            <footer class="checkout-sticky-footer">
                <div class="checkout-error" id="checkout-error" role="alert" hidden></div>
                <div class="checkout-sticky-totals">
                    <div><span>Subtotal</span><strong id="checkout-subtotal">₹${subtotal}</strong></div>
                    <div><span>Tip</span><strong id="checkout-tip-total">₹${displayedTip === null ? "—" : displayedTip}</strong></div>
                    <div class="checkout-sticky-grand-total"><span>Total</span><strong id="checkout-final-total">₹${displayedTip === null ? "—" : subtotal + displayedTip}</strong></div>
                </div>
                <p class="checkout-demo-disclaimer"><i class="fa-solid fa-circle-info"></i> No payment is taken and this order is not sent to the restaurant.</p>
                <button class="checkout-place-button" type="button" id="place-order-button">
                    <i class="fa-solid fa-check"></i> Place Order
                </button>
            </footer>
        ` : ""}
    `;

    updateCheckoutSummary();
}

function updateCheckoutSummary() {
    const subtotal = getCheckoutSubtotal();
    const tip = getCheckoutTip();
    const validTip = Number.isFinite(tip) && tip >= 0;
    const subtotalElement = document.getElementById("checkout-subtotal");
    const tipElement = document.getElementById("checkout-tip-total");
    const totalElement = document.getElementById("checkout-final-total");
    if (subtotalElement) subtotalElement.textContent = `₹${subtotal}`;
    if (tipElement) tipElement.textContent = `₹${validTip ? tip : "—"}`;
    if (totalElement) totalElement.textContent = `₹${validTip ? subtotal + tip : "—"}`;

    document.querySelectorAll(".checkout-tip-option").forEach(option => {
        const radio = option.querySelector('input[type="radio"]');
        option.classList.toggle("selected", Boolean(radio && radio.checked));
    });

    const customTipInput = document.querySelector("[data-custom-tip]");
    if (customTipInput) {
        customTipInput.disabled = checkoutTipSelection !== "custom";
        customTipInput.closest(".checkout-custom-tip-field").hidden = checkoutTipSelection !== "custom";
    }

    document.querySelectorAll("[data-line-total]").forEach(element => {
        const item = cart.find(product => getCartItemKey(product) === element.dataset.lineTotal);
        if (item) element.textContent = `₹${(item.price + getItemAddonTotal(item)) * item.quantity}`;
    });
}

function saveCheckoutCustomization(item, update) {
    update(item.customizations);

    try {
        saveCart();
    } catch (error) {
        console.error("Unable to save checkout customization:", error);
        const errorMessage = document.getElementById("checkout-error");
        if (errorMessage) {
            errorMessage.textContent = "Your changes could not be saved in this browser. Please try again.";
            errorMessage.hidden = false;
        }
    }

    updateCheckoutSummary();
}

function showCheckoutError(message) {
    const errorMessage = document.getElementById("checkout-error");
    if (!errorMessage) return;

    errorMessage.textContent = message;
    errorMessage.hidden = false;
}

function createOrderReference(existingOrders) {
    let reference;

    do {
        const uniquePart = window.crypto?.randomUUID
            ? window.crypto.randomUUID().slice(0, 8)
            : Math.random().toString(36).slice(2, 10);
        reference = `RE-${Date.now().toString(36).toUpperCase()}-${uniquePart.toUpperCase()}`;
    } while (existingOrders.some(order => order.reference === reference));

    return reference;
}

function placeDemoOrder() {
    if (isPlacingOrder) return;

    const invalidItem = cart.some(item =>
        !Number.isInteger(item.id) ||
        typeof item.name !== "string" ||
        !item.name.trim() ||
        !Number.isInteger(item.quantity) || item.quantity < 1 ||
        !Number.isFinite(item.price) || item.price < 0
    );

    if (cart.length === 0 || invalidItem) {
        showCheckoutError("Your cart needs at least one valid dish before placing an order.");
        return;
    }

    const tip = getCheckoutTip();
    if (!Number.isFinite(tip) || tip < 0) {
        showCheckoutError("Enter a valid non-negative tip amount, or choose No tip.");
        return;
    }

    isPlacingOrder = true;
    const placeButton = document.getElementById("place-order-button");
    if (placeButton) {
        placeButton.disabled = true;
        placeButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Placing order…';
    }

    let previousOrdersValue;
    let hadPreviousOrders = false;
    let order;

    try {
        previousOrdersValue = localStorage.getItem(ORDERS_STORAGE_KEY);
        hadPreviousOrders = previousOrdersValue !== null;
        const existingOrders = previousOrdersValue ? JSON.parse(previousOrdersValue) : [];

        if (!Array.isArray(existingOrders)) {
            throw new Error("Saved orders are not in a valid format.");
        }

        const subtotal = getCheckoutSubtotal();
        order = {
            reference: createOrderReference(existingOrders),
            createdAt: new Date().toISOString(),
            isFrontendDemo: true,
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                ...(item.portionLabel ? {
                    portion: item.portion,
                    portionLabel: item.portionLabel
                } : {}),
                quantity: item.quantity,
                unitPrice: item.price,
                ...(getCheckoutDishType(item) === "other" ? {} : { spice: item.customizations.spice }),
                addons: item.customizations.addons.map(addonId => {
                    const addon = checkoutAddons.find(option => option.id === addonId);
                    return { id: addon.id, name: addon.name, price: addon.price };
                }),
                instructions: item.customizations.instructions,
                lineTotal: (item.price + getItemAddonTotal(item)) * item.quantity
            })),
            subtotal,
            tip,
            total: subtotal + tip
        };

        localStorage.setItem(
            ORDERS_STORAGE_KEY,
            JSON.stringify([...existingOrders, order])
        );

        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify([]));
        } catch (error) {
            if (hadPreviousOrders) {
                localStorage.setItem(ORDERS_STORAGE_KEY, previousOrdersValue);
            } else {
                localStorage.removeItem(ORDERS_STORAGE_KEY);
            }
            throw error;
        }

    } catch (error) {
        console.error("Unable to create order:", error);
        isPlacingOrder = false;
        showCheckoutError("We couldn't save your order in this browser. Your cart has been kept; please try again.");
        if (placeButton) placeButton.disabled = false;
        return;
    }

    cart = [];
    updateCartCount();
    renderOrderConfirmation(order);
}

function renderOrderConfirmation(order) {
    const content = document.getElementById("cart-modal-content");
    if (!content) return;

    const modal = document.getElementById("cart-modal");
    if (modal) {
        modal.classList.remove("checkout-open");
        modal.classList.add("order-confirmation-open");
    }

    content.innerHTML = `
        <div class="order-confirmation" id="order-confirmation">
            <button class="cart-close-button confirmation-close" type="button" data-close-cart aria-label="Close confirmation">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <h2>Order Received!</h2>
            <div class="confirmation-items">
                ${order.items.map(item => `
                    <div><span>${escapeHtml(item.name)}${item.portionLabel ? ` · ${escapeHtml(item.portionLabel)}` : ""} × ${item.quantity}</span><strong>₹${item.lineTotal}</strong></div>
                `).join("")}
            </div>
            <div class="confirmation-total"><span>Total${order.tip ? " (including tip)" : ""}</span><strong>₹${order.total}</strong></div>
            <button type="button" class="checkout-place-button confirmation-continue" data-close-cart>
                Continue Exploring Menu <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `;
    isPlacingOrder = false;
}

function updateCartItem(cartKey, action) {
    const item = cart.find(
        product => getCartItemKey(product) === cartKey
    );

    if (!item) return;

    if (action === "increase") {
        item.quantity++;
    }

    if (action === "decrease") {
        item.quantity--;

        if (item.quantity <= 0) {
            cart = cart.filter(
                product => getCartItemKey(product) !== cartKey
            );
        }
    }

    if (action === "remove") {
        cart = cart.filter(
            product => getCartItemKey(product) !== cartKey
        );
    }

    saveCart();
    updateCartCount();
    if (document.getElementById("checkout-view")) {
        renderCheckout();
    } else {
        renderCartItems();
    }
}


/* =========================================================
   10. HOMEPAGE SEARCH
   ========================================================= */

function initializeSearch() {
    const form = document.getElementById("hero-search-form");
    const input = document.getElementById("hero-search-input");

    if (!form || !input) return;

    form.addEventListener("submit", event => {
        event.preventDefault();

        const query = input.value.trim();

        if (!query) {
            showToast("Please enter a dish or cuisine.");
            input.focus();
            return;
        }

        window.location.href =
            `./menu.html?q=${encodeURIComponent(query)}`;
    });
}


/* =========================================================
   11. WAITER ASSISTANCE
   ========================================================= */

const waiterServices = [
    {
        id: "water",
        title: "Request Water",
        description: "Ask for a water bottle.",
        icon: "fa-solid fa-glass-water"
    },
    {
        id: "waiter",
        title: "Call Waiter",
        description: "Request assistance from a waiter.",
        icon: "fa-solid fa-bell-concierge"
    },
    {
        id: "plates",
        title: "Extra Plates & Cutlery",
        description: "Request plates, spoons or forks.",
        icon: "fa-solid fa-utensils"
    },
    {
        id: "addons",
        title: "Request Add-ons",
        description: "Ask for sauces, dips or chutney.",
        icon: "fa-solid fa-bowl-food"
    },
    {
        id: "bill",
        title: "Request Bill",
        description: "Ask for the bill.",
        icon: "fa-solid fa-receipt"
    },
    {
        id: "special",
        title: "Special Request",
        description: "Tell us what else you need.",
        icon: "fa-solid fa-wand-magic-sparkles"
    }
];

let selectedWaiterService = "";
let waiterModalOpener = null;

function createWaiterModal() {
    if (document.getElementById("waiter-modal")) return;

    const modal = document.createElement("div");
    modal.id = "waiter-modal";
    modal.className = "waiter-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
        <div class="waiter-modal-overlay" data-close-waiter-modal></div>

        <section
            class="waiter-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="waiter-modal-title"
            aria-describedby="waiter-modal-subtitle"
        >
            <button
                class="waiter-modal-close"
                type="button"
                aria-label="Close assistance request"
                data-close-waiter-modal
            >
                <i class="fa-solid fa-xmark"></i>
            </button>

            <div class="waiter-modal-heading">
                <span class="waiter-modal-icon">
                    <i class="fa-solid fa-bell-concierge"></i>
                </span>
                <span class="section-eyebrow">HERE TO HELP</span>
                <h2 id="waiter-modal-title">How can we help you?</h2>
                <p id="waiter-modal-subtitle">
                    Choose a service request and we'll be happy to assist.
                </p>
            </div>

            <form class="waiter-request-form" id="waiter-request-form">
                <div class="waiter-service-grid" role="group" aria-label="Choose a service request">
                    ${waiterServices.map(service => `
                        <button
                            class="waiter-service-card"
                            type="button"
                            data-waiter-service="${service.id}"
                            aria-pressed="false"
                        >
                            <span class="waiter-service-icon">
                                <i class="${service.icon}"></i>
                            </span>
                            <span class="waiter-service-copy">
                                <strong>${service.title}</strong>
                                <small>${service.description}</small>
                            </span>
                            <i class="fa-solid fa-circle-check waiter-service-check" aria-hidden="true"></i>
                        </button>
                    `).join("")}
                </div>

                <label class="waiter-custom-request" for="waiter-custom-input" hidden>
                    <span>Your request</span>
                    <textarea
                        id="waiter-custom-input"
                        rows="3"
                        maxlength="300"
                        placeholder="Tell us what you need..."
                    ></textarea>
                </label>

                <p class="waiter-form-error" id="waiter-form-error" role="alert" hidden></p>

                <button class="waiter-submit-button" type="submit">
                    Submit Request
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
                <p class="waiter-demo-note">
                    This demo confirms requests on this device only; no waiter is notified.
                </p>
            </form>

            <div class="waiter-request-success" id="waiter-request-success" aria-live="polite" hidden>
                <span class="waiter-success-icon">
                    <i class="fa-solid fa-check"></i>
                </span>
                <h3 id="waiter-success-title" tabindex="-1">REQUEST RECEIVED!</h3>
                <p id="waiter-success-message">Your request has been successfully submitted.</p>
                <p class="waiter-success-detail"></p>
            </div>
        </section>
    `;

    modal.addEventListener("click", event => {
        const closeButton = event.target.closest("[data-close-waiter-modal]");

        if (closeButton) {
            closeWaiterModal();
            return;
        }

        const serviceButton = event.target.closest("[data-waiter-service]");

        if (serviceButton) {
            selectWaiterService(serviceButton.dataset.waiterService);
        }
    });

    modal.querySelector("#waiter-request-form").addEventListener("submit", event => {
        event.preventDefault();
        submitWaiterRequest();
    });

    modal.querySelector("#waiter-custom-input").addEventListener("input", event => {
        if (event.target.value.trim()) {
            const error = modal.querySelector("#waiter-form-error");
            error.hidden = true;
            error.textContent = "";
        }
    });

    document.body.appendChild(modal);
}

function selectWaiterService(serviceId) {
    selectedWaiterService = serviceId;

    document.querySelectorAll("[data-waiter-service]").forEach(button => {
        const selected = button.dataset.waiterService === serviceId;
        button.classList.toggle("selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });

    const customRequest = document.querySelector(".waiter-custom-request");
    const customInput = document.getElementById("waiter-custom-input");
    const error = document.getElementById("waiter-form-error");

    if (customRequest) {
        customRequest.hidden = serviceId !== "special";
    }

    if (error) {
        error.hidden = true;
        error.textContent = "";
    }
}

function openWaiterModal() {
    createWaiterModal();
    const modal = document.getElementById("waiter-modal");

    selectedWaiterService = "";
    waiterModalOpener = document.activeElement;
    modal.querySelectorAll("[data-waiter-service]").forEach(button => {
        button.classList.remove("selected");
        button.setAttribute("aria-pressed", "false");
    });
    modal.querySelector("#waiter-request-form").hidden = false;
    modal.querySelector("#waiter-request-success").hidden = true;
    modal.querySelector(".waiter-modal-heading").hidden = false;
    modal.querySelector(".waiter-modal-content").setAttribute("aria-labelledby", "waiter-modal-title");
    modal.querySelector(".waiter-modal-content").setAttribute("aria-describedby", "waiter-modal-subtitle");
    modal.querySelector(".waiter-custom-request").hidden = true;
    modal.querySelector("#waiter-custom-input").value = "";
    modal.querySelector("#waiter-custom-input").required = false;
    modal.querySelector("#waiter-form-error").hidden = true;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.querySelector(".waiter-service-card").focus();
}

function closeWaiterModal() {
    const modal = document.getElementById("waiter-modal");

    if (!modal) return;

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (waiterModalOpener && typeof waiterModalOpener.focus === "function") {
        waiterModalOpener.focus();
    }
}

function submitWaiterRequest() {
    const error = document.getElementById("waiter-form-error");
    const customInput = document.getElementById("waiter-custom-input");
    const customText = customInput.value.trim();

    if (!selectedWaiterService) {
        error.textContent = "Please choose a service request.";
        error.hidden = false;
        return;
    }

    if (selectedWaiterService === "special" && !customText) {
        error.textContent = "Please enter your special request.";
        error.hidden = false;
        customInput.focus();
        return;
    }

    const service = waiterServices.find(item => item.id === selectedWaiterService);
    const success = document.getElementById("waiter-request-success");

    success.querySelector(".waiter-success-detail").textContent = service.title;
    document.querySelector(".waiter-modal-heading").hidden = true;
    document.getElementById("waiter-request-form").hidden = true;
    success.hidden = false;
    const dialog = document.querySelector(".waiter-modal-content");
    dialog.setAttribute("aria-labelledby", "waiter-success-title");
    dialog.setAttribute("aria-describedby", "waiter-success-title waiter-success-message");
    success.querySelector("h3").focus();
}

function initializeWaiterButtons() {
    document.querySelectorAll(
        ".call-waiter-button, .mobile-waiter-button, .mobile-bottom-waiter"
    ).forEach(button => {
        button.addEventListener("click", openWaiterModal);
    });
}


/* =========================================================
   12. TOAST NOTIFICATION
   ========================================================= */

function showToast(message, options = {}) {
    let toast = document.getElementById("app-toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "app-toast";
        toast.className = "app-toast";
        toast.innerHTML = `
            <i class="fa-solid fa-circle-check app-toast-icon" aria-hidden="true"></i>
            <span class="app-toast-message"></span>
            <button type="button" class="app-toast-action" hidden></button>
        `;
        document.body.appendChild(toast);
    }

    const messageElement = toast.querySelector(".app-toast-message");
    const actionElement = toast.querySelector(".app-toast-action");

    messageElement.textContent = message;

    if (options.actionLabel && typeof options.onAction === "function") {
        actionElement.textContent = options.actionLabel;
        actionElement.hidden = false;
        actionElement.onclick = options.onAction;
    } else {
        actionElement.hidden = true;
        actionElement.onclick = null;
    }

    toast.classList.add("show");

    clearTimeout(toast.timeout);

    toast.timeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


/* =========================================================
   13. HOMEPAGE CATEGORY NAVIGATION
   ========================================================= */

function initializeCategoryNavigation() {
    const container = document.getElementById("categories-grid");

    if (!container) return;

    function navigate(event) {
        const card = event.target.closest(".category-card");

        if (!card) return;

        window.location.href =
            `./menu.html?category=${encodeURIComponent(card.dataset.category)}`;
    }

    container.addEventListener("click", navigate);

    container.addEventListener("keydown", event => {
        if (event.key !== "Enter" && event.key !== " ") return;

        event.preventDefault();
        navigate(event);
    });
}


/* =========================================================
   14. MENU PAGE FILTERING
   ========================================================= */

let activeMenuFilter = "all";
let activeMenuCategory = "all";
let menuSearchQuery = "";
let menuCurrentPage = 1;
const MENU_PAGE_SIZE = 8;

function renderMenuCategories() {
    const container = document.getElementById("menu-category-list");

    if (!container) return;

    container.innerHTML = `
        <button
            type="button"
            class="menu-category-item ${activeMenuCategory === "all" ? "active" : ""}"
            data-menu-category="all"
        >
            All Categories
        </button>

        ${categories.map(category => `
            <button
                type="button"
                class="menu-category-item ${activeMenuCategory === category.id ? "active" : ""}"
                data-menu-category="${category.id}"
            >
                ${category.name}
            </button>
        `).join("")}
    `;
}

function renderMenuDishes() {
    const container = document.getElementById("menu-dishes-grid");
    const emptyState = document.getElementById("menu-empty-state");
    const pagination = document.getElementById("menu-pagination");

    if (!container) return;

    const filtered = categoryMenuDishes.filter(dish => {
        const matchesType =
            activeMenuFilter === "all" ||
            dish.foodType === activeMenuFilter;
        const matchesCategory =
            activeMenuCategory === "all" || dish.category === activeMenuCategory;
        const matchesSearch =
            `${dish.name} ${dish.description} ${dish.categoryName} ${dish.subcategoryName} ${dish.category}`
                .toLowerCase()
                .includes(menuSearchQuery);

        return matchesType && matchesCategory && matchesSearch;
    });

    const pageCount = Math.ceil(filtered.length / MENU_PAGE_SIZE);
    menuCurrentPage = Math.min(menuCurrentPage, Math.max(pageCount, 1));
    const pageStart = (menuCurrentPage - 1) * MENU_PAGE_SIZE;
    const pageDishes = filtered.slice(pageStart, pageStart + MENU_PAGE_SIZE);

    const renderDishCard = dish => `
        <article class="menu-dish-card">
            <div class="menu-dish-image">
                <img
                    src="${escapeHtml(dish.menuImage)}"
                    data-fallback-image="${escapeHtml(dish.fallbackImage)}"
                    onerror="this.onerror=null;this.src=this.dataset.fallbackImage"
                    alt="${escapeHtml(dish.name)}"
                    loading="lazy">

                <span class="menu-dish-type ${dish.foodType}">
                    <span class="${dish.foodType === "veg" ? "veg-indicator" : "nonveg-indicator"}"></span>
                    ${dish.foodType === "veg" ? "Veg" : "Non-Veg"}
                </span>
            </div>

            <div class="menu-dish-details">
                <h3>${escapeHtml(dish.name)}</h3>

                <div class="menu-dish-bottom">
                    <span class="menu-dish-price">${formatDishPrice(dish)}</span>

                    <button class="menu-add-button" data-add-cart="${dish.id}">
                        Add <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </article>
    `;

    container.innerHTML = pageDishes.map(renderDishCard).join("");

    if (emptyState) {
        emptyState.hidden = filtered.length > 0;
    }

    if (pagination) {
        pagination.hidden = filtered.length === 0;
        pagination.innerHTML = `
            <button type="button" data-menu-page="${menuCurrentPage - 1}" ${menuCurrentPage === 1 ? "disabled" : ""} aria-label="Previous page">
                <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
                Previous
            </button>
            <div class="menu-pagination-pages">
                ${Array.from({ length: pageCount }, (_, index) => {
                    const page = index + 1;
                    return `
                        <button
                            type="button"
                            data-menu-page="${page}"
                            ${page === menuCurrentPage ? 'aria-current="page"' : ""}
                            aria-label="Page ${page}"
                        >${page}</button>
                    `;
                }).join("")}
            </div>
            <button type="button" data-menu-page="${menuCurrentPage + 1}" ${menuCurrentPage === pageCount ? "disabled" : ""} aria-label="Next page">
                Next
                <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
        `;
    }

}

function setMenuCategory(categoryId) {
    const valid =
        categoryId === "all" ||
        categories.some(category => category.id === categoryId);

    activeMenuCategory = valid ? categoryId : "all";
    menuCurrentPage = 1;

    renderMenuCategories();
    renderMenuDishes();
}

function initializeMenuPage() {
    const grid = document.getElementById("menu-dishes-grid");

    if (!grid) return;

    const params = new URLSearchParams(window.location.search);

    menuSearchQuery = (params.get("q") || "").trim().toLowerCase();

    const searchForm = document.getElementById("menu-search-form");
    const searchInput = document.getElementById("menu-search");

    if (searchInput) {
        searchInput.value = params.get("q") || "";
    }

    if (searchForm && searchInput) {
        searchForm.addEventListener("submit", event => {
            event.preventDefault();
            menuSearchQuery = searchInput.value.trim().toLowerCase();
            menuCurrentPage = 1;
            renderMenuDishes();
            document.querySelector(".menu-listing")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    document.querySelectorAll(".food-filter").forEach(button => {
        button.addEventListener("click", () => {
            activeMenuFilter = button.dataset.filter || "all";
            activeMenuCategory = "all";
            menuCurrentPage = 1;

            document.querySelectorAll(".food-filter").forEach(item => {
                item.classList.toggle("active", item === button);
            });

            renderMenuCategories();
            renderMenuDishes();
        });
    });

    const categoryContainer = document.getElementById(
        "menu-category-list"
    );

    if (categoryContainer) {
        categoryContainer.addEventListener("click", event => {
            const button = event.target.closest("[data-menu-category]");

            if (button) {
                setMenuCategory(button.dataset.menuCategory);
            }
        });
    }

    const pagination = document.getElementById("menu-pagination");

    if (pagination) {
        pagination.addEventListener("click", event => {
            const button = event.target.closest("[data-menu-page]");

            if (!button || button.disabled) return;

            menuCurrentPage = Number(button.dataset.menuPage);
            renderMenuDishes();
            pagination.querySelector('[aria-current="page"]')?.scrollIntoView({
                block: "nearest",
                inline: "center"
            });
        });
    }

    const requestedFilter = params.get("filter");
    if (requestedFilter === "veg" || requestedFilter === "non-veg") {
        activeMenuFilter = requestedFilter;
        document.querySelectorAll(".food-filter").forEach(button => {
            button.classList.toggle("active", button.dataset.filter === requestedFilter);
        });
    }

    setMenuCategory(params.get("category") || "all");
}

/* =========================================================
   15. BEVERAGE PAGE
   ========================================================= */

let activeBeverageCategory = "all";
let beverageSearchQuery = "";
let visibleBeverageCount = 8;

function renderBeverages() {
    const grid = document.getElementById("beverage-grid");
    const emptyState = document.getElementById("beverage-empty-state");
    const resultTitle = document.getElementById("beverage-results-title");
    const resultCount = document.getElementById("beverage-result-count");
    const moreButton = document.getElementById("beverage-more-button");

    if (!grid) return;

    const filtered = beverageDishes.filter(drink => {
        const category = beverageCategories.find(item => item.id === drink.category);
        const matchesCategory =
            activeBeverageCategory === "all" ||
            drink.category === activeBeverageCategory;
        const matchesSearch =
            `${drink.name} ${drink.description} ${category?.name || ""}`
                .toLowerCase()
                .includes(beverageSearchQuery);

        return matchesCategory && matchesSearch;
    });

    const visibleDrinks = filtered.slice(0, visibleBeverageCount);

    grid.innerHTML = visibleDrinks.map(drink => {
        const category = beverageCategories.find(item => item.id === drink.category);

        return `
            <article class="beverage-card">
                <div class="beverage-card-image">
                    <img
                        src="${drink.image.local}"
                        data-local-image="${drink.image.local}"
                        alt="${drink.name}"
                        loading="lazy">
                    <span class="beverage-card-category">${category.name}</span>
                </div>
                <div class="beverage-card-body">
                    <h4>${drink.name}</h4>
                    <div class="beverage-card-bottom">
                        <span class="beverage-card-price">₹${drink.price}</span>
                        <button class="beverage-card-add" type="button" data-add-cart="${drink.id}">
                            Add to Cart
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    if (resultTitle) {
        resultTitle.textContent = activeBeverageCategory === "all"
            ? "All Drinks"
            : beverageCategories.find(item => item.id === activeBeverageCategory)?.name || "All Drinks";
    }

    if (resultCount) {
        resultCount.textContent = `${visibleDrinks.length} of ${filtered.length} drinks`;
    }

    if (emptyState) {
        emptyState.hidden = filtered.length > 0;
    }

    if (moreButton) {
        moreButton.hidden = filtered.length <= visibleDrinks.length;
    }
}

function initializeBeveragePage() {
    const grid = document.getElementById("beverage-grid");

    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const searchInput = document.getElementById("beverage-search-input");

    beverageSearchQuery = (params.get("q") || "").trim().toLowerCase();
    activeBeverageCategory = beverageCategories.some(item => item.id === params.get("category"))
        ? params.get("category")
        : "all";

    if (searchInput) {
        searchInput.value = params.get("q") || "";
        searchInput.addEventListener("input", () => {
            beverageSearchQuery = searchInput.value.trim().toLowerCase();
            visibleBeverageCount = 8;
            renderBeverages();
        });
    }

    document.querySelectorAll(".beverage-filter").forEach(button => {
        const active = button.dataset.beverageCategory === activeBeverageCategory;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));

        button.addEventListener("click", () => {
            activeBeverageCategory = button.dataset.beverageCategory || "all";
            visibleBeverageCount = 8;

            document.querySelectorAll(".beverage-filter").forEach(filter => {
                const isActive = filter === button;
                filter.classList.toggle("active", isActive);
                filter.setAttribute("aria-pressed", String(isActive));
            });

            renderBeverages();
        });
    });

    const moreButton = document.getElementById("beverage-more-button");
    if (moreButton) {
        moreButton.addEventListener("click", () => {
            visibleBeverageCount += 8;
            renderBeverages();
        });
    }

    renderBeverages();
}

/* =========================================================
   16. BIRYANI PAGE
   ========================================================= */

let activeBiryaniCategory = "all";
let biryaniSearchQuery = "";
let visibleBiryaniCount = 8;

function renderBiryanis() {
    const grid = document.getElementById("biryani-grid");
    const emptyState = document.getElementById("biryani-empty-state");
    const resultTitle = document.getElementById("biryani-results-title");
    const resultCount = document.getElementById("biryani-result-count");
    const moreButton = document.getElementById("biryani-more-button");

    if (!grid) return;

    const filtered = biryaniDishes.filter(dish => {
        const category = biryaniCategories.find(item => item.id === dish.category);
        const matchesCategory =
            activeBiryaniCategory === "all" ||
            dish.category === activeBiryaniCategory;
        const matchesSearch =
            `${dish.name} ${dish.description} ${category?.name || ""}`
                .toLowerCase()
                .includes(biryaniSearchQuery);

        return matchesCategory && matchesSearch;
    });

    const visibleDishes = filtered.slice(0, visibleBiryaniCount);

    grid.innerHTML = visibleDishes.map(dish => {
        const category = biryaniCategories.find(item => item.id === dish.category);

        return `
            <article class="biryani-card">
                <div class="biryani-card-image">
                    <img
                        src="${dish.image.local}"
                        data-local-image="${dish.image.local}"
                        alt="${dish.name}"
                        loading="lazy">
                    <span class="biryani-card-category">${category.name}</span>
                </div>
                <div class="biryani-card-body">
                    <h4>${dish.name}</h4>
                    <div class="biryani-card-bottom">
                        <span class="biryani-card-price">${formatDishPrice(dish)}</span>
                        <button class="biryani-card-add" type="button" data-add-cart="${dish.id}">
                            Add to Cart
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    if (resultTitle) {
        resultTitle.textContent = activeBiryaniCategory === "all"
            ? "All Biryanis"
            : biryaniCategories.find(item => item.id === activeBiryaniCategory)?.name || "All Biryanis";
    }

    if (resultCount) {
        resultCount.textContent = `${visibleDishes.length} of ${filtered.length} biryanis`;
    }

    if (emptyState) {
        emptyState.hidden = filtered.length > 0;
    }

    if (moreButton) {
        moreButton.hidden = filtered.length <= visibleDishes.length;
    }
}

function initializeBiryaniPage() {
    const grid = document.getElementById("biryani-grid");

    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const searchInput = document.getElementById("biryani-search-input");

    biryaniSearchQuery = (params.get("q") || "").trim().toLowerCase();
    activeBiryaniCategory = biryaniCategories.some(item => item.id === params.get("category"))
        ? params.get("category")
        : "all";

    if (searchInput) {
        searchInput.value = params.get("q") || "";
        searchInput.addEventListener("input", () => {
            biryaniSearchQuery = searchInput.value.trim().toLowerCase();
            visibleBiryaniCount = 8;
            renderBiryanis();
        });
    }

    document.querySelectorAll(".biryani-filter").forEach(button => {
        const active = button.dataset.biryaniCategory === activeBiryaniCategory;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));

        button.addEventListener("click", () => {
            activeBiryaniCategory = button.dataset.biryaniCategory || "all";
            visibleBiryaniCount = 8;

            document.querySelectorAll(".biryani-filter").forEach(filter => {
                const isActive = filter === button;
                filter.classList.toggle("active", isActive);
                filter.setAttribute("aria-pressed", String(isActive));
            });

            renderBiryanis();
        });
    });

    const moreButton = document.getElementById("biryani-more-button");
    if (moreButton) {
        moreButton.addEventListener("click", () => {
            visibleBiryaniCount += 8;
            renderBiryanis();
        });
    }

    renderBiryanis();
}

/* =========================================================
   17. NORTH INDIAN PAGE
   ========================================================= */

let activeNorthIndianCategory = "all";
let northIndianSearchQuery = "";
let visibleNorthIndianCount = 8;

function renderNorthIndianDishes() {
    const grid = document.getElementById("north-indian-grid");
    const emptyState = document.getElementById("north-indian-empty-state");
    const resultTitle = document.getElementById("north-indian-results-title");
    const resultCount = document.getElementById("north-indian-result-count");
    const moreButton = document.getElementById("north-indian-more-button");

    if (!grid) return;

    const filtered = northIndianDishes.filter(dish => {
        const category = northIndianCategories.find(item => item.id === dish.category);
        const matchesCategory =
            activeNorthIndianCategory === "all" ||
            dish.category === activeNorthIndianCategory;
        const matchesSearch =
            `${dish.name} ${dish.description} ${category?.name || ""}`
                .toLowerCase()
                .includes(northIndianSearchQuery);

        return matchesCategory && matchesSearch;
    });

    const visibleDishes = filtered.slice(0, visibleNorthIndianCount);

    grid.innerHTML = visibleDishes.map(dish => {
        const category = northIndianCategories.find(item => item.id === dish.category);

        return `
            <article class="north-indian-card">
                <div class="north-indian-card-image">
                    <img
                        src="${dish.image.local}"
                        data-local-image="${dish.image.local}"
                        data-fallback-image="${dish.image.url}"
                        alt="${dish.name}"
                        loading="lazy">
                    <span class="north-indian-card-category">${category.name}</span>
                </div>
                <div class="north-indian-card-body">
                    <h4>${dish.name}</h4>
                    <div class="north-indian-card-bottom">
                        <span class="north-indian-card-price">${formatDishPrice(dish)}</span>
                        <button class="north-indian-card-add" type="button" data-add-cart="${dish.id}">
                            Add to Cart
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    grid.querySelectorAll("img[data-fallback-image]").forEach(image => {
        image.addEventListener("error", () => {
            image.src = image.dataset.fallbackImage;
        }, { once: true });
    });

    if (resultTitle) {
        resultTitle.textContent = activeNorthIndianCategory === "all"
            ? "All North Indian Favourites"
            : northIndianCategories.find(item => item.id === activeNorthIndianCategory)?.name || "All North Indian Favourites";
    }

    if (resultCount) {
        resultCount.textContent = `${visibleDishes.length} of ${filtered.length} dishes`;
    }

    if (emptyState) {
        emptyState.hidden = filtered.length > 0;
    }

    if (moreButton) {
        moreButton.hidden = filtered.length <= visibleDishes.length;
    }
}

function initializeNorthIndianPage() {
    const grid = document.getElementById("north-indian-grid");

    if (!grid) return;

    const featuredImage = document.querySelector(".north-indian-feature-image img");
    if (featuredImage) {
        featuredImage.addEventListener("error", () => {
            featuredImage.src = featuredImage.dataset.fallbackImage;
        }, { once: true });
    }

    const params = new URLSearchParams(window.location.search);
    const searchInput = document.getElementById("north-indian-search-input");

    northIndianSearchQuery = (params.get("q") || "").trim().toLowerCase();
    activeNorthIndianCategory = northIndianCategories.some(item => item.id === params.get("category"))
        ? params.get("category")
        : "all";

    if (searchInput) {
        searchInput.value = params.get("q") || "";
        searchInput.addEventListener("input", () => {
            northIndianSearchQuery = searchInput.value.trim().toLowerCase();
            visibleNorthIndianCount = 8;
            renderNorthIndianDishes();
        });
    }

    document.querySelectorAll(".north-indian-filter").forEach(button => {
        const active = button.dataset.northIndianCategory === activeNorthIndianCategory;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));

        button.addEventListener("click", () => {
            activeNorthIndianCategory = button.dataset.northIndianCategory || "all";
            visibleNorthIndianCount = 8;

            document.querySelectorAll(".north-indian-filter").forEach(filter => {
                const isActive = filter === button;
                filter.classList.toggle("active", isActive);
                filter.setAttribute("aria-pressed", String(isActive));
            });

            renderNorthIndianDishes();
        });
    });

    const moreButton = document.getElementById("north-indian-more-button");
    if (moreButton) {
        moreButton.addEventListener("click", () => {
            visibleNorthIndianCount += 8;
            renderNorthIndianDishes();
        });
    }

    renderNorthIndianDishes();
}

/* =========================================================
   18. SOUTH INDIAN PAGE
   ========================================================= */

let activeSouthIndianCategory = "all";
let southIndianSearchQuery = "";
let visibleSouthIndianCount = 8;

function renderSouthIndianDishes() {
    const grid = document.getElementById("south-indian-grid");
    const emptyState = document.getElementById("south-indian-empty-state");
    const resultTitle = document.getElementById("south-indian-results-title");
    const resultCount = document.getElementById("south-indian-result-count");
    const moreButton = document.getElementById("south-indian-more-button");

    if (!grid) return;

    const filtered = southIndianDishes.filter(dish => {
        const category = southIndianCategories.find(item => item.id === dish.category);
        const matchesCategory =
            activeSouthIndianCategory === "all" ||
            dish.category === activeSouthIndianCategory;
        const matchesSearch =
            `${dish.name} ${dish.description} ${category?.name || ""}`
                .toLowerCase()
                .includes(southIndianSearchQuery);

        return matchesCategory && matchesSearch;
    });

    const visibleDishes = filtered.slice(0, visibleSouthIndianCount);

    grid.innerHTML = visibleDishes.map(dish => {
        const category = southIndianCategories.find(item => item.id === dish.category);

        return `
            <article class="south-indian-card">
                <div class="south-indian-card-image">
                    <img
                        src="${dish.image.url}"
                        data-local-image="${dish.image.local}"
                        alt="${dish.name}"
                        loading="lazy">
                    <span class="south-indian-card-category">${category.name}</span>
                </div>
                <div class="south-indian-card-body">
                    <h4>${dish.name}</h4>
                    <div class="south-indian-card-bottom">
                        <span class="south-indian-card-price">${formatDishPrice(dish)}</span>
                        <button class="south-indian-card-add" type="button" data-add-cart="${dish.id}">
                            Add to Cart
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    if (resultTitle) {
        resultTitle.textContent = activeSouthIndianCategory === "all"
            ? "All South Indian Favourites"
            : southIndianCategories.find(item => item.id === activeSouthIndianCategory)?.name || "All South Indian Favourites";
    }

    if (resultCount) {
        resultCount.textContent = `${visibleDishes.length} of ${filtered.length} dishes`;
    }

    if (emptyState) {
        emptyState.hidden = filtered.length > 0;
    }

    if (moreButton) {
        moreButton.hidden = filtered.length <= visibleDishes.length;
    }
}

function initializeSouthIndianPage() {
    const grid = document.getElementById("south-indian-grid");

    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const searchInput = document.getElementById("south-indian-search-input");

    southIndianSearchQuery = (params.get("q") || "").trim().toLowerCase();
    activeSouthIndianCategory = southIndianCategories.some(item => item.id === params.get("category"))
        ? params.get("category")
        : "all";

    if (searchInput) {
        searchInput.value = params.get("q") || "";
        searchInput.addEventListener("input", () => {
            southIndianSearchQuery = searchInput.value.trim().toLowerCase();
            visibleSouthIndianCount = 8;
            renderSouthIndianDishes();
        });
    }

    document.querySelectorAll(".south-indian-filter").forEach(button => {
        const active = button.dataset.southIndianCategory === activeSouthIndianCategory;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));

        button.addEventListener("click", () => {
            activeSouthIndianCategory = button.dataset.southIndianCategory || "all";
            visibleSouthIndianCount = 8;

            document.querySelectorAll(".south-indian-filter").forEach(filter => {
                const isActive = filter === button;
                filter.classList.toggle("active", isActive);
                filter.setAttribute("aria-pressed", String(isActive));
            });

            renderSouthIndianDishes();
        });
    });

    const moreButton = document.getElementById("south-indian-more-button");
    if (moreButton) {
        moreButton.addEventListener("click", () => {
            visibleSouthIndianCount += 8;
            renderSouthIndianDishes();
        });
    }

    renderSouthIndianDishes();
}

/* =========================================================
   19. CHINESE PAGE
   ========================================================= */

let activeChineseCategory = "all";
let chineseSearchQuery = "";
let visibleChineseCount = 8;

function renderChineseDishes() {
    const grid = document.getElementById("chinese-grid");
    const emptyState = document.getElementById("chinese-empty-state");
    const resultTitle = document.getElementById("chinese-results-title");
    const resultCount = document.getElementById("chinese-result-count");
    const moreButton = document.getElementById("chinese-more-button");

    if (!grid) return;

    const filtered = chineseDishes.filter(dish => {
        const category = chineseCategories.find(
            item => item.id === dish.category
        );

        const matchesCategory =
            activeChineseCategory === "all" ||
            dish.category === activeChineseCategory;

        const matchesSearch =
            `${dish.name} ${dish.description} ${category?.name || ""}`
                .toLowerCase()
                .includes(chineseSearchQuery);

        return matchesCategory && matchesSearch;
    });

    const visibleDishes = filtered.slice(0, visibleChineseCount);

    grid.innerHTML = visibleDishes.map(dish => {
        const category = chineseCategories.find(
            item => item.id === dish.category
        );

        return `
            <article class="chinese-card">
                <div class="chinese-card-image">
                    <img
                        src="${dish.image.local}"
                        alt="${dish.name}"
                        loading="lazy"
                        decoding="async"
                        onerror="this.onerror=null; this.classList.add('image-load-failed');"
                    >

                    <span class="chinese-card-category">
                        ${category?.name || ""}
                    </span>
                </div>

                <div class="chinese-card-body">
                    <h4>${dish.name}</h4>

                    <div class="chinese-card-bottom">
                        <span
                            class="chinese-card-price"
                        >${formatDishPrice(dish)}</span>

                        <button
                            class="chinese-card-add"
                            type="button"
                            data-add-cart="${dish.id}"
                        >
                            Add to Cart
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    if (resultTitle) {
        resultTitle.textContent =
            activeChineseCategory === "all"
                ? "All Indo-Chinese Favourites"
                : chineseCategories.find(
                    item => item.id === activeChineseCategory
                )?.name || "All Indo-Chinese Favourites";
    }

    if (resultCount) {
        resultCount.textContent =
            `${visibleDishes.length} of ${filtered.length} dishes`;
    }

    if (emptyState) {
        emptyState.hidden = filtered.length > 0;
    }

    if (moreButton) {
        moreButton.hidden =
            filtered.length <= visibleDishes.length;
    }
}

function initializeChinesePage() {
    const grid = document.getElementById("chinese-grid");

    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const searchInput = document.getElementById("chinese-search-input");

    chineseSearchQuery = (params.get("q") || "").trim().toLowerCase();

    activeChineseCategory = chineseCategories.some(
        item => item.id === params.get("category")
    )
        ? params.get("category")
        : "all";

    if (searchInput) {
        searchInput.value = params.get("q") || "";

        searchInput.addEventListener("input", () => {
            chineseSearchQuery =
                searchInput.value.trim().toLowerCase();

            visibleChineseCount = 8;
            renderChineseDishes();
        });
    }

    document.querySelectorAll(".chinese-filter").forEach(button => {
        const active =
            button.dataset.chineseCategory === activeChineseCategory;

        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));

        button.addEventListener("click", () => {
            activeChineseCategory =
                button.dataset.chineseCategory || "all";

            visibleChineseCount = 8;

            document.querySelectorAll(".chinese-filter").forEach(filter => {
                const isActive = filter === button;

                filter.classList.toggle("active", isActive);
                filter.setAttribute("aria-pressed", String(isActive));
            });

            renderChineseDishes();
        });
    });

    const moreButton =
        document.getElementById("chinese-more-button");

    if (moreButton) {
        moreButton.addEventListener("click", () => {
            visibleChineseCount += 8;
            renderChineseDishes();
        });
    }

    renderChineseDishes();
}

/* =========================================================
   20. INDIAN ROTIS PAGE
   ========================================================= */

let activeIndianRotisCategory = "all";
let indianRotisSearchQuery = "";
let visibleIndianRotisCount = 8;

function renderIndianRotis() {
    const grid = document.getElementById("indian-rotis-grid");
    const emptyState = document.getElementById("indian-rotis-empty-state");
    const resultTitle = document.getElementById("indian-rotis-results-title");
    const resultCount = document.getElementById("indian-rotis-result-count");
    const moreButton = document.getElementById("indian-rotis-more-button");

    if (!grid) return;

    const filtered = indianRotisDishes.filter(dish => {
        const category = indianRotisCategories.find(item => item.id === dish.category);
        const matchesCategory =
            activeIndianRotisCategory === "all" ||
            dish.category === activeIndianRotisCategory;
        const matchesSearch =
            `${dish.name} ${dish.description} ${category?.name || ""}`
                .toLowerCase()
                .includes(indianRotisSearchQuery);

        return matchesCategory && matchesSearch;
    });

    const visibleDishes = filtered.slice(0, visibleIndianRotisCount);

    grid.innerHTML = visibleDishes.map(dish => {
        const category = indianRotisCategories.find(item => item.id === dish.category);

        return `
            <article class="indian-rotis-card">
                <div class="indian-rotis-card-image">
                    <img
                        src="${dish.image.local}"
                        data-local-image="${dish.image.local}"
                        alt="${dish.name}"
                        loading="lazy">
                    <span class="indian-rotis-card-category">${category.name}</span>
                </div>
                <div class="indian-rotis-card-body">
                    <h4>${dish.name}</h4>
                    <div class="indian-rotis-card-bottom">
                        <span class="indian-rotis-card-price">${formatDishPrice(dish)}</span>
                        <button class="indian-rotis-card-add" type="button" data-add-cart="${dish.id}">
                            Add to Cart
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    if (resultTitle) {
        resultTitle.textContent = activeIndianRotisCategory === "all"
            ? "All Indian Breads"
            : indianRotisCategories.find(item => item.id === activeIndianRotisCategory)?.name || "All Indian Breads";
    }

    if (resultCount) {
        resultCount.textContent = `${visibleDishes.length} of ${filtered.length} breads`;
    }

    if (emptyState) {
        emptyState.hidden = filtered.length > 0;
    }

    if (moreButton) {
        moreButton.hidden = filtered.length <= visibleDishes.length;
    }
}

function initializeIndianRotisPage() {
    const grid = document.getElementById("indian-rotis-grid");

    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const searchInput = document.getElementById("indian-rotis-search-input");

    indianRotisSearchQuery = (params.get("q") || "").trim().toLowerCase();
    activeIndianRotisCategory = indianRotisCategories.some(item => item.id === params.get("category"))
        ? params.get("category")
        : "all";

    if (searchInput) {
        searchInput.value = params.get("q") || "";
        searchInput.addEventListener("input", () => {
            indianRotisSearchQuery = searchInput.value.trim().toLowerCase();
            visibleIndianRotisCount = 8;
            renderIndianRotis();
        });
    }

    document.querySelectorAll(".indian-rotis-filter").forEach(button => {
        const active = button.dataset.indianRotisCategory === activeIndianRotisCategory;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));

        button.addEventListener("click", () => {
            activeIndianRotisCategory = button.dataset.indianRotisCategory || "all";
            visibleIndianRotisCount = 8;

            document.querySelectorAll(".indian-rotis-filter").forEach(filter => {
                const isActive = filter === button;
                filter.classList.toggle("active", isActive);
                filter.setAttribute("aria-pressed", String(isActive));
            });

            renderIndianRotis();
        });
    });

    const moreButton = document.getElementById("indian-rotis-more-button");
    if (moreButton) {
        moreButton.addEventListener("click", () => {
            visibleIndianRotisCount += 8;
            renderIndianRotis();
        });
    }

    renderIndianRotis();
}

/* =========================================================
   21. DESSERTS PAGE
   ========================================================= */

let activeDessertCategory = "all";
let dessertSearchQuery = "";
let visibleDessertCount = 8;

function renderDesserts() {
    const grid = document.getElementById("desserts-grid");
    const emptyState = document.getElementById("desserts-empty-state");
    const resultTitle = document.getElementById("desserts-results-title");
    const resultCount = document.getElementById("desserts-result-count");
    const moreButton = document.getElementById("desserts-more-button");

    if (!grid) return;

    const filtered = dessertDishes.filter(dish => {
        const category = dessertCategories.find(item => item.id === dish.category);
        const matchesCategory =
            activeDessertCategory === "all" ||
            dish.category === activeDessertCategory;
        const matchesSearch =
            `${dish.name} ${dish.description} ${category?.name || ""}`
                .toLowerCase()
                .includes(dessertSearchQuery);

        return matchesCategory && matchesSearch;
    });

    const visibleDishes = filtered.slice(0, visibleDessertCount);

    grid.innerHTML = visibleDishes.map(dish => {
        const category = dessertCategories.find(item => item.id === dish.category);

        return `
            <article class="desserts-card">
                <div class="desserts-card-image">
                    <img
                        src="${dish.image.local}"
                        data-local-image="${dish.image.local}"
                        alt="${dish.name}"
                        loading="lazy">
                    <span class="desserts-card-category">${category.name}</span>
                </div>
                <div class="desserts-card-body">
                    <h4>${dish.name}</h4>
                    <div class="desserts-card-bottom">
                        <span class="desserts-card-price">${formatDishPrice(dish)}</span>
                        <button class="desserts-card-add" type="button" data-add-cart="${dish.id}">
                            Add to Cart
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    if (resultTitle) {
        resultTitle.textContent = activeDessertCategory === "all"
            ? "All Sweet Favourites"
            : dessertCategories.find(item => item.id === activeDessertCategory)?.name || "All Sweet Favourites";
    }

    if (resultCount) {
        resultCount.textContent = `${visibleDishes.length} of ${filtered.length} desserts`;
    }

    if (emptyState) {
        emptyState.hidden = filtered.length > 0;
    }

    if (moreButton) {
        moreButton.hidden = filtered.length <= visibleDishes.length;
    }
}

function initializeDessertsPage() {
    const grid = document.getElementById("desserts-grid");

    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const searchInput = document.getElementById("desserts-search-input");

    dessertSearchQuery = (params.get("q") || "").trim().toLowerCase();
    activeDessertCategory = dessertCategories.some(item => item.id === params.get("category"))
        ? params.get("category")
        : "all";

    if (searchInput) {
        searchInput.value = params.get("q") || "";
        searchInput.addEventListener("input", () => {
            dessertSearchQuery = searchInput.value.trim().toLowerCase();
            visibleDessertCount = 8;
            renderDesserts();
        });
    }

    document.querySelectorAll(".desserts-filter").forEach(button => {
        const active = button.dataset.dessertCategory === activeDessertCategory;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));

        button.addEventListener("click", () => {
            activeDessertCategory = button.dataset.dessertCategory || "all";
            visibleDessertCount = 8;

            document.querySelectorAll(".desserts-filter").forEach(filter => {
                const isActive = filter === button;
                filter.classList.toggle("active", isActive);
                filter.setAttribute("aria-pressed", String(isActive));
            });

            renderDesserts();
        });
    });

    const moreButton = document.getElementById("desserts-more-button");
    if (moreButton) {
        moreButton.addEventListener("click", () => {
            visibleDessertCount += 8;
            renderDesserts();
        });
    }

    renderDesserts();
}


/* =========================================================
   22. CATEGORY PAGE
   ========================================================= */

let activeCategoryFilter = "all";

function renderCategoryDishes(categoryId) {
    const container = document.getElementById("category-dishes-grid");
    const emptyState = document.getElementById("category-empty-state");

    if (!container) return;

    const filtered = menuDishes.filter(dish => {
        const matchesCategory = dish.category === categoryId;

        const matchesType =
            activeCategoryFilter === "all" ||
            dish.foodType === activeCategoryFilter;

        return matchesCategory && matchesType;
    });

    container.innerHTML = filtered.map(dish => `
        <article class="menu-dish-card">
            <div class="menu-dish-image">
                <img src="${dish.image}" alt="${dish.name}" loading="lazy">

                <span class="menu-dish-type ${dish.foodType}">
                    <span class="${dish.foodType === "veg" ? "veg-indicator" : "nonveg-indicator"}"></span>
                    ${dish.foodType === "veg" ? "Veg" : "Non-Veg"}
                </span>
            </div>

            <div class="menu-dish-details">
                <h3>${dish.name}</h3>
                <div class="menu-dish-bottom">
                    <span class="menu-dish-price">${formatDishPrice(dish)}</span>

                    <button class="menu-add-button" data-add-cart="${dish.id}">
                        Add <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </article>
    `).join("");

    if (emptyState) {
        emptyState.hidden = filtered.length > 0;
    }
}

function initializeCategoryPage() {
    const container = document.getElementById("category-dishes-grid");

    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("category");

    const category = categories.find(
        item => item.id === categoryId
    );

    const title = document.getElementById("category-title");
    const description = document.getElementById("category-description");
    const sectionTitle = document.getElementById("category-section-title");

    if (!category) {
        if (title) title.textContent = "Category Not Found";

        if (description) {
            description.textContent = "This category is unavailable. Explore our full menu instead.";
        }

        if (sectionTitle) {
            sectionTitle.textContent = "Explore Our Menu";
        }

        const emptyState = document.getElementById("category-empty-state");

        if (emptyState) {
            emptyState.hidden = false;
            emptyState.querySelector("h3").textContent = "Category not found";
            emptyState.querySelector("p").textContent = "Please choose a category from our menu.";
        }

        return;
    }

    document.title = `${category.name} | Hotel Harshvardhan`;

    if (title) title.textContent = category.name;

    if (description) {
        description.textContent = category.description;
    }

    if (sectionTitle) {
        sectionTitle.textContent = `${category.name} Dishes`;
    }

    document.querySelectorAll(".food-filter").forEach(button => {
        button.addEventListener("click", () => {
            activeCategoryFilter = button.dataset.filter || "all";

            document.querySelectorAll(".food-filter").forEach(item => {
                item.classList.toggle("active", item === button);
            });

            renderCategoryDishes(category.id);
        });
    });

    renderCategoryDishes(category.id);
}


/* =========================================================
   23. GLOBAL EVENTS
   ========================================================= */

function initializeGlobalEvents() {
    document.addEventListener("click", event => {

        const addButton = event.target.closest("[data-add-cart]");

        if (addButton) {
            addToCart(addButton.dataset.addCart);
            return;
        }

        const cartButton = event.target.closest(".floating-cart-button");

        if (cartButton) {
            openCart();
            return;
        }

        if (event.target.closest("[data-close-cart]")) {
            closeCart();
            return;
        }

        const cartAction = event.target.closest("[data-cart-action]");

        if (cartAction) {
            updateCartItem(
                cartAction.dataset.cartKey,
                cartAction.dataset.cartAction
            );
            return;
        }

        if (event.target.closest("#checkout-button")) {
            openCheckout();
            return;
        }

        if (event.target.closest("[data-back-to-cart]")) {
            document.getElementById("cart-modal").classList.remove("checkout-open");
            restoreCartView();
            return;
        }

        if (event.target.closest("#place-order-button")) {
            placeDemoOrder();
        }
    });

    document.addEventListener("change", event => {
        const target = event.target;

        if (target.matches("[data-checkout-spice]")) {
            const item = cart.find(product => getCartItemKey(product) === target.dataset.checkoutSpice);
            if (item) {
                saveCheckoutCustomization(item, customizations => {
                    customizations.spice = target.value;
                });
            }
            return;
        }

        if (target.matches("[data-checkout-addon]")) {
            const cartKey = target.dataset.checkoutAddon;
            const item = cart.find(product => getCartItemKey(product) === cartKey);
            if (item) {
                const checkedAddons = [...document.querySelectorAll("[data-checkout-addon]")]
                    .filter(input => input.dataset.checkoutAddon === cartKey && input.checked)
                    .map(input => input.value);
                saveCheckoutCustomization(item, customizations => {
                    customizations.addons = checkedAddons;
                });
            }
            return;
        }

        if (target.matches('input[name="checkout-tip"]')) {
            checkoutTipSelection = target.value;
            if (target.value !== "custom") checkoutCustomTip = 0;
            updateCheckoutSummary();
        }
    });

    document.addEventListener("input", event => {
        const target = event.target;

        if (target.matches("[data-checkout-instructions]")) {
            const item = cart.find(product => getCartItemKey(product) === target.dataset.checkoutInstructions);
            if (item) {
                saveCheckoutCustomization(item, customizations => {
                    customizations.instructions = target.value;
                });
            }
            return;
        }

        if (target.matches("[data-custom-tip]")) {
            checkoutTipSelection = "custom";
            checkoutCustomTip = target.value === "" ? NaN : Number(target.value);
            const customTipRadio = document.querySelector('input[name="checkout-tip"][value="custom"]');
            if (customTipRadio) customTipRadio.checked = true;
            updateCheckoutSummary();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeCart();
        }
    });
}


/* =========================================================
   24. CURRENT YEAR
   ========================================================= */

function updateCurrentYear() {
    const year = document.getElementById("current-year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
}


/* =========================================================
   25. INITIALIZE APPLICATION
   ========================================================= */

function initializeHomepage() {
    renderCategories();
    renderPopularDishes();

    initializeFloatingCartButton();
    updateCartCount();

    initializeSearch();
    initializeCategoryNavigation();
    initializeGlobalEvents();

    initializeMenuPage();
    initializeCategoryPage();
    initializeBeveragePage();
    initializeBiryaniPage();
    initializeNorthIndianPage();
    initializeSouthIndianPage();
    initializeChinesePage();
    initializeIndianRotisPage();
    initializeDessertsPage();

    updateCurrentYear();
}


/* =========================================================
   26. START APPLICATION
   ========================================================= */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeHomepage);
} else {
    initializeHomepage();
}
