import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment, image} = commentDetails

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div>
          <div className="username-time-container">
            <p className="username">{name}</p>
          </div>
          <p className="comment">{comment}</p>
          <button type="button" className="view-button">
            View Project
          </button>
        </div>
        <div>
          <img src={image} alt="projectimg" className="image" />
        </div>
      </div>
    </li>
  )
}

export default CommentItem
