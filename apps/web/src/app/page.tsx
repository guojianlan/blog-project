import { addApiDomain } from 'web/src/lib/utils';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
import relativeTime from 'dayjs/plugin/relativeTime';
import { ArticleLongItem } from 'web/src/components/ui/article-long-item';
import { Metadata } from 'next';
import { IArticleData } from 'web/types';
dayjs.extend(relativeTime);

export const metadata: Metadata = {
  title: '博客首页',
  description: '博客首页',
};
const getData: () => Promise<IArticleData> = async () => {
  const result = await fetch(
    addApiDomain('/api/articles?populate=*&sort[0]=publishedAt:desc'),
  );
  return await result.json();
};
const Home = async () => {
  const result = await getData();

  return (
    <>
      <div className="h-20 flex justify-center items-center">
        <div className="px-24 text-[40px] bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          My First BLOG
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8">
        {result.data.map((item: any) => {
          return <ArticleLongItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};
export default Home;
