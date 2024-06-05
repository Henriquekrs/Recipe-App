import { GetServerSideProps } from 'next';

const Home = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
};

export default Home;
