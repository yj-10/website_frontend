import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBContainer,
} from "mdb-react-ui-kit";
import BlogComp from "./BlogComp";
import NewsComp from "./NewsComp";
import VideoComp from "./VideoComp";

export default function Blog() {
  const [basicActive, setBasicActive] = useState("Blog");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <>
      <MDBContainer className="py-5">
        <MDBTabs pills className="mb-3">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("Blog")}
              active={basicActive === "Blog"}
            >
              Blog
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("News")}
              active={basicActive === "News"}
            >
              News
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("Video")}
              active={basicActive === "Video"}
            >
              Video
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={basicActive === "Blog"}>
            <BlogComp />
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "News"}>
            <NewsComp />
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "Video"}>
            <VideoComp />
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </>
  );
}
