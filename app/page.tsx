import HorizontalScroll from '@/components/HorizontalScroll';
import Slide1Hero from '@/components/slides/Slide1Hero';
import Slide2WhyPython from '@/components/slides/Slide2WhyPython';
import Slide2Outcomes from '@/components/slides/Slide2Outcomes';
import Slide3Content from '@/components/slides/Slide3Content';
import Slide4Resources from '@/components/slides/Slide4Resources';
import Slide5Assessment from '@/components/slides/Slide5Assessment';
import Slide6Conclusion from '@/components/slides/Slide6Conclusion';

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <HorizontalScroll>
        <Slide1Hero />
        <Slide2WhyPython />
        <Slide2Outcomes />
        <Slide3Content />
        <Slide5Assessment />
        <Slide6Conclusion />
        <Slide4Resources />
      </HorizontalScroll>
    </main>
  );
}
