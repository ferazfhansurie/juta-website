import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from 'react-router-dom';

function Sponsors() {
  const navigate = useNavigate();
  const sponsorImages = [
    'https://assets.cdn.filesafe.space/LckX7xmrOUBw8j9G2nUr/media/66ab34c8e33315b9eca1ef66.png',
    'https://firebasestorage.googleapis.com/v0/b/onboarding-a5fcb.appspot.com/o/Image%20with%20removed%20background.png?alt=media&token=6491f11f-6241-4fea-b331-b421b9833468',
    'https://firebasestorage.googleapis.com/v0/b/onboarding-a5fcb.appspot.com/o/Image%20with%20removed%20background%20(1).png?alt=media&token=f30075ad-bc33-4d00-aadd-273cb35f1750',
    'https://firebasestorage.googleapis.com/v0/b/onboarding-a5fcb.appspot.com/o/Upload%20Image%20removebg-preview.png?alt=media&token=4bc39adc-63f2-41e9-889f-187d612ba12c',
    'https://assets.cdn.filesafe.space/LckX7xmrOUBw8j9G2nUr/media/66ab36268899dc12dc80f4c1.png',
    'https://firebasestorage.googleapis.com/v0/b/onboarding-a5fcb.appspot.com/o/RemoveBG%20Preview.png?alt=media&token=bd9e20c7-4644-4fb9-b618-f71269f1900e',
    'https://assets.cdn.filesafe.space/LckX7xmrOUBw8j9G2nUr/media/66ab40fea7243b020ee1f58f.png'
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [ // Added responsive settings
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        }
      }
    ]
  };

  return (
    <div className="sponsor-carousel px-4"> {/* Added padding for the carousel */}
      <Slider {...settings}>
        {sponsorImages.map((url, index) => (
          <div key={index} className="px-2">
            <Card 
              className="h-40 w-full max-w-xs mx-auto flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow duration-300 bg-slate-500 dark:bg-gray-900"
              onClick={() => navigate('/case-studies')}
            >
              <CardContent className="p-4 flex items-center justify-center h-full w-full">
                <img src={url} alt={`Sponsor ${index + 1}`} className="max-h-full max-w-full object-contain" />
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export const SponsorsComponent = () => {
  const navigate = useNavigate();

  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-2xl lg:text-4xl font-bold mb-8 text-primary dark:text-white">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Trusted
        </span>{' '}
        By Businesses in Malaysia by Malaysians 🇲🇾 
      </h2>
      <Sponsors />
      <div className="mt-16 text-center">
        <Button onClick={() => navigate('/case-studies')} size="lg">
          View All Case Studies
        </Button>
      </div>
    </section>
  );
};