import Image from "next/image"
import Link from "next/link"
import { Play, Download, Clock, BarChart3, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TopCharts() {
  return (
    <div className="pt-24">
      <section className="container-custom py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Top Charts</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover what's hot in African music. Browse our top charts to find trending beats across different genres
            and regions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-3/4">
            <div className="bg-white dark:bg-card-bg rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <TrendingUp size={24} className="text-primary" />
                  Trending This Week
                </h2>
                <div className="flex gap-4">
                  <select className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-1 text-sm">
                    <option>All Genres</option>
                    <option>Afrobeat</option>
                    <option>Amapiano</option>
                    <option>Highlife</option>
                    <option>Afro-House</option>
                  </select>
                  <select className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-1 text-sm">
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>All Time</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {trendingBeats.map((beat, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex-shrink-0 mr-3 font-bold text-xl w-8 text-center text-gray-400">
                      {index + 1}
                    </div>
                    <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                      <Image src={beat.image || "/placeholder.svg"} alt={beat.title} fill className="object-cover" />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium">{beat.title}</h3>
                      <p className="text-sm text-gray-500">
                        {beat.producer} • {beat.genre}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mx-4">
                      <Clock size={16} />
                      {beat.duration}
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                        <Play size={20} />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                        <Download size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline">View All Trending Beats</Button>
              </div>
            </div>
          </div>

          <div className="md:w-1/4">
            <div className="bg-white dark:bg-card-bg rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <BarChart3 size={20} className="text-primary" />
                Top Genres
              </h2>

              <div className="space-y-4">
                {topGenres.map((genre, index) => (
                  <Link
                    key={index}
                    href={`/genres/${genre.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="relative h-10 w-10 rounded-md overflow-hidden flex-shrink-0">
                      <Image src={genre.image || "/afr1.jpg"} alt={genre.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium">{genre.name}</h3>
                      <p className="text-xs text-gray-500">{genre.beatCount} beats</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-card-bg rounded-xl shadow-md p-6 mt-6">
              <h2 className="text-xl font-semibold mb-6">Top Producers</h2>

              <div className="space-y-4">
                {topProducers.map((producer, index) => (
                  <Link
                    key={index}
                    href={`/producers/${producer.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={producer.avatar || "/afr2.jpg"}
                        alt={producer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{producer.name}</h3>
                      <p className="text-xs text-gray-500">{producer.beatCount} beats</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">Regional Charts</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regionalCharts.map((region, index) => (
              <Link key={index} href={`/charts/${region.id}`} className="card overflow-hidden group h-64 relative">
                <Image
                  src={region.image || "/afr4.jpg"}
                  alt={region.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{region.name}</h3>
                  <p className="text-gray-300 text-sm">{region.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Data
const trendingBeats = [
  {
    title: "Lagos Nights",
    producer: "BeatMaster",
    genre: "Afrobeat",
    duration: "3:24",
    image: "/afr1.jpg",
  },
  {
    title: "Accra Groove",
    producer: "GhanaSound",
    genre: "Highlife",
    duration: "2:58",
    image: "/afr2.jpg",
  },
  {
    title: "Nairobi Flow",
    producer: "KenyaBeats",
    genre: "Gengetone",
    duration: "3:05",
    image: "/afr3.jpg",
  },
  {
    title: "Soweto Rhythm",
    producer: "SAProducer",
    genre: "Amapiano",
    duration: "4:12",
    image: "/afr5.jpg",
  },
  {
    title: "Cairo Nights",
    producer: "EgyptBeats",
    genre: "Mahraganat",
    duration: "3:47",
    image: "/afr7.jpg",
  },
  {
    title: "Abidjan Heat",
    producer: "IvoryCoast",
    genre: "Coupé-Décalé",
    duration: "3:30",
    image: "/afr9.jpg",
  },
  {
    title: "Lagos to London",
    producer: "AfriqueBeats",
    genre: "Afro Fusion",
    duration: "3:15",
    image: "/afr10.jpg",
  },
]

const topGenres = [
  {
    id: "afrobeat",
    name: "Afrobeat",
    beatCount: 245,
    image: "/afr1.jpg",
  },
  {
    id: "amapiano",
    name: "Amapiano",
    beatCount: 178,
    image: "/afr2.jpg",
  },
  {
    id: "highlife",
    name: "Highlife",
    beatCount: 120,
    image: "/afr3.jpg",
  },
  {
    id: "afro-house",
    name: "Afro House",
    beatCount: 156,
    image: "/afr4.jpg",
  },
  {
    id: "dancehall",
    name: "Dancehall",
    beatCount: 187,
    image: "/afr5.jpg",
  },
]

const topProducers = [
  {
    id: "beatmaster",
    name: "BeatMaster",
    beatCount: 78,
    avatar: "/afr5.jpg",
  },
  {
    id: "afriquebeats",
    name: "AfriqueBeats",
    beatCount: 65,
    avatar: "/afr6.jpg",
  },
  {
    id: "ghanasound",
    name: "GhanaSound",
    beatCount: 54,
    avatar: "/afr7.jpg",
  },
  {
    id: "kenyabeats",
    name: "KenyaBeats",
    beatCount: 47,
    avatar: "/afr8.jpg",
  },
  {
    id: "saproducer",
    name: "SAProducer",
    beatCount: 42,
    avatar: "/afr9.jpg",
  },
]

const regionalCharts = [
  {
    id: "west-africa",
    name: "West Africa",
    description: "Nigeria, Ghana, Ivory Coast & more",
    image: "/afr10.jpg",
  },
  {
    id: "east-africa",
    name: "East Africa",
    description: "Kenya, Tanzania, Uganda & more",
    image: "/afr11.jpg",
  },
  {
    id: "southern-africa",
    name: "Southern Africa",
    description: "South Africa, Angola, Mozambique & more",
    image: "/afr12.jpg",
  },
]

