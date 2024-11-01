import "./Friends.css";
import "../CSS/framework.css";
import NavBar from "../NavBar/NavBar";
import SideBar from "../Sidebar/Sidebar";

const Friends = () => {
  return (
    <div className="page">
      <SideBar />
      <div className="content w-full">
        <NavBar />
        <h1 className="p-relative">Friends</h1>
        <div className="friends-page d-grid m-20 gap-20">
          <div className="friend bg-white rad-6 p-20 p-relative">
            <div className="contact">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="txt-c">
              <img
                className="rad-half mt-10 mb-10 w-100 h-100"
                src="/images/friend-01.jpg"
                alt=""
              />
              <h4 className="m-0">Ahmed Sherif</h4>
              <p className="c-grey fs-13 mt-5 mb-0">flutter Developer</p>
            </div>
            <div className="icons fs-14 p-relative">
              <div className="mb-10">
                <i className="fa-regular fa-face-smile fa-fw"></i>
                <span>99 Friend</span>
              </div>
              <div className="mb-10">
                <i className="fa-solid fa-code-commit fa-fw"></i>
                <span>15 Projects</span>
              </div>
              <div>
                <i className="fa-regular fa-newspaper fa-fw"></i>
                <span>25 Articles</span>
              </div>
              <span className="vip fw-bold c-orange">VIP</span>
            </div>
            <div className="info between-flex fs-13">
              <span className="c-grey">Joined 02/10/2021</span>
              <div>
                <a className="bg-blue c-white btn-shape" href="profile.html">
                  Profile
                </a>
                <a className="bg-red c-white btn-shape" href="#">
                  Remove
                </a>
              </div>
            </div>
          </div>
          <div className="friend bg-white rad-6 p-20 p-relative">
            <div className="contact">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="txt-c">
              <img
                className="rad-half mt-10 mb-10 w-100 h-100"
                src="/images/friend-02.jpg"
                alt=""
              />
              <h4 className="m-0">Mohamed Atef</h4>
              <p className="c-grey fs-13 mt-5 mb-0">Cloud Developer</p>
            </div>
            <div className="icons fs-14 p-relative">
              <div className="mb-10">
                <i className="fa-regular fa-face-smile fa-fw"></i>
                <span>30 Friends</span>
              </div>
              <div className="mb-10">
                <i className="fa-solid fa-code-commit fa-fw"></i>
                <span>11 Projects</span>
              </div>
              <div>
                <i className="fa-regular fa-newspaper fa-fw"></i>
                <span>12 Articles</span>
              </div>
            </div>
            <div className="info between-flex fs-13">
              <span className="c-grey">Joined 02/08/2020</span>
              <div>
                <a className="bg-blue c-white btn-shape" href="profile.html">
                  Profile
                </a>
                <a className="bg-red c-white btn-shape" href="">
                  Remove
                </a>
              </div>
            </div>
          </div>
          <div className="friend bg-white rad-6 p-20 p-relative">
            <div className="contact">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="txt-c">
              <img
                className="rad-half mt-10 mb-10 w-100 h-100"
                src="/images/friend-04.jpg"
                alt=""
              />
              <h4 className="m-0">Abo Nesma</h4>
              <p className="c-grey fs-13 mt-5 mb-0">Front-End Developer</p>
            </div>
            <div className="icons fs-14 p-relative">
              <div className="mb-10">
                <i className="fa-regular fa-face-smile fa-fw"></i>
                <span>70 Friends</span>
              </div>
              <div className="mb-10">
                <i className="fa-solid fa-code-commit fa-fw"></i>
                <span>30 Projects</span>
              </div>
              <div>
                <i className="fa-regular fa-newspaper fa-fw"></i>
                <span>18 Articles</span>
              </div>
            </div>
            <div className="info between-flex fs-13">
              <span className="c-grey">Joined 28/06/2020</span>
              <div>
                <a className="bg-blue c-white btn-shape" href="profile.html">
                  Profile
                </a>
                <a className="bg-red c-white btn-shape" href="">
                  Remove
                </a>
              </div>
            </div>
          </div>
          <div className="friend bg-white rad-6 p-20 p-relative">
            <div className="contact">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="txt-c">
              <img
                className="rad-half mt-10 mb-10 w-100 h-100"
                src="/images/friend-03.jpg"
                alt=""
              />
              <h4 className="m-0">Ahmed Yasser</h4>
              <p className="c-grey fs-13 mt-5 mb-0">Network Administrator</p>
            </div>
            <div className="icons fs-14 p-relative">
              <div className="mb-10">
                <i className="fa-regular fa-face-smile fa-fw"></i>
                <span>80 Friends</span>
              </div>
              <div className="mb-10">
                <i className="fa-solid fa-code-commit fa-fw"></i>
                <span>20 Projects</span>
              </div>
              <div>
                <i className="fa-regular fa-newspaper fa-fw"></i>
                <span>18 Articles</span>
              </div>
            </div>
            <div className="info between-flex fs-13">
              <span className="c-grey">Joined 02/06/2020</span>
              <div>
                <a className="bg-blue c-white btn-shape" href="profile.html">
                  Profile
                </a>
                <a className="bg-red c-white btn-shape" href="">
                  Remove
                </a>
              </div>
            </div>
          </div>
          <div className="friend bg-white rad-6 p-20 p-relative">
            <div className="contact">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="txt-c">
              <img
                className="rad-half mt-10 mb-10 w-100 h-100"
                src="/images/friend-05.jpg"
                alt=""
              />
              <h4 className="m-0">Abdulrahman Ayman</h4>
              <p className="c-grey fs-13 mt-5 mb-0">Algorithm Developer</p>
            </div>
            <div className="icons fs-14 p-relative">
              <div className="mb-10">
                <i className="fa-regular fa-face-smile fa-fw"></i>
                <span>80 Friends</span>
              </div>
              <div className="mb-10">
                <i className="fa-solid fa-code-commit fa-fw"></i>
                <span>30 Projects</span>
              </div>
              <div>
                <i className="fa-regular fa-newspaper fa-fw"></i>
                <span>18 Articles</span>
              </div>
            </div>
            <div className="info between-flex fs-13">
              <span className="c-grey">Joined 28/08/2020</span>
              <div>
                <a className="bg-blue c-white btn-shape" href="profile.html">
                  Profile
                </a>
                <a className="bg-red c-white btn-shape" href="">
                  Remove
                </a>
              </div>
            </div>
          </div>
          <div className="friend bg-white rad-6 p-20 p-relative">
            <div className="contact">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="txt-c">
              <img
                className="rad-half mt-10 mb-10 w-100 h-100"
                src="/images/friend-04.jpg"
                alt=""
              />
              <h4 className="m-0">Amr Hendawy</h4>
              <p className="c-grey fs-13 mt-5 mb-0">Back-End Developer</p>
            </div>
            <div className="icons fs-14 p-relative">
              <div className="mb-10">
                <i className="fa-regular fa-face-smile fa-fw"></i>
                <span>70 Friends</span>
              </div>
              <div className="mb-10">
                <i className="fa-solid fa-code-commit fa-fw"></i>
                <span>30 Projects</span>
              </div>
              <div>
                <i className="fa-regular fa-newspaper fa-fw"></i>
                <span>18 Articles</span>
              </div>
            </div>
            <div className="info between-flex fs-13">
              <span className="c-grey">Joined 28/06/2020</span>
              <div>
                <a className="bg-blue c-white btn-shape" href="profile.html">
                  Profile
                </a>
                <a className="bg-red c-white btn-shape" href="">
                  Remove
                </a>
              </div>
            </div>
          </div>
          <div className="friend bg-white rad-6 p-20 p-relative">
            <div className="contact">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="txt-c">
              <img
                className="rad-half mt-10 mb-10 w-100 h-100"
                src="/images/friend-02.jpg"
                alt=""
              />
              <h4 className="m-0">Mahmoud Adel</h4>
              <p className="c-grey fs-13 mt-5 mb-0">Cloud Developer</p>
            </div>
            <div className="icons fs-14 p-relative">
              <div className="mb-10">
                <i className="fa-regular fa-face-smile fa-fw"></i>
                <span>30 Friends</span>
              </div>
              <div className="mb-10">
                <i className="fa-solid fa-code-commit fa-fw"></i>
                <span>11 Projects</span>
              </div>
              <div>
                <i className="fa-regular fa-newspaper fa-fw"></i>
                <span>12 Articles</span>
              </div>
            </div>
            <div className="info between-flex fs-13">
              <span className="c-grey">Joined 02/08/2020</span>
              <div>
                <a className="bg-blue c-white btn-shape" href="profile.html">
                  Profile
                </a>
                <a className="bg-red c-white btn-shape" href="">
                  Remove
                </a>
              </div>
            </div>
          </div>
          <div className="friend bg-white rad-6 p-20 p-relative">
            <div className="contact">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="txt-c">
              <img
                className="rad-half mt-10 mb-10 w-100 h-100"
                src="/images/friend-05.jpg"
                alt=""
              />
              <h4 className="m-0">Ahmed Abuzaid</h4>
              <p className="c-grey fs-13 mt-5 mb-0">Content Creator</p>
            </div>
            <div className="icons fs-14 p-relative">
              <div className="mb-10">
                <i className="fa-regular fa-face-smile fa-fw"></i>
                <span>80 Friends</span>
              </div>
              <div className="mb-10">
                <i className="fa-solid fa-code-commit fa-fw"></i>
                <span>30 Projects</span>
              </div>
              <div>
                <i className="fa-regular fa-newspaper fa-fw"></i>
                <span>18 Articles</span>
              </div>
              <span className="vip fw-bold c-orange">Vip</span>
            </div>
            <div className="info between-flex fs-13">
              <span className="c-grey">Joined 28/08/2020</span>
              <div>
                <a className="bg-blue c-white btn-shape" href="profile.html">
                  Profile
                </a>
                <a className="bg-red c-white btn-shape" href="">
                  Remove
                </a>
              </div>
            </div>
          </div>
          <div className="friend bg-white rad-6 p-20 p-relative">
            <div className="contact">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="txt-c">
              <img
                className="rad-half mt-10 mb-10 w-100 h-100"
                src="/images/friend-01.jpg"
                alt=""
              />
              <h4 className="m-0">Gareeb Elshiekh</h4>
              <p className="c-grey fs-13 mt-5 mb-0">JavaScript Developer</p>
            </div>
            <div className="icons fs-14 p-relative">
              <div className="mb-10">
                <i className="fa-regular fa-face-smile fa-fw"></i>
                <span>90 Friends</span>
              </div>
              <div className="mb-10">
                <i className="fa-solid fa-code-commit fa-fw"></i>
                <span>15 Projects</span>
              </div>
              <div>
                <i className="fa-regular fa-newspaper fa-fw"></i>
                <span>25 Articles</span>
              </div>
              <span className="vip fw-bold c-orange">Vip</span>
            </div>
            <div className="info between-flex fs-13">
              <span className="c-grey">Joined 02/10/2020</span>
              <div>
                <a className="bg-blue c-white btn-shape" href="profile.html">
                  Profile
                </a>
                <a className="bg-red c-white btn-shape" href="">
                  Remove
                </a>
              </div>
            </div>
          </div>
          <div className="friend bg-white rad-6 p-20 p-relative">
            <div className="contact">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="txt-c">
              <img
                className="rad-half mt-10 mb-10 w-100 h-100"
                src="/images/friend-03.jpg"
                alt=""
              />
              <h4 className="m-0">Hamza</h4>
              <p className="c-grey fs-13 mt-5 mb-0">Front-End Developer</p>
            </div>
            <div className="icons fs-14 p-relative">
              <div className="mb-10">
                <i className="fa-regular fa-face-smile fa-fw"></i>
                <span>80 Friends</span>
              </div>
              <div className="mb-10">
                <i className="fa-solid fa-code-commit fa-fw"></i>
                <span>20 Projects</span>
              </div>
              <div>
                <i className="fa-regular fa-newspaper fa-fw"></i>
                <span>18 Articles</span>
              </div>
            </div>
            <div className="info between-flex fs-13">
              <span className="c-grey">Joined 02/06/2020</span>
              <div>
                <a className="bg-blue c-white btn-shape" href="profile.html">
                  Profile
                </a>
                <a className="bg-red c-white btn-shape" href="">
                  Remove
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
