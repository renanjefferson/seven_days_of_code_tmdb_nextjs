import { Card } from "@/components/Card";
import { Search } from "@/components/Search";

export function HomePage() {
  return (
    <main className="container m-auto px-4">
      <Search />;
      <Card />
    </main>
  );
}
