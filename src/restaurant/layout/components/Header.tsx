import { Link, NavLink } from 'react-router-dom';
import { headerRoutesList } from '../../routes/HeaderRoutesList';

export const Header = () => {
  return (
    <nav className="flex flex-row justify-center  flex-wrap w-full  bg-slate-500 b-1 sticky top-0 z-50">
      <div className="flex justify-center align-middle lg:max-w-[69vw] h-40 lg:h-24 flex-wrap lg:flex-nowrap">
        <Link to={'/'} className="flex mr-20">
          <img className="w-64 min-w-64" src="/logo3.svg" alt="logo" />
        </Link>
        <div className="flex sm:gap-3  md:gap-5 mb-3 cursor-pointer items-center">
          {headerRoutesList.map(({ id, name, path }) => (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) => (isActive ? 'navigate-Active' : '')}>
              <button className="bg-white hover:bg-white hover:text-gray-400 border-solid text-xs  border-1 border-gray-400 w-28 h-8 p-2 rounded-md font-semibold">
                {name}
              </button>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
