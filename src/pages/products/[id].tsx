import BackBtn from "@/components/BackBtn/BackBtn";
import { CompanyInterface } from "@/components/CompanyDetails/CompanyDetails";
import { CategoryInterface } from "@/components/CategoryCard/CategoryCard";
import { Categories } from "@/components/ProductCard/ProductCard";
import ItemsList from "@/components/ProductsList/ProductsList";
import Logo from "@/components/LogoBanner/LogoBanner";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";

interface Props {
  details: Categories[];
  menu: CategoryInterface[];
  company: CompanyInterface;
}
const CategoryPage: FC<Props> = ({ details, menu, company }) => {
  return (
    <>
      <Head>
        <title>Desserts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Logo company={company} />
        <BackBtn />
        <ItemsList categories={details} menu={menu} company={company} />
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://nomad-cloud.in/api/categorieForProducts`);
  const [products]: CategoryInterface[] = await res.json();

  const paths = [products].map((p: { id: { toString: () => any } }) => ({
    params: {
      id: p.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && params.id) {
    const res = await fetch(
      `https://nomad-cloud.in/api/categorieForProducts/${params.id}`
    );
    const details = await res.json();
    const resMenu = await fetch(`https://nomad-cloud.in/api/menu`);
  const resCompany = await fetch(`https://nomad-cloud.in/api/companie`);
  const company = await resCompany.json();

    const menu = await resMenu.json();
    if (Object.keys(details).length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        details,
        company,
        menu,
      },
    };
  }

  return {
    notFound: true,
  };
};

export default CategoryPage;