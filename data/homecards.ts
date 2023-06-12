import { Homecard } from '@/types/cards';
import probe from '../public/images/probe.png'

export const homecards: Homecard[] = [
  {
    title: 'Optical microscopy',
    link: '/microscope',
    image: 'https://www.leica-microsystems.com/fileadmin/_processed_/8/1/csm_EM-Sample-Prep_a01c4fc388.jpg',
    text: 'Инструменты для оптического анализа микро и макроструктур',
    tags: [
      'Инвертированные микроскопы',
      'Прямые микроскопы',
      'Стереомикроскопы',
      'Цифровые микроскопы',
      'Системы анализа микроструктуры'
    ],
  },
  {
    title: 'Electron microscopy',
    link: '/electron',
    image: 'https://www.leica-microsystems.com/fileadmin/_processed_/9/a/csm_Leica_EM_Coating-Etching-Fracturing_3-1_5431bec783.jpg',
    text: 'Пробоподготовка образцов электронного микроскопии',
    tags: [
        'Ультрамикротомы',
        'Напылительные установки',
        'Низковакуумные напылители',
        'Стеклянные ножи',
        'Просвечивающие микроскопы',
        'Сканирующие микроскопы'
      ],
  },
  {
    title: 'Probe',
    link: '/probe',
    image: probe.src,
    text: 'Проподготовка металлографических и петрографических шлифов',
    tags: [
        'Отрезные станки',
        'Шлифовально-полировальные машины',
        'Металлографические пресса',
        'Порошки',
        'Суспензии',
      ],
  },

];
