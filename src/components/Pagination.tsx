import { number } from "zod";

interface PaginationProps {
  totalPosts: number
  postsPerPage: number
  paginate: any
}

export default function Pagination({ totalPosts, postsPerPage, paginate }: PaginationProps) {
  const pages = Math.ceil(totalPosts / postsPerPage);
  if (pages === 1) return <></>

  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1)

  return (
    <nav className="mt-6 flex justify-center">
      <ul className="inline-flex justify-center space-x-3 h-10">
        {
          pageNumbers.map((number) => (
            <li key={number}>
              <button className='px-3 h-8 bg-white' onClick={()=> paginate(number)}>{number}</button>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}