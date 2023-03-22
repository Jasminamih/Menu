export interface CategoryInterface {
    id: number;
    categorieMenu: string;
    categorie: {
      id: number;
      menu_id: number;
      nameCategory: string;
      categoryPicturePath: string;
    }[];
  }
  