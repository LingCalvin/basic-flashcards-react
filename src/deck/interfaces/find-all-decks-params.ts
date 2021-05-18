export interface FindAllDecksParams {
  authorId?: string[];
  titleEquals?: string;
  titleContains?: string;
  descriptionContains?: string;
  orderTitleBy?: 'asc' | 'desc';
  caseInsensitive?: boolean;
  skip?: number;
  take?: number;
}
