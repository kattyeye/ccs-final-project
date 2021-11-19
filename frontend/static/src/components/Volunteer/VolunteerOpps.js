import VolPageTitle from "./PageTitle";
import { Button } from "react-bootstrap";
import turkeyfry from "../App/pics/turkeyfry.jpeg";
import bags from "../App/pics/bags.jpg";
import dog from "../App/pics/dog.jpg";
import homerebuild from "../App/pics/homerebuild.jpg";
import fooddrive from "../App/pics/fooddrive.jpg";
import blooddrive from "../App/pics/blooddrive.jpg";
import falls from "../App/pics/falls.jpg";
import women from "../App/pics/women.jpg";
import mentalhealth from "../App/pics/mentalhealth.jpg";
import { Card, Typography, CardContent, CardActions } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function VolunteerOpportunities() {
  return (
    <>
      <VolPageTitle />
      <div className="container-fluid mt-5 mb-5 px-5">
        <div className="volcolumns px-5">
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="turkeyfry"
              height="250"
              image={turkeyfry}
              gutterBottom
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Annual Turkey Fry
              </Typography>
              <Typography variant="body2" gutterBottom>
                It’s the Ellis & Bradley Turkey Fry to benefit Miracle Hill
                Ministries! The Tuesday before Thanksgiving we will prepare a
                feast for thousands of homeless and hungry people in Miracle
                Hill’s shelters and throughout the Upstate community.
              </Typography>
              <CardActions>
                <Button
                  href="https://miraclehill.org/events/turkey-fry/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="turkeyfry"
              height="250"
              image="https://media.istockphoto.com/photos/happy-little-girl-finish-first-picture-id493704459?b=1&k=20&m=493704459&s=170667a&w=0&h=DZHq6DABu7MeH55zxqxB-C-ZRbcEGXrfoPezrUcD65k="
              gutterBottom
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Girls on the Run{" "}
              </Typography>
              <Typography variant="body2" gutterBottom>
                This lovely organization is always looking for people to be role
                models/coaches that help create a positive impact in young
                girls' lives. Check out their site for more opportunities.
              </Typography>
              <CardActions>
                <Button
                  href="https://www.gotrupstatesc.org/Volunteer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="turkeyfry"
              height="240"
              image={bags}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Feed the Thousands
              </Typography>
              <Typography variant="body2" gutterBottom>
                Join dozens of companies and organizations in rallying around
                our neighbors in need to provide shelf-stable foods for the
                winter months. By hosting a Food & Funds Drive, you will help
                Loaves & Fishes supply much-needed food to 107 local agencies
                providing food and other services to low-income families,
                children, senior citizens, and individuals experiencing a wide
                range of societal challenges in Greenville County.
              </Typography>
              <CardActions>
                <Button
                  href="https://loavesandfishesgreenville.com/feed-the-thousands/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="julie"
              height="240"
              image="https://www.julievalentinecenter.org/uploads/6/4/9/5/64956971/4551312.jpg?485"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Julie Valentine Center{" "}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Julie Valentine Center is a nonprofit organization that provides
                free, confidential services to sexual assault and child abuse
                survivors and their families. The Julie Valentine Center is
                always looking for volunteers + donors, plus help completing
                their wishlist. You can also purchase a piece of jewelry created
                by Llyn Strong fine art jewelry to support the center.
              </Typography>
              <CardActions>
                <Button
                  href="https://www.julievalentinecenter.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>

          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="turkeyfry"
              height="240"
              image={homerebuild}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Rebuild Upstate: Individual and Group Builds
              </Typography>
              <Typography variant="body2" gutterBottom>
                Rebuild Upstate offers several options for volunteeering either
                individually or as a group. If you’re looking for a fun,
                engaging, and impactful way to give back to our community, look
                no further. We couldn’t do what we do without volunteers, so we
                make it as easy as possible for you or your group to start
                volunteering. Click the link below to learn more.
              </Typography>
              <CardActions>
                <Button
                  href="https://rebuildupstate.org/get-involved/volunteer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="turkeyfry"
              height="240"
              image={falls}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Friends of the Reedy River: Reedy River Planting at Cleveland
                Park
              </Typography>
              <Typography variant="body2" gutterBottom>
                Be part of the change! It's all about community. Come to the
                next planting and create a positive impact on Greenville's Reedy
                River.
              </Typography>
              <CardActions>
                <Button
                  href="https://www.friendsofthereedyriver.org/events/64/Reedy%20River%20Planting%20at%20Cleveland%20Park"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="ph"
              height="240"
              image="https://greenvillejournal.com/wp-content/uploads/2019/04/0426-GJ-ProjectHost-4-WilliamCrooks-e1556208252754.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Project Host
              </Typography>
              <Typography variant="body2" gutterBottom>
                Project Host's HostMobile food truck, Bakery, and Gardening for
                Good programs allow our students and the wider Greenville
                community to focus on paying it forward.
              </Typography>
              <CardActions>
                <Button
                  href="https://www.projecthost.org/get-involved#volunteer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="turkeyfry"
              height="240"
              image={blooddrive}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Red Cross Blood Donation{" "}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Every two seconds someone in the U.S. needs blood. It is
                essential for surgeries, cancer treatment, chronic illnesses,
                and traumatic injuries. Whether a patient receives whole blood,
                red cells, platelets or plasma, this lifesaving care starts with
                one person making a generous donation.
              </Typography>
              <CardActions>
                <Button
                  href="https://www.redcrossblood.org/give.html/find-drive"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="turkeyfry"
              height="240"
              image={dog}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Greenville Humane Society
              </Typography>
              <Typography variant="body2" gutterBottom>
                The Greenville Humane Society offers several options for
                volunteeering either individually or as a group. They range from
                greeting, to fostering a pet. Click the link below to learn
                more.
              </Typography>
              <CardActions>
                <Button
                  href="https://www.greenvillehumane.com/volunteer/#opportunities"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="fooddrive"
              height="240"
              image={fooddrive}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                The Shops at Greenridge: <br></br>Food Drive
              </Typography>
              <Typography variant="body2">
                One of Greenville's most popular shopping centers is now
                accepting donations for their food drive! Next time you're on
                Woodruff Road, stop by and donate. Anything helps!
              </Typography>
              <CardActions>
                <Button
                  href="https://www.facebook.com/theshopsatgreenridge/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="dog"
              height="240"
              image="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/82795289_10158024892176202_9023682540359122944_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3EMNAN0-qPEAX-2CVjG&_nc_ht=scontent-atl3-1.xx&oh=a4e6bd54b11e45b6db5ac8740549450d&oe=61B63058"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Greenville Animal Care: Volunteering and Adoption
              </Typography>
              <Typography variant="body2">
                This organization offers wonderful pets available for adoption,
                as well as volunteer positions on the daily. They are always
                looking for new animal lovers to help out. Click the link below
                to learn more.
              </Typography>
              <CardActions>
                <Button
                  href="https://www.facebook.com/GVLanimalcare/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt=""
              height="240"
              image="https://media.istockphoto.com/photos/africanamerican-woman-in-cafeteria-kitchen-with-mask-picture-id1300419857?b=1&k=20&m=1300419857&s=170667a&w=0&h=WOnJmQQYgBDXd0yD2PWd5WAxSUM-gjM-1j8rLo391ng="
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Salvation Army Food Server
              </Typography>
              <Typography variant="body2">
                Volunteers will help with serving meals in the dining hall to
                our residents and individuals from the community. Individuals
                and small groups work best in the situation. Group organizers
                need to inform us the number of members in their party.
                Volunteers must be at least 15 years old.
              </Typography>
              <CardActions>
                <Button
                  href="https://timecounts.org/the-salvation-army/events/36386"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="dog"
              height="240"
              image="https://media.istockphoto.com/photos/group-of-volunteers-in-community-donation-center-food-bank-and-picture-id1282354411?b=1&k=20&m=1282354411&s=170667a&w=0&h=MQnq8P_Mh2wgkP2Lxpw_3Cp5Zkg6tHG9PHvWxx2Eehk="
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Loaves and Fishes: Volunteer or Donate Food!
              </Typography>
              <Typography variant="body2">
                Volunteers help Loaves & Fishes continue the mission of rescuing
                food and reducing hunger in Greenville County in tremendous
                ways! In 2019, our volunteers helped us keep our administrative
                costs low by logging over 7,950 volunteer hours in which they
                rescued over 1,000,000 pounds of food in Greenville County!
              </Typography>
              <CardActions>
                <Button
                  href="https://loavesandfishesgreenville.com/volunteer-3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia component="img" alt="dog" height="240" image={women} />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Safe Harbor
              </Typography>
              <Typography variant="body2">
                From child mentoring opportunities to representing Safe Harbor
                at health fairs, there are countless ways for you to join the
                Safe Harbor volunteer family. Volunteer Coordinator, Lisa
                Nalley, <a href="mailto:lisa.nalley@safeharborsc.org">email </a>
                or <a href="tel:8643857182">call</a> for more information.
              </Typography>
              <CardActions>
                <Button
                  href="https://www.safeharborsc.org/volunteer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="mha"
              height="240"
              image={mentalhealth}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Mental Health America of Greenville County
              </Typography>
              <Typography variant="body2">
                Interested in serving on the National Suicide Prevention hotline
                and/or TEENline? Or assisting in other wats to help the MHA of
                Greenville? Check out their page, click the link below.
              </Typography>
              <CardActions>
                <Button
                  href="http://www.mhagc.org/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="ggpf"
              height="240"
              image="https://media.istockphoto.com/photos/volunteers-cleaning-park-picture-id986900214?b=1&k=20&m=986900214&s=170667a&w=0&h=0D7pdC4eKVf4G4O_WmOidWP-CIJOeXHO_D0bpfqv0FQ="
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Greater Greenville Parks Foundation
              </Typography>
              <Typography variant="body2">
                When you sign up to be a Park Hero, you will join other
                like-minded people who share a love of public lands and giving
                back. Sign-up to become a Park Hero because heroes do incredible
                things!
              </Typography>
              <CardActions>
                <Button
                  href="http://greatergreenvilleparksfoundation.org/Volunteer.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="image"
              height="240"
              image="https://scontent.fcae1-1.fna.fbcdn.net/v/t39.30808-6/246018011_4968298069860744_7281816667123603270_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=340051&_nc_ohc=q8YWIZmM2ggAX_DjudS&_nc_ht=scontent.fcae1-1.fna&oh=7a0194c9bac794fdefff521068abbce3&oe=619A6601"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Sharing the Warmth Drive{" "}
              </Typography>
              <Typography variant="body2">
                Atlantic Institute Greenville office is focusing on raising
                donations for the items above for Triune Mercy Center. These
                items above are desperately needed during the upcoming winter
                months. To help them, we are asking you to consider adding a few
                of these items to your shopping list when you are out.
              </Typography>
              <CardActions>
                <Button
                  href="https://www.facebook.com/events/671702933809261"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Card className="cardvolunteer">
            <CardMedia
              component="img"
              alt="image"
              height="240"
              image="https://united-ministries.org/wp-content/uploads/2016/09/logo.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                United Ministries: Several Opportunities{" "}
              </Typography>
              <Typography variant="body2">
                United Ministries is currently seeking assistance with: Staffing
                reception area/answering phones. Sorting, organizing, and
                collecting nonperishable food items (Food Pantry). Interviewing
                participants in Emergency Assistance (training provided), etc.
                They also have volunteer opportunities for youth.
              </Typography>
              <CardActions>
                <Button
                  href="https://united-ministries.org/how-you-can-help/volunteer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
