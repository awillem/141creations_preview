const path = 'img/Product Images/';

let products = [
  {
    id: "100-00001",

    type: "Pen",
    pen_type: "Bolt Action",
    kitType: "Salute the Troops",
    kitColor: "Antique Brass",
    material: "Inlay",
    material_info: "Army",
    price: "$65.00",
    available: false,
    created: "7/28/19",
    images: [
      `${path}100-00001-01.jpg`,
      `${path}100-00001-01.jpg`,
      `${path}100-00001-01.jpg`
    ],

  },

  {
    id: "100-00002",
    type: "Pen",
    pen_type: "Rollerball",
    kitType: "Faith, Hope, and Love",
    kitColor: "Antique Pewter",
    material: "Wood",
    material_info: "Authentic Olivewood",

    price: "$45.00",
    available: false,
    created: "7/28/19",
    images: [
      `${path}100-00002-01.jpg`,
      `${path}100-00002-02.jpg`,
      `${path}100-00002-03.jpeg`

    ],

  },

  {
    id: "100-00003",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Nautical",
    kitColor: "Antique Pewter",
    material: "Acrylic",
    material_info: "Blue",
    price: "$35.00",
    available: false,
    created: "7/28/19",
    images: [
      `${path}100-00003-01.jpeg`,
      `${path}100-00003-02.jpeg`,
      `${path}100-00003-03.jpeg`
    ],

  },

  {
    id: "300-00001",
    type: "Letter opener",
    kitType: "Majestic",
    kitColor: "Black and Rhodium",
    material: "Wood",
    material_info: "Wood with COA",
    price: "$35.00",
    available: false,
    created: "7/28/19",
    images: [
      `${path}300-00001-01.jpeg`,
      `${path}300-00001-02.jpeg`,
      `${path}300-00001-03.jpeg`,
      `${path}300-00001-04.jpeg`,
      `${path}300-00001-05.jpeg`
    ],

  },

  {
    id: "100-00004",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Trimline",
    kitColor: "GunMetal",
    material: "Acrylic",
    material_info: "Brimstone",
    price: "$25.00",
    available: true,
    created: "8/8/19",
    images: [
      `${path}100-00004-01.jpg`,
      `${path}100-00004-02.jpg`,
      `${path}100-00004-01.jpg`,
      `${path}100-00004-02.jpg`
    ],

  },

  {
    id: "100-00005",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Trimline",
    kitColor: "Gunmetal",
    material: "Acrylic",
    material_info: "Cat's Eye",
    price: "$25.00",
    available: false,
    created: "8/8/19",
    images: [
      `${path}100-00005-01.jpg`,
      `${path}100-00005-02.jpg`,
      `${path}100-00005-03.jpeg`
    ],

  },

  {
    id: "200-00001",
    type: "Mechanical Pencil",
    pen_type: "Pencil",
    kitType: "Vertex",
    kitColor: "Gunmetal",
    material: "Acrylic",
    material_info: "Cocobolo",
    price: "$30.00",
    available: false,
    created: "8/8/19",
    images: [
      `${path}200-00001-01.jpg`,
      `${path}200-00001-02.jpg`,
      `${path}200-00001-03.jpeg`
    ],

  },

  {
    id: "100-00007",
    type: "Pen",
    pen_type: "Click Pen",
    kitType: "Vertex",
    kitColor: "Gunmetal",
    material: "Acrylic",
    material_info: "Cocobolo",
    price: "$30.00",
    available: false,
    created: "8/8/19",
    images: [
      `${path}100-00007-01.jpg`,
      `${path}100-00007-02.jpg`,
      `${path}100-00007-01.jpg`,
      `${path}100-00007-02.jpg`,
    ],

  },

  {
    id: "100-00008",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Nautical",
    kitColor: "Antique Pewter",
    material: "Inlay",
    material_info: "Ship",
    price: "$65.00",
    available: false,
    created: "8/8/19",
    images: [
      `${path}100-00008-01.jpg`,
      `${path}100-00008-02.jpg`,
      `${path}100-00008-03.jpg`,
      `${path}100-00008-04.jpg`,
    ],

  },

  {
    id: "100-00009",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Aromatherapy",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Lylac Water",

    price: "$35.00",
    available: false,
    created: "8/8/19",
    images: [
      `${path}100-00009-01.jpg`,
      `${path}100-00009-02.jpeg`,
      `${path}100-00009-01.jpg`,
      `${path}100-00009-02.jpeg`,
    ],

  },

  {
    id: "100-00010",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Trimline",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Area 51",

    price: "$25.00",
    available: false,
    created: "8/9/19",
    images: [
      `${path}100-00010-01.jpg`,
      `${path}100-00010-02.jpg`,
      `${path}100-00010-01.jpg`,
      `${path}100-00010-02.jpg`,
    ],

  },

  {
    id: "100-00006",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Trimline",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Sapphire Blue",

    price: "$25.00",
    available: true,
    created: "8/9/19",
    images: [
      `${path}100-00006-01.jpg`,
      `${path}100-00006-02.jpg`,
      `${path}100-00006-01.jpg`,
      `${path}100-00006-02.jpg`,
    ],

  },


  {
    id: "100-00011",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Aromatherapy",
    kitColor: "Satin Chrome",
    material: "Acrylic",
    material_info: "Blue Eyes",
    price: "$35.00",
    available: false,
    created: "10/27/19",
    images: [
      `${path}100-00011-01.jpg`,
      `${path}100-00011-02.jpg`,
      `${path}100-00011-03.jpg`,

    ],

  },
  {
    id: "100-00012",
    type: "Pen",
    pen_type: "Click Pen",
    kitType: "Bolt Action",
    kitColor: "Gunmetal",
    material: "Wood",
    material_info: "Curly Koa",
    price: "$30.00",
    available: false,
    created: "10/27/19",
    images: [
      `${path}100-00012-01.jpg`,
      `${path}100-00012-02.jpg`,
      `${path}100-00012-03.jpg`,

    ],

  },
  {
    id: "100-00013",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Gatsby",
    kitColor: "Chrome and Gun Metal",
    material: "Acrylic",
    material_info: "Purple Amethyst",
    price: "$30.00",
    available: false,
    created: "10/27/19",
    images: [
      `${path}100-00013-01.jpg`,
      `${path}100-00013-02.jpg`,
      `${path}100-00013-03.jpg`,

    ],

  },
  {
    id: "100-00014",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Federalist",
    kitColor: "Antique Pewter",
    material: "Wood",
    material_info: "Brown Mallee Burl",
    price: "$35.00",
    available: false,
    created: "10/27/19",
    images: [
      `${path}100-00014-01.jpg`,
      `${path}100-00014-02.jpg`,
      `${path}100-00014-03.jpg`,
      `${path}100-00014-04.jpg`,
    ],

  },
  {
    id: "100-00015",
    type: "Pen",
    pen_type: "Click",
    kitType: "Clip Bolt Action",
    kitColor: "Aluminum",
    material: "Wood",
    material_info: "Ebony",
    price: "$50.00",
    available: false,
    created: "10/27/19",
    images: [
      `${path}100-00015-01.jpg`,
      `${path}100-00015-02.jpg`,
      `${path}100-00015-03.jpg`,

    ],

  },
  {
    id: "100-00016",
    type: "Pen",
    pen_type: "Click",
    kitType: "Vertex Bolt Action",
    kitColor: "Gun Metal",
    material: "Hybrid",
    material_info: "Cholla Cactus with colored resin",
    price: "$42.00",
    available: false,
    created: "10/27/19",
    images: [
      `${path}100-00016-01.jpg`,
      `${path}100-00016-02.jpg`,
      `${path}100-00016-03.jpg`,

    ],

  },
  {
    id: "100-00017",
    type: "Pen",
    pen_type: "Click",
    kitType: "Bolt Action",
    kitColor: "Gun Metal",
    material: "Wood",
    material_info: "Walnut Crotch",
    price: "$31.00",
    available: false,
    created: "10/27/19",
    images: [
      `${path}100-00017-01.jpg`,
      `${path}100-00017-02.jpg`,
      `${path}100-00017-03.jpg`,

    ],

  },
  {
    id: "100-00018",
    type: "Pen",
    pen_type: "Click",
    kitType: "Vesper Click",
    kitColor: "Chrome",
    material: "Wood",
    material_info: "Olivewood",
    price: "$25.00",
    available: false,
    created: "10/27/19",
    images: [
      `${path}100-00018-01.jpg`,
      `${path}100-00018-02.jpg`,
      `${path}100-00018-03.jpg`,

    ],

  },
  {
    id: "100-00019",
    type: "Pen",
    pen_type: "Click",
    kitType: "Spartan Click",
    kitColor: "Gun Metal",
    material: "Acrylic",
    material_info: "Texas State Flag",
    price: "$32.00",
    available: false,
    created: "10/27/19",
    images: [
      `${path}100-00019-01.jpg`,
      `${path}100-00019-02.jpg`,
      `${path}100-00019-03.jpg`,

    ],

  },
  {
    id: "100-00020",
    type: "Pen",
    pen_type: "Click",
    kitType: "Baseball",
    kitColor: "Antique Brass",
    material: "Wood",
    material_info: "Blue Box Elder Burl",
    price: "$45.00",
    available: false,
    created: "10/27/19",
    images: [
      `${path}100-00020-01.jpg`,
      `${path}100-00020-02.jpg`,
      `${path}100-00020-03.jpg`,

    ],

  },
  {
    id: "100-00021",
    type: "Pen",
    pen_type: "Click",
    kitType: "Baseball",
    kitColor: "Antique Pewter",
    material: "Wood",
    material_info: "County Stadium Seat",
    price: "$55.00",
    available: false,
    created: "10/27/19",
    images: [
      `${path}100-00021-01.jpg`,
      `${path}100-00021-02.jpg`,
      `${path}100-00021-03.jpg`,
      `${path}100-00021-04.jpg`,
      `${path}100-00021-05.jpg`,
    ],

  },
  {
    id: "200-00002",
    type: "Mechanical Pencil",
    pen_type: "Click",
    kitType: "Fore Real Golf Pencil",
    kitColor: "Chrome",
    material: "Wood",
    material_info: "Green Maple Burl",
    price: "$30.00",
    available: false,
    created: "10/27/19",
    images: [
      `${path}200-00002-01.jpg`,
      `${path}200-00002-02.jpg`,
      `${path}200-00002-03.jpg`,

    ],

  },
  {
    id: "100-00023",
    type: "Pen",
    pen_type: "Click",
    kitType: "Devin Click",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Frozen Assets",
    price: "$28.00",
    available: false,
    created: "10/27/19",
    images: [
      `${path}100-00023-01.jpg`,
      `${path}100-00023-02.jpg`,
      `${path}100-00023-03.jpg`,

    ],

  },
  {
    id: "100-00022",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Executive",
    kitColor: "Black Enamal",
    material: "Wood",
    material_info: "Reclaimed Maple",
    price: "$25.00",
    available: false,
    created: "11/3/19",
    images: [
      `${path}100-00022-01.jpg`,
      `${path}100-00022-02.jpg`,
      `${path}100-00022-03.jpg`,

    ],

  },
  {
    id: "100-00025",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Princess Pink",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Pink Crush",
    price: "$30.00",
    available: false,
    created: "11/3/19",
    images: [
      `${path}100-00025-01.jpg`,
      `${path}100-00025-02.jpg`,
      `${path}100-00025-03.jpg`,

    ],

  },
  {
    id: "100-00026",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Princess Clear",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Purple Amethyst",
    price: "$30.00",
    available: false,
    created: "11/3/19",
    images: [
      `${path}100-00026-01.jpg`,
      `${path}100-00026-02.jpg`,
      `${path}100-00026-03.jpg`,

    ],

  },
  {
    id: "100-00027",
    type: "Pen",
    pen_type: "Click",
    kitType: "Baseball",
    kitColor: "Antique Pewter",
    material: "Wood",
    material_info: "Wood with COA",
    price: "$55.00",
    available: false,
    created: "11/3/19",
    images: [
      `${path}100-00027-01.jpg`,
      `${path}100-00027-02.jpg`,
      `${path}100-00027-03.jpg`,
      `${path}100-00027-04.jpg`,
      `${path}100-00027-05.jpg`,
    ],

  },
  {
    id: "100-00028",
    type: "Pen",
    pen_type: "Rollerball",
    kitType: "Vertex",
    kitColor: "Gun Metal",
    material: "Acrylic",
    material_info: "Turquoise w/ Black Vein",
    price: "$30.00",
    available: true,
    created: "11/3/19",
    images: [
      `${path}100-00028-01.jpg`,
      `${path}100-00028-02.jpg`,
      `${path}100-00028-03.jpg`,

    ],

  },

  {
    id: "200-00003",
    type: "Mechanical Pencil",
    pen_type: "Click",
    kitType: "Vertex",
    kitColor: "Gun Metal",
    material: "Wood",
    material_info: "Walnut Crotch",
    price: "$30.00",
    available: true,
    created: "11/12/19",
    images: [
      `${path}200-00003-1.jpg`,
      `${path}200-00003-2.jpg`,
      `${path}200-00003-3.jpg`,

    ]
  },
  {
    id: "100-00030",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Trimline",
    kitColor: "Gun Metal",
    material: "Acrylic",
    material_info: "Dark and Light Blue",
    price: "$25.00",
    available: true,
    created: "11/12/19",
    images: [
      `${path}100-00030-1.jpg`,
      `${path}100-00030-2.jpg`,
      `${path}100-00030-3.jpg`,

    ]
  },
  {
    id: "100-00031",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Trimline",
    kitColor: "Gun Metal",
    material: "Acrylic",
    material_info: "Wildcat",
    price: "$25.00",
    available: true,
    created: "11/12/19",
    images: [
      `${path}100-00031-1.jpg`,
      `${path}100-00031-2.jpg`,
      `${path}100-00031-3.jpg`,

    ]
  },
  {
    id: "100-00032",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Slimline",
    kitColor: "Black Enamal",
    material: "Wood",
    material_info: "Cocobolo",
    price: "$25.00",
    available: true,
    created: "11/12/19",
    images: [
      `${path}100-00032-1.jpg`,
      `${path}100-00032-2.jpg`,
      `${path}100-00032-3.jpg`,

    ]
  },
  {
    id: "100-00033",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Click",
    kitColor: "Satin Chrome",
    material: "Wood",
    material_info: "Segmented #1",
    price: "$15.00",
    available: true,
    created: "11/12/19",
    images: [
      `${path}100-00033-1.jpg`,
      `${path}100-00033-2.jpg`,
      `${path}100-00033-3.jpg`,

    ]
  },
  {
    id: "100-00034",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Trimline",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Moon Rock Glowstonez",
    price: "$25.00",
    available: true,
    created: "11/12/19",
    images: [
      `${path}100-00034-1.jpg`,
      `${path}100-00034-2.jpg`,
      `${path}100-00034-3.jpg`,

    ]
  },
  {
    id: "100-00035",
    type: "Pen",
    pen_type: "Rollerball",
    kitType: "Vertex",
    kitColor: "Gun Metal",
    material: "Acrylic",
    material_info: "Purple Amethyst",
    price: "$30.00",
    available: false,
    created: "11/12/19",
    images: [
      `${path}100-00035-1.jpg`,
      `${path}100-00035-2.jpg`,
      `${path}100-00035-3.jpg`,

    ]
  },
  {
    id: "100-00036",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Princess Clear",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "White Pearl Inlace",
    price: "$30.00",
    available: false,
    created: "11/12/19",
    images: [
      `${path}100-00036-1.jpg`,
      `${path}100-00036-2.jpg`,
      `${path}100-00036-3.jpg`,
      `${path}100-00036-4.jpg`,
    ]
  },



  {
    id: "100-00050",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Slimline",
    kitColor: "Black Enamal",
    material: "Wood",
    material_info: "Bolivian Rosewood",
    price: "$20.00",
    available: true,
    created: "11/9/19",
    images: [
      `${path}100-00050-1.jpg`,
      `${path}100-00050-2.jpg`,
      `${path}100-00050-3.jpg`,
    ]
  },

  {
    id: "100-00051",
    type: "Pen",
    pen_type: "Click",
    kitType: "Gernade",
    kitColor: "OD Green",
    material: "Acrylic",
    material_info: "Camo",
    price: "$45.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00051-1.jpg`,
      `${path}100-00051-2.jpg`,
      `${path}100-00051-3.jpg`,
    ]
  },

  {
    id: "100-00052",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Cigar",
    kitColor: "Gun Metal",
    material: "OTHER",
    material_info: "Corn cobb",
    price: "$30.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00052-1.jpg`,
      `${path}100-00052-2.jpg`,
      `${path}100-00052-3.jpg`,
    ]
  },

  {
    id: "100-00053",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Trimline",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Tortoise Shell",
    price: "$25.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00053-1.jpg`,
      `${path}100-00053-2.jpg`,
      `${path}100-00053-3.jpg`,
    ]
  },

  {
    id: "100-00054",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Knurl Twist",
    kitColor: "Chrome and Black Enamal",
    material: "Acrylic",
    material_info: "Hulk Inspired",
    price: "$50.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00054-1.jpg`,
      `${path}100-00054-2.jpg`,
      `${path}100-00054-3.jpg`,
    ]
  },

  {
    id: "100-00055",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Slimline",
    kitColor: "Satin Chrome",
    material: "Wood",
    material_info: "Wenge",
    price: "$20.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00055-1.jpg`,
      `${path}100-00055-2.jpg`,
      `${path}100-00055-3.jpg`,
    ]
  },

  {
    id: "100-00056",
    type: "Pen",
    pen_type: "Click",
    kitType: "Gearshift",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Black Carbon Fiber",
    price: "$35.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00056-1.jpg`,
      `${path}100-00056-2.jpg`,
      `${path}100-00056-3.jpg`,
    ]
  },

  {
    id: "100-00057",
    type: "Pen",
    pen_type: "Click",
    kitType: "Bolt Action",
    kitColor: "Gun Metal",
    material: "Acrylic",
    material_info: "USA Flag-Wavy",
    price: "$30.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00057-1.jpg`,
      `${path}100-00057-2.jpg`,
      `${path}100-00057-3.jpg`,
    ]
  },

  {
    id: "100-00058",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Slimline",
    kitColor: "Satin Chrome",
    material: "Wood",
    material_info: "Segmented #2",
    price: "$15.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00058-1.jpg`,
      `${path}100-00058-2.jpg`,
      `${path}100-00058-3.jpg`,
    ]
  },

  {
    id: "100-00059",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Gatsby",
    kitColor: "Gun Metal",
    material: "Wood",
    material_info: "EMT Inlay",
    price: "$55.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00059-1.jpg`,
      `${path}100-00059-2.jpg`,
      `${path}100-00059-3.jpg`,
      `${path}100-00059-4.jpg`,
    ]
  },

  {
    id: "100-00060",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Cigar",
    kitColor: "Copper",
    material: "Wood",
    material_info: "Box Elder Burl",
    price: "$30.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00060-1.jpg`,
      `${path}100-00060-2.jpg`,
      `${path}100-00060-3.jpg`,
      `${path}100-00060-4.jpg`,
    ]
  },

  {
    id: "100-00061",
    type: "Pen",
    pen_type: "Click",
    kitType: "Bolt Action Tec-Pen",
    kitColor: "Antique Brass",
    material: "Acrylic",
    material_info: "Carmael Popcorn",
    price: "$30.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00061-1.jpg`,
      `${path}100-00061-2.jpg`,
      `${path}100-00061-3.jpg`,
    ]
  },

  {
    id: "100-00062",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Shock Absorber",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Avocado Swirl",
    price: "$30.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00062-1.jpg`,
      `${path}100-00062-2.jpg`,
      `${path}100-00062-3.jpg`,
    ]
  },

  {
    id: "100-00063",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Trimline",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Sapphire Blue",
    price: "$25.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00063-1.jpg`,
      `${path}100-00063-2.jpg`,
      `${path}100-00063-3.jpg`,
    ]
  },

  {
    id: "100-00064",
    type: "Pen",
    pen_type: "Click",
    kitType: "Bolt Action",
    kitColor: "Gun Metal",
    material: "Acrylic",
    material_info: "USA Flag-Straight",
    price: "$30.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00064-1.jpg`,
      `${path}100-00064-2.jpg`,
      `${path}100-00064-3.jpg`,
    ]
  },

  {
    id: "100-00065",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Slimline",
    kitColor: "Gold",
    material: "Wood",
    material_info: "Purple Polka Dot",
    price: "$20.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00065-1.jpg`,
      `${path}100-00065-2.jpg`,
      `${path}100-00065-3.jpg`,
    ]
  },

  {
    id: "100-00066",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Firefighter",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Thin Red Line",
    price: "$45.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00066-1.jpg`,
      `${path}100-00066-2.jpg`,
      `${path}100-00066-3.jpg`,
    ]
  },

  {
    id: "100-00067",
    type: "Pen",
    pen_type: "Click",
    kitType: "Mesa",
    kitColor: "Gold",
    material: "Wood",
    material_info: "Blue Maple Burl",
    price: "$20.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00067-1.jpg`,
      `${path}100-00067-2.jpg`,
      `${path}100-00067-3.jpg`,
    ]
  },

  {
    id: "100-00068",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Dragon",
    kitColor: "Antique Copper",
    material: "OTHER",
    material_info: "Hybridz Green Pine Cone",
    price: "$65.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00068-1.jpg`,
      `${path}100-00068-2.jpg`,
      `${path}100-00068-3.jpg`,
    ]
  },

  {
    id: "100-00069",
    type: "Pen",
    pen_type: "Click",
    kitType: "Slimline",
    kitColor: "Black Enamal",
    material: "Wood",
    material_info: "Black and White Ebony",
    price: "$20.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00069-1.jpg`,
      `${path}100-00069-2.jpg`,
      `${path}100-00069-3.jpg`,
    ]
  },



  {
    id: "100-00071",
    type: "Pen",
    pen_type: "Click",
    kitType: "Motorcycle",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Twilight Racer",
    price: "$45.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00071-1.jpg`,
      `${path}100-00071-2.jpg`,
      `${path}100-00071-3.jpg`,
      `${path}100-00071-4.jpg`,
    ]
  },

  {
    id: "100-00072",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Executive",
    kitColor: "Black Enamal",
    material: "Wood",
    material_info: "Macassar Ebony",
    price: "$30.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00072-1.jpg`,
      `${path}100-00072-2.jpg`,
      `${path}100-00072-3.jpg`,
    ]
  },

  {
    id: "100-00073",
    type: "Pen",
    pen_type: "Click",
    kitType: "Dura Click",
    kitColor: "Aluminum",
    material: "Wood",
    material_info: "Canarywood",
    price: "$30.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00073-1.jpg`,
      `${path}100-00073-2.jpg`,
      `${path}100-00073-3.jpg`,
    ]
  },

  {
    id: "100-00074",
    type: "Pen",
    pen_type: "Click",
    kitType: "Gearshift",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Black and White Checkered Flag",
    price: "$30.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00074-1.jpg`,
      `${path}100-00074-2.jpg`,
      `${path}100-00074-3.jpg`,
    ]
  },

  {
    id: "100-00075",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Trimline",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Grape Mesh",
    price: "$25.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00075-1.jpg`,
      `${path}100-00075-2.jpg`,
      `${path}100-00075-3.jpg`,
      `${path}100-00075-4.jpg`,
    ]
  },

  {
    id: "100-00076",
    type: "Pen",
    pen_type: "Click",
    kitType: "Mesa",
    kitColor: "Gold",
    material: "Acrylic",
    material_info: "Veteran Clear Cast",
    price: "$35.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00076-1.jpg`,
      `${path}100-00076-2.jpg`,
      `${path}100-00076-3.jpg`,
      `${path}100-00076-4.jpg`,
    ]
  },

  {
    id: "100-00077",
    type: "Pen",
    pen_type: "Click",
    kitType: "Baseball",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Cubs Acrylic",
    price: "$40.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00077-1.jpg`,
      `${path}100-00077-2.jpg`,
      `${path}100-00077-3.jpg`,
    ]
  },

  {
    id: "100-00078",
    type: "Pen",
    pen_type: "Click",
    kitType: "Bolt Action",
    kitColor: "Gun Metal",
    material: "OTHER",
    material_info: "Mallee Hybrid Burl",
    price: "$35.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00078-1.jpg`,
      `${path}100-00078-2.jpg`,
      `${path}100-00078-3.jpg`,
    ]
  },

  {
    id: "100-00079",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Football",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Blue and White Custom",
    price: "$50.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00079-1.jpg`,
      `${path}100-00079-2.jpg`,
      `${path}100-00079-3.jpg`,
      `${path}100-00079-4.jpg`,
    ]
  },

  {
    id: "100-00080",
    type: "Pen",
    pen_type: "Click",
    kitType: "Lever Action",
    kitColor: "Black Enamal",
    material: "Wood",
    material_info: "Buckeye Burl",
    price: "$50.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00080-1.jpg`,
      `${path}100-00080-2.jpg`,
      `${path}100-00080-3.jpg`,
    ]
  },

  {
    id: "100-00081",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Musical",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Sapphire Blue",
    price: "$50.00",
    available: false,
    "created": "11/9/19",
    images: [
      `${path}100-00081-1.jpg`,
      `${path}100-00081-2.jpg`,
      `${path}100-00081-3.jpg`,
    ]
  },

  {
    id: "100-00082",
    type: "Pen",
    pen_type: "Twist",
    kitType: "Princess Blue",
    kitColor: "Chrome",
    material: "Acrylic",
    material_info: "Blue Eyes",
    price: "$30.00",
    available: true,
    "created": "11/9/19",
    images: [
      `${path}100-00082-1.jpg`,
      `${path}100-00082-2.jpg`,
      `${path}100-00082-3.jpg`,
    ]
  }
















]