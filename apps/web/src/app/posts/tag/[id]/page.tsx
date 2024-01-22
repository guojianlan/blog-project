import { Metadata } from 'next';
import { addApiDomain } from 'web/src/lib/utils';
import { ArticleShortItem } from 'web/src/components/ui/article-short-item';
import { ITagArticleItemData } from 'web/types';
export interface IPageParams {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({ params }: IPageParams) => {
  const resp = await getData(params?.id || '');
  const {
    data: { attributes },
  } = resp;
  const metadata: Metadata = {
    title: attributes.name,
    description: '标签列表',
  };
  return metadata;
};
const getData: (id: string) => Promise<ITagArticleItemData> = async (id) => {
  const result = await fetch(
    addApiDomain(
      `/api/tags/${id}?populate[articles][populate][0]=cover&populate[articles][populate][1]=tags`,
    ),
  );
  return await result.json();
};
const TagPostPage = async ({ params }: IPageParams) => {
  let result = await getData(params.id);
  return (
    <>
      <div className="h-20 flex justify-center items-center">
        <div className="px-24 text-[40px] bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          {result.data.attributes.name}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {result.data.attributes.articles.data.map((item) => {
          return <ArticleShortItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};
export default TagPostPage;
