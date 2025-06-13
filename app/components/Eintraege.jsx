export default function EintragsSektion({
  titel,
  farbe = 'blue',
  daten,
}) {
  return (
    <section className='space-y-4'>
      <h2
        className={`text-xl font-bold text-${farbe}-700 border-b border-${farbe}-300 pb-1`}
      >
        {titel}
      </h2>
      <div className='space-y-6'>
        {daten.map((eintrag, index) => (
          <Eintrag key={index} {...eintrag} />
        ))}
      </div>
    </section>
  );
}

function Eintrag({ titel, ort, zeitraum, tags = [], punkte = [] }) {
  return (
    <div className='space-y-1'>
      <div className='flex justify-between items-baseline flex-wrap gap-x-4'>
        <h3 className='font-semibold'>{titel}</h3>
        <div className='text-sm text-gray-500 whitespace-nowrap'>
          {zeitraum}
        </div>
      </div>
      {ort && <div className='text-sm text-gray-600'>{ort}</div>}
      {tags.length > 0 && (
        <div className='text-sm text-gray-500 flex flex-wrap gap-2 mt-1'>
          {tags.map((tag, i) => (
            <span
              key={i}
              className='bg-gray-200 px-2 py-0.5 rounded text-xs'
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {punkte.length > 0 && (
        <ul className='list-disc list-inside mt-1 space-y-1 text-sm'>
          {punkte.map((punkt, i) => (
            <li key={i}>{punkt}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
