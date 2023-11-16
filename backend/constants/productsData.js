const products = [
    {
        id:"kitchen_1",
        url: 'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/jw0AAOSwfHNghfzh/$_57.JPG?set_id=8800005007',
        detailUrl: 'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/jw0AAOSwfHNghfzh/$_57.JPG?set_id=8800005007',
        title: {
            shortTitle: 'Electric kettle',
            longTitle: 'Electric kettle KT-6147-2'
        },
        price: {
            mrp: 15000,
            cost: 12000,
            discount: '15%'
        },
        description: 'The powerful and roomy Kitfort KT-6147 kettle is perfect for warm meetings with family and friends. The kettle body is made of stainless steel. The lid is made of stainless steel with a combination of plastic, and the stand is made of plastic.',
        discount: 'Extra 15% Off',
        tagline: 'Deal of the day',
        category: 'Kitchen'
    },
    {
        id:"kitchen_2",
        url: 'https://frankfurt.apollo.olxcdn.com/v1/files/1wx9c88ao33h-KZ/image;s=1087x1087',
        detailUrl: 'https://frankfurt.apollo.olxcdn.com/v1/files/1wx9c88ao33h-KZ/image;s=1087x1087',
        title: {
            shortTitle: 'Thermomix',
            longTitle: 'Thermomix TM6'
        },
        price: {
            mrp: 500000,
            cost: 475000,
            discount: '5%'
        },
        description: 'Moulinex invents and improves its products to meet your daily needs. Our equipment will be your assistant in any situation. Moulinex products are designed not only to simplify, but also to beautify your daily life. Thanks to the constant updating of our products, household chores become more pleasant, harmonious and fun.',
        discount: 'Extra 5% Off',
        tagline: 'Deal of the day',
        category: 'Kitchen'
    },
    {
        id:"gadjet_1",
        url: 'https://foxmag.biz/image/cache/catalog/mobile_link/smartphone/img/6547231-0-1200x1200.jpg',
        detailUrl: 'https://foxmag.biz/image/cache/catalog/mobile_link/smartphone/img/6547231-0-1200x1200.jpg',
        title: {
            shortTitle: 'Smartphone',
            longTitle: 'Xiaomi Redmi Note 10 Pro'
        },
        price: {
            mrp: 750000,
            cost: 637500,
            discount: '15%'
        },
        description: 'The worlds leading brand Xiaomi was founded in 2010 and is famous for its innovative products and outstanding technologies for everyday life. Since its foundation, Xiaomi has been striving to ensure the availability of advanced technologies for all users, making their lives more comfortable and convenient.',
        discount: 'Extra 15% Off',
        tagline: 'Deal of the day',
        category: 'Gadjet'
    },
    {
        id:"gadjet_2",
        url: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_1199_3.jpg',
        detailUrl: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_1199_3.jpg',
        title: {
            shortTitle: 'Laptop',
            longTitle: 'Acer Extensa EX2519-C9HZ (NX.EFAER.075)'
        },
        price: {
            mrp: 500000,
            cost: 475000,
            discount: '5%'
        },
        description: 'High-performance and energy-efficient DDR4 memory with a capacity of up to 16 GB allows you to quickly open and edit large tables, presentations and video files.',
        discount: 'Extra 5% Off',
        tagline: 'Deal of the day',
        category: 'Gadjet'
    },
    {
        id:"sport_tech_1",
        url: 'https://www.fitkituk.com/downloads/1594130792IntegritySeries-Treadmill-SimpleBase-SE3HD-ArcticSilver-Standard.jpg',
        detailUrl: 'https://www.fitkituk.com/downloads/1594130792IntegritySeries-Treadmill-SimpleBase-SE3HD-ArcticSilver-Standard.jpg',
        title: {
            shortTitle: 'Treadmill',
            longTitle: 'Integrity Series Treadmill with Discover SE3 HD'
        },
        price: {
            mrp: 845000,
            cost: 676000,
            discount: '20%'
        },
        description: 'he Integrity Series Treadmill by Life Fitness integrates the most popular workouts into a sleek and contemporary industrial design with high-performing durability and an intuitive console. This modern treadmill is used by thousands of world-class facilities all over the globe.',
        discount: 'Extra 20% Off',
        tagline: 'Deal of the day',
        category: 'Sport tech'
    },
    {
        id:"sport_tech_2",
        url: 'https://sportishka.com/uploads/posts/2022-11/1667492023_39-sportishka-com-p-ganteli-dlya-detei-krasivo-45.jpg',
        detailUrl: 'https://sportishka.com/uploads/posts/2022-11/1667492023_39-sportishka-com-p-ganteli-dlya-detei-krasivo-45.jpg',
        title: {
            shortTitle: 'Dumbbell',
            longTitle: 'DKN Adjustable Dumbbells'
        },
        price: {
            mrp: 50000,
            cost: 47500,
            discount: '5%'
        },
        description: 'DKN Adjustable Dumbbells',
        discount: 'Extra 5% Off',
        tagline: 'Deal of the day',
        category: 'Sport tech'
    },
    {
        id:"beauty_1",
        url: 'https://cdn1.ozone.ru/s3/multimedia-d/6384272437.jpg',
        detailUrl: 'https://cdn1.ozone.ru/s3/multimedia-d/6384272437.jpg',
        title: {
            shortTitle: 'Hair dryer',
            longTitle: 'Xiaomi Compact Hair Dryer H101 White Hair Dryer'
        },
        price: {
            mrp: 25000,
            cost: 23750,
            discount: '5%'
        },
        description: 'Xiaomi Compact Hair Dryer H101 White Hair Dryer Specifications: Rated voltage: 220-240V~ Rated frequency: 50-60Hz Rated power: 1600W Size: 160*70*212 mm (including air nozzle)',
        discount: 'Extra 5% Off',
        tagline: 'Deal of the day',
        category: 'Beauty'
    },
    {
        id:"beauty_2",
        url: 'https://api.airba.kz/f3/api/v1/f3-airba-marketplace-prod/589e4020-4495-4e8a-a2dc-79c429f161b9',
        detailUrl: 'https://api.airba.kz/f3/api/v1/f3-airba-marketplace-prod/589e4020-4495-4e8a-a2dc-79c429f161b9',
        title: {
            shortTitle: 'Electric shaver',
            longTitle: 'Braun Series 3 300BT electric Shaver with precise trimmer attachment and 5 combs, black'
        },
        price: {
            mrp: 40000,
            cost: 36000,
            discount: '10%'
        },
        description: '3-in-1. Use Braun Series 3 Shaver&Style for shaving, trimming and contouring. The device has three pressure-sensitive shaving elements for shaving efficiency and skin comfort. The kit also includes a trimmer attachment and 5 combs for beard care and 1-7 mm bristles.',
        discount: 'Extra 10% Off',
        tagline: 'Deal of the day',
        category: 'Beauty'
    },
    {
        id:"office_1",
        url: 'https://itmag.kz/upload/iblock/59/93/product_image_76593_1203610.jpg',
        detailUrl: 'https://itmag.kz/upload/iblock/59/93/product_image_76593_1203610.jpg',
        title: {
            shortTitle: 'Printer',
            longTitle: 'Canon PIXMA G1416 Printer (2314C037)'
        },
        price: {
            mrp: 145000,
            cost: 130500,
            discount: '10%'
        },
        description: 'Canon/PIXMA G1416/A4 printer/8.8 ppm/4800x1200 dpi',
        discount: 'Extra 10% Off',
        tagline: 'Deal of the day',
        category: 'Office'
    },
    {
        id:"office_2",
        url: 'https://s3-ap-southeast-2.amazonaws.com/images.imagescience.com.au/_201904_imager-transforms/s3images/Products/Epson-Scanners/26727/Epson-Perfection-V600-Photo-Scanner1_8a39ff8a6b9c4355b296f93fc26068cc.jpg',
        detailUrl: 'https://s3-ap-southeast-2.amazonaws.com/images.imagescience.com.au/_201904_imager-transforms/s3images/Products/Epson-Scanners/26727/Epson-Perfection-V600-Photo-Scanner1_8a39ff8a6b9c4355b296f93fc26068cc.jpg',
        title: {
            shortTitle: 'Scanner',
            longTitle: 'Fujitsu FI-7280 Workgroup Scanner'
        },
        price: {
            mrp: 85000,
            cost: 80750,
            discount: '5%'
        },
        description: 'The Fujitsu FI-7280 is a high quality workgroup scanner that scans at 80 ppm. The flatbed design of the FI7280 allows for the scanning of many types of documents including magazines, photographic material and any bound pages. The 80-sheet automatic document feeder on the Fuji FI 7280 will save you lots of time.',
        discount: 'Extra 5% Off',
        tagline: 'Deal of the day',
        category: 'Office'
    }
];

module.exports = products;