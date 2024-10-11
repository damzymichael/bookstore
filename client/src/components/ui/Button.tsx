import {cn} from '@/utils/tailwind';
import Spinner from './Spinner';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

function Button({loading, children, className, ...props}: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-[#B700E0] w-full text-sm py-2 px-3 rounded-lg',
        className
      )}
      {...props}
    >
      <div className='flex items-center justify-center gap-2'>
        {loading ? <Spinner /> : children}
      </div>
    </button>
  );
}

export default Button;
