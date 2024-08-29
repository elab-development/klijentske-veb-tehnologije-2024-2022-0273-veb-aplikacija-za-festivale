import React from 'react';

const Blog: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Exit Festival 2024 Najavljuje Nove Hevljajnere!',
      date: '1. avgust 2024.',
      content: 'Exit Festival 2024 je upravo otkrio svoj najnoviji line-up izvodjača, uključujući svetski poznate umetnike i uzbudljive nove izvođače. Ove godine festival obećava da će biti jedan od najimrpesivniji do sada, sa mešavinom rok, elektronskih i hip-hop izvođača na sceni na legendarnoj Petrovaradinskoj tvrđavi.',
      imageUrl: '/src/assets/img//exitimg1.jpg',
    },
    {
      id: 2,
      title: 'Tomorrowland 2024 Karte Rasprodate u Rekordnom Vremenu',
      date: '15. jul 2024.',
      content: 'Karte za Tomorrowland 2024 su rasprodate za nekoliko minuta nakon puštanja u prodaju! Sa neverovatnim sastavom izvođača i obećanjem nezaboravnog iskustva, nije iznenađujuće da su fanovi brzo obezbedili svoja mesta. Ako ste propustili, pratite mogućnosti za preprodaju i zvanične pakete.',
      imageUrl: '/src/assets/img/tomorrowlandimg1.jpeg',
    },
  
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 to-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">Vesti o Festivalima</h1>
        <div className="space-y-8">
          {newsItems.map((news) => (
            <div key={news.id} className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center">
              <img
                src={news.imageUrl}
                alt={news.title}
                className="w-full md:w-1/3 h-48 object-cover rounded-xl mb-4 md:mb-0 md:mr-6"
              />
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-gray-800">{news.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{news.date}</p>
                <p className="text-gray-700">{news.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;