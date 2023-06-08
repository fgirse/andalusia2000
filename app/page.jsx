import Feed from "@components/Feed";

const Home = () => (
 
 <>
  
 <section className='w-full flex-center flex-col'>
  <div className='bg-black/20 rounded-xl'>
    <h1 className='head_text text-center'>
      
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Andalusien  </span>
    </h1>
    <p className='desc text-center'>
  Lebe Deinen Wohntraum !!!
    </p>

    </div>
  </section>
  <Feed />
  </>
);

export default Home;
