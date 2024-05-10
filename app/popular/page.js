'use client'

import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config"
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/preloader/Preloader";

export default function Popular() {
    const newGames = useGetDataByCategory(endpoints.games, "popular");
    return (
      <main className="main-inner">
        {newGames ? (
          <CardsListSection id="popular" title="Популярные" data={newGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }