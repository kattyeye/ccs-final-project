import BlogPageTitle from "./PageTitle";
import { withRouter } from "react-router";
import { Card, CardActions, CardContent } from "@mui/material";

import bully from "../App/pics/bully.jpg";
import hungerplate from "../App/pics/hungerplate.jpg";
function BlogPosts() {
  return (
    <>
      <BlogPageTitle />

      <div className="container-fluid blog-page-bg ">
        {/* <div className="text-center py-5">
          <span className=" text-uppercase" style={{ color: "#60993d" }}>
            What's The News?
          </span>
          <h1 className="text-capitalize font-weight-bold mt-2">
            Our Latest <span style={{ color: "#60993d" }}>Blogs</span>
          </h1>
        </div> */}
        <div className="p-5 d-flex-col ">
          <div className="d-flex-col mb-5">
            <Card sx={{ padding: "50px" }}>
              <h1 className="text-dark" style={{ fontWeight: "600" }}>
                4 Easy Ways to Get Involved in the Community
              </h1>

              <p>
                Want to know how you can make a difference in the world? Start
                with your own community. Here are five ways to make a positive
                impact in your back yard and crate a ripple effect to better
                your world.
              </p>

              <h5>1. Volunteer</h5>
              <p>
                There are countless ways to offer your time to worthy
                organizations and people, because in many cases, time is just as
                valuable as money. Whether you volunteer at a local school or
                with a nationally renowned nonprofit such as Habitat for
                Humanity, you’ll find that you can lend a helping hand. If
                you’re not sure where to start, the technology age has made it
                easier than ever before to find opportunities. 86Hate [link to
                86 Hate volunteer opps] helps you view and organize
                opportunities to serve and volunteer in your own community. Just
                enter your zip code, and you can pick through myriad
                opportunities for something that fits your schedule and
                abilities.
              </p>
              <h5>2. Be Kind</h5>
              <p>
                Kindness is the first step. Compassion is the end result. Pay
                for someone’s coffee in line behind you—who knows, you might
                just start something. A little kindness can go a long way, so
                give it a try and you might be surprised with how it makes a
                difference.
              </p>
              <h5>3. Help the planet</h5>
              <p>
                Apart from the basics of conserving water and cutting down on
                waste and overall consumption, there a few specific things you
                can do to help the planet and your community’s environment. If
                you don’t have a community garden, start one or plant your own.
                When possible, shop locally and utilize public transportation to
                cut down on your carbon footprint. Lastly, if you want to help
                your neighborhood or city look better, you can organize a
                community cleanup.
              </p>
              <h5>4. Be politically active</h5>
              <p>
                While politics as a whole bring us down, it’s important to know
                that knowledge is power. Voting helps you have a say in your
                community, but it’s vital to do your research and learn all you
                can about local issues—from both sides of the aisle. Do your
                part to be politically aware. Attend community and town hall
                meetings and vote about causes you care about. Ballotpedia is a
                great place to get started for the politically inexperienced.
              </p>
              <h5>5. Give your time and resources.</h5>
              <p>
                More than feeling good, donating to charity has been proven to
                help businesses and their bottom line. Nonprofits are a great
                place to start, especially since you can see exactly where their
                donated funds are going. Not every person has large amounts to
                give to worthy charities, but there’s always something you can
                do to support causes you care about. A recent analysis in Health
                Affairs cited by the New York Times predicted that by 2029,
                there will be 14.4 million middle-income seniors who do not
                qualify for Medicaid and cannot afford the care they will need.
                This is a projected statistic, which means that there are real
                people who need help now. If you want to do something good for
                those in need, donate to Live Care Foundation, a nonprofit that
                helps pay for assisted living and live-in care. Make a
                difference by donating today.
              </p>
              <p>
                If these ideas have inspired you, share this blog with a friend.
                Or post it to your social media accounts. Do your part to 86
                Hate.
              </p>
            </Card>
          </div>
          <div className="d-flex-col mb-5">
            <Card sx={{ padding: "50px" }}>
              <h1 className="text-dark" style={{ fontWeight: "600" }}>
                Creating Safer Schools
              </h1>
              <h3>National Bullying Prevention Month</h3>
              <h6>
                Guest post from Becca Stewart at
                <a href="https://greatnonprofits.org/" target="_blank">
                  GreatNonprofits.org
                </a>
              </h6>
              <br></br>

              <p>
                <img
                  src={bully}
                  style={{
                    width: "auto",
                    height: "200px",
                    paddingRight: "10px",
                  }}
                  align="left"
                />
                It’s all too common in schools: being taunted, teased, and even
                physically abused by peers. An estimated one in five kids will
                experience bullying before they graduate high school. The
                internet and easy access to social media have added a new layer
                to this issue. Parents, teachers, and lawmakers are all working
                to raise awareness about bullying and make our schools a safer
                place.
                <br></br>
                October is National Bullying Prevention Month, a time for
                schools and youth to take a stand against bullying in their
                communities. Since 2006, the National Bullying Prevention
                Center has partnered with national education and child support
                organizations. Together, they address bullying and find ways to
                protect our kids. You can help recognize National Bullying
                Prevention Month by learning more about these Top-Rated
                organizations. Each nonprofit works to protect kids through
                education and social change. 
              </p>

              <p>
                You can find a complete list of anti-bullying organizations on{" "}
                <a href="https://greatnonprofits.org/" target="_blank">
                  GreatNonprofits.org
                </a>
              </p>
            </Card>
          </div>
          <div className="d-flex-col mb-5">
            <Card sx={{ padding: "50px" }}>
              <h1 className="text-dark" style={{ fontWeight: "600" }}>
                Hungry for More.
              </h1>
              <h3>Food is only the start of meeting real needs.</h3>
              <h6>
                Guest post by Jacob Edmisten, VP of Development at Miracle Hill
                Ministries. Jacob can be reached at{" "}
                <a href="mailto:jedmisten@miraclehill.org">
                  jedmisten@miraclehill.org
                </a>
                .
              </h6>
              <br></br>
              <p>
                Hungry. We’ve all felt hungry. Most everyone is familiar with
                the sound of a growling stomach when you’ve gone too long
                between meals. Starvation, however, is something different
                entirely. Starvation is when someone is so depleted of food and
                nutrition that atrophy sets in and the body begins to consume
                itself. Here at Miracle Hill Ministries we do encounter people
                who are hungry, and from time to time those who are genuinely
                starving. I recall a precious lady we helped to get a food box
                from our 
                <a
                  href="https://miraclehill.org/how-we-help/food-warehouse/"
                  target="_blank"
                >
                  food pantry
                </a>
                . When I handed her a bag of chips before we could get her
                something more substantial, she meticulously licked the
                seasoning off of each chip because she was so hungry. She was
                cherishing every precious morsel of those chips.
              </p>
              <img src={hungerplate} style={{ paddingBottom: "12px" }} />
              <h5>Feeding the Soul</h5>
              <p>
                When guests stay with us at any of the 
                <a
                  href="https://miraclehill.org/how-we-help/homeless-ministries/"
                  target="_blank"
                >
                  Miracle Hill shelters
                </a>
                 our desire is to provide for their physical needs, like the
                need for a hot shower, food, a bed to sleep in. But we also make
                it a point to feed the soul. In the book of John, chapter 6,
                there is a crowd that has an interesting interaction with Jesus.
                Jesus feeds this crowd of 5,000 people, and then that evening he
                goes across the sea to Capernaum. The next day the crowd
                realizes that Jesus has gone, and so they too get into their
                boats and cross the sea to Capernaum. Once they locate Jesus, he
                is saddened by their motivation. He tells them that they did not
                come looking for him because they wanted to see signs but
                because they wanted to have their bellies fed again. He goes on
                to tell them that the manna that their ancestors ate in the
                wilderness satisfied for a moment, but that He is the “Bread of
                Life” that ultimately satisfies. Jesus says, “I am the bread of
                life; whoever comes to me shall not hunger, and whoever believes
                in me shall never thirst.” (John 6:36)
              </p>
              <h5>Jesus Satisfies the Hungry</h5>
              <p>
                Much of the crowd is distraught because they don’t understand.
                They begin to wonder, “How can this man give us his flesh to
                eat?” What Jesus meant, though, was that if anyone truly wants
                to be satisfied they must consume Him. Jesus says later in John
                15 that he is the vine and that we are the branches; apart from
                him we can do nothing. Jesus is the only one who can satisfy the
                hunger and thirst of the human heart. The truth is that while
                many of us have not experienced the sensation of starving
                physically, most of us have experienced what it is like to be
                starving spiritually. Too often we walk around spiritually
                malnourished and seemingly depleted of life. But JESUS, the
                Bread of Life, satisfies! When guests and foster children come
                into our care, we want to meet their physical needs. But, it is
                one of our highest priorities to share with them the Good News
                of Jesus Christ. We aim to not only nourish the body but to
                nourish the soul.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
export default withRouter(BlogPosts);
