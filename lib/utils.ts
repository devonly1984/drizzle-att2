import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const splitTags = (tags: string) => {
  console.log("SplitTags", tags);
  return tags?.split(",").map((tag: string) => tag?.trim());
}