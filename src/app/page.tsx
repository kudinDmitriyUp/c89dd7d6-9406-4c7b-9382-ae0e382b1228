"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitStacked from '@/components/sections/hero/HeroSplitStacked';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import { Award, Building, User, Heart, Smile, Activity, Sparkles, Shield } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="large"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            {"name": "Services", "id": "feature"},
            {"name": "Treatments", "id": "product"},
            {"name": "About", "id": "about"},
            {"name": "Testimonials", "id": "testimonial"},
            {"name": "Pricing", "id": "pricing"}
          ]}
          brandName="Elite Cosmetic Surgery"
          button={{
            "text": "Book Consultation",
            "href": "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplitStacked
          title="Transform Your Confidence with Expert Care"
          description="Experience world-class cosmetic surgery with our board-certified surgeons. We combine artistry with advanced techniques to help you achieve your aesthetic goals safely and beautifully."
          tag="Expert Cosmetic Surgery"
          mediaItems={[
            {
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474308963-431b7l11.jpg",
              "imageAlt": "Modern cosmetic surgery clinic"
            },
            {
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474309624-yg5y9s89.jpg",
              "imageAlt": "Professional cosmetic surgeon"
            },
            {
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474310305-9wmexcf0.jpg",
              "imageAlt": "Cosmetic surgery procedure"
            },
            {
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474310823-ewvfgud3.jpg",
              "imageAlt": "Advanced surgical techniques"
            }
          ]}
          stackedVariant="card"
          imagePosition="right"
          buttons={[
            {"text": "Schedule Consultation", "href": "contact"},
            {"text": "View Procedures", "href": "product"}
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAbout
          title="Excellence in Cosmetic Surgery"
          description="Our clinic combines decades of experience with cutting-edge technology to deliver exceptional results. We are committed to patient safety, natural-looking outcomes, and personalized care."
          tag="Why Choose Us"
          bulletPoints={[
            {
              "title": "Board-Certified Surgeons",
              "description": "Our team consists of highly trained, board-certified plastic surgeons with extensive experience in cosmetic procedures.",
              "icon": Award
            },
            {
              "title": "State-of-the-Art Facility",
              "description": "We operate in a fully accredited surgical facility equipped with the latest medical technology and safety protocols.",
              "icon": Building
            },
            {
              "title": "Personalized Treatment Plans",
              "description": "Every patient receives a customized treatment plan designed to achieve their unique aesthetic goals and expectations.",
              "icon": User
            },
            {
              "title": "Comprehensive Aftercare",
              "description": "We provide detailed post-operative care and support to ensure optimal healing and long-lasting results.",
              "icon": Heart
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474309624-yg5y9s89.jpg"
          imageAlt="Expert cosmetic surgeon"
          imagePosition="right"
          buttons={[
            {"text": "Meet Our Team", "href": "team"},
            {"text": "Our Credentials", "href": "about"}
          ]}
          textboxLayout="default"
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardFive
          title="Comprehensive Cosmetic Services"
          description="We offer a full range of surgical and non-surgical procedures to enhance your natural beauty"
          tag="Our Services"
          features={[
            {"title": "Facial Procedures", "icon": Smile},
            {"title": "Body Contouring", "icon": Activity},
            {"title": "Breast Surgery", "icon": Heart},
            {"title": "Non-Surgical Treatments", "icon": Sparkles},
            {"title": "Reconstructive Surgery", "icon": Shield}
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
          showIconBoxBackground={true}
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardTwo
          title="Popular Treatment Options"
          description="Explore our most requested cosmetic procedures with proven results"
          tag="Featured Treatments"
          products={[
            {
              "id": "facelift",
              "brand": "Elite Surgery",
              "name": "Facelift & Neck Lift",
              "price": "From $15,000",
              "rating": 5,
              "reviewCount": "127",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474313363-u84jmx9h.jpg",
              "imageAlt": "Facelift surgery results"
            },
            {
              "id": "rhinoplasty",
              "brand": "Elite Surgery",
              "name": "Rhinoplasty (Nose Job)",
              "price": "From $8,500",
              "rating": 5,
              "reviewCount": "89",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474314205-eo2s1840.jpg",
              "imageAlt": "Rhinoplasty surgery results"
            },
            {
              "id": "liposuction",
              "brand": "Elite Surgery",
              "name": "Liposuction & Body Sculpting",
              "price": "From $6,000",
              "rating": 5,
              "reviewCount": "156",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474315104-b8njkl2w.jpg",
              "imageAlt": "Liposuction body contouring results"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Consultation Options"
          description="Start your transformation journey with a personalized consultation"
          tag="Get Started"
          plans={[
            {
              "id": "virtual",
              "badge": "Most Convenient",
              "price": "$250",
              "subtitle": "Perfect for initial assessment and planning",
              "buttons": [
                {"text": "Book Virtual", "href": "contact"},
                {"text": "Learn More", "href": "pricing"}
              ],
              "features": [
                "45-minute video consultation",
                "Personalized treatment recommendations",
                "Digital facial analysis",
                "Follow-up consultation included"
              ]
            },
            {
              "id": "in-person",
              "badge": "Most Popular",
              "badgeIcon": Sparkles,
              "price": "$350",
              "subtitle": "Comprehensive evaluation with our surgeons",
              "buttons": [
                {"text": "Schedule In-Person", "href": "contact"},
                {"text": "Contact Us", "href": "contact"}
              ],
              "features": [
                "90-minute comprehensive consultation",
                "3D imaging and simulation",
                "Detailed treatment planning",
                "Facility tour included",
                "Post-consultation support"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Patient Success Stories"
          description="Real experiences from our satisfied patients"
          tag="Testimonials"
          testimonials={[
            {
              "id": "1",
              "name": "Sarah Johnson",
              "role": "Marketing Executive",
              "company": "Age 34",
              "rating": 5,
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474315934-lsjwdr2t.jpg",
              "imageAlt": "Happy patient Sarah Johnson"
            },
            {
              "id": "2",
              "name": "Michelle Chen",
              "role": "Business Owner",
              "company": "Age 42",
              "rating": 5,
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474316457-k3puwogt.jpg",
              "imageAlt": "Satisfied patient Michelle Chen"
            },
            {
              "id": "3",
              "name": "Emily Rodriguez",
              "role": "Teacher",
              "company": "Age 29",
              "rating": 5,
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474317130-w814fulw.jpg",
              "imageAlt": "Confident patient Emily Rodriguez"
            },
            {
              "id": "4",
              "name": "Amanda Foster",
              "role": "Designer",
              "company": "Age 38",
              "rating": 5,
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474318280-nw7s72vv.jpg",
              "imageAlt": "Happy patient Amanda Foster"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
      
      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted & Accredited"
          description="We are certified by leading medical organizations and boards"
          tag="Certifications"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474319008-97bgsiwx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474319519-lmiv8x9x.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474320241-1r8vf9xv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474321165-ex8jjvrd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474321956-tzr3k7js.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474322932-f8hcbq7x.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763474323772-d36y9fut.jpg"
          ]}
          textboxLayout="default"
          speed={30}
          showCard={true}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Begin Your Transformation?"
          description="Schedule your consultation today and take the first step toward achieving your aesthetic goals with our expert team."
          inputPlaceholder="Enter your email address"
          buttonText="Book Consultation"
          termsText="By submitting, you agree to receive consultation information and updates about our services."
        />
      </div>
    </ThemeProvider>
  );
}