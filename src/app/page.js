import Image from "next/image";
import styles from "./page.module.css";
import TelaDeLogin from "@/components/telaDeLogin/telaDeLogin";

export default function Home() {
  return (
    <div className={styles.page}>
      <TelaDeLogin/>
    </div>
  );
}
