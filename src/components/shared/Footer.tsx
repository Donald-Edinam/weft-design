import Link from 'next/link';
import { Globe, Scale, Blocks, GitBranch, FileText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--weft-black)] text-[var(--weft-white)] pt-16 pb-8">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <div className="font-['Satoshi'] text-[20px] font-bold tracking-[-0.5px]">
              Weft
            </div>
            <p className="mt-2 text-[var(--weft-gray-400)] text-[14px]">
              The structure behind the surface.
            </p>
          </div>
          
          {/* Col 2 */}
          <div>
            <h3 className="font-sans text-[14px] font-[500] mb-4 text-[var(--weft-gray-200)]">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/systems" className="flex items-center gap-2 text-[var(--weft-gray-400)] hover:text-[var(--weft-white)] transition-colors text-[14px]">
                  <Blocks className="w-[14px] h-[14px]" />
                  Systems
                </Link>
              </li>
              <li>
                <a href="https://github.com/Donald-Edinam/weft-design" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--weft-gray-400)] hover:text-[var(--weft-white)] transition-colors text-[14px]">
                  <GitBranch className="w-[14px] h-[14px]" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-[var(--weft-gray-400)] hover:text-[var(--weft-white)] transition-colors text-[14px]">
                  <FileText className="w-[14px] h-[14px]" />
                  Template
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <div className="flex items-center gap-2 text-[var(--weft-gray-400)] text-[14px] mb-2">
              Built by Donald Edinam
            </div>
            <div className="flex items-center gap-2 text-[var(--weft-gray-400)] text-[14px] mb-4">
              <Globe className="w-[14px] h-[14px]" />
              From Accra to the world
            </div>
            <p className="text-[12px] text-[var(--weft-gray-600)] max-w-xs leading-relaxed">
              Works with Claude Code, Cursor, Copilot, Gemini CLI, Stitch
            </p>
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="border-t border-[var(--weft-gray-800)] pt-6 flex items-center text-[var(--weft-gray-600)] text-[12px]">
          <Scale className="w-[12px] h-[12px] mr-2" />
          MIT License
        </div>
      </div>
    </footer>
  );
}
