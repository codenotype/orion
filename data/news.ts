import { NewsCard } from '@/types/cards';

export const news: NewsCard[] = [
  {
    image:
      'https://www.leica-microsystems.com/fileadmin/academy/user_upload/Header2_01.jpg',
    type: 'Новость',
    datetime: '2022-04-20',
    title: 'Победа в номинации Reddot Award',
    text: 'Цифровой микроскоп Leica Emspira 3 – стал лауреатом премии Red Dot Award 2022 года за дизайн продукции, система имеет инновационную модульную конструкцию и широкий выбор аксессуаров и вариантов освещения.',
    link: '',
  },
  {
    image:
      'https://www.leica-microsystems.com/fileadmin/_processed_/6/9/csm_Mitosis_Autonomous_MIcroscopy_4c077b1b9a.jpg',
    type: 'Новость',
    datetime: '2023-06-06',
    title: 'Обнаружение редких событий на основе ИИ',
    text: 'Использует возможности автономной конфокальной микроскопии. Автономная микроскопия на базе Aivia позволяет ученым узнавать больше, извлекая наиболее важные данные из своих экспериментов.',
    link: 'https://www.leica-microsystems.com/company/news/news-details/ai-based-rare-event-detection-harnesses-the-capabilities-of-autonomous-confocal-microscopy/',
  },
  {
    image:
      'https://www.leica-microsystems.com/fileadmin/user_upload/Mica_RedDot_Award_2023.jpg',
    type: 'Новость',
    datetime: '2023-04-17',
    title: 'Микроконцентратор для обработки изображений',
    text: 'Компания Leica Microsystems получает награду Red Dot Design Award 2023 за Mica. Red Dot Design Award — всемирно известный конкурс дизайнеров, который награждает за выдающееся качество дизайна и инновации.',
    link: 'https://www.leica-microsystems.com/company/news/news-details/leica-microsystems-wins-red-dot-design-award-2023-for-mica-the-worlds-first-imaging-microhub/',
  },
  {
    image:
      'https://www.leica-microsystems.com/fileadmin/_processed_/0/b/csm_Different_neuronal_markers__53e2b8b9f6.jpg',
    type: 'Новость',
    datetime: '2023-02-10',
    title: 'Флуоресцентная визуализация за пределами интенсивности',
    text: 'Этот курс сосредоточен на биологических приложениях, которые могут извлечь выгоду из того, как информация, основанная на жизни, может дать новое функциональное и механистическое понимание биологических вопросов.',
    link: 'https://www.leica-microsystems.com/company/news/news-details/embl-course-fluorescence-imaging-beyond-intensity/',
  },  {
    image:
      'https://www.leica-microsystems.com/fileadmin/academy/user_upload/Header2_01.jpg',
    type: 'Новость',
    datetime: '2022-04-20',
    title: 'Победа в номинации Reddot Award',
    text: 'Цифровой микроскоп Leica Emspira 3 – стал лауреатом премии Red Dot Award 2022 года за дизайн продукции, система имеет инновационную модульную конструкцию и широкий выбор аксессуаров и вариантов освещения.',
    link: '',
  },
  {
    image:
      'https://www.leica-microsystems.com/fileadmin/_processed_/6/9/csm_Mitosis_Autonomous_MIcroscopy_4c077b1b9a.jpg',
    type: 'Новость',
    datetime: '2023-06-06',
    title: 'Обнаружение редких событий на основе ИИ',
    text: 'Использует возможности автономной конфокальной микроскопии. Автономная микроскопия на базе Aivia позволяет ученым узнавать больше, извлекая наиболее важные данные из своих экспериментов.',
    link: 'https://www.leica-microsystems.com/company/news/news-details/ai-based-rare-event-detection-harnesses-the-capabilities-of-autonomous-confocal-microscopy/',
  },
  {
    image:
      'https://www.leica-microsystems.com/fileadmin/user_upload/Mica_RedDot_Award_2023.jpg',
    type: 'Новость',
    datetime: '2023-04-17',
    title: 'Микроконцентратор для обработки изображений',
    text: 'Компания Leica Microsystems получает награду Red Dot Design Award 2023 за Mica. Red Dot Design Award — всемирно известный конкурс дизайнеров, который награждает за выдающееся качество дизайна и инновации.',
    link: 'https://www.leica-microsystems.com/company/news/news-details/leica-microsystems-wins-red-dot-design-award-2023-for-mica-the-worlds-first-imaging-microhub/',
  },
  {
    image:
      'https://www.leica-microsystems.com/fileadmin/_processed_/0/b/csm_Different_neuronal_markers__53e2b8b9f6.jpg',
    type: 'Новость',
    datetime: '2023-02-10',
    title: 'Флуоресцентная визуализация за пределами интенсивности',
    text: 'Этот курс сосредоточен на биологических приложениях, которые могут извлечь выгоду из того, как информация, основанная на жизни, может дать новое функциональное и механистическое понимание биологических вопросов.',
    link: 'https://www.leica-microsystems.com/company/news/news-details/embl-course-fluorescence-imaging-beyond-intensity/',
  },
]
  //.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime())
  .map((card) => {
    return {
      ...card,
      datetime: new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(card.datetime)),
    };
  });
