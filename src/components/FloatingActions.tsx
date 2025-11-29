import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  const phoneNumber = "+917349091759";
  const whatsappMessage = "Hi, I'd like to book a cab in Bangalore";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg hover-lift floating-button transition-all"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover-lift floating-button transition-all"
        style={{ animationDelay: '0.2s' }}
        aria-label="Call us now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingActions;
