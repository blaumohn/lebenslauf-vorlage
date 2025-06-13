export function Kopfbereich({ name, ort, telefon, linkedin }) {
  return (
    <section className='text-sm leading-tight space-y-1'>
      <h1 className='text-xl font-bold'>{name}</h1>
      <div className='text-gray-700'>{ort}</div>
      <div className='text-gray-700'>{telefon}</div>
      <div>
        <a
          href={linkedin}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 hover:underline break-all'
        >
          {linkedin}
        </a>
      </div>
    </section>
  );
}

export function FaehigkeitenSektion({ daten }) {
  return (
    <section>
      <h2 className='text-lg font-bold mb-2'>Fähigkeiten</h2>
      <div className='space-y-3'>
        {daten.map((gruppe, index) => (
          <FähigkeitsGruppe key={index} {...gruppe} />
        ))}
      </div>
    </section>
  );
}

function FähigkeitsGruppe({ kategorie, symbole, technologien }) {
  const zeichen = '●'.repeat(symbole) + '○'.repeat(5 - symbole);
  return (
    <div className='space-y-1'>
      <div className='flex justify-between text-sm text-gray-700'>
        <span>{kategorie}</span>
        <span className='font-mono text-gray-500'>{zeichen}</span>
      </div>
      <ul className='flex flex-wrap gap-2 text-sm text-gray-800'>
        {technologien.map((tech, i) => (
          <li key={i} className='bg-gray-100 rounded px-2 py-0.5'>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SprachenSektion({ daten }) {
  return (
    <section>
      <h2 className='text-lg font-bold mb-2'>Sprachen</h2>
      <ul className='space-y-1 text-sm text-gray-800'>
        {daten.map(({ sprache, niveau }, i) => (
          <li key={i} className='flex justify-between'>
            <span>{sprache}</span>
            <span className='text-gray-500'>{niveau}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Vorstellung({ daten: { text } }) {
  return (
    <section>
      <h2 className='text-lg font-bold mb-2'>Vorstellung</h2>
      <p className='text-sm text-gray-800'>{text}</p>
    </section>
  );
}

export function InteressenSektion({ daten }) {
  return (
    <section>
      <h2 className='text-lg font-bold mb-2'>Interessen</h2>
      <ul className='flex flex-wrap gap-2 text-sm text-gray-800'>
        {daten.map((interesse, i) => (
          <li key={i} className='bg-gray-100 rounded px-2 py-0.5'>
            {interesse}
          </li>
        ))}
      </ul>
    </section>
  );
}
