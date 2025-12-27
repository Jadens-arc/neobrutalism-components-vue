import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function addSpaces(name) {
  return name.replace(/([a-z])([A-Z])/g, "$1 $2")
}

export function transformToSlug(input) {
  return input.toLowerCase().replace(/\s+/g, "-")
}

export function transformToName(input) {
  return input
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function transformToPascalCase(input) {
  return input
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("")
}
