'use client'

import { CardsListSection } from "../components/CardsListSection/CardsListSection"
import { endpoints } from "../api/config"
import { useGetDataByCategory } from "../api/api-hooks"
import { Preloader } from "../components/preloader/Preloader"

export default function New() {
    const newGames = useGetDataByCategory(endpoints.games, "new");
    return (
      <main className="main-inner">
        {newGames ? (
          <CardsListSection id="new" title="Новые" data={newGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }