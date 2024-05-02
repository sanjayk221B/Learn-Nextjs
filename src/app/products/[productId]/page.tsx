import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = ({ params }: props): metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

//Dynamic routing metadata
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 200);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Details about the product {params.productId}</h1>;
}
