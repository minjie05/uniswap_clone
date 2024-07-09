import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { SearchToken } from "@/components/SearchToken";
import { FundsModal } from "@/components/FundsModal";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Uniswap-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Section />
      </div>
      <SearchToken />
      <FundsModal />
    </div>
  );
}

// export const getServerSideProps = async () => {
//   return {};
// };
