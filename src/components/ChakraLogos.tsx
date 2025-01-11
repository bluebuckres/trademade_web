import React from 'react';

// Core Tool Logos
const linuxLogoPath = '/chakra_logo/linux.png';
const awsLogoPath = '/chakra_logo/aws.png';
const githubLogoPath = '/chakra_logo/github.jpeg';
const telegramLogoPath = '/chakra_logo/Telegram_2019_Logo.svg.webp';
const grafanaLogoPath = '/chakra_logo/grafana.png';
const pythonLogoPath = '/chakra_logo/python.png';
const cppLogoPath = '/chakra_logo/c++.png';
const dockerLogoPath = '/chakra_logo/docker.png';

// Broker Logos
const zerodhaLogoPath = '/chakra_logo/zerodha6662.jpg';
const upstoxLogoPath = '/chakra_logo/upstox-logo-png_seeklogo-435648.png';
const fivePaisaLogoPath = '/chakra_logo/5paisa.png';
const aliceBlueLogoPath = '/chakra_logo/aliceblue.png';
const flatTradeLogoPath = '/chakra_logo/flattrade.png';
const fyersLogoPath = '/chakra_logo/fyers.png';
const growwLogoPath = '/chakra_logo/groww_logo-freelogovectors.net_.png';
const iiflLogoPath = '/chakra_logo/iifl.jpeg';
const jainamLogoPath = '/chakra_logo/jainam.png';
const kotakLogoPath = '/chakra_logo/kotak.png';
const motilalLogoPath = '/chakra_logo/motilal-oswal-logo_startuptalky.jpg';
const sasOnlineLogoPath = '/chakra_logo/sasonline.png';
const shoonyaLogoPath = '/chakra_logo/shoonya.jpeg';
const zebuLogoPath = '/chakra_logo/zebu.jpeg';

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, className = "w-full h-full object-contain" }) => (
  <img src={src} alt={alt} className={className} />
);

export const coreTools = [
  {
    icon: <Logo src={linuxLogoPath} alt="Linux" />,
    label: 'Linux',
    description: 'Run your trading systems on a reliable platform'
  },
  {
    icon: <Logo src={pythonLogoPath} alt="Python" />,
    label: 'Python',
    description: 'Build powerful trading algorithms'
  },
  {
    icon: <Logo src={cppLogoPath} alt="C++" />,
    label: 'C++',
    description: 'High-performance trading systems'
  },
  {
    icon: <Logo src={dockerLogoPath} alt="Docker" />,
    label: 'Docker',
    description: 'Containerized deployment'
  },
  {
    icon: <Logo src={awsLogoPath} alt="AWS" />,
    label: 'AWS',
    description: 'Cloud infrastructure'
  },
  {
    icon: <Logo src={grafanaLogoPath} alt="Grafana" />,
    label: 'Grafana',
    description: 'Real-time monitoring'
  },
  {
    icon: <Logo src={githubLogoPath} alt="GitHub" />,
    label: 'GitHub',
    description: 'Version control'
  },
  {
    icon: <Logo src={telegramLogoPath} alt="Telegram" />,
    label: 'Telegram',
    description: 'Instant notifications'
  }
];

export const brokers = [
  {
    icon: <Logo src={zerodhaLogoPath} alt="Zerodha" />,
    label: 'Zerodha'
  },
  {
    icon: <Logo src={upstoxLogoPath} alt="Upstox" />,
    label: 'Upstox'
  },
  {
    icon: <Logo src={fivePaisaLogoPath} alt="5paisa" />,
    label: '5paisa'
  },
  {
    icon: <Logo src={aliceBlueLogoPath} alt="Alice Blue" />,
    label: 'Alice Blue'
  },
  {
    icon: <Logo src={growwLogoPath} alt="Groww" />,
    label: 'Groww'
  },
  {
    icon: <Logo src={fyersLogoPath} alt="Fyers" />,
    label: 'Fyers'
  },
  {
    icon: <Logo src={flatTradeLogoPath} alt="Flattrade" />,
    label: 'Flattrade'
  },
  {
    icon: <Logo src={shoonyaLogoPath} alt="Shoonya" />,
    label: 'Shoonya'
  },
  {
    icon: <Logo src={iiflLogoPath} alt="IIFL" />,
    label: 'IIFL'
  },
  {
    icon: <Logo src={jainamLogoPath} alt="Jainam" />,
    label: 'Jainam'
  },
  {
    icon: <Logo src={kotakLogoPath} alt="Kotak" />,
    label: 'Kotak'
  },
  {
    icon: <Logo src={motilalLogoPath} alt="Motilal Oswal" />,
    label: 'Motilal Oswal'
  },
  {
    icon: <Logo src={sasOnlineLogoPath} alt="SAS Online" />,
    label: 'SAS Online'
  },
  {
    icon: <Logo src={zebuLogoPath} alt="Zebu" />,
    label: 'Zebu'
  }
];
