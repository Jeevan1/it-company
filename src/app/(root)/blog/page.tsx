import Blogs from "@/components/container/Blogs";
import PageTitle from "@/components/container/PageTitle";
import React from "react";

const BlogsPage = () => {
  return (
    <div className="blogs-page">
      <PageTitle title="Blogs" page="Blogs" />
      <Blogs />
    </div>
  );
};

export default BlogsPage;
