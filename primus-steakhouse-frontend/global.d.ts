type Child = {
  text: string;
  _key: string;
};

type Detail = {
  children: Child[];
};

type MenuItem = {
  name: string;
  slug: {
    current: string;
  };
  image: string;
  price: number;
  details: Detail[];
};

type Logo = {
  image: string;
};

type Paragraph = {
  children: Child[];
  _key: string;
};
