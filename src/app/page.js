import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center gap-4">
      <div>
        <Image
          src={'/dices 1.png'}
          width={400}
          height={400}
          alt="Dice Image"
        />
      </div>
      <div >
        <p className="text-6xl font-bold mb-4">DICE GAME</p>
        <Link
          href={'/gameplay'}
          className=" bg-black border border-black text-white px-8 py-1 text-sm rounded-sm transition duration-200 hover:bg-white hover:text-black "
        >
          Play Now
        </Link>
      </div>
    </div>
  )
}

export default Home
