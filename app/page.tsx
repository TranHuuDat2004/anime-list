"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Image from "next/image"

const animeList = [
  {
    id: 1,
    title: "Demon Slayer",
    rating: 10.0,
    year: 2013,
    episodes: 26,
    status: "Session 1",
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"],
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-WBsBl0ClmgYL.jpg",
    description: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
  },
  {
    id: 2,
    title: "Attack On Titan",
    rating: 10.0,
    year: 2013,
    episodes: 25,
    status: "Session 1",
    genres: ["Action", "Drama", "Fantasy", "Mystery"],
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-buvcRTBx4NSm.jpg",
    description: "Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans. Flash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.",
  },
  {
    id: 3,
    title: "Re:Zero - Starting Life in Another World",
    rating: 10,
    year: 2016,
    episodes: 25,
    status: "Session 1",
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Psychological", "Romance", "Thriller"],
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21355-wRVUrGxpvIQQ.jpg",
    description: "In the story, Subaru Natsuki is an ordinary high school student who is lost in an alternate world, where he is rescued by a beautiful, silver-haired girl. He stays near her to return the favor, but the destiny she is burdened with is more than Subaru can imagine. Enemies attack one by one, and both of them are killed. He then finds out he has the power to rewind death, back to the time he first came to this world. But only he remembers what has happened since.",
  },
  {
    id: 4,
    title: "Blue Box",
    rating: 10.0,
    year: 2024,
    episodes: 25,
    status: "ONA",
    genres: ["Romance", "Slice of Life", "Sports"],
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx170942-KKcLfQzV57nG.jpg",
    description: "Taiki Inomata loves badminton, but he has a long way to go before he can reach nationals. When Taiki sees upperclassman Chinatsu Kano practicing her heart out on the girls’ basketball team, he falls for her hard. After an unexpected turn of events brings the two closer together, sports might not be the first thing on their minds anymore!",
  },
  {
    id: 5,
    title: "Jujutsu Kaisen",
    rating: 9.0,
    year: 2000,
    episodes: 24,
    status: "Session 1",
    genres: ["Action", "Drama", "Supernatural"],
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113415-LHBAeoZDIsnF.jpg",
    description: "Hardship, regret, shame: the negative feelings that humans feel become Curses that lurk in our everyday lives. The Curses run rampant throughout the world, capable of leading people to terrible misfortune and even death. What's more, the Curses can only be exorcised by another Curse.",
  },
  {
    id: 6,
    title: "Tying the Knot with an Amagami Sister",
    rating: 9.5,
    year: 2024,
    episodes: 24,
    status: "Session 1",
    genres: ["Comedy", "Drama", "Ecchi", "Romance", "Supernatural"],
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx164172-GY2aqItIuqtR.jpg",
    description: "Uryuu Kamihate is a high school student striving to enter Kyoto University’s medical school. After being raised at an orphanage, Uryuu is taken in by the chief priest at Amagami Shrine, where he begins to live as a freeloader—and to cohabit with Yae, Yuna, and Asahi, the three beautiful shrine maiden sisters! What’s more, the condition he must meet in order to live at the shrine for free is to marry into the family and inherit the shrine! How will Uryuu overcome his marriage meetings with the three sisters as well as the many challenges that Amagami Shrine faces? So begins a miraculous rom-com about living under the same roof with three shrine maidens!",
  },
  {
    id: 7,
    title: "Your lie in April",
    rating: 10.0,
    year: 2014,
    episodes: 22,
    status: "TV/OVA",
    genres: ["Drama", "Music", "Romance", "Slice of Life"],
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20665-TLgkL8T8IRFd.png",
    description: "Piano prodigy Arima Kousei dominated the competition and all child musicians knew his name. But after his mother, who was also his instructor, passed away, he had a mental breakdown while performing at a recital. This resulted in him no longer being able to hear the sound of his piano playing. Two years later, Kousei hasn’t touched the piano and views the world without any flair or color. He was content at living out his life with his good friends Tsubaki and Watari until, one day, a girl changed everything. Miyazono Kaori is a pretty, free spirited violinist whose playing style reflects her personality. Kaori helps Kousei return to the music world and show that it should be free and mold breaking unlike the structured and rigid style Kousei was used to.",
  },
  {
    id: 8,
    title: "ATRI: My Dear Moments",
    rating: 9.4,
    year: 2024,
    episodes: 13,
    status: "TV/OVA",
    genres: ["Drama", "Romance", "Sci-Fi"],
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154963-Ju6Ey3P5YHs2.jpg",
    description: "In the near future, a sudden and unexplained sea rise has left much of human civilization underwater. Ikaruga Natsuki, a boy who lost his mother and one of his legs in an accident some years earlier, returns disillusioned from a harsh life in the big city to find his old countryside home half-swallowed by the sea. Left without a family, all he has to his name is the ship and submarine left to him by his oceanologist grandmother, and her debts. His only hope to restore the dreams for the future that he has lost is to take up an opportunity presented to him by the suspicious debt collector Catherine. They set sail to search the sunken ruins of his grandmother's laboratory in order to find a treasure rumor says she left there. But what they find is not riches or jewels; it is a strange girl lying asleep in a coffin at the bottom of the sea, Atri. Atri is a robot, but her appearance and her wealth of emotions would fool anyone into thinking she's a living, breathing human being. In gratitude for being salvaged, she makes a declaration to Natsuki.",
  },
  {
    id: 9,
    title: "Fullmetal Alchemist: Brotherhood",
    rating: 9.5,
    year: 2009,
    episodes: 64,
    status: "Completed",
    genres: ["Action", "Adventure", "Drama"],
    image: "/placeholder.svg?height=300&width=200",
    description: "Two brothers search for the Philosopher's Stone to restore their bodies.",
  },
  {
    id: 10,
    title: "Hunter x Hunter",
    rating: 9.2,
    year: 2011,
    episodes: 148,
    status: "Completed",
    genres: ["Action", "Adventure", "Fantasy"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A young boy searches for his father and becomes a Hunter.",
  },
  {
    id: 11,
    title: "Jujutsu Kaisen",
    rating: 8.8,
    year: 2020,
    episodes: 24,
    status: "Ongoing",
    genres: ["Action", "Supernatural", "School"],
    image: "/placeholder.svg?height=300&width=200",
    description: "Students fight cursed spirits in a supernatural world.",
  },
  {
    id: 12,
    title: "One Punch Man",
    rating: 8.6,
    year: 2015,
    episodes: 24,
    status: "Ongoing",
    genres: ["Action", "Comedy", "Superhero"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A hero who can defeat any enemy with a single punch.",
  },
  {
    id: 13,
    title: "Tokyo Ghoul",
    rating: 8.1,
    year: 2014,
    episodes: 48,
    status: "Completed",
    genres: ["Action", "Horror", "Supernatural"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A college student becomes a half-ghoul after a deadly encounter.",
  },
  {
    id: 14,
    title: "Mob Psycho 100",
    rating: 8.9,
    year: 2016,
    episodes: 37,
    status: "Completed",
    genres: ["Action", "Comedy", "Supernatural"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A psychic middle schooler tries to live a normal life.",
  },
  {
    id: 15,
    title: "Violet Evergarden",
    rating: 8.5,
    year: 2018,
    episodes: 13,
    status: "Completed",
    genres: ["Drama", "Fantasy", "Slice of Life"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A former soldier learns to write letters and understand emotions.",
  },
  {
    id: 16,
    title: "Chainsaw Man",
    rating: 8.7,
    year: 2022,
    episodes: 12,
    status: "Ongoing",
    genres: ["Action", "Horror", "Supernatural"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A young man merges with a chainsaw devil to hunt other devils.",
  },
  {
    id: 17,
    title: "Spy x Family",
    rating: 8.8,
    year: 2022,
    episodes: 25,
    status: "Ongoing",
    genres: ["Action", "Comedy", "Family"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A spy, assassin, and telepath form a fake family for their missions.",
  },
  {
    id: 18,
    title: "Bleach",
    rating: 8.2,
    year: 2004,
    episodes: 366,
    status: "Completed",
    genres: ["Action", "Supernatural", "Adventure"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A teenager gains Soul Reaper powers to protect the living world.",
  },
  {
    id: 19,
    title: "Dragon Ball Z",
    rating: 8.7,
    year: 1989,
    episodes: 291,
    status: "Completed",
    genres: ["Action", "Adventure", "Martial Arts"],
    image: "/placeholder.svg?height=300&width=200",
    description: "Goku and friends defend Earth from powerful enemies.",
  },
  {
    id: 20,
    title: "Code Geass",
    rating: 9.0,
    year: 2006,
    episodes: 50,
    status: "Completed",
    genres: ["Drama", "Mecha", "Military"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A prince gains the power of absolute obedience to rebel against an empire.",
  },
  {
    id: 21,
    title: "Cowboy Bebop",
    rating: 8.8,
    year: 1998,
    episodes: 26,
    status: "Completed",
    genres: ["Action", "Adventure", "Space"],
    image: "/placeholder.svg?height=300&width=200",
    description: "Bounty hunters travel through space in search of criminals.",
  },
  {
    id: 22,
    title: "Neon Genesis Evangelion",
    rating: 8.5,
    year: 1995,
    episodes: 26,
    status: "Completed",
    genres: ["Action", "Drama", "Mecha"],
    image: "/placeholder.svg?height=300&width=200",
    description: "Teenagers pilot giant mechs to fight mysterious beings called Angels.",
  },
  {
    id: 23,
    title: "JoJo's Bizarre Adventure",
    rating: 8.6,
    year: 2012,
    episodes: 190,
    status: "Ongoing",
    genres: ["Action", "Adventure", "Supernatural"],
    image: "/placeholder.svg?height=300&width=200",
    description: "Multiple generations of the Joestar family face supernatural threats.",
  },
  {
    id: 24,
    title: "Steins;Gate",
    rating: 9.1,
    year: 2011,
    episodes: 24,
    status: "Completed",
    genres: ["Drama", "Sci-Fi", "Thriller"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A group of friends discover time travel and face its consequences.",
  },
  {
    id: 25,
    title: "Princess Mononoke",
    rating: 8.9,
    year: 1997,
    episodes: 1,
    status: "Movie",
    genres: ["Adventure", "Drama", "Fantasy"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A young warrior gets involved in a struggle between forest gods and humans.",
  },
  {
    id: 26,
    title: "Akira",
    rating: 8.3,
    year: 1988,
    episodes: 1,
    status: "Movie",
    genres: ["Action", "Sci-Fi", "Thriller"],
    image: "/placeholder.svg?height=300&width=200",
    description: "In a dystopian future, a biker gang member gains psychic powers.",
  },
  {
    id: 27,
    title: "Ghost in the Shell",
    rating: 8.1,
    year: 1995,
    episodes: 1,
    status: "Movie",
    genres: ["Action", "Sci-Fi", "Thriller"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A cyborg policewoman hunts a mysterious hacker in a cyberpunk future.",
  },
  {
    id: 28,
    title: "Howl's Moving Castle",
    rating: 8.7,
    year: 2004,
    episodes: 1,
    status: "Movie",
    genres: ["Adventure", "Family", "Fantasy"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A young woman is cursed with old age and seeks help from a wizard.",
  },
  {
    id: 29,
    title: "My Neighbor Totoro",
    rating: 8.6,
    year: 1988,
    episodes: 1,
    status: "Movie",
    genres: ["Adventure", "Family", "Fantasy"],
    image: "/placeholder.svg?height=300&width=200",
    description: "Two sisters discover magical creatures in the countryside.",
  },
  {
    id: 30,
    title: "Kiki's Delivery Service",
    rating: 8.4,
    year: 1989,
    episodes: 1,
    status: "Movie",
    genres: ["Adventure", "Family", "Fantasy"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A young witch starts a delivery service in a new town.",
  },
  {
    id: 31,
    title: "Castle in the Sky",
    rating: 8.5,
    year: 1986,
    episodes: 1,
    status: "Movie",
    genres: ["Adventure", "Family", "Fantasy"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A boy and girl search for a legendary floating castle.",
  },
  {
    id: 32,
    title: "The Wind Rises",
    rating: 8.2,
    year: 2013,
    episodes: 1,
    status: "Movie",
    genres: ["Biography", "Drama", "Romance"],
    image: "/placeholder.svg?height=300&width=200",
    description: "The story of Jiro Horikoshi, designer of fighter aircraft in WWII.",
  },
  {
    id: 33,
    title: "Grave of the Fireflies",
    rating: 8.8,
    year: 1988,
    episodes: 1,
    status: "Movie",
    genres: ["Drama", "War"],
    image: "/placeholder.svg?height=300&width=200",
    description: "Two siblings struggle to survive during World War II in Japan.",
  },
  {
    id: 34,
    title: "Perfect Blue",
    rating: 8.4,
    year: 1997,
    episodes: 1,
    status: "Movie",
    genres: ["Drama", "Horror", "Thriller"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A pop idol's transition to acting leads to psychological horror.",
  },
  {
    id: 35,
    title: "Paprika",
    rating: 8.1,
    year: 2006,
    episodes: 1,
    status: "Movie",
    genres: ["Animation", "Mystery", "Sci-Fi"],
    image: "/placeholder.svg?height=300&width=200",
    description: "A device that allows therapists to enter patients' dreams is stolen.",
  },
  {
    id: 36,
    title: "Tokyo Godfathers",
    rating: 8.3,
    year: 2003,
    episodes: 1,
    status: "Movie",
    genres: ["Adventure", "Comedy", "Drama"],
    image: "/placeholder.svg?height=300&width=200",
    description: "Three homeless people find an abandoned baby on Christmas Eve.",
  },
]

const ITEMS_PER_PAGE = 12

export default function AnimePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [favorites, setFavorites] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const genres = ["All", ...Array.from(new Set(animeList.flatMap((anime) => anime.genres)))]

  const filteredAnime = animeList.filter((anime) => {
    const matchesSearch = anime.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === "All" || anime.genres.includes(selectedGenre)
    return matchesSearch && matchesGenre
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredAnime.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentAnime = filteredAnime.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre)
    setCurrentPage(1)
  }

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const goToPage = (page: number) => {
    setIsLoading(true)
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
    setTimeout(() => setIsLoading(false), 500)
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-green-900 via-green-800 to-indigo-900 overflow-hidden">
      {/* Transparent Image Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-black/10" />

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-float-slow animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-400/20 rounded-full blur-xl animate-float-medium animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl animate-float-fast animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-400/20 rounded-full blur-xl animate-float-slow animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-green-500/15 rounded-full blur-xl animate-float-medium animate-pulse" />
        <div className="absolute top-10 right-1/4 w-16 h-16 bg-green-300/15 rounded-full blur-xl animate-float-fast animate-pulse" />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-slide-right" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent animate-slide-down" />
      </div>

      {/* Header */}
      <header className="relative overflow-hidden bg-black/40 backdrop-blur-xl border-b border-white/30 sticky top-0 z-40 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-500/20 animate-gradient-shift" />
        <div className="relative container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg shadow-green-500/50">
                <img src={"rounded_avatar.png"} />
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-shimmer">
                Kanna Kamui
              </span>
            </div>

            {/* Enhanced Profile Button */}
            <Button
              onClick={() => window.open("https://me.akk1to.tech", "_blank")}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/50 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">My Profile</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />
            </Button>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden backdrop-blur-sm ">
        <div className="absolute inset-0 animate-gradient-shift" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-scale">
              <span className="bg-gradient-to-r from-green-400 via-green-400 to-blue-400 bg-clip-text text-transparent animate-gradient-text">
                Anime
              </span>{" "}
              <span className="relative">
                Collection
                <Sparkles className="absolute -top-2 -right-8 h-6 w-6 text-yellow-400 animate-spin-slow" />
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
              Discover amazing anime series and movies that I've watched and wanna share with you!
            </p>
          </div>
        </div>
      </section>

      <div className="relative container mx-auto px-4">
        {/* Enhanced Search and Filter */}
        <div className="space-y-4 mb-8">
          {/* Enhanced Search Row */}
          <div className="w-full">
            <div className="relative max-w-2xl mx-auto group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-green-400 transition-colors duration-300" />
              </div>
              <Input
                placeholder="Search anime..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-12 h-14 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 focus:bg-white/15 focus:border-green-400/50 transition-all duration-300 rounded-xl shadow-lg hover:shadow-green-500/25 focus:shadow-green-500/50 transform hover:scale-[1.02] focus:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>

          {/* Enhanced Filter Row */}
          <div className="flex justify-center">
            <div className="flex gap-2 flex-wrap justify-center">
              {genres.map((genre, index) => (
                <Button
                  key={genre}
                  variant={selectedGenre === genre ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleGenreChange(genre)}
                  className={`transition-all duration-300 rounded-lg transform hover:scale-105 hover:-translate-y-1 ${
                    selectedGenre === genre
                      ? "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg shadow-green-500/50"
                      : "bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/25"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {genre}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Results Info */}
        <div className="flex justify-between items-center mb-6 animate-fade-in">
          <p className="text-gray-400 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredAnime.length)} of {filteredAnime.length} anime
          </p>
          <p className="text-gray-400 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 flex items-center space-x-4">
              <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
              <span className="text-white text-lg">Loading...</span>
            </div>
          </div>
        )}

        {/* Enhanced Anime Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {currentAnime.map((anime, index) => (
            <Card
              key={anime.id}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/15 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50 animate-fade-in-up transform hover:-translate-y-2 hover:rotate-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-0 relative">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                <div className="relative overflow-hidden">
                  <Image
                    src={anime.image || "/placeholder.svg"}
                    alt={anime.title}
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Enhanced Overlay Controls */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                    <Button
                      size="sm"
                      onClick={() =>
                        window.open(
                          `https://anilist.co/search/anime?search=${encodeURIComponent(anime.title)}`,
                          "_blank",
                        )
                      }
                      className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-black hover:to-gray-900 text-white border-0 backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-all duration-500 px-4 py-2 flex items-center gap-2 shadow-lg hover:shadow-xl relative overflow-hidden"
                    >
                      <span className="relative z-10">View on Anilist</span>
                      <svg className="h-4 w-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                  </div>

                  {/* Enhanced Status Badge */}
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="secondary"
                      className={`text-xs font-medium backdrop-blur-sm transition-all duration-300 transform group-hover:scale-110 shadow-lg ${
                        anime.status === "Ongoing"
                          ? "bg-green-500/90 text-white shadow-green-500/50"
                          : anime.status === "Movie"
                            ? "bg-green-500/90 text-white shadow-green-500/50"
                            : "bg-blue-500/90 text-white shadow-blue-500/50"
                      }`}
                    >
                      {anime.status}
                    </Badge>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-bold text-white text-lg line-clamp-1 group-hover:text-green-300 transition-colors duration-300">
                      {anime.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                      {anime.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300 transform group-hover:scale-110">
                      <Star className="h-4 w-4 fill-current animate-pulse" />
                      <span className="font-medium">{anime.rating}</span>
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {anime.year}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <span>{anime.episodes} episodes</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {anime.genres.slice(0, 2).map((genre, genreIndex) => (
                      <Badge
                        key={genre}
                        variant="outline"
                        className="text-xs border-green-400/50 text-green-300 hover:bg-green-400/20 transition-all duration-300 group-hover:border-green-300/70 group-hover:text-green-200 transform hover:scale-110"
                        style={{
                          animationDelay: `${genreIndex * 100}ms`,
                        }}
                      >
                        {genre}
                      </Badge>
                    ))}
                    {anime.genres.length > 2 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-gray-400/50 text-gray-400 group-hover:border-gray-300/70 group-hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
                      >
                        +{anime.genres.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 animate-fade-in">
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => goToPage(page)}
                  className={`min-w-[40px] transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 ${
                    currentPage === page
                      ? "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg shadow-green-500/50"
                      : "bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:shadow-lg hover:shadow-green-500/25"
                  }`}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {filteredAnime.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
              <p className="text-gray-400 text-lg mb-4">No anime found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedGenre("All")
                }}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white transform hover:scale-105 transition-all duration-300"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Footer */}
      <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/30 mt-16 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-500/10 animate-gradient-shift" />
        <div className="relative container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Enhanced Logo and Description */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg shadow-green-500/50">
                  <img src={"rounded_avatar.png"} />
                </div>
                <span className="text-white font-bold text-xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Kanna Kamui
                </span>
              </div>
              <p className="text-gray-400 max-w-md">
                My watched anime list. All movie data sourced from AniList.
              </p>
            </div>

            {/* Enhanced Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Quick Links</h3>
              <ul className="space-y-2">
                <li key="Portfolio">
                    <a
                      href="https://me.akk1to.tech"
                      className="text-gray-400 hover:text-green-300 transition-all duration-300 transform hover:translate-x-2 inline-block"
                      // style={{ animationDelay: `${ 100}ms` }}
                    >
                      My portfolio
                    </a>
                  </li>
                  <li key="Facebook">
                    <a
                      href="https://facebook.com/hito.akk1to"
                      className="text-gray-400 hover:text-green-300 transition-all duration-300 transform hover:translate-x-2 inline-block"
                      // style={{ animationDelay: `${ 100}ms` }}
                    >
                      Facebook
                    </a>
                  </li>
                  <li key="Discord">
                    <a
                      href="https://discord.com/user/727497287777124414"
                      className="text-gray-400 hover:text-green-300 transition-all duration-300 transform hover:translate-x-2 inline-block"
                      // style={{ animationDelay: `${ 100}ms` }}
                    >
                      Discord
                    </a>
                  </li>
              </ul>
            </div>

            {/* Enhanced External Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">External</h3>
              <ul className="space-y-2">
                {[
                  { name: "My AniList Profile", url: "https://anilist.co/user/akkito", color: "green" },
                  { name: "AnimeVietsub", url: "https://bit.ly/animevietsubtv", color: "green" },
                ].map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 hover:text-${link.color}-300 transition-all duration-300 transform hover:translate-x-2 inline-block`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enhanced Bottom Bar */}
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">© 2025 akk1to.dev - All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Contact"].map((link, index) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-green-300 transition-all duration-300 text-sm transform hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
