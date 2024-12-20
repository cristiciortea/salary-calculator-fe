import mainLogo from '../assets/main_logo.png';
import { ACTIVE_DROP_DOWN_ITEMS, NONACTIVE_DROP_DOWN_ITEMS } from '../constants/NavBar';
import DropdownMenu from './reusable/DropdownMenu';

function NavBar() {
  return (
    <>
      <nav className="bg-gradient-to-r from-[#0a493a] from-15% via-[#0d6b58] via-55% to-[#0d6b58] shadow-lg border-b border-teal-900">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeLinejoin="inherit"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center justify-evenly sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-8" src={mainLogo} alt="Logo" />
              </div>

              <div className="hidden sm:block sm:ml-6 text-white">
                <div className="flex space-x-4">
                  <a href="#" className="hover:bg-emerald-800 rounded-md px-3 py-2 text-sm font-medium">
                    Acasa
                  </a>

                  <DropdownMenu
                    menuTitle="Alte Calculatoare"
                    activeItems={ACTIVE_DROP_DOWN_ITEMS}
                    disabledItems={NONACTIVE_DROP_DOWN_ITEMS}
                  />

                  <a href="#" className="hover:bg-emerald-800 rounded-md px-3 py-2 text-sm font-medium">
                    Despre noi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 text-white">
            <a href="#" className="hover:bg-emerald-800 rounded-md px-3 py-2 text-sm font-medium block">
              Home
            </a>

            <a href="#" className="hover:bg-emerald-800 rounded-md px-3 py-2 text-sm font-medium block">
              About
            </a>

            <a href="#" className="hover:bg-emerald-800 rounded-md px-3 py-2 text-sm font-medium block">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
