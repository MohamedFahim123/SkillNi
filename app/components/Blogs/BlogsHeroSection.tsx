import Link from "next/link";

export default function BlogsHeroSection() {
  return (
    <section className="section-box">
      <div className="breacrumb-cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-10">Blog</h2>
              <p className="font-lg color-text-paragraph-2">
                Get the latest news, updates and tips
              </p>
            </div>
            <div className="col-lg-6 text-end">
              <ul className="breadcrumbs mt-40">
                <li>
                  <Link legacyBehavior href="index">
                    <a className="home-icon">Home</a>
                  </Link>
                </li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
