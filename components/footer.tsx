import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mt-24 bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <a
              href="https://www.instagram.com/hjuletider/"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              <FaInstagram className="h-6 w-6 " />
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="https://www.linkedin.com/in/magnus-sagmo/"
              target="_blank"
              rel="noreferrer"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  )
}
