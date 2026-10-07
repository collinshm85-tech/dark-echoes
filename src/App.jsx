import { useState } from "react";
import { episodeList } from "./data.js";

export default function App() {
  const state = episodeList;
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  console.log(state);

  return (
    <main>

      <section>
        <h1>Dark Echoes</h1>
        <h2>Episodes</h2>

        {state.map((episode) => {
          return (
            <p
              className="clicked" 
              key={episode.id}
              onClick={() => setSelectedEpisode(episode)}
            >
              {episode.title}
            </p>
          );
        })}
      </section>

      <section>
        {selectedEpisode ? (
          <>
            <h2>{selectedEpisode.title}</h2>
            <p>{selectedEpisode.description}</p>
          </>
        ) : (
          <p>Please click on an episode to learn more</p>
        )}
      </section>

    </main>
  );
}