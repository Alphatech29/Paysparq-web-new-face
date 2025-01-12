
import { AuroraHero } from "./../../../components/animation/AuroraHero";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faMeteor,faHeadset,faGaugeHigh} from '@fortawesome/free-solid-svg-icons';
import { Button} from "flowbite-react";
import { HiOutlineArrowRight} from "react-icons/hi";
import { motion } from "framer-motion";



function Home() {
  return (
    <>
    <AuroraHero/>
    <div className="w-full px-24 pt-20">
      <div className="flex justify-center items-center gap-8">
      <div className=" w-2/3 flex justify-center items-center flex-col gap-5">
        <div className="flex items-center flex-col bg-paysparq p-5 rounded-lg">
        <span></span>
        <h1 className="text-xl font-interSB font-semibold pb-5 text-secondary">Best Rates Guaranteed</h1>
        <p className="text-center text-secondary text-lg">Instantly trade digital assets, gift cards, and cryptocurrency at unbeatable market rates. Enjoy fast transactions, secure payments, competitive prices, and a seamless, hassle-free trading experience!</p>
        </div>
        <div className=" flex items-center flex-col bg-paysparq p-5 rounded-lg">
        <span></span>
        <h1 className="text-xl font-interSB font-semibold pb-5 text-secondary">Instant Airtime Deals</h1>
        <p className="text-center text-secondary text-lg">Easily convert airtime to cash, purchase airtime, and send international airtime securely—all in one place. Fast, reliable, and no extra fees! Simplify your payments today.</p>
        </div>
      </div>
      <div>
      <div className=" bg-primary-600 rounded-lg relative">
    <img
      src="/image/wigglynet3.png"
      alt=""
      loading="lazy"
      className="absolute top-0 left-0 w-full h-full object-cover z-10"
    />
    <img
      src="/image/main-screen-left.png"
      alt="phone screen"
      loading="lazy"
      className="relative z-20 "
     width={650}
    />
  </div>
</div>
      <div className=" w-2/3 flex justify-center items-center flex-col gap-5">
      <div className="flex items-center flex-col bg-paysparq p-5 rounded-lg">
        <span></span>
        <h1 className="text-xl font-interSB font-semibold pb-5 text-secondary">Seamless Local & Global Transfers</h1>
        <p className="text-center text-secondary text-lg">Send money locally and internationally with ease. Fast, secure, and fee-free transfers anytime, anywhere. Reliable transactions made simple!</p>
        </div>
        <div className="flex items-center flex-col bg-paysparq p-5 rounded-lg">
        <span></span>
        <h1 className="text-xl font-interSB font-semibold pb-5 text-secondary">Seamless Local & Global Transfers</h1>
        <p className="text-center text-secondary text-lg">Instantly trade digital assets, gift cards, and cryptocurrency at unbeatable market rates. Enjoy fast transactions, secure payments, competitive prices, and a seamless, hassle-free trading experience!</p>
        </div>
      </div>
      </div>
    </div>
    <div className="w-fll justify-between items-center flex px-24 py-16">
      <div className="w-3/6">
      <h2 className="text-4xl font-interSB font-bold text-secondary">All-In-One Cryptocurrency Exchange for Your Trading Needs</h2>
      <p className="pt-4 tex-3xl font-interSB font-medium text-secondary">Experience fee-free trading with instant payments, secure device authorization, 24/7 customer support, real-time updates, and seamless transactions for coins like Bitcoin, USDT, USDC, Pi, and more – all in one platform.</p>
      <Button size="xs" className="bg-primary-600 mt-3 p-2 text-lg hover:border-dash">Trade Now <HiOutlineArrowRight className="ml-2 h-5 w-5" /></Button>
      </div>
      <div className=" flex items-end">
      <motion.img src="/image/bitcoin_app2_y0tkz4.png" 
      width={400} alt="bitcoin" 
      loading="lazy"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: [0.5, 1, 0.5], 
        scale: [0.9, 1, 0.9], 
        rotate: [0, 10, -10, 0] 
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity, 
        repeatType: "loop", 
        ease: "easeInOut" 
      }}
       />
      </div>
    </div>
    <div className="w-full px-24 pt-20 flex justify-center items-center">
    <div className="w-5/6 h-96 bg-primary-600 rounded-lg relative overflow-hidden">
    <img src="/image/wigglynet3.png" alt="" loading="lazy"
    className="absolute top-0 left-0 w-full h-full object-cover"/>
    <div className=" px-20 relative flex items-center justify-between z-20">
    <div className="pl-9 pt-4">
      <img src="/image/cards-screen.png" alt="" width={300} loading="lazy" />
    </div>
    <div className="card w-2/4 flex flex-col items-center pb-48">
      <h1 className="text-white text-center text-4xl font-interB font-bold pb-3">Get your virtual USD card instantly!</h1>
      <p className=" text-center w-2/3 font-interSB text-xl text-white font-medium">Get your Paysparq virtual USD card instantly, eliminating delays. Manage recurring expenses easily with a powerful card accepted everywhere.</p>
      <a href="#" className="outline-none focus:outline-none  mt-5 flex justify-center items-center gap-2 bg-secondary rounded-lg py-4 px-9 text-white text-center text-xl hover:shadow-lg hover:shadow-rose-500">Create <HiOutlineArrowRight />
      </a>
    </div>
    </div>
    </div>
    </div>
    <div className="why-choose-us w-full py-16 px-24 bg-white">
      <div className="flex-col w-full flex justify-center items-center">
        <span className="bg-primary-700 p-2 rounded-lg text-white text-base font-interSB">Why choose Paysparq?</span>
        <h1 className="mt-3 pt-5 text-5xl font-interSB font-bold text-secondary">Transactions Made Easy!</h1>
      </div>
      <div className="flex justify-center items-center gap-3 w-full pt-10 mt-5">
        <div className="flex flex-col justify-center items-center w-2/6 rounded-xl bg-paysparq p-10">
          <span><FontAwesomeIcon icon={faGaugeHigh} size="4x" className="text-primary-600"/></span>
          <h3 className="text-lg font-interSB font-bold text-center text-secondary pt-4">Seamless Transactions.</h3>
          <p className="pt-5 text-center">Paysparq is designed to be user-friendly, allowing you to easily access features and perform transactions conveniently.</p>
        </div>
        <div className="flex flex-col justify-center items-center w-2/6 rounded-xl bg-paysparq p-10">
          <span><FontAwesomeIcon icon={faHeadset} size="4x" className="text-primary-600" /></span>
          <h3 className="text-lg font-interSB font-bold text-center text-secondary pt-4">Customer Support</h3>
          <p className="pt-5 text-center">Get prompt response to your complaints, issues or enquiries by using any of our available call or social channels.</p>
        </div>
        <div className="flex flex-col justify-center items-center w-2/6 rounded-xl bg-paysparq p-10">
          <span><FontAwesomeIcon icon={faShieldHalved} size="4x" className="text-primary-600" /></span>
          <h3 className="text-lg font-interSB font-bold text-center text-secondary pt-4">Secure Platform</h3>
          <p className="pt-5 text-center">Paysparq leverages technology in its operations to ensure you can perform transactions securely and efficiently.</p>
        </div>
        <div className="flex flex-col justify-center items-center w-2/6 rounded-xl bg-paysparq p-10">
          <span><FontAwesomeIcon icon={faMeteor} size="4x" className="text-primary-600"/></span>
          <h3 className="text-lg font-interSB font-bold text-center text-secondary pt-4">Fast & Reliable.</h3>
          <p className="pt-5 text-center" >With years of experience, we`ve optimized our platform for speed, reliability, and seamless transaction performance.</p>
        </div>

      </div>

    </div>
    </>
  );
}

export default Home;
