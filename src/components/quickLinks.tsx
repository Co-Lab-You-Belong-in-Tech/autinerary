import Link from "next/link"

interface ListProps {
  title: string
  link: string
}

export default function QuickLinks({ links, color }: { links: ListProps[], color: string}) {
  return (
    <div>
      <h1 className="text-center text-5xl text-[#323232] my-5">(Quick Links)</h1>
      <div className="flex flex-col justify-center md:flex-row md:gap-x-4">
        {
          links.map((link)=>(
            <Link key={link.link} href={link.link} className={`text-[${color}] my-2 rounded-lg px-6 p-3 text-center border-2 bg-white border-[${color}]] hover:bg-[${color}] hover:text-white tracking-wide"`}>{link.title}</Link>
          ))
        }
      </div>
    </div>
  )
}