// ─── Product Catalogue ────────────────────────────────────────────────────────
// Each product now has:
//  images[]     — array of image paths for the gallery (reuse the single image for demo)
//  variants     — optional color/size options
//  deliveryDays — estimated delivery window
//  addedDate    — ISO string used for "sort by newest"

export const CATEGORIES = ['Timepieces', 'Leather', 'Ceramics', 'Scent'];

export const products = [
  {
    id: 'p1', name: 'Minimalist Wristwatch', price: 185, salePrice: 148,
    image: '/images/p1.png',
    images: ['/images/p1.png', '/images/p2.png', '/images/p3.png'],
    category: 'Timepieces', isBestSeller: true,
    addedDate: '2025-01-15',
    deliveryDays: '3–5',
    description: 'A study in restraint. Matte black dial, brushed steel case, and a clean face that lets time speak for itself.',
    rating: 4.8, reviewCount: 124, stock: 8,
    variants: {
      color: ['Matte Black', 'Brushed Silver', 'Rose Gold'],
    },
    features: ['Quartz movement', 'Interchangeable straps', 'Water resistant 30m', 'Brushed steel case'],
    reviews: [
      { id: 'r1', name: 'James O.', date: 'March 2025', rating: 5, comment: 'Stunning watch. Wears beautifully and gets compliments daily. The matte finish is even nicer in person.', verified: true },
      { id: 'r2', name: 'Amara K.', date: 'February 2025', rating: 5, comment: 'Bought this as a gift and the recipient absolutely loves it. Packaging was impeccable.', verified: true },
      { id: 'r3', name: 'Tunde B.', date: 'January 2025', rating: 4, comment: 'Very sleek. Strap took a day to break in but now fits perfectly.', verified: false },
    ],
  },
  {
    id: 'p2', name: 'Monolith Desk Clock', price: 120,
    image: '/images/p2.png',
    images: ['/images/p2.png', '/images/p1.png', '/images/p3.png'],
    category: 'Timepieces', isNew: true,
    addedDate: '2025-04-01',
    deliveryDays: '2–4',
    description: 'Machined from a single block of aluminum. Its weight gives it presence, its silent sweeping hand gives you peace.',
    rating: 4.6, reviewCount: 87, stock: 14,
    variants: {
      color: ['Brushed Aluminum', 'Matte Black'],
    },
    features: ['Silent sweep movement', 'Solid aluminum body', 'Non-slip base', 'Battery included'],
    reviews: [
      { id: 'r4', name: 'Chioma E.', date: 'April 2025', rating: 5, comment: 'This sits on my desk and I stare at it more than my monitor. Absolutely gorgeous.', verified: true },
      { id: 'r5', name: 'Femi A.', date: 'March 2025', rating: 4, comment: 'Solid build. The sweep is genuinely silent — tested it in a quiet room.', verified: true },
    ],
  },
  {
    id: 'p3', name: 'Eclipse Wall Clock', price: 150,
    image: '/images/p3.png',
    images: ['/images/p3.png', '/images/p2.png', '/images/p1.png'],
    category: 'Timepieces',
    addedDate: '2025-02-20',
    deliveryDays: '3–5',
    description: 'Playing with light and shadow, the Eclipse creates a subtle halo effect on your wall.',
    rating: 4.5, reviewCount: 63, stock: 5,
    features: ['40cm diameter', 'Silent mechanism', 'Includes wall fixings', 'Matte finish'],
    reviews: [
      { id: 'r6', name: 'Ngozi I.', date: 'March 2025', rating: 5, comment: 'The halo effect is real and beautiful at sunset. My living room looks like a design magazine.', verified: true },
      { id: 'r7', name: 'Seun W.', date: 'February 2025', rating: 4, comment: 'Great clock. Installation was straightforward.', verified: false },
    ],
  },
  {
    id: 'p4', name: 'Slim Card Wallet', price: 65,
    image: '/images/p4.png',
    images: ['/images/p4.png', '/images/p6.png', '/images/p5.png'],
    category: 'Leather', isBestSeller: true,
    addedDate: '2024-12-10',
    deliveryDays: '2–3',
    description: 'Full-grain vegetable-tanned leather that ages beautifully. Holds 4-6 cards and folded bills without bulk.',
    rating: 4.9, reviewCount: 210, stock: 32,
    variants: {
      color: ['Natural Tan', 'Dark Brown', 'Black'],
    },
    features: ['Full-grain leather', 'Holds 4-6 cards', 'RFID blocking', 'Gets better with age'],
    reviews: [
      { id: 'r8', name: 'Emeka D.', date: 'April 2025', rating: 5, comment: 'Three months in and the leather has developed the most beautiful patina. Worth every kobo.', verified: true },
      { id: 'r9', name: 'Blessing O.', date: 'March 2025', rating: 5, comment: 'Slim, functional, and premium. Replaced my bulky old wallet and never looked back.', verified: true },
      { id: 'r10', name: 'Kola A.', date: 'January 2025', rating: 5, comment: 'Perfect gift. My husband uses it every day.', verified: true },
    ],
  },
  {
    id: 'p5', name: 'Overnight Tote', price: 240, salePrice: 192,
    image: '/images/p5.png',
    images: ['/images/p5.png', '/images/p4.png', '/images/p6.png'],
    category: 'Leather',
    addedDate: '2025-03-05',
    deliveryDays: '4–6',
    description: 'Structured yet supple. Large enough for a weekend away, refined enough for the daily commute.',
    rating: 4.7, reviewCount: 49, stock: 3,
    variants: {
      color: ['Cognac', 'Dark Brown'],
    },
    features: ['Full-grain leather', 'Solid brass hardware', 'Interior laptop sleeve', 'Detachable strap'],
    reviews: [
      { id: 'r11', name: 'Adaeze M.', date: 'April 2025', rating: 5, comment: 'Took this on a 3-day trip. Fits everything, looks incredible, draws stares at the airport.', verified: true },
      { id: 'r12', name: 'Ola F.', date: 'February 2025', rating: 4, comment: 'Premium quality. Handles take a while to break in but it is worth it.', verified: true },
    ],
  },
  {
    id: 'p6', name: 'Valet Tray', price: 85,
    image: '/images/p6.png',
    images: ['/images/p6.png', '/images/p4.png', '/images/p5.png'],
    category: 'Leather', isNew: true,
    addedDate: '2025-04-10',
    deliveryDays: '2–3',
    description: 'A dedicated drop zone for your daily carry. Molded leather corners keep your keys, coins, and phone contained.',
    rating: 4.7, reviewCount: 98, stock: 20,
    variants: {
      color: ['Natural Tan', 'Dark Brown'],
    },
    features: ['Molded vegetable leather', '24cm x 16cm', 'Suede interior lining', 'Non-slip base'],
    reviews: [
      { id: 'r13', name: 'Yemi L.', date: 'March 2025', rating: 5, comment: 'My bedside table looks like an editorial shoot now. Highly recommend.', verified: true },
      { id: 'r14', name: 'Chidi O.', date: 'March 2025', rating: 5, comment: 'Great quality. The suede interior keeps everything in place without scratching.', verified: false },
    ],
  },
  {
    id: 'p7', name: 'Brutalist Vase', price: 95,
    image: '/images/p7.png',
    images: ['/images/p7.png', '/images/p8.png', '/images/p9.png'],
    category: 'Ceramics',
    addedDate: '2025-01-30',
    deliveryDays: '3–5',
    description: 'Unglazed stoneware with a raw, textured finish. Stands strong empty or holding a single dry branch.',
    rating: 4.4, reviewCount: 55, stock: 9,
    features: ['Unglazed stoneware', 'Handmade - each unique', '28cm tall', 'Waterproof interior'],
    reviews: [
      { id: 'r15', name: 'Ifeoma S.', date: 'April 2025', rating: 4, comment: 'Mine came out slightly different from the photo but that is the handmade charm. Love it.', verified: true },
      { id: 'r16', name: 'Bayo R.', date: 'February 2025', rating: 5, comment: 'A sculptural piece. I keep it empty on my shelf and it still commands attention.', verified: true },
    ],
  },
  {
    id: 'p8', name: 'Matte Espresso Cup', price: 35,
    image: '/images/p8.png',
    images: ['/images/p8.png', '/images/p7.png', '/images/p9.png'],
    category: 'Ceramics', isBestSeller: true,
    addedDate: '2024-11-20',
    deliveryDays: '2–3',
    description: 'Ergonomically designed to hold heat while protecting your hands. The soft-touch matte glaze feels organic.',
    rating: 4.9, reviewCount: 312, stock: 50,
    variants: {
      color: ['Slate Grey', 'Warm White', 'Terracotta'],
    },
    features: ['90ml capacity', 'Dishwasher safe', 'Double-walled ceramic', 'Matte glaze finish'],
    reviews: [
      { id: 'r17', name: 'Tola P.', date: 'April 2025', rating: 5, comment: 'My morning ritual improved noticeably. The cup stays warm long enough. Perfect size.', verified: true },
      { id: 'r18', name: 'Funmi A.', date: 'March 2025', rating: 5, comment: 'Bought 4 of these. Guests always ask where they are from.', verified: true },
      { id: 'r19', name: 'Dele J.', date: 'January 2025', rating: 5, comment: 'The matte texture is gorgeous and feels premium to hold. 10/10.', verified: true },
    ],
  },
  {
    id: 'p9', name: 'Pour-over Carafe', price: 60,
    image: '/images/p9.png',
    images: ['/images/p9.png', '/images/p8.png', '/images/p7.png'],
    category: 'Ceramics', isNew: true,
    addedDate: '2025-04-20',
    deliveryDays: '2–3',
    description: 'Precision spout for a perfect pour. Thermal mass keeps your brew hot long after it drips through.',
    rating: 4.6, reviewCount: 77, stock: 11,
    features: ['600ml capacity', 'Precision pour spout', 'Heat-retaining ceramic', 'Fits standard filters'],
    reviews: [
      { id: 'r20', name: 'Nkem C.', date: 'April 2025', rating: 5, comment: 'A proper upgrade to my coffee setup. The pour is controlled and the carafe is a beauty.', verified: true },
      { id: 'r21', name: 'Sola T.', date: 'March 2025', rating: 4, comment: 'Great carafe. Keeps coffee hot for about 45 minutes which is more than enough.', verified: false },
    ],
  },
];

// ─── Order history data (mock — used by profile page) ─────────────────────────
export const mockOrders = [
  {
    id: 'AURA-X7K2MN', date: 'April 28, 2025', total: 333,
    status: 'Delivered',
    items: [
      { name: 'Minimalist Wristwatch', qty: 1, price: 148 },
      { name: 'Slim Card Wallet',      qty: 1, price: 65  },
      { name: 'Matte Espresso Cup',    qty: 3, price: 35  },
    ],
  },
  {
    id: 'AURA-P3R9TQ', date: 'March 14, 2025', total: 192,
    status: 'Delivered',
    items: [
      { name: 'Overnight Tote', qty: 1, price: 192 },
    ],
  },
  {
    id: 'AURA-B5W1CZ', date: 'February 2, 2025', total: 95,
    status: 'Delivered',
    items: [
      { name: 'Brutalist Vase', qty: 1, price: 95 },
    ],
  },
];
