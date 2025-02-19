import { Card } from "react-bootstrap";
import CommentAccordian from "./CommentAccordian";
import { IPost } from "../utils/postTools";
const PostBox = (props:IPost) => {
  return (
    <>
        <div key={props.id}>
            <Card>
                <Card.Body>
                    <Card.Text><strong>Post Content :</strong>  {props.body} </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <CommentAccordian id={props.id} />
                </Card.Footer>
            </Card>
        </div>
    </>
  );
};

export default PostBox;
