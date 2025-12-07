import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Bem-vindo à Barbearia dos Amigos</h1>
      <a href="login">Clique aqui para fazer o login</a>
    </div>
  );
}
