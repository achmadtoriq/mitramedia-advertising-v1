import Apa from "@/components/Main/Apa";
import ImageBanner from "@/components/Main/ImageBanner";
import Partners from "@/components/Main/Partners";
import ProfesionalsMobile from "@/components/Main/ProfesionalsMobile";
import YoutubePlayer from "@/components/YoutubePlayer";


export default function Home() {
  return (
    <main className="">
      <ImageBanner />
      <ProfesionalsMobile />
      <Apa/>
      {/* <Partners/> */}
      {/* <YoutubePlayer /> */}
    </main>
  );
}
