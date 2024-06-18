export const songs = [
  {
    cover: "/cover/bubble-gum.jpg",
    title: "Bubble Gum",
    artist: "NewJeans",
    duration: 200,
  },
  {
    cover: "/cover/cool-with-you.jpg",
    title: "Cool With You",
    artist: "NewJeans",
    duration: 134,
  },
  {
    cover: "/cover/hype-boy.jpg",
    title: "Hype Boy",
    artist: "NewJeans",
    duration: 146,
  },
]

export type Song = typeof songs[number]
