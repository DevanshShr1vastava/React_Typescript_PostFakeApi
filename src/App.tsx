import { Accordion, Col, Container, Row } from "react-bootstrap"
import PostBox from "./components/PostBox"
import AddPostComponent from "./components/AddPostComponent"
import { getPosts, IPost } from "./utils/postTools"
import { useEffect, useState } from "react"
function App() {
  const fetchPosts = async()=>{
    const postData = await getPosts();
    setPosts(postData.filter((item:IPost)=>item.id < 15));
  }
  const [posts,setPosts] = useState<IPost[]>();
  useEffect(()=>{
    fetchPosts();   
  },[]);

  return (
    <>
      <Container fluid>
        <h1>Fake Posts App</h1>
        <br />
        <Row>
          <Col className='md-6'>
          <Accordion>
            {posts?.map((post)=>(
              <Accordion.Item eventKey={`${post.id}`} key={post.id}>
                <Accordion.Header>Post {post.id} : {post.title}</Accordion.Header>
                <Accordion.Body>
                  <PostBox key={post.id} {...post} />
                </Accordion.Body>
              </Accordion.Item>
            ))}  
          </Accordion>
          </Col>
          <Col className='md-6'>
            <h2>Add New Post</h2>
            <br />
            <AddPostComponent />
          </Col>

        </Row>
        
      </Container>
    </>
  )
}

export default App
