import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const colorVariants = {
  food: "bg-food hover:bg-food-500 text-white",
  movie: "bg-movie hover:bg-movie-500 text-white",
  character: "bg-character hover:bg-character-500 text-living",
  fashion: "bg-fashion hover:bg-fashion-500 text-white",
  music: "bg-music hover:bg-music-500 text-white",
  living: "bg-living hover:bg-living-500 text-white",
  etc: "bg-etc hover:bg-etc-500 text-white",
};
