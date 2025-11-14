import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import ProductGrid from "@/components/(featured)/featured";

export default function Home() {
  return (
    <div>
      <Header/>
      <ProductGrid/>
    </div>
  );
}
