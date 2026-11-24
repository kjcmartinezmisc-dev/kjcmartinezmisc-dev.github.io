import { useState } from 'react';
import { PROJECTS, PROJECT_GROUPS } from '../data.js';

export default function Projects() {
  const groups = PROJECT_GROUPS.map((g) => ({
    ...g,
    items: PROJECTS.filter((p) => p.group === g.id),
  })).filter((g) => g.items.length);
  const [open, setOpen] = useState(() => groups[0]?.items[0]?.id ?? null);
  let i = 0;
  return (
    <section id="projects">
      <div className="wrap">
        <div className="head reveal">
          <div>
            <h2>Projects</h2>
          </div>
        </div>
        {groups.map((g) => (
          <div className="pgroup" key={g.id}>
            <h3 className="pgtitle reveal">{g.title}</h3>
            <p className="sub psub reveal">{g.sub}</p>
            <div className="acc">
              {g.items.map((p) => {
                const d = i++;
                const isOpen = open === p.id;
                return (
                  <div className={'item reveal' + (isOpen ? ' open' : '')} style={{ '--d': `${d * 80}ms` }} key={p.id}>
                    <button
                      type="button"
                      id={`acc-${p.id}-btn`}
                      aria-expanded={isOpen}
                      aria-controls={isOpen ? `acc-${p.id}` : undefined}
                      onClick={() => setOpen(isOpen ? null : p.id)}
                    >
                      <span className="tt">
                        <span>{p.title}</span>
                        {p.status && <span className="status">{p.status}</span>}
                      </span>
                      <span className="arrow" aria-hidden="true">›</span>
                    </button>
                    {isOpen && (
                      <div className="body" id={`acc-${p.id}`} role="region" aria-labelledby={`acc-${p.id}-btn`}>
                        <p>{p.pitch}</p>
                        {p.details?.map((x) => <p key={x}>{x}</p>)}
                        <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                        {p.links?.length > 0 && (
                          <div className="plinks">
                            {p.links.map((l, li) => (
                              <a key={l.href} className={li === 0 ? 'btn' : 'btn ghost'} href={l.href} target="_blank" rel="noopener noreferrer">
                                {l.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
