import Container from '@/components/container';
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BILLIONAIRE_APES = [
  {
    currentBid: `0.54 ETH`,
    endTime: `12h 55m 2s`,
    starCount: `213`,
    ownerHandle: `@knight`,
    ownerAvatar: `/images/owner-avatar-1.png`,
    image: `/images/billionaire-ape-1.png`,
  },
  {
    currentBid: `0.54 ETH`,
    endTime: `12h 55m 2s`,
    starCount: `213`,
    ownerHandle: `@knight`,
    ownerAvatar: `/images/owner-avatar-2.png`,
    image: `/images/billionaire-ape-2.png`,
  },
  {
    currentBid: `0.54 ETH`,
    endTime: `12h 55m 2s`,
    starCount: `213`,
    ownerHandle: `@knight`,
    ownerAvatar: `/images/owner-avatar-3.png`,
    image: `/images/billionaire-ape-3.png`,
  },
  {
    currentBid: `0.54 ETH`,
    endTime: `12h 55m 2s`,
    starCount: `213`,
    ownerHandle: `@knight`,
    ownerAvatar: `/images/owner-avatar-1.png`,
    image: `/images/billionaire-ape-4.png`,
  },
  {
    currentBid: `0.54 ETH`,
    endTime: `12h 55m 2s`,
    starCount: `213`,
    ownerHandle: `@knight`,
    ownerAvatar: `/images/owner-avatar-2.png`,
    image: `/images/billionaire-ape-5.png`,
  },
  {
    currentBid: `0.54 ETH`,
    endTime: `12h 55m 2s`,
    starCount: `213`,
    ownerHandle: `@knight`,
    ownerAvatar: `/images/owner-avatar-3.png`,
    image: `/images/billionaire-ape-6.png`,
  },
];

