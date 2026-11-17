export interface MenuItem {
  id: string;
  name: string;
  category: 'beverage' | 'food' | 'snack' | 'kids';
  price: number;
  description: string;
  image: string;
  rating: number;
  calories: string;
  tags: string[];
  options?: {
    iceLevel?: string[];
    sugarLevel?: string[];
    spicyLevel?: string[];
  };
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  quote: string;
}

export interface PromoItem {
  id: string;
  title: string;
  discount: string;
  code: string;
  validUntil: string;
  description: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Princessa Mikayla Firliansyah",
    role: "Architect",
    bio: "Pioneering the spatial design and structural aesthetic of futuristic smart-cafe architecture.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    quote: "Design is not just what it looks like; it is how it feels."
  },
  {
    name: "Adiva Ferdin Chania",
    role: "Business and Promotion",
    bio: "Crafting marketing strategies, community engagement, and unforgettable promotions at Kala Temu.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
    quote: "Every promotion tells a story of passion and connection."
  },
  {
    name: "Raffa Shaquille Alfarizqi",
    role: "Ketua Project",
    bio: "Leading the overall project vision, coordination, and successful execution of KALA TEMU Smart Cafe.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    quote: "Great leadership is bringing brilliant minds together to create something extraordinary."
  },
  {
    name: "Danadipa Natasatria",
    role: "Engineer",
    bio: "Designing the seamless IoT smart tables, automated ordering kiosks, and kitchen robotics.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
    quote: "Smart systems make everyday dining effortless and magical."
  },
  {
    name: "Andi Alena Sophia",
    role: "Architect",
    bio: "Shaping the interior harmony, cozy layout, and aesthetic flow of the smart cafe environment.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80",
    quote: "Architecture is about creating spaces where people love to gather."
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Beverages
  {
    id: 'bev-1',
    name: 'Cappuccino',
    category: 'beverage',
    price: 32000,
    description: 'Double shot of artisan espresso with velvety steamed microfoam and delicate latte art.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    calories: '120 kcal',
    tags: ['Best Seller', 'Coffee'],
    options: {
      iceLevel: ['Normal Hot', 'Less Ice', 'Normal Ice', 'Extra Ice'],
      sugarLevel: ['Normal Sugar', 'Less Sugar', 'No Sugar', 'Extra Sugar']
    }
  },
  {
    id: 'bev-2',
    name: 'Matcha',
    category: 'beverage',
    price: 35000,
    description: 'Ceremonial grade Uji green tea whisked with fresh creamy milk and subtle sweetness.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&auto=format&fit=crop&q=80',
    rating: 4.8,
    calories: '150 kcal',
    tags: ['Favorite', 'Green Tea'],
    options: {
      iceLevel: ['Less Ice', 'Normal Ice', 'Extra Ice', 'Hot Matcha'],
      sugarLevel: ['Normal Sugar', 'Less Sugar', 'No Sugar']
    }
  },
  {
    id: 'bev-3',
    name: 'Thai Tea',
    category: 'beverage',
    price: 28000,
    description: 'Authentic Thai red tea infused with aromatic spices, condensed milk, and fresh cream.',
    image: '/assets/aistudio/ice_thai_tea_94582b14.jfif',
    rating: 4.7,
    calories: '180 kcal',
    tags: ['Sweet', 'Refreshing'],
    options: {
      iceLevel: ['Less Ice', 'Normal Ice', 'Extra Ice'],
      sugarLevel: ['Normal Sugar', 'Less Sugar', 'No Sugar']
    }
  },
  {
    id: 'bev-4',
    name: 'Ice Tea',
    category: 'beverage',
    price: 18000,
    description: 'Crisp jasmine infused iced tea served ice-cold with a slice of fresh lemon.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop&q=80',
    rating: 4.6,
    calories: '60 kcal',
    tags: ['Classic', 'Refreshing'],
    options: {
      iceLevel: ['Less Ice', 'Normal Ice', 'Extra Ice'],
      sugarLevel: ['Normal Sugar', 'Less Sugar', 'No Sugar']
    }
  },
  {
    id: 'bev-5',
    name: 'Milo Dinosaur',
    category: 'beverage',
    price: 26000,
    description: 'Rich iced Milo beverage topped with a generous mountain of undissolved Milo powder.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    calories: '220 kcal',
    tags: ['Sweet', 'Favorite'],
    options: {
      iceLevel: ['Less Ice', 'Normal Ice', 'Extra Ice'],
      sugarLevel: ['Normal Sugar', 'Less Sugar', 'No Sugar']
    }
  },
  {
    id: 'bev-6',
    name: 'Mineral Water (Air Putih)',
    category: 'beverage',
    price: 5000,
    description: 'Pure refreshing bottled mineral water served chilled or at room temperature.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&auto=format&fit=crop&q=80',
    rating: 5.0,
    calories: '0 kcal',
    tags: ['Fresh', 'Classic'],
    options: {
      iceLevel: ['Chilled (Cold)', 'Normal (Room Temp)']
    }
  },

  // Foods
  {
    id: 'food-1',
    name: 'Nasi Goreng',
    category: 'food',
    price: 35000,
    description: 'Signature wok-tossed fried rice with savory spices, chicken chunks, fried egg, and crackers.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    calories: '550 kcal',
    tags: ['Chef Special', 'Indonesian'],
    options: {
      spicyLevel: ['Level 0 (Not Spicy)', 'Level 1 (Mild)', 'Level 2 (Medium)', 'Level 3 (Extra Spicy)']
    }
  },
  {
    id: 'food-2',
    name: 'Mie Goreng',
    category: 'food',
    price: 38000,
    description: 'Wok-fried golden noodles tossed in special aromatic soy sauce, vegetables, and chicken slices.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80',
    rating: 4.8,
    calories: '520 kcal',
    tags: ['Popular', 'Indonesian'],
    options: {
      spicyLevel: ['Level 0 (Not Spicy)', 'Level 1 (Mild)', 'Level 2 (Medium)', 'Level 3 (Extra Spicy)']
    }
  },
  {
    id: 'food-3',
    name: 'Pizza',
    category: 'food',
    price: 55000,
    description: 'Hand-tossed crust with rich tomato marinara, mozzarella cheese, pepperoni, and fresh basil.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    calories: '700 kcal',
    tags: ['Italian', 'Shareable']
  },
  {
    id: 'food-4',
    name: 'Spaghetti',
    category: 'food',
    price: 45000,
    description: 'Al dente spaghetti tossed in rich creamy carbonara sauce with smoked beef and parmesan.',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&auto=format&fit=crop&q=80',
    rating: 4.8,
    calories: '610 kcal',
    tags: ['Italian', 'Creamy']
  },
  {
    id: 'food-5',
    name: 'Mac and Cheese',
    category: 'food',
    price: 42000,
    description: 'Macaroni elbows smothered in a luxurious blend of cheddar and mozzarella cheeses.',
    image: '/assets/aistudio/MC_aef4c021.jpg',
    rating: 4.7,
    calories: '580 kcal',
    tags: ['Comfort Food', 'Cheesy']
  },

  // Snacks
  {
    id: 'snack-1',
    name: 'Kentang Goreng',
    category: 'snack',
    price: 25000,
    description: 'Golden crispy potato fries sprinkled with savory herbs and served with chili & garlic mayo.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80',
    rating: 4.7,
    calories: '380 kcal',
    tags: ['Crispy', 'Snack']
  },
  {
    id: 'snack-2',
    name: 'Mozzarella Sticks',
    category: 'snack',
    price: 30000,
    description: 'Crispy breaded mozzarella cheese sticks with gooey cheese pull, served with marinara dip.',
    image: '/assets/aistudio/mozzarela_stick_ec443c88.jfif',
    rating: 4.9,
    calories: '440 kcal',
    tags: ['Cheesy', 'Best Seller']
  },
  {
    id: 'snack-3',
    name: 'Dimsum Mentai',
    category: 'snack',
    price: 32000,
    description: 'Steamed chicken & shrimp dimsum smothered in creamy savory mentai sauce with torched smokey aroma.',
    image: '/assets/aistudio/DM_89593d98.jfif',
    rating: 4.9,
    calories: '340 kcal',
    tags: ['Popular', 'Mentai']
  },
  {
    id: 'snack-4',
    name: 'Crombolloni',
    category: 'snack',
    price: 30000,
    description: 'Flaky round croissant pastry filled with rich molten chocolate or smooth vanilla custard.',
    image: '/assets/aistudio/CROM_fd3c558f.jfif',
    rating: 4.8,
    calories: '410 kcal',
    tags: ['Sweet', 'Trending']
  },
  {
    id: 'snack-5',
    name: 'Cimol',
    category: 'snack',
    price: 18000,
    description: 'Chewy tapioca balls fried to golden perfection, seasoned with spicy balado and aromatic powder.',
    image: '/assets/aistudio/CIMOL_b4b43f53.webp',
    rating: 4.6,
    calories: '290 kcal',
    tags: ['Street Food', 'Crispy']
  },
  {
    id: 'snack-6',
    name: 'Bitterballen',
    category: 'snack',
    price: 28000,
    description: 'Dutch-style crispy fried beef & creamy ragout balls served with mustard dip.',
    image: '/assets/aistudio/bitterballen_c8fe6ac5.jfif',
    rating: 4.7,
    calories: '360 kcal',
    tags: ['Savory', 'Snack']
  },
  {
    id: 'snack-7',
    name: 'Nugget',
    category: 'snack',
    price: 22000,
    description: 'Golden crispy chicken nuggets fried to perfection, served with tomato ketchup & chili sauce.',
    image: '/assets/aistudio/nugget_13c81ec0.jfif',
    rating: 4.8,
    calories: '350 kcal',
    tags: ['Crispy', 'Snack']
  },

  // Kids Menu
  {
    id: 'kids-1',
    name: 'Kids Menu',
    category: 'kids',
    price: 38000,
    description: 'Mini chicken burger, smiley french fries, dinosaur chicken nuggets, and mini juice.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
    rating: 5.0,
    calories: '450 kcal',
    tags: ['Kids Favorite', 'Fun Meal']
  },
  {
    id: 'kids-2',
    name: 'Nugget Dinosaur',
    category: 'kids',
    price: 26000,
    description: 'Crunchy dinosaur-shaped chicken nuggets served with golden fries and tomato dipping sauce.',
    image: '/assets/aistudio/nugget_13c81ec0.jfif',
    rating: 4.9,
    calories: '380 kcal',
    tags: ['Kids Favorite', 'Crispy']
  },
  {
    id: 'kids-3',
    name: 'Milo Dinosaur',
    category: 'kids',
    price: 26000,
    description: 'Rich iced Milo beverage topped with a generous mountain of undissolved Milo powder, specially loved by kids.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80',
    rating: 5.0,
    calories: '220 kcal',
    tags: ['Kids Drink', 'Sweet'],
    options: {
      iceLevel: ['Less Ice', 'Normal Ice', 'Extra Ice'],
      sugarLevel: ['Normal Sugar', 'Less Sugar', 'No Sugar']
    }
  },

  // Additional Foods
  {
    id: 'food-6',
    name: 'Kwetiau',
    category: 'food',
    price: 40000,
    description: 'Wok-fried flat rice noodles with savory garlic sauce, eggs, bean sprouts, and chicken slices.',
    image: '/assets/aistudio/kwetiauuu_d1cbf563.jfif',
    rating: 4.8,
    calories: '530 kcal',
    tags: ['Noodles', 'Savory'],
    options: {
      spicyLevel: ['Level 0 (Not Spicy)', 'Level 1 (Mild)', 'Level 2 (Medium)', 'Level 3 (Extra Spicy)']
    }
  },
  {
    id: 'food-7',
    name: 'Nasi Ayam Mentai',
    category: 'food',
    price: 45000,
    description: 'Warm Japanese rice topped with crispy chicken katsu, savory mentai sauce, and nori flakes.',
    image: '/assets/aistudio/nasi_ayam_mentai_34b67a53.jfif',
    rating: 4.9,
    calories: '620 kcal',
    tags: ['Rice Bowl', 'Mentai']
  }
];

