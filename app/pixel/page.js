'use client'

import { CardsListSection } from "../components/CardsListSection/CardsListSection"
import { endpoints } from "../api/config"
import { useGetDataByCategory } from "../api/api-hooks"
import { Preloader } from "../components/preloader/Preloader"

export default function Pixel() {
    const newGames = useGetDataByCategory(endpoints.games, "pixel");
    return (
      <main className="main-inner">
        {newGames ? (
          <CardsListSection id="pixel" title="Пиксельные" data={newGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }