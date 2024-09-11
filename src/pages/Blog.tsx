import React, { useState } from 'react';

const Blog: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Exit Festival 2024 Najavljuje Nove Hevljajnere!',
      date: '1. avgust 2024.',
      content: 'Exit Festival 2024 je upravo otkrio svoj najnoviji line-up izvodjača...',
      imageUrl: '/src/assets/img/exitimg1.jpg',
    },
    {
      id: 2,
      title: 'Tomorrowland 2024 Karte Rasprodate u Rekordnom Vremenu',
      date: '15. jul 2024.',
      content: 'Karte za Tomorrowland 2024 su rasprodate za nekoliko minuta...',
      imageUrl: '/src/assets/img/tomorrowlandimg1.jpeg',
    },
    {
      id: 3,
      title: 'Primavera Sound Se Širi na Nove Gradove',
      date: '25. jun 2024.',
      content: 'Primavera Sound će se proširiti na nove gradove u 2024. godini...',
      imageUrl: '/src/assets/img/primaveraimg1.jpeg',
    },
    {
      id: 4,
      title: 'Beach Please 2024: Proslava Muzike i Sunca',
      date: '10. jun 2024.',
      content: 'Beach Please 2024 obećava sunčane dane i noći ispunjene muzikom...',
      imageUrl: '/src/assets/img/beachpleaseimg1.jpg',
    },
    {
      id: 5,
      title: 'Sziget Festival 2024: Muzika, Umetnost i Sloboda na Ostrvu Slobode',
      date: '07. avgust 2024.',
      content: 'Sziget Festival, jedan od najvećih i najuzbudljivijih muzičkih festivala...',
      imageUrl: '/src/assets/img/szigetimg1.jpg',
    },
    {
      id: 6,
      title: 'Rock Werchter 2024: Mesto Gde Rock Muzika Zauzima Centralnu Pozornicu',
      date: '27. jun 2024.',
      content: 'Rock Werchter, jedan od najprestižnijih i najdugovečnijih muzičkih festivala...',
      imageUrl: '/src/assets/img/rockwerchterimg1.jpg',
    },
    {
      id: 7,
      title: 'Glastonbury Festival 2024: Čarobna Simfonija Muzike, Umetnosti i Kulture',
      date: '26. jun 2024.',
      content: 'Glastonbury Festival, jedan od najpoznatijih i najvoljenijih muzičkih festivala...',
      imageUrl: '/src/assets/img/glastonburyimg1.jpg',
    },
    {
      id: 8,
      title: 'Sunrise Festival 2024: Zora Muzike i Energije na Obali Baltika',
      date: '19. jul 2024.',
      content: 'Sunrise Festival, jedan od najvažnijih događaja elektronske muzike...',
      imageUrl: '/src/assets/img/sunriseimg1.jpg',
    },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const indexLI = currentPage * itemsPerPage;
  const indexFI = indexLI - itemsPerPage;
  const currentNewsItems = newsItems.slice(indexFI, indexLI);

  const pagination = (page: number) => setCurrentPage(page);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 to-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">Vesti o Festivalima</h1>
        <div className="space-y-8">
          {currentNewsItems.map((news) => (
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
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => pagination(page)}
              className={`mx-1 px-3 py-1 rounded-lg border ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;