import { Clock3, Target, Users } from "lucide-react";

export const services = [
  { number: "01", icon: Users, title: "Permanent staffing", text: "Build teams that stay. We connect you with high-calibre professionals who fit your culture, goals and long-term vision.", tags: ["Specialist hires", "Executive search"] },
  { number: "02", icon: Clock3, title: "Contract & temporary", text: "Keep momentum when priorities shift with flexible talent solutions designed around your timelines and workload.", tags: ["Project talent", "Fast turnaround"] },
  { number: "03", icon: Target, title: "Talent consulting", text: "Make every hiring decision count with market insight, workforce planning and a sharper view of the talent landscape.", tags: ["Workforce planning", "Market mapping"] },
];

export const process = [
  ["01", "Discover", "We listen closely to understand your business, team dynamic and the outcome you need."],
  ["02", "Define", "We shape a clear brief and search strategy that reaches the right people, not just more people."],
  ["03", "Connect", "We introduce considered matches and keep communication clear at every stage."],
  ["04", "Deliver", "We support a smooth close and stay connected beyond the first day."],
];

export const pageDetails = {
  "/services": { label: "What we do", title: <>Talent solutions<br /><em>with intent.</em></>, intro: "The right hire changes more than a headcount. It changes what your business can become." },
  "/about": { label: "About Avante Tek", title: <>We see the person<br />behind the <em>resume.</em></>, intro: "A new-generation talent partner for companies ready to grow with purpose." },
  "/process": { label: "Our process", title: <>Simple by design.<br /><em>Serious about results.</em></>, intro: "No black boxes. No buzzwords. Just a clear, considered way to get the right people in the right seats." },
  "/contact": { label: "Let's talk", title: <>Ready to find<br /><em>what&apos;s next?</em></>, intro: "Tell us a little about what you're building. We'll bring the right questions." },
};
