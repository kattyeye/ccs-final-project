import VolPageTitle from "./PageTitle";
import { CardGroup, Card, Button } from "react-bootstrap";
import turkeyfry from "../App/pics/turkeyfry.jpeg";
import bags from "../App/pics/bags.jpg";
import dog from "../App/pics/dog.jpg";
export default function VolunteerOpportunities() {
  return (
    <>
      <VolPageTitle />
      <div className="container-fluid">
        <div>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={turkeyfry} />
              <Card.Body>
                <Card.Title>Turkey Fry</Card.Title>
                <Card.Text>
                  It’s the Ellis & Bradley Turkey Fry to benefit Miracle Hill
                  Ministries! The Tuesday before Thanksgiving we will prepare a
                  feast for thousands of homeless and hungry people in Miracle
                  Hill’s shelters and throughout the Upstate community.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://miraclehill.org/events/turkey-fry/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Tuesday, November 23, 2021</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={bags} />
              <Card.Body>
                <Card.Title>Feed the Thousands</Card.Title>
                <Card.Text>
                  Join dozens of companies and organizations in rallying around
                  our neighbors in need to provide shelf-stable foods for the
                  winter months. By hosting a Food & Funds Drive, you will help
                  Loaves & Fishes supply much-needed food to 107 local agencies
                  providing food and other services to low-income families,
                  children, senior citizens, and individuals experiencing a wide
                  range of societal challenges in Greenville County.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://loavesandfishesgreenville.com/feed-the-thousands/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Donate Food & Funds this Holiday Season!
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={dog} />
              <Card.Body>
                <Card.Title>Greenville Humane Society</Card.Title>
                <Card.Text>
                  The Greenville Humane Society offers several options for
                  volunteeering either individually or as a group. They range
                  from greeting, to fostering a pet. Click the link beloow to
                  learn more.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://www.greenvillehumane.com/volunteer/#opportunities"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Tuesday, November 23, 2021</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>
    </>
  );
}
