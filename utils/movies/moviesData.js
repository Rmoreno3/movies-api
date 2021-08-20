const moviesMocks = [
  {
    id: '05b6f474-525a-466e-b3ea-991bed527638',
    title: 'Short Eyes',
    year: 2003,
    cover: 'http://dummyimage.com/201x185.png/dddddd/000000',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 2028,
    contentRating: 'PG-13',
    tas: ['Drama|Musical|Romance', 'Drama|Romance'],
  },
  {
    id: 'c40a3609-e7c0-4b9e-b223-1f71aa13a5e1',
    title: 'Carolina Moon',
    year: 2006,
    cover: 'http://dummyimage.com/214x224.png/ff4444/ffffff',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    duration: 2052,
    contentRating: 'PG',
    tas: ['Drama|Romance|War'],
  },
  {
    id: 'b5d82861-ba0e-40e4-ace5-0a3ba63c7110',
    title: 'Snow Queen, The (Lumikuningatar)',
    year: 2006,
    cover: 'http://dummyimage.com/170x188.png/5fa2dd/ffffff',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 1973,
    contentRating: 'PG-13',
    tas: [
      'Comedy',
      'Comedy|Romance',
      'Drama',
      'Documentary',
      'Action|Crime|Drama',
    ],
  },
  {
    id: '31ca78ca-585b-4eb4-b3c5-c5454710f1ce',
    title: 'Scarface',
    year: 2012,
    cover: 'http://dummyimage.com/150x121.png/5fa2dd/ffffff',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    duration: 2004,
    contentRating: 'PG-13',
    tas: ['Sci-Fi|Thriller', 'Action', 'Action|Fantasy|Thriller'],
  },
  {
    id: 'e8b0697b-51ea-4dba-9d61-0338149915df',
    title: 'Out of the Blue',
    year: 2012,
    cover: 'http://dummyimage.com/156x234.png/dddddd/000000',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 2059,
    contentRating: 'R',
    tas: [
      'Action|Comedy|Sci-Fi',
      'Action|Adventure|Drama|Sci-Fi',
      'Comedy|Drama',
    ],
  },
  {
    id: '0edd8d44-53c3-411f-8767-06f3b381543a',
    title: 'Construction, The (En construcción)',
    year: 2011,
    cover: 'http://dummyimage.com/107x142.png/dddddd/000000',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    duration: 1989,
    contentRating: 'PG',
    tas: ['Comedy'],
  },
  {
    id: '58a65585-97ef-433b-8ebb-33b4514b5a61',
    title: 'Winter in Wartime',
    year: 1993,
    cover: 'http://dummyimage.com/211x248.png/5fa2dd/ffffff',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 2009,
    contentRating: 'PG-13',
    tas: [
      'Documentary|Drama',
      'Drama',
      'Adventure|War',
      'Action|Adventure|Sci-Fi|War|IMAX',
    ],
  },
  {
    id: 'bb4edc8f-3755-47e6-a0d5-bad0d4e5bc02',
    title: 'Ironclads',
    year: 2012,
    cover: 'http://dummyimage.com/171x147.png/5fa2dd/ffffff',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    duration: 2036,
    contentRating: 'PG-13',
    tas: ['Animation|Children|Drama'],
  },
  {
    id: 'ecaea7a2-a6f2-4fa0-94e0-2d88969d35c8',
    title: 'Destroyer',
    year: 1997,
    cover: 'http://dummyimage.com/189x161.png/5fa2dd/ffffff',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 2014,
    contentRating: 'PG-13',
    tas: ['Western', 'Action|Thriller|War'],
  },
  {
    id: '806d2625-c80e-4f57-a98e-41eba7b5d304',
    title: 'Heli',
    year: 2006,
    cover: 'http://dummyimage.com/210x233.png/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 1938,
    contentRating: 'PG-13',
    tas: ['Action|Crime|Drama', 'Action|Adventure|Crime'],
  },
];

module.exports = {
  moviesMocks,
};
