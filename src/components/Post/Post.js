import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import RepeatIcon from "@material-ui/icons/Repeat";

import "./Post.css";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/579325814921023488/jBZbhCt__400x400.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Victor Atencio{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                @VictorjAtencio
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challange you to build a Twitter Clone with React</p>
          </div>
        </div>

        <img
          src="https://pbs.twimg.com/media/Ejgp3j5XcAMll36?format=jpg&name=medium"
          alt="post image"
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
