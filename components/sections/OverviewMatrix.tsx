'use client';

interface MatrixRij {
  code: string;
  label: string;
  bp1: boolean;
  bp2: boolean;
  bp3: boolean;
}

interface OverviewMatrixProps {
  rijen: MatrixRij[];
  onRijKlik?: (code: string) => void;
}

function Bolletje({ actief }: { actief: boolean }) {
  if (!actief) return <span className="block w-4 h-4 mx-auto" />;
  return (
    <span className="block w-4 h-4 rounded-full bg-[#58694C] mx-auto" aria-label="aangetoond" />
  );
}

export default function OverviewMatrix({ rijen, onRijKlik }: OverviewMatrixProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E3E2E2] bg-white">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[#E3E2E2] bg-[#EEF0ED]">
            <th className="text-left py-3 px-5 font-semibold text-[#111111]/60 uppercase tracking-wide text-xs w-2/3">
              Code &amp; omschrijving
            </th>
            <th className="text-center py-3 px-4 font-semibold text-[#58694C] text-xs uppercase tracking-wide">BP1</th>
            <th className="text-center py-3 px-4 font-semibold text-[#58694C] text-xs uppercase tracking-wide">BP2</th>
            <th className="text-center py-3 px-4 font-semibold text-[#58694C] text-xs uppercase tracking-wide">BP3</th>
          </tr>
        </thead>
        <tbody>
          {rijen.map((rij, index) => (
            <tr
              key={rij.code}
              className={`border-b border-[#E3E2E2] last:border-0 transition-colors ${
                onRijKlik ? 'cursor-pointer hover:bg-[#EEF0ED]/60' : ''
              } ${index % 2 === 1 ? 'bg-[#FAFAF7]' : 'bg-white'}`}
              onClick={() => onRijKlik?.(rij.code)}
            >
              <td className="py-4 px-5">
                <span className="font-semibold text-[#58694C] mr-2">{rij.code}</span>
                <span className="text-[#111111]/80">{rij.label}</span>
              </td>
              <td className="py-4 px-4 text-center"><Bolletje actief={rij.bp1} /></td>
              <td className="py-4 px-4 text-center"><Bolletje actief={rij.bp2} /></td>
              <td className="py-4 px-4 text-center"><Bolletje actief={rij.bp3} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
