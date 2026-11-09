export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specifications: string[];
  materials: string[];
  colors: string[];
  colorVariants?: { colorName: string; hex: string; image: string }[];
  isNew?: boolean;
  isPopular?: boolean;
  // Detailed Specs
  warranty?: string;
  weightCapacity?: string;
  seatHeight?: string;
  foamDensity?: string;
  baseMaterial?: string;
  wheelType?: string;
  leadTime?: string;
  threeSixtyImages?: string[];
};

export const products: Product[] = [
  {
    id: "lido-01",
    name: "LIDO Workstation Chair",
    category: "Workstation Chairs",
    price: 14500,
    image: "/images/products/lido-01.jpeg",
    description: "Premium workstation chair featuring an aluminium diecast base and synchro tilt cable control mechanism for single position locking. The nylon back frame with a Korean mesh seat offers maximum breathability and comfort.",
    specifications: [
      "Aluminium Diecast base with nylon castor",
      "Class 4 Gaslift",
      "Synchro tilt cable control mechanism",
      "Fixed PP Arms"
    ],
    materials: ["Aluminium", "Nylon", "Korean Mesh"],
    colors: ["Black", "White"],
    colorVariants: [
      { colorName: "Black", hex: "#1a1a1a", image: "/images/products/lido-01.jpeg" },
      { colorName: "White", hex: "#f5f5f5", image: "/images/products/lido-01.jpeg" } // using same image as placeholder
    ],
    warranty: "3 Years Comprehensive",
    weightCapacity: "120 kg",
    seatHeight: "45cm - 55cm (Adjustable)",
    foamDensity: "50kg/m³ High Resilience PU Foam",
    baseMaterial: "Aluminium Diecast",
    wheelType: "60mm Dual Wheel Nylon Castors",
    leadTime: "3-5 Business Days",
    isPopular: true,
  },
  {
    id: "gravity-01",
    name: "GRAVITY (PP)",
    category: "Workstation Chairs",
    price: 13500,
    image: "/images/products/gravity-01.jpeg",
    description: "A beautifully designed chair with a glass-filled white nylon base and a centre tilt mechanism. Features cantilever armrests with double colour PU pads.",
    specifications: [
      "Glass filled white nylon base with castor",
      "Class 4 Gaslift",
      "Centre tilt Mechanism with single position locking",
      "Cantilever armrest with Double colour PU pad",
      "Glass filled nylon back with auto lumber support"
    ],
    materials: ["Glass filled nylon", "PU"],
    colors: ["White/Blue"],
    isPopular: true,
  },
  {
    id: "smart-01",
    name: "SMART Workstation Chair",
    category: "Workstation Chairs",
    price: 15000,
    image: "/images/products/smart-01.jpeg",
    description: "Built for durability and ease of use, featuring an antibacterial, oil-resistant back and a waterproof auto seat glider.",
    specifications: [
      "Back made of Antibacterial Material (oil resistant, 3 position lock)",
      "Auto seat glider with body movement (LY series fabric, waterproof)",
      "Seat height adjustable by grade 4 gas lift",
      "PU padded fixed armrest",
      "650mm Gray Nylon base with 60mm nylon castors"
    ],
    materials: ["Antibacterial Polymer", "LY series fabric"],
    colors: ["Orange/White", "Grey"],
    isNew: true,
  },
  {
    id: "omega-blk",
    name: "OMEGA Black",
    category: "Workstation Chairs",
    price: 9500,
    image: "/images/products/omega-blk.jpeg",
    description: "Sleek and functional workstation chair with a fabric mesh back and fixed lumbar support.",
    specifications: [
      "650mm nylon base with twin wheel nylon castors",
      "Class 4 gas lift",
      "Fixed PP armrest attached with back",
      "Center tilt mechanism with single position lock",
      "Fix lumber support",
      "Nylon Back with Fabric Mesh back"
    ],
    materials: ["Nylon", "Fabric Mesh"],
    colors: ["Black"],
  },
  {
    id: "omega-wht",
    name: "OMEGA White",
    category: "Workstation Chairs",
    price: 13000,
    image: "/images/products/omega-wht.jpeg",
    description: "A premium white variant of the Omega series, combining elegance with ergonomic comfort.",
    specifications: [
      "650mm nylon base with twin wheel nylon castors",
      "Class 4 gas lift",
      "Fixed PP armrest attached with back",
      "Center tilt mechanism with single position lock",
      "Fix lumber support",
      "Nylon Back with Fabric Mesh back"
    ],
    materials: ["Nylon", "Fabric Mesh"],
    colors: ["White/Grey"],
    isPopular: true,
  },
  {
    id: "winner-blk",
    name: "WINNER Black",
    category: "Workstation Chairs",
    price: 12000,
    image: "/images/products/winner-blk.jpeg",
    description: "Ergonomic chair featuring adjustable lumbar support and cantilever nylon armrests with flipping movement.",
    specifications: [
      "Glass filled nylon backrest with adjustable lumber support",
      "Cantilever nylon armrest with PU pad with flipping movement",
      "Glass filled nylon base with 60mm castor",
      "Class 4 gaslift",
      "Centre tilt mechanism with single position locking"
    ],
    materials: ["Glass filled nylon", "PU"],
    colors: ["Black"],
  },
  {
    id: "winner-grey",
    name: "WINNER Grey",
    category: "Workstation Chairs",
    price: 13500,
    image: "/images/products/winner-grey.jpeg",
    description: "Ergonomic chair in grey, featuring adjustable lumbar support and cantilever nylon armrests.",
    specifications: [
      "Glass filled nylon backrest with adjustable lumber support",
      "Cantilever nylon armrest with PU pad with flipping movement",
      "Glass filled nylon base with 60mm castor",
      "Class 4 gaslift",
      "Centre tilt mechanism with single position locking"
    ],
    materials: ["Glass filled nylon", "PU"],
    colors: ["Grey"],
    isNew: true,
  },
  {
    id: "brick-blue",
    name: "BRICK",
    category: "Workstation Chairs",
    price: 12000,
    image: "/images/products/brick-blue.jpeg",
    description: "Modern workstation chair with a glass-filled nylon base and mesh back with lumbar support.",
    specifications: [
      "Glass filled Nylon base with castor",
      "Class 4 Gaslift",
      "Center tilt Mechanism with single position locking",
      "Fixed nylon armrest attached with back",
      "Glass filled nylon mesh back with Lumber Support"
    ],
    materials: ["Glass filled nylon", "Mesh"],
    colors: ["Blue/Grey"],
  },
  {
    id: "dolphin-01",
    name: "DOLPHIN",
    category: "Workstation Chairs",
    price: 13000,
    image: "/images/products/dolphin-01.jpeg",
    description: "Versatile chair with cantilever armrests featuring a flipping movement and a nylon mesh back.",
    specifications: [
      "Glass filled nylon base with castor",
      "Class 4 Gaslift",
      "Center tilt mechanism with single position locking",
      "Cantilever nylon armrest with PU pad with flipping movement",
      "Nylon mesh back frame with lumber support"
    ],
    materials: ["Glass filled nylon", "PU", "Mesh"],
    colors: ["White/Red"],
  },
  {
    id: "leaf-wht",
    name: "LEAF White",
    category: "Workstation Chairs",
    price: 12500,
    image: "/images/products/leaf-wht.jpeg",
    description: "Sleek chair with padded cushions, flipping movement armrests, and an attractive leaf-inspired design.",
    specifications: [
      "Glass filled Nylon base with castor",
      "Class 4 Gaslift",
      "Center tilt Mechanism with single position locking",
      "Cantilever nylon armrest with padded cushion & flipping Movement",
      "Glass filled nylon mesh back with Lumber Support"
    ],
    materials: ["Glass filled nylon", "Mesh"],
    colors: ["White/Grey"],
  },
  {
    id: "leaf-blk",
    name: "LEAF Black",
    category: "Workstation Chairs",
    price: 10500,
    image: "/images/products/leaf-blk.jpeg",
    description: "Sleek black chair with padded cushions, flipping movement armrests, and an attractive leaf-inspired design.",
    specifications: [
      "Glass filled Nylon base with castor",
      "Class 4 Gaslift",
      "Center tilt Mechanism with single position locking",
      "Cantilever nylon armrest with padded cushion & flipping Movement",
      "Glass filled nylon mesh back with Lumber Support"
    ],
    materials: ["Glass filled nylon", "Mesh"],
    colors: ["Black"],
  },
  {
    id: "pearl-01",
    name: "PEARL",
    category: "Workstation Chairs",
    price: 11500,
    image: "/images/products/pearl-01.jpeg",
    description: "Comfortable and resistant workstation chair with a waterproof fabric seat and a reclining backrest.",
    specifications: [
      "Glass filled nylon back (oil resistant)",
      "Seat of LY series fabric that is waterproof",
      "Seat Height adjustable by Grade 4 gas lift",
      "PU padded fixed armrest",
      "Backrest can be reclined",
      "650mm Gray Nylon base with 60mm nylon castors"
    ],
    materials: ["Glass filled nylon", "LY series fabric"],
    colors: ["Pink/Grey", "White/Grey"],
    isPopular: true,
  },
  {
    id: "sleek-visitor",
    name: "SLEEK VISITOR",
    category: "Visitor Chairs",
    price: 10500,
    image: "/images/products/sleek-visitor.jpeg",
    description: "Premium visitor chair finished in composite leather with chrome finish armrests.",
    specifications: [
      "Finest composite leather on seat & back",
      "Chrome finish armrest with sleeve covers",
      "Round M.S. chrome plated cantilever pipe frame"
    ],
    materials: ["Composite Leather", "Chrome", "M.S."],
    colors: ["Black"],
    isPopular: true,
  },
  {
    id: "orbit-01",
    name: "ORBIT",
    category: "Visitor Chairs",
    price: 3000,
    image: "/images/products/orbit-01.jpeg",
    description: "Robust visitor chair with a heavy gauge mild steel frame.",
    specifications: [
      "Glass filled nylon back along with fabric mesh",
      "P.U. cushion seat with hotpressed plywood",
      "Mild steel powder coated heavy gauge frame"
    ],
    materials: ["Mild steel", "Glass filled nylon", "Fabric Mesh", "Plywood"],
    colors: ["Black"],
  },
  {
    id: "eros-tablet",
    name: "EROS TABLET (IMP)",
    category: "Educational Chairs",
    price: 10000,
    image: "/images/products/eros-tablet.jpeg",
    description: "Educational chair featuring a foldable PP writing tablet and push back mesh fabric.",
    specifications: [
      "Glass filled nylon back with push back & mesh Fabric",
      "Multibend seat plywood with PU cushion & PP seat outer",
      "Foldable PP writing tablet along PP armrest with front back movement",
      "M.S oblong powder coated pipe frame chair with castor"
    ],
    materials: ["Glass filled nylon", "Mesh", "Plywood", "PU", "M.S."],
    colors: ["Black"],
  },
  {
    id: "premium-exec-1",
    name: "Executive Leather Chairman",
    category: "Premium Executive Chairs",
    price: 25000,
    image: "/images/products/premium_exec.png",
    description: "Premium high-back executive leather office chair, rich brown leather, ergonomic design with polished aluminium base.",
    specifications: [
      "Rich genuine leather upholstery",
      "Ergonomic high-back design",
      "Polished aluminium base",
      "Multi-position tilt lock mechanism"
    ],
    materials: ["Leather", "Aluminium"],
    colors: ["Brown", "Black"],
  },
  {
    id: "premium-visitor-1",
    name: "Executive Leather Visitor",
    category: "Premium Visitor Chairs",
    price: 12000,
    image: "/images/products/premium_visitor.png",
    description: "Premium visitor chair, cantilever base in chrome, upholstered in black genuine leather with padded armrests.",
    specifications: [
      "Genuine leather upholstery",
      "Chrome cantilever base",
      "Padded armrests",
      "Modern minimalist design"
    ],
    materials: ["Leather", "Chrome"],
    colors: ["Black"],
  },
  {
    id: "classic-visitor-1",
    name: "Classic Wood Visitor",
    category: "Classic Visitor Chairs",
    price: 8000,
    image: "/images/products/classic_visitor.png",
    description: "Classic visitor chair with wooden legs and armrests in a dark mahogany finish.",
    specifications: [
      "Premium fabric upholstery",
      "Solid wood frame and armrests",
      "Dark mahogany finish",
      "Traditional design"
    ],
    materials: ["Wood", "Fabric"],
    colors: ["Burgundy", "Blue"],
  },
  {
    id: "cafeteria-1",
    name: "Vibrant Cafeteria Chair",
    category: "Cafeteria Chairs",
    price: 2500,
    image: "/images/products/cafeteria.png",
    description: "Modern cafeteria chair, stackable, vibrant molded plastic shell with clean and simple design.",
    specifications: [
      "Molded plastic shell",
      "Stackable design",
      "Light wood/metal legs",
      "Easy to clean surface"
    ],
    materials: ["Plastic", "Wood/Metal"],
    colors: ["Yellow", "Red", "White"],
  },
  {
    id: "bar-stool-1",
    name: "Contemporary Bar Stool",
    category: "Bar Stools",
    price: 4500,
    image: "/images/products/bar_stool.png",
    description: "Contemporary bar stool, adjustable height, chrome pedestal base with footrest.",
    specifications: [
      "Adjustable height gas lift",
      "Chrome pedestal base with footrest",
      "Curved wooden seat",
      "Faux leather pad"
    ],
    materials: ["Wood", "Chrome", "PU Leather"],
    colors: ["Black/Wood"],
  },
  {
    id: "training-chair-1",
    name: "Mesh Training Chair",
    category: "Training Chairs",
    price: 5500,
    image: "/images/products/training_chair.png",
    description: "Training room chair with attached foldable writing tablet arm and black mesh back.",
    specifications: [
      "Foldable writing tablet arm",
      "Breathable mesh back",
      "Upholstered fabric seat",
      "Rolling casters for mobility"
    ],
    materials: ["Mesh", "Fabric", "Nylon"],
    colors: ["Black"],
  },
  {
    id: "dining-chair-1",
    name: "Elegant Dining Chair",
    category: "Dining Chairs",
    price: 6000,
    image: "/images/products/dining_chair.jpeg",
    description: "Elegant dining chair, upholstered in premium fabric with tufted backrest.",
    specifications: [
      "Premium fabric upholstery",
      "Tufted backrest design",
      "Solid wood legs",
      "Comfortable cushioning"
    ],
    materials: ["Fabric", "Wood"],
    colors: ["Grey", "Beige"],
  },
  {
    id: "high-counter-1",
    name: "Industrial Counter Chair",
    category: "High Counter Chairs",
    price: 7000,
    image: "/images/products/high_counter.jpeg",
    description: "High counter chair with a sleek industrial design and matte black metal frame.",
    specifications: [
      "Matte black metal frame",
      "Solid wood seat",
      "Industrial design",
      "Built-in footrest"
    ],
    materials: ["Metal", "Wood"],
    colors: ["Black/Wood"],
  },
  {
    id: "lounge-chair-1",
    name: "Modern Lounge Chair",
    category: "Lounge Chairs",
    price: 18000,
    image: "/images/products/lounge_chair.jpeg",
    description: "Modern office lounge chair, wide and comfortable, perfect for reception areas.",
    specifications: [
      "Wide and comfortable seating",
      "Premium fabric upholstery",
      "Brushed steel swivel base",
      "Modern aesthetic"
    ],
    materials: ["Fabric", "Steel"],
    colors: ["Mustard Yellow", "Grey"],
  },
  {
    id: "metal-chair-1",
    name: "Industrial Metal Chair",
    category: "Metal Chairs",
    price: 3500,
    image: "/images/products/metal_chair.jpeg",
    description: "Industrial metal chair, fully constructed of galvanized steel, stackable.",
    specifications: [
      "Galvanized steel construction",
      "Stackable design",
      "Vintage industrial style",
      "Durable powder coat finish"
    ],
    materials: ["Steel"],
    colors: ["Silver", "Black"],
  },
  {
    id: "school-desk-1",
    name: "Student Desk Combo",
    category: "School Desks",
    price: 4000,
    image: "/images/products/school_desk.jpeg",
    description: "School desk and chair combo, attached unit with durable laminate top.",
    specifications: [
      "Attached desk and chair unit",
      "Durable laminate top with pencil groove",
      "Tubular steel frame",
      "Ergonomic student seating"
    ],
    materials: ["Laminate", "Steel", "Plastic"],
    colors: ["Blue/Oak"],
  },
  {
    id: "banquet-chair-1",
    name: "Premium Banquet Chair",
    category: "Banquet Chairs",
    price: 3000,
    image: "/images/products/banquet_chair.jpeg",
    description: "Banquet chair, stackable, aluminium frame with patterned fabric upholstery.",
    specifications: [
      "Stackable design",
      "Lightweight aluminium frame",
      "Thick seat cushion",
      "Durable patterned fabric"
    ],
    materials: ["Aluminium", "Fabric"],
    colors: ["Red/Gold"],
  }
];

export const categories = [
  "Premium Executive Chairs",
  "Workstation Chairs",
  "Premium Visitor Chairs",
  "Classic Visitor Chairs",
  "Visitor Chairs",
  "Cafeteria Chairs",
  "Bar Stools",
  "Training Chairs",
  "Dining Chairs",
  "High Counter Chairs",
  "Lounge Chairs",
  "Metal Chairs",
  "School Desks",
  "Banquet Chairs",
  "Educational Chairs"
];
