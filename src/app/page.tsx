import CheckoutPriceCard from "./components/CheckoutPriceCard";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <main className="bg-slate-300 py-20 px-10 grid gap-10">
      <CheckoutPriceCard />
      <ProfileCard />
    </main>
  );
}
