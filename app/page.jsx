// Server Component — delegates all rendering to ClientApp (client component)
// This separation is required by Next.js 16: `ssr: false` must be in a Client Component
import ClientApp from "./ClientApp";

export default function Home() {
  return <ClientApp />;
}

