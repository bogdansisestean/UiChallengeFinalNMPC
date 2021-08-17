import React from "react";

import Header from "../../Components/ReusableComponents/Header/Header";
import FirstSection from "../../Components/Sections/FirstSection/FirstSection";
import PicTextSection from "../../Components/Sections/PicTextSection/PictextSection";
import ExchangeTable from "../../Components/Sections/ExchangeTable/ExchangeTable";
import TradeSection from "../../Components/Sections/TradeSection/TradeSection";

import picSecOne from "../../Images/screen1bg.png";
import picSecTwo from "../../Images/Layer 2.png";
import picSecThree from "../../Images/Ñëîé 1 1.png";


function Home() {
  return (
    <div>
      <Header />
      <FirstSection
        title={
          <h2 className="white-thin-heading">
            We provide easy solution to exchange your{" "}
            <span className="white-bold-heading">
              Bitcoin/ GiftCard for money
            </span>
          </h2>
        }
        description={
          "CoinBase is a platform for trading your bitcoin and giftcard at the best rate, why not give us a trial."
        }
        isButton={true}
        buttonSrc={"/Contact-Us"}
        buttonText={"Get Started"}
        image={picSecOne}
      />
      <PicTextSection
        isLeftPic={true}
        title={"Welcome to CoinBase"}
        description={
          "We have the best rates . Simply start your exchange right now. Sign up for our Affiliate program and earn commission from each exchange. The earnings are credited in your account instantly and can be withdrawn right away. Also note some exchange directions are hidden for unregistered user. To ensure to have access to all our exchange directions and benefits kindly sign up and verify your identity."
        }
        image={picSecTwo}
        isButton={true}
        buttonSrc={"/Contact-Us"}
        buttonText={"Get Started"}
      />
      <ExchangeTable />
      <PicTextSection
        title={"Great experience with CoinBase"}
        description={
          "CoinBase is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria."
        }
        image={picSecThree}
        isButton={true}
        buttonText={"Discover"}
        buttonSrc={"/Contact-Us"}
      />
      <TradeSection title={"Trade from anywhere"} />
    </div>
  );
}

export default Home;
