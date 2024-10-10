'use client';

import React, {useEffect} from 'react';

type Props = {
  children: React.ReactNode;
  open: boolean;
  toggle: () => void;
};

function Modal({open, toggle, children}: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? 'clip' : 'auto';
  }, [open]);
  return (
    <div
      className={
        'fixed top-0 left-0 h-screen z-20 bg-[#7E7C7C5C] pt-20 flex justify-center transition-[opacity] ease-in duration-300 ' +
        (open ? 'w-full opacity-100' : 'w-0 opacity-0')
      }
      onClick={toggle}
    >
      <div
        className={
          'mx-auto w-2/5 min-w-[370px] bg-[#F7EBF9] z-30 h-max relative flex justify-between p-5 transition-[scale] ease-in duration-300 rounded-xl ' +
          (open ? 'scale-100' : 'scale-0')
        }
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
