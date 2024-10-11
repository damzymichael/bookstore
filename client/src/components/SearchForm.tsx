'use client';
import {useState, useEffect, useRef, ChangeEvent} from 'react';
import {SearchParam, filterText, searchParams} from '@/utils/book';
import Modal from './ui/Modal';
import {IoMdArrowDropdown} from 'react-icons/io';
import {bookstore} from '@/utils/axios.config';
import {useQuery} from '@tanstack/react-query';
import {Book} from '@/types';
import {useRouter} from 'next/navigation';

type Props = Omit<React.ComponentProps<typeof Modal>, 'children'>;

function SearchForm({open, toggle}: Props) {
  const router = useRouter();
  const [dropdown, setDropDown] = useState(false);
  const [searchParam, setSearchParam] = useState<SearchParam>('Title');
  const inputRef = useRef<HTMLInputElement>(null);
  const [results, setResults] = useState<Book[]>([]);
  const [timeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);
  const {isLoading, data} = useQuery({
    queryKey: [`books`],
    queryFn: async () => {
      const {data} = await bookstore.get<Book[]>('book');
      return data;
    }
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!data || !e.target.value.trim()) return setResults([]);
    if (timeout) clearTimeout(timeout);
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterText(data, searchParam, e.target.value);
        setResults(searchResult as Book[]);
      }, 600)
    );
  };
  function closeModal() {
    setResults([]);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    toggle();
  }
  function closeDropdown() {
    setDropDown(false);
    document.removeEventListener('click', closeDropdown);
  }
  useEffect(() => {
    if (dropdown) {
      document.addEventListener('click', closeDropdown);
    }
    function resetResults() {
      setResults([]);
      document.removeEventListener('click', resetResults);
    }
    if (results.length > 1) {
      document.addEventListener('click', resetResults);
    }
  }, [dropdown, results]);
  return (
    <Modal open={open} toggle={closeModal}>
      <div className='text-[#2F0139] w-full' onClick={closeDropdown}>
        <header className='text-center'>
          <h3 className='font-semibold text-lg mb-5'>Search for books</h3>
        </header>
        <div className='flex gap-2 items-center mb-3'>
          <h5>Search by</h5>
          <div className='border relative border-white bg-[#FFFFFF33] rounded-3xl cursor-pointer '>
            <div
              className='text-sm flex items-center gap-2 py-1 px-3'
              onClick={e => {
                e.stopPropagation();
                setDropDown(!dropdown);
              }}
            >
              <span>{searchParam}</span>
              <IoMdArrowDropdown />
            </div>
            {dropdown && (
              <div className='absolute z-30 bg-[#B700E0] p-1 pl-2 min-w-20 rounded-md text-white top-8 left-1 flex flex-col gap-2'>
                {searchParams.map(param => (
                  <button
                    className='text-left py-1'
                    key={Math.random() * 200}
                    onClick={() => setSearchParam(param)}
                  >
                    {param}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <form className='my-4'>
          <div className='relative'>
            <input
              ref={inputRef}
              type='text'
              className='bg-inherit outline-none px-3 py-2 border min-w-72 border-[#2F0139] rounded-xl'
              placeholder={`Enter ${searchParam.toLowerCase()} name`}
              disabled={isLoading}
              onChange={handleInputChange}
            />
            {results.length > 0 && (
              <div className='absolute z-20 bg-[#b700e0da] p-1 pl-2 text-sm min-w-72 max-h-44 overflow-y-auto rounded-md text-white top-9 left-0 flex flex-col gap-3'>
                {results.map(book => (
                  <div
                    role='button'
                    className='text-left py-1'
                    key={book.id}
                    onClick={() => {
                      closeModal();
                      router.push('/book/' + book.id);
                    }}
                  >
                    {book.title}{' '}
                    {searchParam == 'Author' && (
                      <span className='text-xs'>- {book.authors[0]}</span>
                    )}
                    {searchParam == 'Genre' && (
                      <span className='text-xs uppercase'>
                        - {book.category}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default SearchForm;
