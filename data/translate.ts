const words: Record<string, string> = {
    'equipment': 'Оборудование',
    'microscope': 'Микроскоп',
    'microscopes': 'Микроскопы',
    'optical microscopes': 'Оптические микроскопы',
    'optical microscopy': 'Оптическая микроскопия',
    'electron microscopy': 'Электронная микроскопия',
    'probe': 'Пробоподготовка',
    'сonsumables': 'Расходные материалы',
}

export const tr = (word: string) => {
    return words[word.toLowerCase()] || word
}