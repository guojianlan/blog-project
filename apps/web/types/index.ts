export interface IArticleData {
  data: IArticleDatum[];
  meta: Meta;
}

export interface IArticleItemData {
  data: IArticleDatum;
  meta: Meta;
}
export interface IArticleDatum {
  attributes: PurpleAttributes;
  id: number;
}
export interface ITagArticleItemData {
  data: {
    id: number;
    attributes: ITagAttributes;
  };
  meta: Meta;
}
export interface ITagAttributes {
  articles: {
    data: IArticleDatum[];
  };
  createdAt: string;
  name: string;
  updatedAt: string;
}

export interface PurpleAttributes {
  content: string;
  cover: Cover;
  createdAt: string;
  desc: string;
  publishedAt: string;
  tags: Tags;
  title: string;
  updatedAt: string;
}

export interface Cover {
  data: Data;
}

export interface Data {
  attributes: DataAttributes;
  id: number;
}

export interface DataAttributes {
  alternativeText: null;
  caption: null;
  createdAt: string;
  ext: string;
  formats: Formats;
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  size: number;
  updatedAt: string;
  url: string;
  width: number;
}

export interface Formats {
  large: Large;
  medium: Medium;
  small: Small;
  thumbnail: Thumbnail;
}

export interface Large {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: null;
  size: number;
  url: string;
  width: number;
}

export interface Medium {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: null;
  size: number;
  url: string;
  width: number;
}

export interface Small {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: null;
  size: number;
  url: string;
  width: number;
}

export interface Thumbnail {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: null;
  size: number;
  url: string;
  width: number;
}

export interface Tags {
  data: TagsDatum[];
}

export interface TagsDatum {
  attributes: FluffyAttributes;
  id: number;
}

export interface FluffyAttributes {
  createdAt: string;
  name: string;
  updatedAt: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}
