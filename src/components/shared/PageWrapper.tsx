export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12">
      {children}
    </div>
  );
}
