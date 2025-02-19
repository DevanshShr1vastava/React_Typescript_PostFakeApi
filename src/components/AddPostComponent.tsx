import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addPost, IPost } from "../utils/postTools";


const AddPostComponent = () => {
    const [postTitle,setPostTitle] = useState<string>("");
    const [postBody, setPostBody] = useState<string>("");

    const handleAdd = ()=>{
        const postData:IPost = {
            id : 16,
            title : postTitle,
            body : postBody,
            userId : 1
        }

        addPost(postData);
        setPostBody("");
        setPostTitle("");
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId = "title-input">
                    <Form.Label>Enter Post Title</Form.Label>
                    <Form.Control type='text' value={postTitle} onChange={(e)=>{setPostTitle(e.target.value)}} placeholder="Enter Title Here" />
                </Form.Group>
                <Form.Group className="mb-3" controlId='body-input'>
                    <Form.Label>Enter Post Content</Form.Label>
                    <Form.Control as="textarea" value={postBody} onChange={(e)=>{setPostBody(e.target.value)}} rows={3} />
                </Form.Group>
                <Button variant="outline-primary" onClick={handleAdd}>Add Post</Button>
            </Form>
        </>
    );
};

export default AddPostComponent;
