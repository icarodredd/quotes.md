import obsilogo from "@/public/obsidianlogo.png";
import Image from "next/image";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function AccordionHome() {
  return (
    <Accordion type="multiple" className="min-w-60 max-w-xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>Why quotes.md? </AccordionTrigger>
        <AccordionContent className="font-extralight text-justify">
          Quotes.md is designed to bridge the gap between the notes you take in
          Google Play Books and your personal knowledge management system, like
          Obsidian. By automating the process of extracting, organizing, and
          formatting your highlighted quotes into Markdown files, quotes.md
          helps streamline the integration of your reading insights into your
          workflow, making it easier to reference and build upon them later.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Our purpose.</AccordionTrigger>
        <AccordionContent className="font-extralight text-justify">
          Our goal with quotes.md is to empower readers to seamlessly transform
          the knowledge they gain from books into actionable insights. By
          providing an efficient way to process and categorize notes, we aim to
          foster better learning and personal growth, while saving time and
          reducing the friction of manual note-taking and organizing.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default async function Home() {
  return (
    <Layout>
      <section>
        <h1 className="text-4xl text-center">
          Bring highlighted texts from your e-book <br /> directly to obsidian.
        </h1>
        <div className="flex justify-center mt-12">
          <Image
            className="obsilogo animate-pulse"
            src={obsilogo}
            alt="obsidian logo"
          />
        </div>
        <div className="flex justify-center p-8">
          <AccordionHome />
        </div>
        <div className="flex justify-center p-8">
          <Link href={"/documents"}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
