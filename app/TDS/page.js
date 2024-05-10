'use client'

import { CardsListSection } from "../components/CardsListSection/CardsListSection"
import { endpoints } from "../api/config"
import { useGetDataByCategory } from "../api/api-hooks"
import { Preloader } from "../components/preloader/Preloader"

export default function TDS() {
    const newGames = useGetDataByCategory(endpoints.games, "TDS");
    return (
      <main className="main-inner">
        {newGames ? (
          <CardsListSection id="TDS" title="Вид сверху" data={newGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }