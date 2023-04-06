export interface CategoryInterface {
    id: number;
    categorieMenu: string;
    categorieMenuEn: string;
    categorie: {
      id: number;
      menu_id: number;
      nameCategory: string;
      nameCategoryEn: string
      categoryPicturePath: string;
    }[];
  }
  