import React from "react";
import blogCover from "../assets/images/blog-cover.svg";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../assets/css/blog.css";
import avatar from "../assets/images/avatar.svg";
import imgOne from "../assets/images/imgOne.svg";

import { Icon, InlineIcon } from "@iconify/react";

import thumbsUp from "@iconify-icons/carbon/thumbs-up";
import thumbsDown from "@iconify-icons/carbon/thumbs-down";

const BlogDetails = () => {
  return (
    <div>
      <Navigation />
      <main>
        <div className="web-container container pt-5">
          <div className="blog-cover">
            <img src={blogCover} className="img-fluid" alt="blog-cover" />
            <div className="pt-4">
              <p>{" < "} Blog Home / Back</p>
            </div>
          </div>
        </div>
        <div className="web-container container pt-5">
          <h2>eelspace Co-working Place</h2>
          <div
            className="d-flex justify-content-between"
            style={{ width: "40%", fontSize: "12px" }}
          >
            <p>Written by Mfonobong Umondia</p>
            <p>Sunday, 28th November 2020</p>
          </div>
        </div>
        <div className="web-container container">
          <hr></hr>
          <p>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?" 1914 translation by H. Rackham "But I must explain
            to you how all this mistaken idea of denouncing pleasure and
            praising pain was born and I will give you a complete account of the
            system, and expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness. No one rejects,
            dislikes, or avoids pleasure itself, because it is pleasure, but
            because those who do not know how to pursue pleasure rationally
            encounter consequences that are extremely painful. Nor again is
            there anyone who loves or pursues or desires to obtain pain of
            itself, because it is pain, but because occasionally circumstances
            occur in which toil and pain can procure him some great pleasure. To
            take a trivial example, which of us ever undertakes laborious
            physical exercise, except to obtain some advantage from it? But who
            has any right to find fault with a man who chooses to enjoy a
            pleasure that has no annoying consequences, or one who avoids a pain
            that produces no resultant pleasure?" Section 1.10.33 of "de Finibus
            Bonorum et Malorum" "At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat." Section "At vero eos et accusamus et iusto
            odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat." Section 1.10.33 "At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat." Section 1.10.33 of "de Finibus Bonorum et
            Malorum", written by Cicero in 45 BC "At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat." Section 1.10.32 of "de Finibus Bonorum et
            Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur, vel illum qui
            dolorem eum fugiat quo voluptas nulla pariatur?" 1914 translation by
            H. Rackham "But I must explain to you how all this mistaken idea of
            denouncing pleasure and praising pain was born and I will give you a
            complete account of the system, and expound the actual teachings of
            the great explorer of the truth, the master-builder of human
            happiness. No one rejects, dislikes, or avoids pleasure itself,
            because it is pleasure, but because those who do not know how to
            pursue pleasure rationally encounter consequences that are extremely
            painful. Nor again is there anyone who loves or pursues or desires
            to obtain pain of itself, because it is pain, but because
            occasionally circumstances occur in which toil and pain can procure
            him some great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?"
            Section 1.10.33 of "de Finibus Bonorum et Malorum" "At vero eos et
            accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat." Section
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat." Section
            1.10.33
          </p>
        </div>
        <div className="web-container container">
          <div className="blog-comment-section">
            <div className="row justify-content-between blue-color m-1">
              <p>Responses</p>
              <p>Write Responses</p>
            </div>
            <div className="response-card">
              <div className="d-flex">
                <div>
                  <img src={avatar} className="img-fluid" />
                </div>
                <div className="pl-1" style={{ alignSelf: "center" }}>
                  <p>
                    <span className="font-weight-bold blue-color d-block">
                      Mfonobong Umondia
                    </span>

                    <span>September 14th</span>
                  </p>
                </div>
              </div>

              <p>
                Since 2007 the beer is sold again in the traditional bottles
                with flip top closure. The beer which is with 5,8% alcohol the
                lightest one, is offered at the Oktoberfest in the Hacker-Zelt
                and the Pschorr-Bräurosl.
              </p>
              <ul className="list-unstyled d-flex reactions">
                <li>
                  <Icon icon={thumbsUp} />
                </li>
                <li>
                  <Icon icon={thumbsDown} />
                </li>
                <li>
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.875 4.0174V1.82471C6.875 1.30773 6.45447 0.887207 5.9375 0.887207C5.70494 0.887207 5.48035 0.976328 5.30639 1.13808L4.90294 1.51132C3.57544 2.73962 1.35316 4.79529 0.216064 5.93572C0.0769041 6.07611 0 6.28058 0 6.5122C0 6.74382 0.0769041 6.94828 0.216064 7.08899C1.35316 8.22914 3.57544 10.2848 4.90294 11.5131L5.30639 11.8863C5.48035 12.0481 5.70494 12.1372 5.9375 12.1372C6.45447 12.1372 6.875 11.7167 6.875 11.1997V9.01435C11.3751 9.07751 14.375 10.4969 14.375 11.8247C14.375 11.9974 14.5148 12.1372 14.6875 12.1372C14.8602 12.1372 15 11.9974 15 11.8247C15 7.61358 11.3837 4.16997 6.875 4.0174ZM6.56249 8.38719C6.38975 8.38719 6.24998 8.52697 6.24998 8.6997V11.1997C6.24998 11.3721 6.10959 11.5122 5.93747 11.5122C5.84225 11.5122 5.77267 11.4664 5.73116 11.428L5.32771 11.0544C4.00329 9.82915 1.78711 7.77899 0.659178 6.64799C0.642098 6.63091 0.624989 6.58207 0.624989 6.5122C0.624989 6.44232 0.642069 6.39349 0.659178 6.3767C1.78711 5.2454 4.00329 3.19524 5.32774 1.96996L5.73119 1.59642C5.7727 1.55796 5.84228 1.5122 5.9375 1.5122C6.10962 1.5122 6.25001 1.65226 6.25001 1.82471V4.32469C6.25001 4.49742 6.38978 4.6372 6.56252 4.6372C10.3198 4.6372 13.4662 7.09019 14.209 10.3467C12.8753 9.1785 9.98778 8.38719 6.56249 8.38719Z"
                      fill="#464855"
                    />
                  </svg>
                </li>
              </ul>
            </div>
            <div className="reply-card">
              <div>
                <form className="form-inline">
                  <input type="text" className="form-control reply-input" />
                  <button className="btn btn-primary reply-btn">Reply</button>
                </form>
                <p className="font-weight-bold">David responded</p>
                <p className="post-time">30 minutes ago</p>
                <p>
                  Each and every one of our Team represent the spirit of our
                  company: driven, committed, and acutely aware of how limitless
                  our is to...<span className="blue-color">MORE</span>
                </p>
              </div>
            </div>
            <div className="reply-card mt-3">
              <div className="btn-inline">
                <button className="btn btn-primary fb-btn text-white">
                  <i className="fa fa-facebook"></i>
                  Share
                </button>
                <button className="btn btn-primary twt-btn">
                  <i className="fa fa-twitter"></i>Tweet
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="web-container container">
          <div>
            <div className="row justify-content-between mt-5 ml-2 mr-2 ">
              <h3 className="font-weight-bold">Most Read Articles</h3>
              <p>See More {`>>`}</p>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="card blog-card">
                  <img
                    className="card-img-top"
                    src={imgOne}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Long Established
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content...
                    </p>
                    <div className="d-flex justify-content-between">
                      <p>May 20th, 2020</p>
                      <p className="text-primary">Read more</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="card blog-card">
                  <img
                    className="card-img-top"
                    src={imgOne}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Long Established
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content...
                    </p>
                    <div className="d-flex justify-content-between">
                      <p>May 20th, 2020</p>
                      <p className="text-primary">Read more</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="card blog-card">
                  <img
                    className="card-img-top"
                    src={imgOne}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Long Established
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content...
                    </p>
                    <div className="d-flex justify-content-between">
                      <p>May 20th, 2020</p>
                      <p className="text-primary">Read more</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetails;
