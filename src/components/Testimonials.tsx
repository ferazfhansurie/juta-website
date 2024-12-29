import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  company: string;
  position: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://apicms.mstar.com.my/uploads/images/2021/10/27/1345597.jpg",
    name: "Puan Anna Rosdijanti Ahmat Rusdi",
    userName: "@john_Doe",
    comment: "Juta Teknologi helped us understand customer acquisition better. It's been very useful for our business.",
    company: "BEANA HOME QURAN",
    position: "CEO"
  },
  {
    image: "https://media.licdn.com/dms/image/C5603AQGKBc2oFWOoRA/profile-displayphoto-shrink_800_800/0/1660899293626?e=1729728000&v=beta&t=-yLyIW2f1ox5JEt8vRABI7VVS51U3lzfS_7FkvzI1Is",
    name: "Abdul Qadir Aros",
    userName: "@jane_Smith",
    comment: "Sistem mereka efisien dan masih ada sentuhan peribadi. A good balance of automation and human touch.",
    company: "AQ AROS & CO",
    position: "Managing Partner"
  },
  {
    image: "https://media.licdn.com/dms/image/v2/C4E03AQH91y8_qRkKUw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517687904463?e=1729728000&v=beta&t=5W3V3MtePNJ5rYD7aUUrMgY-Zoe1Ou8VcfrTzCFLUj0",
    name: "Rajah Sivalingam",
    userName: "@john_Doe1",
    comment: "Juta Teknologi's lead nurturing system is excellent. It helps us maintain engagement with potential students throughout their decision-making process.",
    company: "ApplyRadar | Digital Marketing and Recruitment Solutions for Universities",
    position: "CEO"
  },

  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSr8YNm48S1vf-q6PwqUxwDz2es9cQKc-JKA&s",
    name: "Dr. Shahir Suhaimi",
    userName: "@john_Doe2",
    comment: "Staff saya dah tak perlu layan lead tak serious. Their system really helps filter quality leads.",
    company: "CALLABIO MANUFACTURING SDN BHD",
    position: "CEO"
  },
  {
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEVHcEz///////////+ysrKYmJj////u7u5cXFwpKSkXFxf///9LS0sdHR0dHR0AAAAvLy9kZGRKSkqenp6zs7PY2Njm5ub////19fXKysp1dXWNjY0NDQ0DGxhkJy/8QV6VMD7COEwQ7p41AAAAD3RSTlMABA4fR1gKMJHb/yOk//RBEklSAAABLUlEQVR4AXySBQLCMAxF55JJZvVi978klWU4H2Z5baPJoTTLi7Is8ixN3lXVTQtBbVNXr6zrAYZdAH33hNJiJBTxWKQHKx+IcEm0eGZEi93f+A784jH4rXogI3rBNC/OAn3lYB2Ysw7zujEuvNAvrV00jV82rUx6K1fbqt1OD5s0yVq/b5VsM0owdLJ7ym2W5OHNOuMixORuC1obbJA/8kAp1lkLYZw0xGyoALgJJrlj8zJNcWdJENyhgEysGM6MkI51doNaKLTTU5HyeMQsOLoFgHq1BPOYyoBKaIvuUKPwdBooFV8EB7lEt2JjCs+Xa6RNupcPV4Uu283g6Xq5BQj1UXicw935O53jqb7w1DJKgN7G7l+z/4/J+4CR4oARfR7N4XU078OVqPFmBwCTeiH9M1J0YgAAAABJRU5ErkJggg==",
    name: "Rina Rhosky",
    userName: "@john_Doe3",
    comment: "Juta Teknologi memudahkan proses jualan kami. Sekarang, kami dapat mengenal pasti dan fokus pada prospek yang berpotensi tinggi.",
    company: "Tasty Touch",
    position: "Founder"
  },
  {
    image: "data:image/jpeg;base64,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",
    name: "Pang Yong Yao",
    userName: "@john_Doe4",
    comment: "Their approach is practical and effective. Kami dapat lihat hasil yang nyata dalam masa singkat.",
    company: "CNB Carpets",
    position: "Managing Director"
  },

];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text">
          {" "}
          Clients Love{" "}
        </span>
        Juta Teknologi
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      What our clients say about us
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment, company, position }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription className="text-sm">{position} at {company}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};