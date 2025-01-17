import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function BodyImage() {
  return (
    <div className={styles.center}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  );
}
