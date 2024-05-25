function NavBar() {
  return (
    <>
      <nav className="fixed top-5 left-5 right-5 bg-green-600 shadow-md rounded-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://your-logo-url.com/logo.png" // Replace with your logo URL
                  alt="Logo"
                />
              </div>

              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a href="#" className="text-yellow-300 text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </a>

                  <a href="#" className="text-yellow-300 px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </a>

                  <a href="#" className="text-yellow-300 px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
