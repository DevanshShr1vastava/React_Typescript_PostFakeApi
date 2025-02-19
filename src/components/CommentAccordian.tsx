import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { getPostComments } from "../utils/postTools";

interface IComment {
    id:number;
    name:string;
    email:string;
    body:string;
}
interface ICommentAccordianProps {
    id:number;
}

const CommentAccordian = ({id}:ICommentAccordianProps) => {
    const [comments,setPostComments] = useState<IComment[]>();

    const fetchComments = async()=>{
        const commentData = await getPostComments(id);
        setPostComments(commentData);
    }
    useEffect(()=>{
        fetchComments();
    })

  return (
    <>
        <h3>Comments</h3>
        <Accordion>
            {comments?.map((comment)=>(
                <Accordion.Item eventKey={`${comment.id}`} key={comment.id}>
                    <Accordion.Header>By {comment.email}</Accordion.Header>
                    <Accordion.Body>{comment.body}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    </>
  );
};

export default CommentAccordian;
