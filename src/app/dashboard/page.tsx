import PageTitle from "@/components/ui/PageTitle";
import MainLayout from "@/layout";
import DataOverview from "./DataOverview";

export default async function Home() {
  return (
    <MainLayout>
      <div>
        <PageTitle title="Dashboard" />
      </div>
      <div className="mt-7">
        <DataOverview />
      </div>
    </MainLayout>
  );
}
