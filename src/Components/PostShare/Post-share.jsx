import React from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./Post-share.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useState, useRef } from "react";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  const photoShare = () => {
    imageRef.current.click();
  };

  const clearPhotoShare = () => {
    setImage(null);
  };

  return (
    <>
      <div className="PostShare">
        <img src={ProfileImage} alt="" />
        <div>
          <input type="text" placeholder="What's happening"></input>
          <div className="Post-options">
            <div className="option" onClick={photoShare}>
              <UilScenery />
              Photo
            </div>
            <div className="option">
              <UilPlayCircle />
              Video
            </div>
            <div className="option">
              <UilLocationPoint />
              Location
            </div>
            <div className="option">
              <UilSchedule />
              Shedule
            </div>
            <button className="button postshare-btn">Share</button>

            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
          </div>
          {image && (
            <div className="preview-image">
              <UilTimes onClick={clearPhotoShare} />
              <img src={image.image} alt="shareimg" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostShare;
