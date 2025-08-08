import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, Download, Shirt, Headphones, Music } from "lucide-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const productCategories = [
    {
      id: "clothing",
      title: "GL Productions Apparel",
      icon: Shirt,
      description: "Rep the GL brand with premium streetwear",
      products: [
        {
          name: "GL Productions Hoodie",
          price: "$45",
          description: "Premium cotton blend hoodie with embroidered logo",
          image: "/api/placeholder/300/300",
          badge: "Bestseller"
        },
        {
          name: "PNG Vibes T-Shirt",
          price: "$25",
          description: "Soft cotton tee celebrating Papua New Guinea culture",
          image: "/api/placeholder/300/300"
        },
        {
          name: "Dr Wiz Snapback",
          price: "$30",
          description: "Adjustable snapback with 3D embroidered logo",
          image: "/api/placeholder/300/300"
        }
      ]
    },
    {
      id: "plugins",
      title: "Music Production Tools",
      icon: Music,
      description: "Professional plugins and sample packs",
      products: [
        {
          name: "PNG Drums Vol. 1",
          price: "$15",
          description: "Authentic Papua New Guinea percussion samples",
          image: "/api/placeholder/300/300",
          badge: "Digital"
        },
        {
          name: "Reggae Bass Essentials",
          price: "$20",
          description: "Deep bass presets for reggae and dancehall",
          image: "/api/placeholder/300/300",
          badge: "Digital"
        },
        {
          name: "Dr Wiz Vocal Chains",
          price: "$35",
          description: "Professional vocal processing chain presets",
          image: "/api/placeholder/300/300",
          badge: "Pro"
        }
      ]
    },
    {
      id: "accessories",
      title: "Studio Accessories",
      icon: Headphones,
      description: "Gear and accessories for creators",
      products: [
        {
          name: "GL Studio Stickers Pack",
          price: "$10",
          description: "Vinyl sticker pack with logo designs",
          image: "/api/placeholder/300/300"
        },
        {
          name: "Producer Notebook",
          price: "$18",
          description: "Lined notebook for lyrics and production notes",
          image: "/api/placeholder/300/300"
        },
        {
          name: "GL Tote Bag",
          price: "$22",
          description: "Heavy-duty canvas tote with screen print logo",
          image: "/api/placeholder/300/300"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-studio-dark">
      {/* Header */}
      <header className="border-b border-studio-orange/20 bg-studio-dark/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-studio-orange hover:text-studio-blue">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Studio
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-studio-orange to-studio-blue bg-clip-text text-transparent">
                  GL Shop
                </h1>
                <p className="text-muted-foreground text-sm">Official merchandise & production tools</p>
              </div>
            </div>
            <Button variant="studio" size="sm">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart (0)
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-studio-dark via-studio-card to-studio-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-studio-orange to-studio-blue bg-clip-text text-transparent">
            Gear Up with GL Productions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            From streetwear that reps the PNG scene to professional production tools used in our studio - 
            get everything you need to level up your creative journey.
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Free shipping on orders over $50
          </Badge>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {productCategories.map((category, index) => (
            <div key={category.id} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-gradient-to-r from-studio-orange to-studio-blue">
                  <category.icon className="w-6 h-6 text-studio-dark" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="bg-studio-card border-studio-orange/20 hover:border-studio-orange/40 transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="aspect-square bg-studio-dark rounded-lg mb-4 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        {product.badge && (
                          <Badge variant={product.badge === "Pro" ? "default" : "secondary"} className="text-xs">
                            {product.badge}
                          </Badge>
                        )}
                      </div>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-studio-orange">{product.price}</span>
                        <Button variant="hero" size="sm" className="gap-2">
                          {product.badge === "Digital" ? (
                            <>
                              <Download className="w-4 h-4" />
                              Download
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-4 h-4" />
                              Add to Cart
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-studio-orange/10 to-studio-blue/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Represent GL?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the GL family and show your support for Papua New Guinea's finest production house. 
            Every purchase supports local music and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Shop All Products
            </Button>
            <Button variant="studio" size="lg">
              Contact for Custom Orders
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-studio-orange/20 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 GL Productions. All rights reserved. Made with passion in Port Moresby, PNG.</p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;