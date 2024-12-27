let array = [
  {
    id: 1,
    title: "The Future of AI",
    category: "Technology",
    content:
      "Artificial Intelligence (AI) is rapidly advancing and shaping the future of technology. This article explores the trends and implications of AI.",
    author: "John Doe",
    keywords: ["AI", "Technology", "Future", "Innovation"],
    image: "https://example.com/images/future-of-ai.jpg",
  },
  {
    id: 2,
    title: "10 Best Recipes for Winter",
    category: "Food",
    content:
      "Warm up your winter with these top 10 hearty recipes that are easy to make and delicious.",
    author: "Jane Smith",
    keywords: ["Recipes", "Winter", "Food", "Cooking"],
    image: "https://example.com/images/winter-recipes.jpg",
  },
  {
    id: 3,
    title: "Exploring the Himalayas",
    category: "Travel",
    content:
      "A travel guide to the majestic Himalayas, including must-visit places, activities, and tips for travelers.",
    author: "Chris Mountain",
    keywords: ["Travel", "Himalayas", "Adventure", "Guide"],
    image: "https://example.com/images/himalayas.jpg",
  },
  {
    id: 4,
    title: "Top Tech Trends of 2024",
    category: "Technology",
    content:
      "An overview of the most promising technology trends to watch in 2024.",
    author: "Alex Innovations",
    keywords: ["Technology", "Trends", "2024", "Innovation"],
    image: "https://example.com/images/tech-trends-2024.jpg",
  },
  {
    id: 5,
    title: "Healthy Winter Soups",
    category: "Food",
    content:
      "Discover a variety of healthy and delicious soup recipes to keep you warm this winter.",
    author: "Emma Cook",
    keywords: ["Food", "Soups", "Winter", "Healthy"],
    image: "https://example.com/images/winter-soups.jpg",
  },
];

console.log(array.find((item) => item.id == 2).keywords);
console.log(array.filter((item) => item.category == "Food"));
