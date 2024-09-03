import obsilogo from "@/public/obsidianlogo.png";
import Image from "next/image";
import Layout from "@/components/Layout";

export default async function Home() {
  return (
    <Layout>
      <section>
        <h1 className="text-4xl text-purple text-center">
          Bring highlighted texts from your e-book <br /> directly to obsidian.
        </h1>
        <div className="flex justify-center mt-12 mb-16">
          <Image src={obsilogo} alt="obsidian logo" />
        </div>
      </section>
    </Layout>
  );
}
