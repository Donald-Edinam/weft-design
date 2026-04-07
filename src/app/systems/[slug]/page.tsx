import { PageWrapper } from '@/components/shared/PageWrapper';
import { systems } from '@/lib/systems';

export default async function SystemDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const system = systems.find(s => s.slug === resolvedParams.slug);

  if (!system) {
    return (
      <PageWrapper>
         <main className="flex min-h-screen flex-col py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl font-['Instrument_Serif'] text-[var(--weft-black)] mb-4">
            System not found
          </h1>
        </main>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <main className="flex min-h-screen flex-col py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-['Instrument_Serif'] text-[var(--weft-black)] mb-4">
          System: {system.name}
        </h1>
        <p className="text-[var(--weft-gray-600)] text-lg max-w-2xl mb-8">
          {system.description}
        </p>
        <div className="bg-[var(--weft-gray-50)] p-8 border border-[var(--weft-gray-200)]">
           <h2 className="font-sans text-[14px] font-[500] uppercase tracking-[0.5px] mb-4 text-[var(--weft-gray-600)]">At a glance</h2>
           <ul className="space-y-2 text-sm">
             <li><span className="text-[var(--weft-gray-600)]">Primary Color:</span> <span className="font-mono">{system.primaryColor}</span></li>
             <li><span className="text-[var(--weft-gray-600)]">Lines of Code:</span> {system.lines}</li>
             <li><span className="text-[var(--weft-gray-600)]">Sections:</span> {system.sections}</li>
             <li><span className="text-[var(--weft-gray-600)]">Compliance:</span> {system.compliance}</li>
           </ul>
        </div>
      </main>
    </PageWrapper>
  );
}

export function generateStaticParams() {
  return systems.map((system) => ({
    slug: system.slug,
  }));
}
