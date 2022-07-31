import React from 'react';
import { PortfolioPieceType } from '../types';
import GetResourceUrl from '../../../utilities/GetResourceURL';
import Typography from '../../../components/typography/Typography';
import Button from '../../../components/button/Button';
import { IoArrowForwardOutline, IoTodayOutline } from 'react-icons/io5';
import Link from 'next/link';
import Tag from '../../../components/tags/Tag';
import { useRouter } from 'next/router';

type Props = {
  portfolio: PortfolioPieceType;
  className?: string;
};

const PortfolioCard = ({ portfolio, className = '' }: Props) => {
  return (
    <Link href={`/portfolio/${portfolio?.slug?.current}`}>
      <a
        className={`px-6 relative min-h-[250px] h-full py-16 md:py-14  overflow-hidden grid gap-6 bg-cover bg-center bg-no-repeat rounded-xl md:rounded-2xl before:block before:absolute before:top-0 before:w-full before:h-full before:bg-slate-900/80 hover:before:backdrop-blur-sm before:hover:bg-primary-900/80 before:transition-colors before:duration-300 cursor-eye ${className}`}
        style={{
          backgroundImage: `url(${GetResourceUrl(
            portfolio?.bannerImage?.asset
              ? portfolio.bannerImage.asset
              : portfolio?.productImage?.asset
          )
            .width(1080)
            .height(500)
            .blur(1)
            .fit('max')
            .auto('format')
            .url()})`,
        }}
      >
        <div className='z-10 grid gap-2 max-w-md'>
          <Tag color={portfolio?.completedAt ? 'secondary' : 'tertiary'}>
            <>
              <IoTodayOutline className='h-5 w-5' />
              <span>
                {portfolio?.completedAt
                  ? new Date(portfolio?.completedAt).toLocaleDateString(
                      'en-US',
                      {
                        month: 'long',
                        year: 'numeric',
                      }
                    )
                  : 'Ongoing'}
              </span>
            </>
          </Tag>
          <Typography
            size='display3'
            as='h1'
            className='text-white tracking-tight drop-shadow-md max-w-2xl'
          >
            <strong>{portfolio.projectName}</strong> —{' '}
            {portfolio.projectSubtitle}
          </Typography>
        </div>
        <div className='z-10 self-end justify-self-start mt-6'>
          {portfolio?.slug && (
            <Button
              type='text-light'
              size='large'
              className='pl-0 drop-shadow-md !text-slate-200 hover:!text-white transition-colors'
              // href={`/portfolio/${portfolio?.slug.current}`}
              icon={IoArrowForwardOutline}
            >
              Project case-study
            </Button>
          )}
        </div>
      </a>
    </Link>
  );
};

export default PortfolioCard;
