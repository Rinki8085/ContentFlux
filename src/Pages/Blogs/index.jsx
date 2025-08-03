import { useState } from "react";
import { 
  FaCalendarAlt, 
  FaClock, 
  FaGlobe, 
  FaLightbulb, 
  FaFileAlt, 
  FaBalanceScale, 
  FaBolt, 
  FaBullseye 
} from "react-icons/fa";


const categories = [
  { name: "All Posts", active: true },
  { name: "Web Content", active: false },
  { name: "Copywriting", active: false },
  { name: "Legal Content", active: false },
  { name: "Product Descriptions", active: false },
  { name: "Technical Writing", active: false },
  { name: "SEO Tips", active: false },
]

const blogPosts = [
  {
    id: 1,
    title: "10 Web Content Writing Mistakes That Kill Conversions",
    excerpt:
      "Avoid these common pitfalls that prevent your website from converting visitors into customers. Learn what works and what doesn't.",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    category: "Web Content",
    categoryColor: "bg-blue-100 text-blue-800",
    bgColor: "bg-blue-50",
    icon: FaGlobe,
  },
  {
    id: 2,
    title: "Psychology-Driven Copywriting: How to Trigger Action",
    excerpt:
      "Master the psychological principles that make copy irresistible. Learn the triggers that convert readers to take action.",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    category: "Copywriting",
    categoryColor: "bg-orange-100 text-orange-800",
    bgColor: "bg-yellow-50",
    icon: FaLightbulb,
  },
  {
    id: 3,
    title: "SEO Content Writing in 2024: What Actually Works",
    excerpt:
      "Stay ahead of the curve with the latest SEO strategies that actually drive organic traffic and rankings in 2024.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "SEO",
    categoryColor: "bg-green-100 text-green-800",
    bgColor: "bg-green-50",
    icon: FaBullseye,
  },
  {
    id: 4,
    title: "Making Complex Technical Concepts Simple",
    excerpt:
      "Learn the art of translating complex technical information into clear, accessible content that anyone can understand.",
    date: "Dec 3, 2024",
    readTime: "8 min read",
    category: "Technical Writing",
    categoryColor: "bg-blue-100 text-blue-800",
    bgColor: "bg-blue-50",
    icon: FaFileAlt,
  },
  {
    id: 5,
    title: "Product Descriptions That Sell: A Complete Guide",
    excerpt: "Transform boring product descriptions into compelling copy that highlights benefits and drives sales.",
    date: "Dec 1, 2024",
    readTime: "6 min read",
    category: "Product Copy",
    categoryColor: "bg-pink-100 text-pink-800",
    bgColor: "bg-pink-50",
    icon: FaBolt,
  },
  {
    id: 6,
    title: "Legal Content Writing: Clarity in Complexity",
    excerpt:
      "Master the art of writing clear, accurate legal content that's both compliant and accessible to your target audience.",
    date: "Nov 28, 2024",
    readTime: "9 min read",
    category: "Legal Writing",
    categoryColor: "bg-purple-100 text-purple-800",
    bgColor: "bg-purple-50",
    icon: FaBalanceScale,
  },
]

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts")
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header Section */}
     <div
        className="relative py-16 md:pt-28 md:pb-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/blogImg.jpg')",
        }}
      >
        {/* Overlay for transparency */}
        <div className="absolute inset-0 bg-[#ffffffb3] bg-opacity-65"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#312e5f] mb-6">ContentFlux Blog</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Insights, tips, and strategies to elevate your content marketing game. Stay updated with the latest trends
            in content writing and digital marketing.
          </p>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-6 py-4 text-lg rounded-full border-0 shadow-lg focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:outline-none bg-[#F1EAFF] bg-opacity-90 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
      {/* Category Navigation */}
      <div className="bg-white py-6 lg:py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-base md:text-2xl font-semibold text-gray-700 mb-4 md:mb-6">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`rounded-full px-4 lg:px-6 py-2 text-sm lg:text-base font-medium transition-colors ${
                  activeCategory === category.name
                    ? "bg-[#312e5f] hover:bg-blue-800 text-white"
                    : "border border-gray-300 text-gray-600 hover:bg-gray-50 bg-white"
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="max-w-6xl mx-auto px-4 mb-8 lg:mb-12">
        <div className="bg-[#312e5f] text-white rounded-lg overflow-hidden shadow-lg">
          <div className="p-6 lg:p-8">
            <span className="inline-block bg-[#F1EAFF] text-[#312e5f] px-3 py-1 rounded-full text-xs lg:text-sm font-medium mb-3 lg:mb-4">
              Featured Article
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 leading-tight">
              The Ultimate Guide to Converting Website Copy That Sells
            </h2>
            <p className="text-purple-100 mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed">
              Discover the proven strategies and psychological triggers that turn website visitors into paying
              customers. Learn from real case studies and actionable tips.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-6 mb-4 lg:mb-6 text-[#F1EAFF] text-sm lg:text-base">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="w-4 h-4" />
                <span>December 12, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
              <span>Sarah Johnson</span>
            </div>
            <button className="bg-white text-[#312e5f] hover:bg-gray-100 text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-medium shadow-md">
              Read Full Article
            </button>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 mb-8 lg:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {blogPosts.map((post) => {
            const IconComponent = post.icon
            return (
              <div
                key={post.id}
                className={`${post.bgColor} rounded-[20px] hover:shadow-lg transition-shadow cursor-pointer overflow-hidden`}
              >
                <div className="">
                  <img src="/images/content.jpg" alt='image' className="w-full h-[250px]" />
                  <div className="p-5 lg:p-6">
                     <div className="flex flex-col sm:flex-row sm:items-center gap-2 lg:gap-4 text-xs lg:text-sm text-gray-600 mb-3">
                     <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-lg text-[#312e5f]" />
                        <span>{post.date}</span>
                     </div>
                     <div className="flex items-center gap-1">
                        <FaClock className="text-lg text-[#312e5f]" />
                        <span>{post.readTime}</span>
                     </div>
                     </div>
                     <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3 leading-tight">
                     {post.title}
                     </h3>
                     <p className="text-sm lg:text-base text-gray-700 mb-3 lg:mb-4 leading-relaxed">{post.excerpt}</p>
                     <div className="flex items-center justify-between">
                     <span className={`${post.categoryColor} px-3 py-1 rounded-full text-xs lg:text-sm font-medium`}>
                        {post.category}
                     </span>
                     </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center mb-16">
        <button className="bg-[#312e5f] text-white px-8 py-3 rounded-full font-medium transition-colors">
          Load More Articles
        </button>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
            Stay Updated with Content Insights
          </h2>
          <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8">
            Get weekly tips, strategies, and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 lg:px-6 lg:py-4 rounded-lg border border-gray-300 outline-none"
            />
            <button className="bg-[#312e5f] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-medium transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-xs lg:text-sm text-gray-500 mt-3 lg:mt-4">No spam, unsubscribe at any time.</p>
        </div>
      </div>
    </div>
  )
}
