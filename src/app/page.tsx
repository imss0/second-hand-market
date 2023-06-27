import CheckoutPriceCard from "./components/CheckoutPriceCard";
import ProductCard from "./components/ProductCard";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <main className="bg-slate-300 py-20 px-10 grid gap-10 min-h-screen">
      <CheckoutPriceCard />
      <ProfileCard />
      <ProductCard />
    </main>
  );
}
