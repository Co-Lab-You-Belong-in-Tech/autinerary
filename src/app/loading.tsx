
export default function Loading() {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <svg className="car" width="102px" height="40px" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#2998ff" />
            <stop offset="100%" stop-color="#ff4bfd" />
          </linearGradient>
        </defs>
        <g transform="translate(2 1)" stroke="url(#gradient)" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
          <path className="[animation: shake 0.2s ease-in-out infinite alternative]" d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01" stroke-width="3"/>
          <ellipse stroke-width="3.2" fill="#FFF" cx="83.493" cy="30.25" rx="6.922" ry="6.808"/>
          <ellipse stroke-width="3.2" fill="#FFF" cx="46.511" cy="30.25" rx="6.922" ry="6.808"/>
          <path className="car__line delay-0" stroke="#2998ff" d="M22.5 16.5H2.475" stroke-width="3"/>
          <path className="car__line delay-[0.2]" stroke="#2998ff" d="M20.5 23.5H.4755" stroke-width="3"/>
          <path className="car__line delay-[0.4]" stroke="#2998ff" d="M25.5 9.5h-19" stroke-width="3"/>
        </g>
      </svg>
    </div>
  )
}