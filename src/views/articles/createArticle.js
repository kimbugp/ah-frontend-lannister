import React from "react";
import NavBar from "../../components/navigation/navBar";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Modules from "../../utils/editortoolbar";
import { Button } from "reactstrap";

const newArticle = ({
  handlePublish,
  title,
  handleUpload,
  body,
  description,
  handleChange,
  handleSubmit,
  handleEditorChange,
  allcategory,
  category,
  handleSelectChange,
}) => {
  return (
    <div>
      <NavBar />
      <div className="containers">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="article-post">
              <div className="row">
                <div className="col-md-12 col-xs-12">
                  <form method="post" id="reused_form">
                    <h6 id="compose"> New Article</h6>
                    <div className="row">
                      <div className="col-md-8 col-xs-8">
                        <div className="form-group">
                          <input
                            placeholder="Title"
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={title}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            placeholder="Description"
                            type="text"
                            className="form-control"
                            id="title"
                            name="description"
                            value={description}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <ReactQuill
                            id={"title"}
                            style={{ height: "420px" }}
                            value={body}
                            modules={Modules.modules}
                            onChange={handleEditorChange}
                            placeholder="Compose your article here ..."
                            outline={0}
                          />
                        </div>
                        <div
                          className="row"
                          style={{
                            marginTop: "5em",
                            display: "flex",
                            justifyContent: "center"
                          }}
                        >
                          <button
                            type="button"
                            id="create-button"
                            className="btn btn-sm"
                            onClick={handleSubmit}
                          >
                            Draft
                          </button>
                          <button
                            type="button"
                            id="create-button"
                            className="btn btn-sm"
                            onClick={handlePublish}
                          >
                            Publish
                          </button>
                        </div>
                      </div>
                      <div className="col-md-1 col-xs-1" />
                      <div className="col-md-2 col-xs-2">
                        <div className="form-group">
                          <div>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect1"
                              value={category}
                              onChange={handleSelectChange}
                            >
                              {" "}
                              <option value="" disabled>
                                Select Category
                              </option>
                              {allcategory.map(cate => (
                                <option key={cate.id} value={cate.id}>
                                  {cate.title}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            placeholder="Tags"
                            type="text"
                            className="form-control"
                            id="title"
                            name="tags"
                          />
                        </div>
                        <div className="form-group">
                          <Button className="" onClick={handleUpload}>
                            Add Image
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      {
        <div className="alertbar">
          <div className="container text-center">
            <img src="assets/img/logo.png" alt="" /> &nbsp; Never miss a story
            from us, get weekly updates in your inbox.{" "}
            <a href="/" className="btn subscribe">
              Get Updates
            </a>
          </div>
        </div>
      }
    </div>
  );
};

newArticle.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleEditorChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  allcategory: PropTypes.array,
  category: PropTypes.string.isRequired,
  handlePublish: PropTypes.func,
  handleUpload: PropTypes.func,
};

export default newArticle;
