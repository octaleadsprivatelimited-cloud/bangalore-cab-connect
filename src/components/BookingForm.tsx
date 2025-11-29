import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { Calendar, MapPin, Car } from "lucide-react";

interface BookingFormProps {
  inline?: boolean;
}

const BookingForm = ({ inline = false }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    tripType: "",
    vehicleType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.mobile || !formData.pickup || !formData.drop) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (formData.mobile.length < 10) {
      toast.error("Please enter a valid mobile number");
      return;
    }

    toast.success("Booking request submitted! We'll contact you shortly.");
    
    // Reset form
    setFormData({
      name: "",
      mobile: "",
      pickup: "",
      drop: "",
      date: "",
      time: "",
      tripType: "",
      vehicleType: "",
    });
  };

  const containerClass = inline
    ? "bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-xl"
    : "bg-card p-8 rounded-lg shadow-lg border";

  // For inline form, show only essential fields
  if (inline) {
    return (
      <form onSubmit={handleSubmit} className={containerClass}>
        <div className="space-y-2">
          <div>
            <Label htmlFor="name-inline" className="text-xs mb-0.5">Name *</Label>
            <Input
              id="name-inline"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-8 text-xs"
            />
          </div>

          <div>
            <Label htmlFor="mobile-inline" className="text-xs mb-0.5">Mobile *</Label>
            <Input
              id="mobile-inline"
              type="tel"
              placeholder="+91 73490 91759"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              required
              className="h-8 text-xs"
            />
          </div>

          <div>
            <Label htmlFor="pickup-inline" className="text-xs mb-0.5">Pickup *</Label>
            <div className="relative">
              <MapPin className="absolute left-2 top-2 w-3 h-3 text-muted-foreground" />
              <Input
                id="pickup-inline"
                placeholder="Pickup location"
                className="pl-7 h-8 text-xs"
                value={formData.pickup}
                onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="drop-inline" className="text-xs mb-0.5">Drop *</Label>
            <div className="relative">
              <MapPin className="absolute left-2 top-2 w-3 h-3 text-muted-foreground" />
              <Input
                id="drop-inline"
                placeholder="Drop location"
                className="pl-7 h-8 text-xs"
                value={formData.drop}
                onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                required
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full mt-3 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2 text-xs h-8"
        >
          <Car className="w-3 h-3 mr-1.5" />
          Book Now
        </Button>
      </form>
    );
  }

  // Full form for non-inline usage
  return (
    <form onSubmit={handleSubmit} className={containerClass}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="mobile">Mobile Number *</Label>
          <Input
            id="mobile"
            type="tel"
            placeholder="+91 73490 91759"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="pickup">Pickup Location *</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              id="pickup"
              placeholder="e.g., MG Road, Bangalore"
              className="pl-10"
              value={formData.pickup}
              onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="drop">Drop Location *</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              id="drop"
              placeholder="e.g., Bangalore Airport"
              className="pl-10"
              value={formData.drop}
              onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="date">Pickup Date</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              id="date"
              type="date"
              className="pl-10"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="time">Pickup Time</Label>
          <Input
            id="time"
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="tripType">Trip Type</Label>
          <Select value={formData.tripType} onValueChange={(value) => setFormData({ ...formData, tripType: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select trip type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="oneway">One Way</SelectItem>
              <SelectItem value="roundtrip">Round Trip</SelectItem>
              <SelectItem value="local">Local (8hrs/80km)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="vehicleType">Vehicle Type</Label>
          <Select value={formData.vehicleType} onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select vehicle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedan">Sedan (4 Seater)</SelectItem>
              <SelectItem value="suv">SUV (6-7 Seater)</SelectItem>
              <SelectItem value="luxury">Luxury Car</SelectItem>
              <SelectItem value="tempo">Tempo Traveller (12+ Seater)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 text-lg"
      >
        <Car className="w-5 h-5 mr-2" />
        Book Your Cab Now
      </Button>
    </form>
  );
};

export default BookingForm;
