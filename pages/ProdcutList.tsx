import { useState } from "react";

import { Leaf } from "lucide-react";
import Navbar from "./../src/components/Navbar";
import PlantCard from "./../src/components/PlantCard";
import { categories, plants } from "../data/plantss";

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPlants = selectedCategory
    ? plants.filter((plant) => plant.category === selectedCategory)
    : plants;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <header className="pt-28 pb-12 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="category-badge mb-4">🌱 Our Collection</span>
          <h1 className="section-heading text-4xl md:text-5xl mb-4">
            Shop Houseplants
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From tropical statement plants to low-maintenance succulents, find
            the perfect green companion for your space.
          </p>
        </div>
      </header>

      {/* Category Filter */}
      <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              All Plants
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Title */}
          {selectedCategory && (
            <h2 className="section-heading text-2xl mb-8 animate-fade-in">
              {selectedCategory}
            </h2>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlants.map((plant, index) => (
              <div
                key={plant.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <PlantCard plant={plant} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPlants.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No plants found in this category.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold text-forest">
              Paradise Nursery
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Paradise Nursery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProductList;
