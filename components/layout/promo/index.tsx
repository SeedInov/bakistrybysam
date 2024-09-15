import { Button } from 'components/button';
import Grid from 'components/grid';
import Image from 'next/image';
import Cake from 'public/icons/cake';
import Egg from 'public/icons/egg';
import PanCake from 'public/icons/pancake';
import Van from 'public/icons/van';

export default function Promo() {
  return (
    <section className="container mx-auto my-[70px] flex max-w-[1140px] items-center justify-between px-2.5">
      <div>
        <h2 className="mb-8 text-header-2 font-semibold leading-none">Only the best ingredients</h2>
        <Grid className="flex flex-col">
          <Grid.Item className="mb-5 flex items-center">
            <Egg className="mr-2.5 w-10" />
            Premium quality with every bite
          </Grid.Item>
          <Grid.Item className="mb-5 flex items-center">
            <Van className="mr-2.5 w-10" />
            Light and delightful textures
          </Grid.Item>
          <Grid.Item className="mb-5 flex items-center">
            <Cake className="mr-2.5 w-10" />
            Beautifully presented, irresistibly delicious
          </Grid.Item>
          <Grid.Item className="flex items-center">
            <PanCake className="mr-2.5 w-10" />
            Made with love and passion
          </Grid.Item>
        </Grid>
        <Button className="mt-7">Find out more</Button>
      </div>
      <div className="hidden md:block">
        <Image
          src="/promo/special-cake.png"
          width="446"
          height="445"
          alt="Choco cake promotional"
        />
      </div>
    </section>
  );
}
