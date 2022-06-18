import { createLocalStorage } from "./createLocalStorage";

interface LocalStorageInterface {
  question: string;
  answer: string;
}

export const checkStorage =
  createLocalStorage<Record<number, LocalStorageInterface>>("check");
