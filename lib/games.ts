export type GameStatus = "Wishlist" | "Playing" | "Completed";
export type CompletionType = "Story" | "Full" | "Endless";

export interface Game {
  id: string;
  title: string;
  platform: string;
  status: GameStatus;
  completion?: CompletionType;
  image: string;
  link: string;
}
