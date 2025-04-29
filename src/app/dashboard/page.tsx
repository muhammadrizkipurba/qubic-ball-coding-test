import PageTitle from "@/components/ui/PageTitle";
import MainLayout from "@/layout";

export default async function Home() {
  return (
    <MainLayout>
      <div>
        <PageTitle title="Dashboard" />
      </div>
    </MainLayout>
  );
}
