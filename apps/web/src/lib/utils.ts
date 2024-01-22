import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const addImageDomain = (pathName: string) => {
  return new URL(pathName, process.env.IMAGEDOMAIN).toString();
};
export const addApiDomain = (apiPath: string) => {
  return new URL(apiPath, process.env.APIBASEURL).toString();
};
