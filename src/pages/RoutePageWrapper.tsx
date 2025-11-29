import { useParams } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";
import { getRouteBySlug } from "@/data/routes";
import NotFound from "./NotFound";

// Lazy load RoutePage component
const RoutePage = lazy(() => import("./RoutePage"));

const RoutePageWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Memoize route lookup to avoid re-computation
  const route = useMemo(() => {
    if (!slug) return null;
    return getRouteBySlug(slug);
  }, [slug]);
  
  if (!slug || !route) {
    return <NotFound />;
  }
  
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    }>
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
    </Suspense>
  );
};

export default RoutePageWrapper;

