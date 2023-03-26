import { MainContext } from "@/context/MainContext";
import { CategoryInterface } from "@/interfaces/CategoryInterface";
import { CompanyInterface } from "@/interfaces/CompanyInterface";
import HomeTemplate from "@/components/templates/HomeTemplate/HomeTemplate";
import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import { FC, useContext } from "react";

interface Props {
  categories: CategoryInterface[];
  company: CompanyInterface;
}

const Home: FC<Props> = ({ categories, company }) => {
  const { setCompany, setCategories } = useContext(MainContext);
  setCompany(company);
  setCategories(categories);

  return (
    <>
      <Head>
        <title>Menu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeTemplate />
      </main>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const API_URL = process.env.API_URL;
  const company = await axios.get(`${API_URL}/companie`);
  const categories = await axios.get(`${API_URL}/menu`);

  return {
    props: {
      company: company.data,
      categories: categories.data,
    },
  };
};
