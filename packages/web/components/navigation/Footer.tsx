import React, { useEffect } from 'react';
import Typography from '../typography/Typography';

type Props = {};

const Footer = (props: Props) => {
  const [currentYear, setCurrentYear] = React.useState(2111);

  useEffect(() => {
    const conFirmCurrentYear = async () => {
      try {
        const res = await fetch('http://worldclockapi.com/api/json/utc/now');
        const data = await res.json();
        const year = data?.currentDateTime?.substring(0, 4);
        if (year && Number(year) && Number(year) !== currentYear) {
          setCurrentYear(Number(year));
        }
      } catch (error) {}
    };
    conFirmCurrentYear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <footer className='mt-4 border-t border-slate-300 py-4 md:py-6 text-center '>
      <Typography as='p' size='body3' className=' container-1'>
        &copy; Tashinga Mtoko {currentYear}
      </Typography>
    </footer>
  );
};

export default Footer;
