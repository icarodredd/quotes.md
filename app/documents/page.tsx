import DocumentsCard from "@/components/DocumentsCard";
import Layout from "@/components/Layout";

function Documents() {
  return (
    <Layout>
      <section className="flex justify-center w-full h-screen items-center">
        <DocumentsCard />
      </section>
    </Layout>
  );
}

export default Documents;
