import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { MapPin, Car } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useMemo, useEffect } from "react";
import type { RouteData } from "@/data/routes";

const AllRoutes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [routes, setRoutes] = useState<RouteData[]>([]);
  const [loading, setLoading] = useState(true);

  // Lazy load routes data
  useEffect(() => {
    import("@/data/routes").then((module) => {
      setRoutes(module.routes);
      setLoading(false);
    });
  }, []);

  // Memoize filtered routes for performance
  const filteredRoutes = useMemo(() => {
    if (!routes.length) return [];
    return routes.filter((route) =>
      route.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.to.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [routes, searchTerm]);

  // Memoize grouped routes for performance
  const groupedRoutes = useMemo(() => {
    if (!filteredRoutes.length) return {};
    return {
      "Bangalore to Destinations": filteredRoutes.filter((r) =>
        r.title.toLowerCase().startsWith("bangalore to") &&
        !r.title.toLowerCase().includes("taxi service in") &&
        !r.title.toLowerCase().includes("outstation cabs")
      ),
      "Cities to Bangalore": filteredRoutes.filter((r) =>
        r.title.toLowerCase().includes("to bangalore") &&
        !r.title.toLowerCase().startsWith("bangalore")
      ),
      "Outstation Cabs": filteredRoutes.filter((r) =>
        r.title.toLowerCase().includes("outstation cabs")
      ),
      "Taxi Service in Cities": filteredRoutes.filter((r) =>
        r.title.toLowerCase().includes("taxi service in")
      ),
      "Chennai Routes": filteredRoutes.filter((r) =>
        r.title.toLowerCase().startsWith("chennai to")
      ),
      "Coimbatore Routes": filteredRoutes.filter((r) =>
        r.title.toLowerCase().startsWith("coimbatore to")
      ),
      "Other Routes": filteredRoutes.filter((r) =>
        !r.title.toLowerCase().startsWith("bangalore to") &&
        !r.title.toLowerCase().includes("to bangalore") &&
        !r.title.toLowerCase().includes("outstation cabs") &&
        !r.title.toLowerCase().includes("taxi service in") &&
        !r.title.toLowerCase().startsWith("chennai to") &&
        !r.title.toLowerCase().startsWith("coimbatore to")
      ),
    };
  }, [filteredRoutes]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All Route Pages
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Browse all {routes.length} available taxi routes and services
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <Input
                type="text"
                placeholder="Search routes by city, destination, or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 text-lg"
              />
            </div>
            
            <div className="text-sm text-muted-foreground">
              Showing {filteredRoutes.length} of {routes.length} routes
            </div>
          </div>

          {/* Routes by Category */}
          {Object.entries(groupedRoutes).map(([category, categoryRoutes]) => {
            if (categoryRoutes.length === 0) return null;

            return (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  {category} ({categoryRoutes.length})
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categoryRoutes.map((route) => (
                    <Link key={route.slug} to={`/${route.slug}`}>
                      <Card className="p-4 hover-lift h-full transition-all hover:border-primary hover:shadow-lg cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Car className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm mb-1 line-clamp-2 leading-tight">
                              {route.title}
                            </h3>
                            <div className="text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span className="truncate">
                                  {route.from} → {route.to}
                                </span>
                              </div>
                            </div>
                            {route.distance && (
                              <div className="text-xs text-primary mt-1 font-medium">
                                {route.distance} • {route.time}
                              </div>
                            )}
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Empty State */}
          {filteredRoutes.length === 0 && (
            <Card className="p-12 text-center">
              <Car className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No routes found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms
              </p>
            </Card>
          )}

          {/* Summary */}
          <Card className="mt-12 p-8 bg-primary/5 border-primary/20">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {routes.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Routes
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {Object.keys(groupedRoutes).length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Categories
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Available
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AllRoutes;

