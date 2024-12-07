"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const timelineEvents = [
  {
    year: "2023",
    title: "Platform Launch",
    description: "PeerRamp officially launches its blockchain-based lending platform.",
  },
  {
    year: "2022",
    title: "Beta Testing",
    description: "Successfully completed beta testing with 1000+ students.",
  },
  {
    year: "2021",
    title: "Development Begins",
    description: "Started development of the PeerRamp platform.",
  },
];

export function Timeline() {
  return (
    <div className="space-y-8">
      {timelineEvents.map((event, index) => (
        <motion.div
          key={event.year}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {event.year}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}