const Home = () => {
  return (
    <Fragment>
      <section>
        <div className="bg-no-repeat bg-left-top-2 bg-ellipse-md">
          <div className="bg-no-repeat bg-top-right-5 bg-ellipse-sm">
            <Container>
              <div className="flex items-center justify-between gap-16 ">
                <div className="">
                  <Image src="/images/hero-image.png" alt="" width={585} height={687} />
                </div>
                <div className="max-w-xl text-white">
                  <div className="flex flex-col ">
                    <h1 className="relative font-bold text-white uppercase font-poppins text-8xl">
                      EXCLUSIVE
                      <span className="absolute right-2 -top-10">
                        <Image src="/images/glow.svg" alt="" width={65} height={80} />
                      </span>
                    </h1>
                    <p className="self-end text-5xl font-medium text-transparent font-roboto bg-clip-text bg-gradient-to-r from-aqua-blue to-magenta">
                      newest NFT release
                    </p>
                  </div>

                  <div className="flex flex-col items-end mt-20 text-right font-roboto">
                    <p className="pl-4 text-lg leading-6 ">
                      The{` `}
                      <span className="font-extrabold font-poppins">
                        BILLIONAIRE CLUB
                      </span>
                      {` `}
                      is a private collection of 10 000 billionaire apes NFTs&#8209;unique
                      digital collectibles. The apes are stored as ERC-721 tokens on the
                      Ethereum blockchain and hosted on IPFS.
                    </p>
                    <span className="font-medium text-purplish-blue ">
                      Reveal on October 20th.
                    </span>
                  </div>

                  <div>
                    <form className="flex gap-2 mt-8 font-roboto">
                      <label htmlFor="email" className="flex-1">
                        <span className="sr-only">Your Email</span>
                        <input
                          type="email"
                          id="email"
                          placeholder="your@email.com"
                          className="w-full h-full px-4 py-2 text-base text-center text-white placeholder-white transition-all duration-300 border-2 outline-none bg-dark border-purplish-blue placeholder-opacity-70 hover:border-violet-blue focus:border-violet-blue"
                        />
                      </label>
                      <button
                        type="submit"
                        className="flex items-center justify-center py-3 text-2xl font-semibold capitalize transition-all duration-300 px-9 bg-gradient-to-r from-pinkish-purple via-purplish-blue to-violet-blue hover:opacity-80"
                      >
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>

        <div className="bg-no-repeat bg-right-bottom-5 bg-ellipse-lg">
          <div className="bg-no-repeat bg-right-top-2 bg-dot-pattern">
            <div className="bg-no-repeat border border-transparent bg-left-bottom-5 bg-dot-pattern">
              <Container>
                <h2 className="font-semibold text-transparent font-poppins text-8xl mt-14 bg-gradient-to-r from-pinkish-purple via-violet-blue to-violet-blue bg-clip-text">
                  Collections
                </h2>
                <p className="mt-3 text-2xl max-w-7xl font-roboto">
                  With more than 180+ hand drawn traits, each NFT is unique and comes with
                  a membership to an exclusive group of successful investors. Join an
                  ambitious ever-growing community with multiple benefits and utilities.
                </p>

                <div className="grid grid-cols-3 gap-16 mt-16 mb-56 font-poppins">
                  {BILLIONAIRE_APES.map(
                    ({
                      currentBid,
                      endTime,
                      starCount,
                      ownerHandle,
                      ownerAvatar,
                      image,
                    }) => {
                      return (
                        <div
                          key={image}
                          className="flex flex-col max-w-lg px-6 pt-5 pb-5 border-2 backdrop-filter backdrop-blur-2xl bg-gradient-radial "
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Image src={ownerAvatar} alt="" width={43} height={43} />
                              <span className="text-lg font-medium">{ownerHandle}</span>
                            </div>

                            <div className="flex items-center gap-2 text-sm font-semibold">
                              <Image
                                src="/images/star.svg"
                                alt=""
                                width={16}
                                height={16}
                              />
                              <span>{starCount}</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Image src={image} alt="" width={336} height={337} />
                          </div>

                          <div className="flex justify-between mt-6">
                            <div className="flex flex-col">
                              <span className="text-hit-grey">Current Bid</span>
                              <span className="text-xl font-bold text-white ">
                                {currentBid}
                              </span>
                            </div>
                            <div className="flex flex-col text-right font-poppins">
                              <span className="text-hit-grey">Ending In</span>
                              <span className="text-xl font-bold text-white ">
                                {endTime}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </Container>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-pinkish-purple via-purplish-blue to-violet-blue">
        <Container>
          <div className="flex items-center justify-between gap-14">
            <div className="max-w-3xl">
              <h2 className="text-5xl font-bold font-poppins text-orange-yellow">
                The Golden Guests
              </h2>
              <p className="mt-4 text-2xl leading-6 font-roboto">
                The Golden Guests edition by the Billionaire Club are the rarest NFTs.
                They are all hand drawn and have no element in common with the regular
                collection.
              </p>

              <Link href="/">
                <a className="relative inline-flex py-3 text-3xl font-semibold text-center text-white transition-all duration-300 border-2 border-black mt-9 font-poppins bg-gradient-to-r from-purplish-blue to-violet-blue px-9 shadow-square hover:from-aqua-blue hover:to-magenta hover:bg-gradient-to-l hover:opacity-75">
                  Join us to register for the Presale
                </a>
              </Link>
            </div>
            <div className="">
              <Image src="/images/golden-ticket.png" alt="" width={470} height={300} />
            </div>
          </div>
        </Container>
      </section>

      <section className="flex flex-col pb-32 text-center bg-no-repeat bg-left-5 pt-28 bg-dot-pattern">
        <h2 className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-aqua-blue to-magenta font-poppins">
          Get Aped with Us!
        </h2>

        <div className="flex items-center gap-4 mx-auto mt-4 ">
          <div className="w-max">
            <Link href="/">
              <a className="text-3xl transition-colors duration-300 font-roboto hover:text-pinkish-purple">
                Sign up for our newsletter
              </a>
            </Link>
            <div className="w-full h-1 bg-gradient-to-r from-pinkish-purple via-purplish-blue to-violet-blue" />
          </div>
          <span className="-mb-6">
            <Image src="/images/cursor.svg" alt="" width={44} height={44} />
          </span>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
