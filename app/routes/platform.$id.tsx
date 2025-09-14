import { useState } from "react";
import { Link, useParams } from "react-router";
import { useAPI } from "~/hooks/useAPI";
import { GameSection } from "~/components/game-section";
import SearchBar from "~/components/search-bar";
import { House } from "lucide-react";
import type { Route } from "./+types/platform.$id";
import type { Games } from "~/lib/game-types";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Ludi Remix" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Platform() {
  const { id } = useParams<{ id: string }>()
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const API_URL = import.meta.env.VITE_GULA_DATA_URL || "http://localhost:3000";
  const { data: game, error, loading } = useAPI<Games | Games[] | null>(`${API_URL}/api/games/${id}`);

  if (error) {
    throw new Error(error)
  }

  return (
    <div className="container mx-auto p-8">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-1 z-50">
          <div className="h-1 w-full bg-cyan-400 animate-pulse" />
        </div>
      )}

      {Array.isArray(game) ? (
        game.map((group) => (
          <GameSection
            key={group.id}
            group={group}
            API_URL={API_URL}
            search={search}
          />
        ))
      ) : (
        game && (
          <GameSection
            key={game.id}
            group={game}
            API_URL={API_URL}
            search={search}
          />
        )
      )}

      <div className="fixed bottom-20 right-6 color-white">
        <Link
          to="/"
          className="flex items-center h-12 bg-white shadow-lg rounded-full border border-gray-300 transition-all duration-300 overflow-hidden cursor-pointer w-12 px-0 justify-center"
        >
          <House size={20} className="text-black" />
        </Link>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />
    </div>
  );
}
