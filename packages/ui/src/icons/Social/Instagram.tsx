import type { FC } from "react";
import { UI } from "../../typedefs/namespace";

const Instagram: FC<UI.JSX.ReactMapped["svg"]> = ({ ...svg }) => (
  <svg
    width='24'
    height='24'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 62.643 62.63'
    {...svg}>
    <path
      id='Icon_awesome-instagram'
      name='Icon awesome-instagram'
      d='M31.323,17.495A16.057,16.057,0,1,0,47.381,33.552,16.032,16.032,0,0,0,31.323,17.495Zm0,26.5A10.439,10.439,0,1,1,41.763,33.552,10.458,10.458,0,0,1,31.323,43.992ZM51.783,16.838a3.745,3.745,0,1,1-3.745-3.745A3.737,3.737,0,0,1,51.783,16.838Zm10.635,3.8c-.238-5.017-1.384-9.461-5.059-13.123S49.253,2.709,44.236,2.458c-5.171-.293-20.669-.293-25.84,0C13.393,2.7,8.949,3.841,5.274,7.5S.466,15.608.215,20.625c-.293,5.171-.293,20.669,0,25.84C.452,51.482,1.6,55.926,5.274,59.588S13.379,64.4,18.4,64.647c5.171.293,20.669.293,25.84,0,5.017-.238,9.461-1.384,13.123-5.059s4.807-8.106,5.059-13.123c.293-5.171.293-20.655,0-25.826Zm-6.68,31.374a10.569,10.569,0,0,1-5.953,5.953c-4.123,1.635-13.905,1.258-18.461,1.258s-14.352.363-18.461-1.258a10.569,10.569,0,0,1-5.953-5.953C5.274,47.891,5.651,38.108,5.651,33.552S5.288,19.2,6.909,15.091a10.569,10.569,0,0,1,5.953-5.953C16.985,7.5,26.767,7.88,31.323,7.88s14.352-.363,18.461,1.258a10.569,10.569,0,0,1,5.953,5.953C57.373,19.214,57,29,57,33.552S57.373,47.9,55.738,52.013Z'
      transform='translate(0.005 -2.237)'
      fill={svg.fill ? svg.fill : "#e1242a"}
    />
  </svg>
);

Instagram.displayName = "Instagram";

export default Instagram;
