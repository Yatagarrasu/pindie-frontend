'use client'

import { CardsListSection } from "../components/CardsListSection/CardsListSection"
import { endpoints } from "../api/config"
import { useGetDataByCategory } from "../api/api-hooks"
import { Preloader } from "../components/preloader/Preloader"

export default function Runners() {
    const newGames = useGetDataByCategory(endpoints.games, "runner");
    return (
      <main className="main-inner">
        {newGames ? (
          <CardsListSection id="runner" title="Ранеры" data={newGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }