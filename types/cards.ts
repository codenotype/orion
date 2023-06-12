export type Homecard = {
    title: string,
    link: string,
    image: string
    text: string
    tags?: string[] 
}

export type NewsCard = {
    type: string;
    image: string;
    datetime: string;
    title: string;
    text: string;
    link: string
  };