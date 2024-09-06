import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

function Documents() {
  return (
    <Layout>
      <section className="flex justify-center w-full h-screen items-center">
        <form className="bg-purple w-4/6 h-5/6 rounded-lg">
          <div className="justify-between flex p-4">
            <div></div>
            <div></div>
            <h1 className="text-center text-gray text-2xl">
              What document do you want to send to <br />
              obsidian?
            </h1>
            <Button size={"sm"} className="bg-purple text-gray">
              Refresh
            </Button>
          </div>
        </form>
      </section>
    </Layout>
  );
}

export default Documents;
