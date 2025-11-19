import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/(components)/header/header";
import ProductGrid from "@/app/(components)/featured/featured";

export default function Home() {
  return (
    <div>
      <Header/>
      <ProductGrid/>
    </div>
  );
}
