"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TeamMember } from "@/components/about/team-member";
import { Timeline } from "@/components/about/timeline";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-8">Our Mission</h1>
          <Card className="p-8">
            <p className="text-lg text-center text-muted-foreground">
              PeerRamp aims to revolutionize student financing through blockchain technology,
              creating a transparent and accessible platform that connects students with lenders
              while fostering financial inclusion and educational opportunities.
            </p>
          </Card>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <Timeline />
        </section>

        {/* Team Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">Meet the Visionaries Behind PeerRamp</h2>
          <p className="text-center text-muted-foreground mb-12">
            Passionate experts committed to revolutionizing student financing through blockchain technology
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Richard Winner Duvor"
              role="Founder & CEO"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              bio="Fullstack Developer || Solidity Smart Contract Engineer"
              social={{
                twitter: "https://twitter.com/",
                github: "https://github.com/",
                linkedin: "https://linkedin.com/in/"
              }}
            />
            <TeamMember
              name="Ewoenam Bridget Klu"
              role="Co-Founder & Product Designer"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              bio="Database Engineer || Blockchain Enthusiast"
              social={{
                twitter: "https://twitter.com/",
                github: "https://github.com/",
                linkedin: "https://linkedin.com/in/"
              }}
            />
            <TeamMember
              name="John Nartey"
              role="Co-Founder & Public Relations"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              bio="Data Analyst || Blockchain Developer"
              social={{
                twitter: "https://twitter.com/",
                github: "https://github.com/",
                linkedin: "https://linkedin.com/in/"
              }}
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}