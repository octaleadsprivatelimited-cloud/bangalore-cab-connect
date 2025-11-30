// Utility function to generate slug from route title
export const generateSlug = (title: string): string => {
  let slug = title
    .toLowerCase()
    .replace(/^cabs from\s*/gi, '')
    .replace(/\s*taxi service$/gi, '')
    .replace(/\s*taxi$/gi, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  // Handle special cases
  slug = slug.replace(/to\s+/g, 'to-');
  
  return slug;
};

// Extract from and to cities from title
export const extractCities = (title: string): { from: string; to: string } => {
  const cleanTitle = title.replace(/Cabs From\s*/gi, '').replace(/\s*Taxi Service/gi, '');
  
  // Handle "X to Y" pattern
  if (cleanTitle.includes(' to ')) {
    const parts = cleanTitle.split(' to ');
    return {
      from: parts[0].trim(),
      to: parts[1].trim(),
    };
  }
  
  // Handle "X to Y" with different casing
  if (cleanTitle.includes(' To ')) {
    const parts = cleanTitle.split(' To ');
    return {
      from: parts[0].trim(),
      to: parts[1].trim(),
    };
  }
  
  // Default: assume it's a destination from Bangalore
  return {
    from: 'Bangalore',
    to: cleanTitle.trim(),
  };
};

// Generate content based on route
export const generateContent = (from: string, to: string, title: string): string => {
  const isFromBangalore = from.toLowerCase().includes('bangalore');
  const isToBangalore = to.toLowerCase().includes('bangalore');
  
  if (title.toLowerCase().includes('outstation cabs')) {
    return `Book reliable outstation cab service in ${to}. RM Cabs offers comfortable and safe taxi services for outstation trips. Choose from sedan, SUV, or luxury vehicles. Professional drivers, GPS tracking, and 24/7 support. Book now for the best rates!`;
  }
  
  if (title.toLowerCase().includes('taxi service in')) {
    return `Looking for reliable taxi service in ${to}? RM Cabs provides premium cab services including local rides, airport transfers, and outstation trips. Professional drivers, well-maintained vehicles, and transparent pricing. Book your ride today!`;
  }
  
  if (isFromBangalore && !isToBangalore) {
    return `Book a comfortable cab from ${from} to ${to} with RM Cabs. Enjoy a safe and reliable journey with our professional drivers and well-maintained vehicles. We offer sedan, SUV, and luxury car options. GPS tracking, 24/7 support, and transparent pricing. Book now for instant confirmation!`;
  }
  
  if (!isFromBangalore && isToBangalore) {
    return `Travel from ${from} to ${to} with RM Cabs. Reliable taxi service with professional drivers and comfortable vehicles. Book sedan, SUV, or luxury cars. GPS tracking, safe rides, and best prices guaranteed. Call now or book online!`;
  }
  
  return `Book premium taxi service from ${from} to ${to} with RM Cabs. Professional drivers, GPS-tracked vehicles, and 24/7 customer support. Choose from sedan, SUV, or luxury cars. Transparent pricing with no hidden charges. Book your ride today!`;
};

// Generate meta description
export const generateMetaDescription = (from: string, to: string, title: string): string => {
  if (title.toLowerCase().includes('outstation cabs')) {
    return `Book outstation cabs in ${to} with RM Cabs. Reliable taxi service for outstation trips. Professional drivers, GPS tracking, 24/7 support. Best rates guaranteed. Call +91 73490 91759.`;
  }
  
  if (title.toLowerCase().includes('taxi service in')) {
    return `Premium taxi service in ${to} by RM Cabs. Local rides, airport transfers, outstation trips. Professional drivers, safe vehicles, transparent pricing. Book now!`;
  }
  
  return `Book ${from} to ${to} taxi with RM Cabs. Safe, reliable cab service with professional drivers. GPS tracking, 24/7 support, best prices. Call +91 73490 91759 or book online now!`;
};

// Estimate distance and time (rough estimates for common routes)
export const estimateRouteInfo = (from: string, to: string): { distance?: string; time?: string; price?: string } => {
  const fromLower = from.toLowerCase();
  const toLower = to.toLowerCase();
  
  // Common route estimates (these are rough estimates)
  const routeEstimates: Record<string, { distance: string; time: string; price: string }> = {
    'bangalore-mysore': { distance: '150 km', time: '3 hours', price: '₹2,400' },
    'bangalore-coorg': { distance: '270 km', time: '5.5 hours', price: '₹4,300' },
    'bangalore-ooty': { distance: '280 km', time: '6 hours', price: '₹4,500' },
    'bangalore-tirupati': { distance: '250 km', time: '4 hours', price: '₹4,000' },
    'bangalore-mangalore': { distance: '350 km', time: '7 hours', price: '₹5,600' },
    'bangalore-chennai': { distance: '350 km', time: '6 hours', price: '₹5,600' },
    'bangalore-hyderabad': { distance: '570 km', time: '9 hours', price: '₹9,100' },
    'bangalore-goa': { distance: '560 km', time: '9 hours', price: '₹8,900' },
    'bangalore-pune': { distance: '850 km', time: '13 hours', price: '₹13,600' },
    'bangalore-mumbai': { distance: '850 km', time: '14 hours', price: '₹13,600' },
  };
  
  const key = `${fromLower}-${toLower}`;
  const reverseKey = `${toLower}-${fromLower}`;
  
  if (routeEstimates[key]) {
    return routeEstimates[key];
  }
  
  if (routeEstimates[reverseKey]) {
    return routeEstimates[reverseKey];
  }
  
  // Return undefined if no estimate available
  return {};
};
