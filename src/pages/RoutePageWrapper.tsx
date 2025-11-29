import { useParams } from "react-router-dom";
import RoutePage from "./RoutePage";
import { getRouteBySlug, routes } from "@/data/routes";
import NotFound from "./NotFound";
import { useEffect } from "react";

const RoutePageWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    // Debug: Log available routes (only in development)
    if (import.meta.env.DEV && slug) {
      console.log('Looking for route with slug:', slug);
      console.log('Total routes available:', routes.length);
      const found = getRouteBySlug(slug);
      console.log('Route found:', found ? found.title : 'NOT FOUND');
    }
  }, [slug]);
  
  if (!slug) {
    return <NotFound />;
  }
  
  const route = getRouteBySlug(slug);
  
  if (!route) {
    return <NotFound />;
  }
  
  return (
    <RoutePage
      title={route.title}
      from={route.from}
      to={route.to}
      distance={route.distance}
      time={route.time}
      price={route.price}
      description={route.description}
      content={route.content}
      metaDescription={route.metaDescription}
    />
  );
};

export default RoutePageWrapper;

