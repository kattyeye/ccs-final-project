import VolPageTitle from "./PageTitle";
import { CardGroup, Card, Button } from "react-bootstrap";
import turkeyfry from "../App/pics/turkeyfry.jpeg";
import bags from "../App/pics/bags.jpg";
import dog from "../App/pics/dog.jpg";
import { Typography, CardContent, CardActions } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function VolunteerOpportunities() {
  return (
    <>
      <VolPageTitle />
      <div className="container-fluid mt-5 mb-5">
        <div className="card-container d-flex w-100 justify-content-center">
          <Card style={{ width: "30%", margin: "15px" }}>
            <CardMedia
              component="img"
              alt="turkeyfry"
              height="240"
              image={turkeyfry}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Turkey Fry
              </Typography>
              <Typography variant="body2">
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
          <Card style={{ width: "30%", margin: "15px" }}>
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
              <Typography variant="body2">
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
          <Card style={{ width: "30%", margin: "15px" }}>
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
              <Typography variant="body2">
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
        </div>
      </div>
    </>
  );
}
