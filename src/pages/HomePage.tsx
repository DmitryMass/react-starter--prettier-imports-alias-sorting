import { FC, useState } from 'react';

import clsx from 'clsx';

const HomePage: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="mb-4 flex h-20 w-36 items-center justify-center bg-blue-400 text-lg font-medium">
        HomePage
      </div>
      <button
        type="button"
        className="flex h-20 w-56 items-center justify-center bg-blue-400 text-lg font-medium"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        click me
      </button>
      <div
        className={clsx(
          'flex max-w-sm items-center justify-center text-white transition-all duration-300',
          isOpen
            ? 'visible h-20 bg-slate-600 p-5 text-black opacity-100'
            : 'invisible h-0 p-0 opacity-0',
        )}
      >
        hello world with some content
      </div>
    </>
  );
};

export default HomePage;
