import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BlogListing = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Tourist Places to Visit in Bangalore",
      excerpt: "Discover the best attractions, historical monuments, parks, and entertainment spots in Bangalore. Your complete guide to exploring the Garden City.",
      category: "Travel Guide",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "bg-gradient-to-br from-primary to-primary/60"
    },
    {
      id: 2,
      title: "Bangalore to Mysore: Complete Road Trip Guide",
      excerpt: "Everything you need to know about the Bangalore-Mysore highway, best stops, restaurants, and must-visit places on your journey.",
      category: "Road Trips",
      date: "Dec 10, 2024",
      readTime: "8 min read",
      image: "bg-gradient-to-br from-secondary to-secondary/60"
    },
    {
      id: 3,
      title: "How to Choose the Right Cab for Outstation Travel",
      excerpt: "Sedan vs SUV vs Tempo Traveller - which vehicle suits your trip? Expert tips on selecting the perfect cab for your journey.",
      category: "Tips & Tricks",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      image: "bg-gradient-to-br from-accent to-accent/60"
    },
    {
      id: 4,
      title: "Airport Taxi Etiquette: Do's and Don'ts",
      excerpt: "Make your airport transfers smooth with these essential tips for passengers. Learn about booking timing, luggage handling, and more.",
      category: "Travel Tips",
      date: "Nov 28, 2024",
      readTime: "3 min read",
      image: "bg-gradient-to-br from-primary/80 to-primary/40"
    },
    {
      id: 5,
      title: "Best Weekend Getaways from Bangalore Under 300 KM",
      excerpt: "Explore nearby hill stations, beaches, and heritage sites perfect for a quick weekend escape from Bangalore.",
      category: "Weekend Trips",
      date: "Nov 20, 2024",
      readTime: "6 min read",
      image: "bg-gradient-to-br from-secondary/80 to-secondary/40"
    },
    {
      id: 6,
      title: "Corporate Cab Services: Benefits for Businesses",
      excerpt: "Why companies are switching to professional cab services for employee transportation. Cost analysis and key benefits explained.",
      category: "Business",
      date: "Nov 15, 2024",
      readTime: "5 min read",
      image: "bg-gradient-to-br from-accent/80 to-accent/40"
    },
  ];

  const categories = ["All", "Travel Guide", "Road Trips", "Tips & Tricks", "Weekend Trips", "Business"];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Travel Blog & Tips
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert travel guides, destination insights, and cab booking tips to make your journey better
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 hover-scale"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          <Card className="mb-12 overflow-hidden hover-lift">
            <div className="grid lg:grid-cols-2">
              <div className={`${posts[0].image} p-12 flex items-center justify-center text-white`}>
                <div className="text-center">
                  <Badge variant="secondary" className="mb-4">Featured</Badge>
                  <h2 className="text-3xl font-bold">Latest Article</h2>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-3">{posts[0].category}</Badge>
                <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {posts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {posts[0].readTime}
                  </div>
                </div>
                <Link to="/blog/post-1">
                  <Button className="w-fit gap-2">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {posts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover-lift flex flex-col">
                <div className={`${post.image} h-48 flex items-center justify-center text-white`}>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Blog</div>
                    <div className="text-sm opacity-80">{post.category}</div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <Badge variant="outline" className="w-fit mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link to={`/blog/post-${post.id}`}>
                    <Button variant="outline" className="w-full gap-2">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter */}
          <Card className="p-8 bg-primary text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">Get Travel Tips in Your Inbox</h3>
            <p className="mb-6 opacity-90 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest travel guides, exclusive offers, and booking tips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-foreground"
              />
              <Button variant="secondary" size="lg">Subscribe</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;