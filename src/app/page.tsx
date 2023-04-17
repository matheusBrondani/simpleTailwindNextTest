import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import PageList from "./pageList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-2xl font-bold">List of pages</h1>
      <PageList />
    </main>
  );
}
