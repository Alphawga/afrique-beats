import Image from "next/image"
import { Play, Star, Music2, BarChart, Download, Users, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
          <Image
            src="/afr4.jpg"
            alt="African musical performance"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Beats That Inspire. <br />
              <span className="text-primary">Sounds That Move.</span>
            </h1>
            <p className="text-xl mb-10 text-gray-200">
              Explore Africa's finest beats crafted by expert producers, designed to elevate your music.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-gold text-lg px-8 py-6">Discover Beats Now</Button>
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6"
              >
                <Play className="mr-2" /> Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Beats Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Top Beats Trending Now</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular beats that are trending among artists and producers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBeats.map((beat, index) => (
              <div key={index} className="card group">
                <div className="relative aspect-square bg-gradient-to-br from-primary/80 to-accent/80 overflow-hidden">
                  <Image
                    src={beat.image || "/placeholder.svg"}
                    alt={beat.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <Button className="rounded-full w-16 h-16 flex items-center justify-center">
                      <Play size={32} />
                    </Button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg truncate">{beat.title}</h3>
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 text-sm">{beat.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {beat.artist} | {beat.duration}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">{beat.genre}</p>
                  <Button className="w-full">Preview & Download</Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              View All Beats
            </Button>
          </div>
        </div>
      </section>

      {/* Extensive Beat Library Section */}
      <section className="section bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/afr7.jpg"
                  alt="African music producer in studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-sm uppercase tracking-wide mb-2">Featured Producer</p>
                    <h3 className="text-2xl font-bold">Ayo Beats</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Unlimited Beats Across All Genres</h2>
              <p className="text-lg mb-8">
                Explore millions of professionally curated beats tailored to your creative needs. From Afrobeat to
                Hip-Hop, Electronic to R&B, find the perfect rhythm to complement your sound.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {genres.map((genre, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 border border-primary/20 rounded-lg bg-white dark:bg-card-bg shadow-sm hover:border-primary transition-colors"
                  >
                    <Music2 className="text-primary mr-3" size={20} />
                    <span>{genre}</span>
                  </div>
                ))}
              </div>

              <Button className="btn-primary">Browse All Genres</Button>
            </div>
          </div>
        </div>
      </section>

      {/* User Engagement & Reviews Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Join Our Community & Share Your Feedback</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with thousands of artists and producers. Share your reviews, see what others are saying, and build
              lasting connections in the AfriqueBeats community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || "/afr8.jpg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                </div>
                <p className="text-gray-600">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="btn-secondary">
              Read Reviews & Comments
            </Button>
          </div>
        </div>
      </section>

      {/* Advanced Data Analytics Section */}
      <section className="section bg-gradient-to-r from-foreground to-foreground/90 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Optimize Your Music Strategy with Powerful Analytics</h2>
              <p className="text-lg mb-8">
                Gain valuable insights into beat performance, listener trends, and engagement metrics. Leverage our
                detailed analytics tools to refine your music production and marketing strategies.
              </p>

              <div className="space-y-6 mb-8">
                {analytics.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="btn-gold">Explore Analytics Tools</Button>
            </div>

            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/afr9.jpg"
                  alt="Analytics dashboard"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Subscription Plans Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Affordable Plans Tailored to Your Needs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your music production journey, whether you're just starting out or a seasoned
              professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card p-8 border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-2">Basic Plan</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-bold text-primary">₦15,000</span>
                <span className="text-gray-500 mb-1">/year</span>
              </div>
              <p className="text-gray-600 mb-6">Ideal for new creators starting their musical journey:</p>

              <ul className="space-y-3 mb-8">
                {basicPlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-accent mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full">Choose Basic Plan</Button>
            </div>

            <div className="card p-8 border-2 border-primary relative">
              <div className="absolute -top-4 right-8 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular Choice
              </div>

              <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-bold text-primary">₦75,000</span>
                <span className="text-gray-500 mb-1">/year</span>
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for professional producers and artists seeking unlimited access:
              </p>

              <ul className="space-y-3 mb-8">
                {premiumPlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-accent mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-primary hover:bg-primary/90">Choose Premium Plan</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="section gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Amplify Your Music?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied producers and artists who have transformed their sound with AfriqueBeats.
          </p>
          <Button className="btn-gold text-lg px-10 py-6">Get Started Now</Button>
        </div>
      </section>
    </div>
  )
}

// Data
const featuredBeats = [
  {
    title: "Mummy",
    artist: "AfriqueBeats Exclusive",
    duration: "0:31",
    genre: "Afrobeat, Dancehall",
    rating: 4.9,
    image: "/afr10.jpg",
  },
  {
    title: "Hot Shot",
    artist: "Gerrina Lin",
    duration: "0:12",
    genre: "Hip-Hop, Urban",
    rating: 4.7,
    image: "/afr11.jpg",
  },
  {
    title: "Find Soul",
    artist: "Rasomi Peli",
    duration: "0:08",
    genre: "Soul, RnB",
    rating: 4.8,
    image: "/afr12.jpg",
  },
  {
    title: "Deep Inside",
    artist: "Pimila Holli",
    duration: "0:11",
    genre: "House, Electronic",
    rating: 4.6,
    image: "/afr1.jpg",
  },
]

const genres = ["Afrobeat", "Amapiano", "Hip-Hop", "R&B", "Dancehall", "Highlife", "Traditional", "Fusion"]

const testimonials = [
  {
    name: "David Okafor",
    role: "Music Producer",
    avatar: "/afr1.jpg",
    rating: 5,
    text: "AfriqueBeats has transformed my production workflow. The quality of beats and the analytics tools are game-changers!",
  },
  {
    name: "Amara Konte",
    role: "Recording Artist",
    avatar: "/afr2.jpg",
    rating: 5,
    text: "Finding authentic African sounds used to be a challenge until I discovered AfriqueBeats. Now I have access to premium quality beats that truly represent our culture.",
  },
  {
    name: "Kwame Mensah",
    role: "Sound Engineer",
    avatar: "/afr3.jpg",
    rating: 4,
    text: "The diversity of beats available on AfriqueBeats is impressive. From traditional rhythms to modern fusions, it's a treasure trove for any music professional.",
  },
]

const analytics = [
  {
    icon: <BarChart size={24} className="text-primary" />,
    title: "Performance Tracking",
    description: "Monitor how your beats perform across different platforms and regions.",
  },
  {
    icon: <Users size={24} className="text-primary" />,
    title: "Audience Insights",
    description: "Understand your listener demographics and preferences.",
  },
  {
    icon: <Download size={24} className="text-primary" />,
    title: "Download Analytics",
    description: "Track downloads and usage patterns to optimize your beat creation.",
  },
  {
    icon: <Headphones size={24} className="text-primary" />,
    title: "Listening Trends",
    description: "Discover emerging trends in listening habits and popular genres.",
  },
]

const basicPlanFeatures = [
  "Access to Starter Beats",
  "Ad-Free Listening Experience",
  "Select Beat Downloads (Limited)",
  "Standard Audio Quality",
  "Reliable Customer Support",
]

const premiumPlanFeatures = [
  "Unlimited Beat Access",
  "Ad-Free Experience",
  "Unlimited High-Quality Downloads",
  "Priority Customer Support",
  "Professional Mixing & Mastering Services",
  "Exclusive & Non-Exclusive Licensing Options",
]

