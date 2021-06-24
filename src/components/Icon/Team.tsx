import { SVGProps } from 'react';

function Team(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={42}
      height={42}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.875 21a4.362 4.362 0 004.358-4.375 4.362 4.362 0 00-4.358-4.375 4.377 4.377 0 00-4.375 4.375A4.377 4.377 0 0028.875 21zM15.75 19.25A5.228 5.228 0 0020.983 14a5.228 5.228 0 00-5.233-5.25A5.243 5.243 0 0010.5 14a5.243 5.243 0 005.25 5.25zm13.125 5.25c-3.203 0-9.625 1.61-9.625 4.813V31.5c0 .962.788 1.75 1.75 1.75h15.75c.962 0 1.75-.788 1.75-1.75v-2.188c0-3.202-6.422-4.812-9.625-4.812zM15.75 22.75c-4.078 0-12.25 2.047-12.25 6.125V31.5c0 .962.787 1.75 1.75 1.75h10.5v-3.938c0-1.487.578-4.095 4.148-6.072-1.523-.315-2.993-.49-4.148-.49z"
      />
    </svg>
  );
}

export default Team;