export const PROMOS: PromoItem[] = [
  {
    id: 'promo-1',
    title: 'Paket Ngopi Tech',
    discount: 'Hemat 20%',
    code: 'TECHNGROPI',
    validUntil: '30 Nov 2026',
    description: 'Combo Cappuccino + Kentang Goreng dengan potongan harga spesial untuk ngoding dan santai.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'promo-2',
    title: 'Student & Youth Special',
    discount: 'Diskon 25%',
    code: 'KALAMUDAH',
    validUntil: '31 Des 2026',
    description: 'Tunjukkan kartu pelajar/mahasiswa dan nikmati Matcha atau Thai Tea dengan diskon 25% setiap hari kerja.',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'promo-3',
    title: 'Weekend Family Feast',
    discount: 'Gratis Kids Menu',
    code: 'FAMILYTEMU',
    validUntil: 'Every Weekend',
    description: 'Pesan 2 menu makanan utama (Nasi Goreng / Pizza / Spaghetti) dan dapatkan 1 Kids Menu gratis!',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80'
  }
];

export const REPORT_TEXT = {
  english: {
    title: "Report Text: KALA TEMU Smart Cafe",
    subtitle: "A comprehensive descriptive and analytical report on KALA TEMU Smart Cafe",
    generalClassification: "KALA TEMU Smart Cafe is an innovative modern dining and coffee establishment located in the heart of the tech-creative district. Established by visionary founders Princessa Mikayla, Adiva Ferdin, Raffa Shaquille, Danadipa Nata, and Andi Alena, Kala Temu integrates traditional warm Indonesian hospitality with cutting-edge Internet of Things (IoT) technology, robotic assistance, and artisanal culinary arts.",
    description: {
      architectural: "The cafe architecture features a harmonious blend of warm industrial wood aesthetics and futuristic cyber-cyan lighting. It provides 24 smart interactive tables equipped with wireless charging, touch-screen menus, and ambient lighting controls.",
      menu: "Kala Temu offers an exquisite range of beverages and foods. Signature beverages include Cappuccino, Matcha, Thai Tea, and Ice Tea. Culinary selections range from traditional favorites like Nasi Goreng and Mie Goreng to western delights such as Pizza, Spaghetti, Mac and Cheese, Mozzarella Sticks, Kentang Goreng, and a dedicated Kids Menu.",
      technology: "The smart infrastructure features automated robotic baristas for precision coffee extraction, IoT table sensors for real-time order tracking, and QRIS/digital payment simulations that ensure cash-free frictionless transactions."
    },
    conclusion: "In conclusion, KALA TEMU Smart Cafe successfully redefines the modern dining experience. By combining delicious comfort food, artisanal coffee, and futuristic automation, it serves as an exemplary model of smart retail business innovation for the future."
  },
  indonesian: {
    title: "Teks Report: Smart Cafe KALA TEMU",
    subtitle: "Laporan deskriptif dan analitis komprehensif mengenai Smart Cafe KALA TEMU",
    generalClassification: "Smart Cafe KALA TEMU adalah tempat ngumpul dan kuliner modern yang inovatif di pusat distrik kreatif teknologi. Didirikan oleh para visioner muda yaitu Princessa Mikayla Firliansyah, Adiva Ferdin Chania, Raffa Shaquille Alfarizqi, Danadipa Nata Saputra, dan Andi Alena Sophia, Kala Temu memadukan kehangatan keramahan khas Indonesia dengan teknologi Internet of Things (IoT) canggih, bantuan robotik, dan seni kuliner artisanal.",
    description: {
      architectural: "Arsitektur kafe menampilkan perpaduan harmonis antara estetika kayu industrial yang hangat dan pencahayaan cyber-cyan futuristik. Kafe ini menyediakan 24 meja pintar interaktif yang dilengkapi pengisian daya nirkabel, menu layar sentuh, dan kontrol pencahayaan ruangan.",
      menu: "Kala Temu menyajikan beragam pilihan minuman dan makanan lezat. Minuman unggulannya meliputi Cappuccino, Matcha, Thai Tea, dan Ice Tea. Pilihan kulinernya berkisar dari hidangan favorit Nusantara seperti Nasi Goreng dan Mie Goreng hingga sajian barat seperti Pizza, Spaghetti, Mac and Cheese, Mozzarella Sticks, Kentang Goreng, serta Kids Menu khusus anak-anak.",
      technology: "Infrastruktur cerdasnya mencakup barista robotik otomatis untuk ekstraksi kopi yang presisi, sensor meja IoT untuk pemantauan pesanan secara langsung (real-time), serta simulasi pembayaran digital QRIS yang memastikan transaksi tanpa uang tunai yang sangat mulus."
    },
    conclusion: "Kesimpulannya, Smart Cafe KALA TEMU berhasil mendefinisikan ulang pengalaman bersantap modern. Dengan memadukan hidangan lezat, kopi berkualitas, dan otomatisasi futuristik, kafe ini menjadi teladan inovasi bisnis ritel masa depan yang luar biasa."
  }
};
