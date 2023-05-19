import Head from 'next/head'
import Image from 'next/image'
import Format from '../layout/format';

// compoenents
import Section1 from '../components/section1.jsx';
import Section2 from '../components/section2.jsx';
import Section3 from '../components/section3.jsx';
import Section4 from '../components/section4.jsx';

export default function Home() {
  return (
    <div>
      <Format>
        <Section1></Section1>
        <Section3></Section3>
        <Section4></Section4>
      </Format>
    </div>
  )
}
