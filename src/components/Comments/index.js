import {Component} from 'react'

import {AiFillInstagram} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'
import {TbMailFilled} from 'react-icons/tb'
import {v4} from 'uuid'
import {BrowserRouter} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'

import CommentItem from '../CommentItem'

import './index.css'

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
    pictureInput: '',
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput, pictureInput} = this.state

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      image: pictureInput,
      date: new Date(),
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
      pictureInput: '',
    }))
  }

  onChangeCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onChangeimageInput = event => {
    this.setState({
      pictureInput: event.target.value,
    })
  }

  render() {
    const {nameInput, commentInput, pictureInput, commentsList} = this.state

    return (
      <BrowserRouter>
        <div className="app-container">
          <div className="top-section">
            <div className="top-image-container">
              <div className="ui-page">
                <div>
                  <nav className="header-container">
                    <div className="logo-and-title-container">
                      <p className="name-head ">Korra Revanth</p>
                    </div>

                    <ul className="nav-items-list">
                      <li className="link-item">
                        <Link to="#about" className="textd">
                          <p className="name-para ">About</p>
                        </Link>
                      </li>
                      <li className="link-item">
                        <Link to="#projects" className="textd">
                          <p className="name-para ">Projects</p>
                        </Link>
                      </li>
                      <li className="link-item">
                        <Link to="#contacts" className="textd">
                          <p className="name-para ">Contacts</p>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <section id="about">
                  <div className="pic-container">
                    <div>
                      <p className="topp">UI/UX DESIGNER</p>
                      <h1 className="toph">
                        Hello,I am
                        <br /> Korra Revanth
                      </h1>
                      <div className="para-container">
                        <p className="paraa">
                          I have done my Masters (dual degree B.tech+M.tech)
                          from IIITDM Kancheepuram Chennai in Mechanical
                          Engineering product design specialization. I have
                          learnt certain technologies like
                          HTML,CSS,Python,JavaScript,Sql,Node js,React js from
                          Nxt Wave CCBP 4.0.Now I have created A fully
                          functional personal portfolio website as per the Figma
                          design where users can save as many projects created
                          by them.
                        </p>
                      </div>
                      <div className="button-container">
                        <button type="button" className="button1">
                          <Link to="#projects" className="textd">
                            Projects
                          </Link>
                        </button>
                        <button type="button" className="button2">
                          LinkedIn
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div>
                <img
                  src="https://res.cloudinary.com/dnyqqgcf2/image/upload/v1704468109/motersons/image_u5ficf.png"
                  className="top-image"
                  alt="girl pic"
                />
              </div>
            </div>
          </div>

          <div className="comments-container">
            <h1 className="app-heading">Add Projects</h1>
            <div className="comments-inputs">
              <div>
                <form className="form" onSubmit={this.onAddComment}>
                  <label className="para" htmlFor="project">
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="name-input"
                    value={nameInput}
                    onChange={this.onChangeNameInput}
                    htmlFor="project"
                  />
                  <label className="para" htmlFor="projec">
                    Project Link
                  </label>
                  <input
                    type="text"
                    className="name-input"
                    value={pictureInput}
                    onChange={this.onChangeimageInput}
                    htmlFor="projec"
                  />
                  <label className="para" htmlFor="dis">
                    Description
                  </label>
                  <textarea
                    className="comment-input"
                    value={commentInput}
                    onChange={this.onChangeCommentInput}
                    rows="6"
                    htmlFor="dis"
                  />
                  <button type="submit" className="add-button">
                    Add
                  </button>
                </form>
              </div>
            </div>

            <img
              src="https://res.cloudinary.com/dnyqqgcf2/image/upload/v1704468109/motersons/Vector_p4g6u1.png"
              className="bottom-logo"
              alt="logo"
            />

            <hr className="line" />
            <p className="heading">
              <span className="comments-count">{commentsList.length}</span>
              No of projects
            </p>
            <div className="Project-container">
              <section id="projects">
                <div>
                  <h1 className="project-head">Projects</h1>
                </div>

                <ul className="comments-list">{this.renderCommentsList()}</ul>
              </section>
              <section id="contacts">
                <div className="logo-container">
                  <AiFillInstagram className="logo-size" />
                  <FaLinkedin className="logo-sizel" />
                  <TbMailFilled className="logo-size" />
                </div>
              </section>
              <p className="copy">Copyrights 2024.All rights reserved</p>

              <img
                src="https://res.cloudinary.com/dnyqqgcf2/image/upload/v1704468109/motersons/Vector_p4g6u1.png"
                className="bottom-logo"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default Comments
