export interface Recipe {
  id: string;
  title: string;
  image: string;
  author: string;
  avatar: string;
  likes: number;
  liked: boolean;
  saved: boolean;
  time: string;
  calories: number;
  ingredients: string[];
  steps: string[];
  tags: string[];
  expiryMatch?: boolean;
}

export interface SavedItem {
  id: string;
  name: string;
  emoji: string;
  expiryDate: string;
  category: string;
}

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Avocado & Egg Toast",
    image: "🥑",
    author: "Chef Anjali",
    avatar: "👩‍🍳",
    likes: 234,
    liked: true,
    saved: true,
    time: "15 min",
    calories: 380,
    ingredients: ["Avocado", "Eggs", "Sourdough Bread", "Chili Flakes", "Lemon"],
    steps: ["Toast the sourdough bread until golden", "Mash the avocado with lemon juice and salt", "Fry eggs sunny-side up", "Top toast with avocado, eggs, and chili flakes"],
    tags: ["Quick", "Healthy"],
    expiryMatch: true,
  },
  {
    id: "2",
    title: "Grilled Chicken Bowl",
    image: "🍗",
    author: "FitMeal Pro",
    avatar: "💪",
    likes: 512,
    liked: false,
    saved: false,
    time: "30 min",
    calories: 520,
    ingredients: ["Chicken Breast", "Brown Rice", "Broccoli", "Soy Sauce", "Sesame Oil"],
    steps: ["Marinate chicken in soy sauce and sesame oil", "Grill chicken until cooked through", "Cook brown rice", "Steam broccoli and assemble bowl"],
    tags: ["High Protein", "Meal Prep"],
  },
  {
    id: "3",
    title: "Berry Smoothie Bowl",
    image: "🫐",
    author: "VeganVibes",
    avatar: "🌱",
    likes: 189,
    liked: false,
    saved: true,
    time: "10 min",
    calories: 280,
    ingredients: ["Mixed Berries", "Banana", "Almond Milk", "Granola", "Chia Seeds"],
    steps: ["Blend berries, banana, and almond milk", "Pour into bowl", "Top with granola, chia seeds, and fresh berries"],
    tags: ["Quick", "Vegan"],
    expiryMatch: true,
  },
  {
    id: "4",
    title: "Teriyaki Salmon",
    image: "🍣",
    author: "SeafoodKing",
    avatar: "🐟",
    likes: 421,
    liked: false,
    saved: false,
    time: "25 min",
    calories: 480,
    ingredients: ["Salmon Fillet", "Teriyaki Sauce", "Rice", "Edamame", "Green Onion"],
    steps: ["Marinate salmon in teriyaki sauce for 15 minutes", "Pan-sear salmon skin-side down", "Cook rice and steam edamame", "Plate and garnish with green onion"],
    tags: ["High Protein", "Healthy"],
  },
  {
    id: "5",
    title: "Pasta Primavera",
    image: "🍝",
    author: "ItalianBites",
    avatar: "🇮🇹",
    likes: 334,
    liked: true,
    saved: false,
    time: "35 min",
    calories: 550,
    ingredients: ["Penne Pasta", "Bell Peppers", "Zucchini", "Cherry Tomatoes", "Parmesan"],
    steps: ["Cook pasta al dente", "Sauté vegetables in olive oil", "Combine pasta and vegetables", "Top with parmesan and fresh basil"],
    tags: ["Vegetarian"],
    expiryMatch: true,
  },
  {
    id: "6",
    title: "Chicken Tikka Wrap",
    image: "🌯",
    author: "SpiceMaster",
    avatar: "🌶️",
    likes: 278,
    liked: false,
    saved: false,
    time: "40 min",
    calories: 620,
    ingredients: ["Chicken Thigh", "Yogurt", "Tikka Spice", "Naan Bread", "Lettuce"],
    steps: ["Marinate chicken in yogurt and tikka spice", "Grill chicken until charred", "Warm naan bread", "Assemble wrap with lettuce and chicken"],
    tags: ["High Protein"],
  },
];

export const mockSavedItems: SavedItem[] = [
  { id: "i1", name: "Avocado", emoji: "🥑", expiryDate: "2026-04-09", category: "Produce" },
  { id: "i2", name: "Eggs", emoji: "🥚", expiryDate: "2026-04-15", category: "Dairy" },
  { id: "i3", name: "Milk", emoji: "🥛", expiryDate: "2026-04-10", category: "Dairy" },
  { id: "i4", name: "Chicken Breast", emoji: "🍗", expiryDate: "2026-04-09", category: "Meat" },
  { id: "i5", name: "Mixed Berries", emoji: "🫐", expiryDate: "2026-04-11", category: "Produce" },
  { id: "i6", name: "Bread", emoji: "🍞", expiryDate: "2026-04-08", category: "Bakery" },
  { id: "i7", name: "Bell Peppers", emoji: "🫑", expiryDate: "2026-04-14", category: "Produce" },
  { id: "i8", name: "Yogurt", emoji: "🥣", expiryDate: "2026-04-12", category: "Dairy" },
];

export const categories = [
  { label: "All", emoji: "🍽️" },
  { label: "Quick", emoji: "⚡" },
  { label: "Healthy", emoji: "🥗" },
  { label: "High Protein", emoji: "💪" },
  { label: "Vegan", emoji: "🌱" },
  { label: "Vegetarian", emoji: "🥬" },
];
