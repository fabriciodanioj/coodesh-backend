module.exports = {
  basePath: '/article',
  articles: [
    {
      featured: false,
      title: 'Article 1',
      url: 'https://article-1.com',
      imageUrl: 'https://article-1.com/image.png',
      newsSite: 'https://article/site-1.com',
      summary: 'Article about Falcon one',
      publishedAt: Date.now(),
      launches: [
        {
          id: '001',
          provider: 'Space X 1',
        },
      ],
      events: [
        {
          id: '001',
          provider: 'Falcon 1',
        },
      ],
    },
    {
      featured: false,
      title: 'Article 2',
      url: 'https://article-2.com',
      imageUrl: 'https://article-2.com/image.png',
      newsSite: 'https://article/site-2.com',
      summary: 'Article about Falcon two',
      publishedAt: Date.now(),
      launches: [
        {
          id: '002',
          provider: 'Space X 2',
        },
      ],
      events: [
        {
          id: '002',
          provider: 'Falcon 2',
        },
      ],
    },
    {
      featured: true,
      title: 'Article 3',
      url: 'https://article-3.com',
      imageUrl: 'https://article-3.com/image.png',
      newsSite: 'https://article/site-3.com',
      summary: 'Article about number one',
      publishedAt: Date.now(),
      launches: [
        {
          id: '003',
          provider: 'Space X 3',
        },
      ],
      events: [
        {
          id: '003',
          provider: 'Falcon 3',
        },
      ],
    },
    {
      featured: true,
      title: 'Article 4',
      url: 'https://article-4.com',
      imageUrl: 'https://article-4.com/image.png',
      newsSite: 'https://article/site-4.com',
      summary: 'Article about number one',
      publishedAt: Date.now(),
      launches: [
        {
          id: '004',
          provider: 'Space X 4',
        },
      ],
      events: [
        {
          id: '004',
          provider: 'Falcon 4',
        },
      ],
    },
  ],
};
