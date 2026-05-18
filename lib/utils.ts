// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";

/** Merge class names — lightweight without tailwind-merge dependency */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
