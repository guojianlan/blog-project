import { LinkBox, OverlayLink } from 'web/src/components/ui/overlayLink';
import { AspectRatio } from 'web/src/components/ui/aspect-ratio';
import Image from 'next/image';
import { addImageDomain } from 'web/src/lib/utils';
import Link from 'next/link';
import React from 'react';
import { IArticleDatum } from 'web/types';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
export const ArticleShortItem: React.FC<IArticleDatum> = (props) => {
  return (
    <LinkBox
      key={props.id}
      className="group shadow dark:shadow-primary rounded-2xl overflow-hidden text-md"
    >
      <div className="flex justify-items-stretch p-0 cursor-pointer flex-col">
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-2xl">
          <Image
            className="object-cover w-full h-full transition ease-in-out duration-500  group-hover:scale-[1.2] "
            width={props.attributes.cover.data.attributes.width}
            height={props.attributes.cover.data.attributes.height}
            src={addImageDomain(props.attributes.cover.data.attributes.url)}
            alt={props.attributes.cover.data.attributes.name}
          />
        </AspectRatio>

        <div className="ml-4 flex-1 py-4 flex flex-col justify-between">
          <div className="flex flex-col gap-2 ">
            <OverlayLink className="flex-shrink-0" href={`/posts/${props.id}`}>
              <div className="line-clamp-2 group-hover:text-primary text-2xl font-medium">
                {props.attributes.title}
              </div>
            </OverlayLink>
            <div className="line-clamp-2 text-[#999] group-hover:text-[#999/90]">
              {props.attributes.desc}
            </div>
          </div>
          <div className="flex justify-between pr-4 items-center  text-[#999] text-xs">
            <div>{dayjs(props.attributes.createdAt).fromNow()}</div>
            {props.attributes?.tags?.data &&
            props.attributes?.tags?.data.length ? (
              <div className="flex gap-4">
                {props.attributes.tags.data.map((tagItem) => {
                  return (
                    <div
                      className="px-2 shadow py-1 bg-primary rounded-2xl text-secondary transition hover:bg-primary/90 hover:text-secondary/50"
                      key={tagItem.id}
                    >
                      <Link href={`/posts/tag/${tagItem.id}`}>
                        {tagItem.attributes.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </LinkBox>
  );
};
