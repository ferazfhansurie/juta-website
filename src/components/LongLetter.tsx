import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const LongLetter: React.FC = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        A Message to{' '}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Business Owners
        </span>
      </h2>
      <Card className="max-w-4xl mx-auto bg-muted/50">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">We see you.</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground text-lg">
          <p>Running a business is tough. Really tough.</p>
          <p>You're probably drowning in messages, struggling to keep up with your team's inbox.</p>
          <p>Overwhelmed by the constant ping of notifications.</p>
          <p>As your stress levels rise, your patience dwindles.</p>
          <p>And to add to that...</p>
          <p>You're being pulled in every direction.</p>
          <p>Should I hire more staff? Invest in new tools? Or maybe just toss my phone out the window?</p>
          <p>Oh wait, what about automation?</p>
          <p>Everyone's raving about it.</p>
          <p>Should I start automating? Schedule endless follow-ups? Manage contacts seamlessly?</p>
          <p>Someone please hand me a magic wand.</p>
          <p>Most business owners are caught in this chaotic cycle…</p>
          <p>Doing a little bit of this… a little bit of that.</p>
          <p>Until they're yelling at their screens with frustration.</p>
          <p>We call this the "digital meltdown."</p>
          <p>Also known as a total mess.</p>
          <p>And, trust us, we'd rather do anything else than run a business that way.</p>
          <p>But this isn't about us... It's about you.</p>
          <p>You're here because you want more control over your business.</p>
          <p>Or maybe you're doing great and just want to streamline things.</p>
          <p>More efficiency.</p>
          <p>More connections.</p>
          <p>More time for what truly matters.</p>
          <p>More time to build memories.</p>
          <p>More freedom to focus on growth.</p>
          <p>More moments with your loved ones.</p>
          <p>More time to enjoy the success you've worked so hard to achieve.</p>
          <p>Whatever it is for you...</p>
          <p>It all starts with Joining Us To Automate.</p>
        </CardContent>
      </Card>
    </section>
  );
};