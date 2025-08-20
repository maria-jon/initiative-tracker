
type Character = {
  id: number;            // uuid
  name: string;
  initiative: number;    // 0..20
  hp: number;
  ac: number;
}


/*
  State {
    characters: Character[]    // can be unsorted; we’ll sort when needed
    activeIndex: number        // -1 when none; else 0..characters.length-1
    round: number              // starts at 1
    isSortedByInitDesc: bool   // toggled by Sort button, but we’ll mostly just force desc
  }
*/