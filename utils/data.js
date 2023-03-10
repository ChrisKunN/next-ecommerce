import bcrypt from 'bcryptjs';

const data = {

  users: [
    {
      name: 'Chris',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Charly',
      email: 'notadmin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },

  ],

  products: [
    {
      name: "Bear Shirt",
      slug: "bear-shirt",
      category: "Shirts",
      image: "/images/osoNegra.png",
      price: 70,
      brand: "Chaska",
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: '/images/osoNegra.png',
    },
    {
      name: "Wolf Shirt",
      slug: "wolf-shirt",
      category: "Shirts",
      image: "/images/loboBlanca.png",
      price: 70,
      brand: "Chaska",
      rating: 4.5,
      numReviews: 20,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: '/images/loboBlanca.png',
    },
    {
      name: "Skeleton Shirt",
      slug: "skeleton-shirt",
      category: "Shirts",
      image: "/images/skeletonWarriorNegra.png",
      price: 70,
      brand: "Chaska",
      rating: 5,
      numReviews: 60,
      countInStock: 10,
      description: "A popular shirt",
    },
    {
      name: "Wolf White Shirt",
      slug: "wolf-shirt-white",
      category: "Shirts",
      image: "/images/loboBlanca.png",
      price: 70,
      brand: "Chaska",
      rating: 4.2,
      numReviews: 30,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Lion Black Shirt",
      slug: "lion-shirt-black",
      category: "Shirts",
      image: "/images/leonNegra.png",
      price: 70,
      brand: "Chaska",
      rating: 4.7,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Lion White Shirt",
      slug: "lion-white-shirt",
      category: "Shirts",
      image: "/images/leonBlanca.png",
      price: 70,
      brand: "Chaska",
      rating: 4.2,
      numReviews: 30,
      countInStock: 20,
      description: "A popular shirt",
    },
  ],
};

export default data;
