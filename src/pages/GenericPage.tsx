import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

interface GenericPageProps {
  title: string;
  description: string;
  content: string;
}

const GenericPage = ({ title, description, content }: GenericPageProps) => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{description}</p>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-foreground/80">{content}</p>
          </div>

          <Card className="p-8 bg-primary text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
            <p className="mb-6 opacity-90">
              Contact us now to book your ride or get a free quote for your journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book" className="flex-1">
                <Button size="lg" variant="secondary" className="w-full">
                  Book Online
                </Button>
              </Link>
              <a href="tel:+919876543210" className="flex-1">
                <Button size="lg" variant="secondary" className="w-full gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;
