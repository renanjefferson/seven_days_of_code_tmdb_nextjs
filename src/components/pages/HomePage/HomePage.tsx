import Image from "next/image";
import { Search } from "@/components/Search";

export function HomePage() {
  return (
    <main className="container m-auto px-4">
      <Search />;{/* TODO: Componentizar Card */}
      <div className="container m-auto px-4">
        <div className="mb-12 rounded-lg bg-secondary p-4 xl:m-auto xl:w-3/4">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center gap-16">
              <div className="mb-2 w-20 overflow-hidden rounded-full lg:w-28">
                <Image
                  src="/test-image.png"
                  width={139}
                  height={134}
                  alt="Movie Picture"
                />
              </div>
              <div className="grid grid-cols-1 gap-5">
                <h2 className="text-base font-medium text-white lg:text-lg">
                  Avengers Endgame (2019)
                </h2>
                <div className="flex gap-6">
                  <div className="flex items-center gap-3">
                    {/* TODO: Criar componente Icon SVG Star */}
                    <div>Start</div>
                    <span className="text-base text-white lg:text-lg">9.2</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* TODO: Criar componente Icon SVG Heart */}
                    <div>Heart</div>
                    <p className="text-base text-white lg:text-lg">Favoritar</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-base font-medium text-slate-50 lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, ut voluptate. In quas, aliquid nulla facilis magnam
                voluptatum? Adipisci modi sint laudantium fuga velit ducimus
                amet at qui quis obcaecati.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
