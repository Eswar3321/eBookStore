import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Search, DropdownLoggedIn, DropdownLoggedOut } from '../index';

export const Header = () => {
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem('dark')) || false
  );
  const [showSearch, setShowSearch] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(dark));
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b px-4 border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-3">
          <Link to="/" className="flex items-center">
            <img
              src="../../../src/assets/books.jpg"
              className="mr-3 h-10"
              alt=""
            />
            <span className="self-center text-2xl text-black font-semibold whitespace-nowrap dark:text-white">
              eBookStore
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              onClick={() => setDark(!dark)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>
            <span
              onClick={() => setShowSearch(!showSearch)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  0
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropdown(!dropdown)}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            ></span>
            {dropdown && <DropdownLoggedOut />}
          </div>
        </div>
      </nav>
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </header>
  );
};
