import Feed from "@components/Feed";


const Home = () => {
  return (
    <section className="w-full flex flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit cupiditate inventore corrupti nesciunt quis incidunt, itaque temporibus quod et est optio odit animi illo, doloribus ipsum eos totam eum!
        </p>

        <Feed/>
    </section>
  )
}

export default Home