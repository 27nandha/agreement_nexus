import Image from 'next/image';

interface OfficialSealProps {
  className?: string;
  docReference?: string;
}

const OfficialSeal = ({ className, docReference }: OfficialSealProps) => {
  // Format today's date
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className={`official-seal ${className || ''} flex-col space-y-6`}>
        <div className='flex justify-center'>

      <Image
        src="/images/official-seal.png"
        alt="Nexus International Academy Official Seal"
        width={300}
        height={150}
        quality={100}
        priority
      />
        </div>
      
      <div className="flex justify-between items-center px-4 text-gray-700">
        <div className="text-sm">
          <span className="font-semibold">Approval Date:</span> {today}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Document Number:</span> {docReference}
        </div>
      </div>
    </div>
  );
};

export default OfficialSeal;