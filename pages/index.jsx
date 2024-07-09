import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dapp-Lottery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Section />
      </div>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   return {};
// };
