import { PageWrapper } from '@/components/shared/PageWrapper';
import { systems } from '@/lib/systems';
import Link from 'next/link';

export default function SystemsPage() {
  return (
    <PageWrapper>
      <main className="flex min-h-screen flex-col py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-['Instrument_Serif'] text-[var(--weft-black)] mb-8">
          Design Systems
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((system) => (
            <Link key={system.slug} href={`/systems/${system.slug}`} className="group block border border-[var(--weft-gray-200)] p-6 hover:border-[var(--weft-black)] transition-colors">
              <h2 className="text-xl font-['Instrument_Serif'] text-[var(--weft-black)] group-hover:text-[var(--weft-gold)] transition-colors">{system.name}</h2>
              <p className="text-[var(--weft-gray-600)] mt-2 text-sm">{system.tagline}</p>
            </Link>
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}
