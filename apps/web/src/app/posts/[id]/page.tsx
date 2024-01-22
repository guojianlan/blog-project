import { IArticleItemData } from 'web/types';
import { Metadata } from 'next';
import { addApiDomain } from 'web/src/lib/utils';
import { redirect } from 'next/navigation';

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
    title: attributes.title,
    description: attributes.desc,
  };
  return metadata;
};
const getData: (id: string) => Promise<IArticleItemData> = async (
  id: string,
) => {
  const result = await fetch(addApiDomain(`/api/articles/${id}?populate=*`));
  if (result.status !== 200) {
    return redirect('/404');
  }

  return await result.json();
};
const PostPage = async ({ params }: IPageParams) => {
  let result = await getData(params.id);
  return (
    <>
      <div className="h-20 flex justify-center items-center">
        <div className="px-24 text-[40px] bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          {result.data.attributes.title}
        </div>
      </div>
      <div
        className="w-full max-w-full prose lg:prose-lg h-full prose-img:rounded-xl prose-img:w-full prose-img:object-cover"
        dangerouslySetInnerHTML={{ __html: result.data.attributes.content }}
      ></div>
    </>
  );
};
export default PostPage;
