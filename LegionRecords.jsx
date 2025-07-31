import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function LegionRecords() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      title: "Rotting Christ - Thy Mighty Contract [CD]",
      format: "CD",
      price: "$12",
      image: "https://via.placeholder.com/300x300?text=RC+CD",
    },
    {
      id: 2,
      title: "Sarcófago - INRI [Vinyl]",
      format: "Vinyl",
      price: "$25",
      image: "https://via.placeholder.com/300x300?text=SAR+VINYL",
    },
    {
      id: 3,
      title: "Blasphemy - Fallen Angel of Doom [Cassette]",
      format: "Tape",
      price: "$10",
      image: "https://via.placeholder.com/300x300?text=BLA+TAPE",
    },
  ];

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold uppercase tracking-widest">Legion Records</h1>
        <p className="text-gray-400 mt-2">Purveyors of the underground: metal CDs, tapes & vinyls</p>
      </header>

      <div className="max-w-xl mx-auto mb-8">
        <Input
          className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
          placeholder="Search by band, title, or format..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(product => (
          <Card key={product.id} className="bg-gray-900 border border-gray-700">
            <CardContent className="p-4">
              <img src={product.image} alt={product.title} className="mb-4 rounded" />
              <h2 className="text-xl font-bold mb-1">{product.title}</h2>
              <p className="text-sm text-gray-400 mb-2">Format: {product.format}</p>
              <p className="text-lg font-semibold mb-4">{product.price}</p>
              <Button className="bg-red-600 hover:bg-red-700">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="mt-16 text-center text-sm text-gray-600">
        &copy; 2025 Legion Records. Total support to the underground.
      </footer>
    </div>
  );
}