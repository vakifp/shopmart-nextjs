import React from "react";

// Blog data
const blogs = [
  {
    id: 1,
    title: "Top 10 casual look ideas to dress up your kids",
    date: "22 Aug 2021",
    category: "tips & tricks",
    image: "/images/post-thumb-1.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
  },
  {
    id: 2,
    title: "Latest trends of wearing street wears supremely",
    date: "25 Aug 2021",
    category: "trending",
    image: "/images/post-thumb-2.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
  },
  {
    id: 3,
    title: "10 Different Types of comfortable outfits",
    date: "28 Aug 2021",
    category: "inspiration",
    image: "/images/post-thumb-3.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
  },
];

// RecentBlog component
export default function RecentBlog() {
  return (
    <section id="latest-blog" className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="section-header d-flex align-items-center justify-content-between my-5">
            <h2 className="section-title">Our Recent Blog</h2>
            <div className="btn-wrap align-right">
              <a href="#" className="d-flex align-items-center nav-link">
                Read All Articles{" "}
                <svg width={24} height={24}>
                  <use xlinkHref="#arrow-right" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4" key={blog.id}>
              <article className="post-item card border-0 shadow-sm p-3">
                <div className="image-holder zoom-effect">
                  <a href="#">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="card-img-top"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                    <div className="meta-date">
                      <svg width={16} height={16}>
                        <use xlinkHref="#calendar" />
                      </svg>
                      {blog.date}
                    </div>
                    <div className="meta-categories">
                      <svg width={16} height={16}>
                        <use xlinkHref="#category" />
                      </svg>
                      {blog.category}
                    </div>
                  </div>
                  <div className="post-header">
                    <h3 className="post-title">
                      <a href="#" className="text-decoration-none">
                        {blog.title}
                      </a>
                    </h3>
                    <p>{blog.excerpt}</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
