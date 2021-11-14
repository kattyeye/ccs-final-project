import VolPageTitle from "./PageTitle";
import { CardGroup, Card, Button } from "react-bootstrap";
import turkeyfry from "../App/pics/turkeyfry.jpeg";
import bags from "../App/pics/bags.jpg";
import dog from "../App/pics/dog.jpg";
import homerebuild from "../App/pics/homerebuild.jpg";
import fooddrive from "../App/pics/fooddrive.jpg";
import women from "../App/pics/women.jpg";
import { Typography, CardContent, CardActions } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function VolunteerOpportunities() {
  return (
    <>
      <VolPageTitle />
      <div className="container-fluid mt-5 mb-5 ">
        <div className="volcolumns px-5">
          <Card className="cardvolunteer">
            <CardContent>
              <CardMedia
                component="img"
                alt="turkeyfry"
                height="250"
                image={turkeyfry}
                gutterBottom
              />
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
                  variant="primary"
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
            <CardContent>
              <CardMedia
                component="img"
                alt="turkeyfry"
                height="240"
                image={bags}
              />
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
                  variant="primary"
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
            <CardContent>
              <CardMedia
                component="img"
                alt="turkeyfry"
                height="240"
                image={homerebuild}
              />
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
                  variant="primary"
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
            <CardContent>
              <CardMedia
                component="img"
                alt="turkeyfry"
                height="240"
                image={dog}
              />
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
                  variant="primary"
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
            <CardContent>
              <CardMedia
                component="img"
                alt="fooddrive"
                height="240"
                image={fooddrive}
              />
              <Typography gutterBottom variant="h5">
                The Shops at Greenridge: <br></br>Food Drive
              </Typography>
              <Typography variant="body2"></Typography>
              <CardActions>
                <Button
                  variant="primary"
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
            <CardContent>
              <CardMedia
                component="img"
                alt="dog"
                height="240"
                image="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/82795289_10158024892176202_9023682540359122944_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3EMNAN0-qPEAX-2CVjG&_nc_ht=scontent-atl3-1.xx&oh=a4e6bd54b11e45b6db5ac8740549450d&oe=61B63058"
              />
              <Typography gutterBottom variant="h5">
                Greenville Animal Care: Volunteering and Adoption
              </Typography>
              <Typography variant="body2"></Typography>
              <CardActions>
                <Button
                  variant="primary"
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
            <CardContent>
              <CardMedia
                component="img"
                alt="dog"
                height="240"
                image="https://media.istockphoto.com/photos/group-of-volunteers-in-community-donation-center-food-bank-and-picture-id1282354411?b=1&k=20&m=1282354411&s=170667a&w=0&h=MQnq8P_Mh2wgkP2Lxpw_3Cp5Zkg6tHG9PHvWxx2Eehk="
              />
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
                  variant="primary"
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
            <CardContent>
              <CardMedia component="img" alt="dog" height="240" image={women} />
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
                  variant="primary"
                  href="https://www.safeharborsc.org/volunteer"
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
