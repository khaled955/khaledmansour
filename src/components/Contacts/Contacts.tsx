

interface Props { socials: { email: string; github: string; linkedin: string } }
export default function Contacts({ socials }: Props){
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950 shadow-sm">
      <p className="text-neutral-700 dark:text-neutral-300">Want to collaborate or have a project in mind? Reach out.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a href={socials.email} className="px-4 py-2 rounded-xl bg-amber-500 text-white hover:bg-amber-600 focus-visible:ring-2 focus-visible:ring-amber-500">Email me</a>
        <a href={socials.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white">GitHub</a>
        <a href={socials.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white">LinkedIn</a>
      </div>
    </div>
  )
}