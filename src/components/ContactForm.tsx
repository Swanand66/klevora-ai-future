import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CountrySelect } from "@/components/ui/country-select";
import { EmailAutocomplete } from "@/components/ui/email-autocomplete";
import { Check } from "lucide-react";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message must be less than 5000 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [countryCode, setCountryCode] = useState("+91");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setFormError(null);
    setIsSubmitting(true);

    try {
      // Add country code to phone number
      const dataWithCountryCode = {
        ...formData,
        phone: formData.phone.startsWith('+') ? formData.phone : `${countryCode}${formData.phone.replace(/^0+/, '')}`
      };
      
      // Client-side validation
      const validatedData = contactFormSchema.parse(dataWithCountryCode);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (payload?.errors) {
          setErrors(payload.errors);
        } else {
          setFormError(payload?.error || "Failed to send message. Please try again later.");
        }
        return;
      }

      // success
      setIsSuccess(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
        setIsSuccess(false);
      }, 3000);

    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.error("Contact submit error:", error);
        setFormError("Network error. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8 relative overflow-hidden shadow-lg">
      {/* Success Overlay */}
      {isSuccess && (
        <div className="absolute inset-0 bg-accent/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center animate-fade-in">
          <div className="relative">
            {/* Animated Circle */}
            <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center animate-scale-in">
              <Check className="w-12 h-12 text-white animate-fade-in" style={{ animationDelay: "0.2s" }} />
            </div>
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full border-4 border-white animate-ping opacity-75"></div>
          </div>
          <p className="text-white text-2xl font-bold mt-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Message Sent Successfully!
          </p>
          <p className="text-white/90 mt-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            We'll get back to you soon.
          </p>
        </div>
      )}

      {/* Form */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2 bg-gradient-to-r from-[hsl(280_85%_55%)] to-[hsl(320_95%_62%)] bg-clip-text text-transparent">Send Us a Message</h3>
        <p className="text-muted-foreground">Fill out the form below and we'll respond as soon as possible</p>
        {formError && <p className="text-sm text-destructive mt-3">{formError}</p>}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground font-medium">
            Name <span className="text-accent">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={`border-2 ${errors.name ? "border-destructive focus-visible:ring-destructive" : "border-border"}`}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium">
            Email <span className="text-accent">*</span>
          </Label>
          <div className="relative">
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={`border-2 ${errors.email ? "border-destructive focus-visible:ring-destructive" : "border-border"}`}
              disabled={isSubmitting}
            />
            <EmailAutocomplete
              value={formData.email}
              onChange={(value) => handleChange({ target: { name: 'email', value } } as any)}
              disabled={isSubmitting}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground font-medium">
            Phone Number <span className="text-accent">*</span>
          </Label>
          <div className="flex gap-2">
            <CountrySelect 
              value={countryCode}
              onChange={setCountryCode}
              disabled={isSubmitting}
            />
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="98765 43210"
              className={`border-2 flex-1 ${errors.phone ? "border-destructive focus-visible:ring-destructive" : "border-border"}`}
              disabled={isSubmitting}
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="message" className="text-foreground font-medium">
              How can we help? <span className="text-accent">*</span>
            </Label>
            <span className="text-sm text-foreground-muted">
              {formData.message.length}/5000
            </span>
          </div>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            rows={5}
            maxLength={5000}
            className={`resize-none border-2 ${errors.message ? "border-destructive focus-visible:ring-destructive" : "border-border"}`}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
           className="w-full btn-primary text-white font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
