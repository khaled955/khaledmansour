interface Props { id: string; title?: string; children: React.ReactNode }
export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2 id={`${id}-title`} className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">{title}</h2>
        {children}
      </div>
    </section>
  )
}
