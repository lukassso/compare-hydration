import {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <div className='max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl'>
        <div
          onClick={handleClick}
          className='btn btn-primary sm:mb-0 w-full flex sm:w-aut'
        >
          Increase
        </div>
        <div className='flex w-full sm:w-auto'>
          <button className='btn w-full bg-gray-50 dark:bg-transparent'>
            Count: {count || 0}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;