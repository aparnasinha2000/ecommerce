import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <Layout>
      <Jumbotron style={{margin: '5rem', background: '#fff'}} className="text-center">
        <h1>Welcome to Admin Dashboard</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste omnis voluptatem voluptas sit qui autem magnam fugit. Quis nobis amet maxime, sit eos exercitationem, magnam nostrum alias voluptatem aspernatur veniam.</p>
      </Jumbotron>
    </Layout>
  )
};

export default Home;