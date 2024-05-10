'use client'

import { CardsListSection } from "../components/CardsListSection/CardsListSection"
import { endpoints } from "../api/config"
import { useGetDataByCategory } from "../api/api-hooks"
import { Preloader } from "../components/preloader/Preloader"

export default function Shooters() {
    const newGames = useGetDataByCategory(endpoints.games, "shooter");
    return (
      <main className="main-inner">
        {newGames ? (
          <CardsListSection id="shooter" title="Шутеры" data={newGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }