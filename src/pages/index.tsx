import { GetServerSideProps } from 'next'

const Home = () => {
  return null
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  }
}

export default Home
