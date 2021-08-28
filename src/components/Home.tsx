import PostList from "./PostList";
import { useGetAllPostsQuery } from '../api/JSONPlaceholder'

const Home = () => {
  const { data, error, isLoading } = useGetAllPostsQuery(null)

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
      { data && <PostList posts={data} /> }
    </div>
  );
}
 
export default Home;
