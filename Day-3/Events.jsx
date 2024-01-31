import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';
import './Event.css'
 import { Link } from 'react-router-dom';
export default function MultiActionAreaCard() {
  return (
    <>
    <center>
      <h1 className='events-h1'>Events List</h1>
      <div className="o-e-1">

     
    <div className='event-1-box'>

    <Card sx={{ maxWidth: 345, height:500 }}>
      <CardActionArea sx={{paddingTop:"30px"}}>
        <center>
            <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D" className='event-image-2'
            sx={{
              width:"300px"
              
            }}/>
        </center>
        <CardContent>
            <center>

          <Typography gutterBottom variant="h5" component="div">
          Conferences
          </Typography>
            
          <Typography variant="body2" color="text.secondary">
          Conferences aim to connect with target audiences, providing relevant information for education and motivation. These events, lasting at least a day, are held at conference centers or hotels. Keynote speakers and various sessions cover diverse topics, fostering networking and collaboration among attendees.
          </Typography>
          
        </center>
        </CardContent>
      </CardActionArea>
        <center>

          <Link to="/Bookevent">
        <Button size="small" color="success" variant="contained"
        sx={{
            width:"300px",
            color:"white"
        }}>
        BOOK EVENT
        </Button>
          </Link> 
        <br></br>
        </center>
    </Card>
    <Card sx={{ maxWidth: 345, height:500 }}>
    <CardActionArea sx={{paddingTop:"30px"}}>
      <center>
      <img src="https://w7.pngwing.com/pngs/621/343/png-transparent-new-product-development-business-coupon-service-new-food-company-label-thumbnail.png" className='event-image-2'
      />
      </center>
      <CardContent>
          <center>

        <Typography gutterBottom variant="h5" component="div">
        Product launches
        </Typography>
          
        <Typography variant="body2" color="text.secondary">
        Launch events are designed to announce new products or services, informing both potential clients and the media. The primary goal is to expand awareness beyond event attendees, enhancing the product or service's visibility.
        </Typography>
        
      </center>
      </CardContent>
    </CardActionArea>
      <center>

      <Button size="small" color="success" variant="contained"
        sx={{
            width:"300px",
        }}>
         BOOK EVENT
        </Button>
      <br></br>
      
      </center>
  </Card>
  <Card sx={{ maxWidth: 345,height:500 }}>
  <CardActionArea sx={{paddingTop:"30px"}}>
    <center>
        <img src="https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2019/07/How-to-Successfully-Exhibit-at-a-Trade-Show.jpg" className='event-image-3'/>

    </center>
    <CardContent>
        <center>

      <Typography gutterBottom variant="h5" component="div">
      Trade shows
      </Typography>
        
      <Typography variant="body2" color="text.secondary">
      Trade shows connect companies with potential customers, aiming to establish a leading industry presence. Hosted in large indoor or outdoor spaces, companies invest in space, advertising, and speaking opportunities to enhance their image.
      </Typography>
      
    </center>
    </CardContent>
  </CardActionArea>
    <center>

    <Button size="small" color="success" variant="contained"
        sx={{
            width:"300px",
        }}>
         BOOK EVENT
        </Button>
    <br></br>
    
    </center>
</Card>
<Card sx={{ maxWidth: 345, height:500 }}>
      <CardActionArea sx={{paddingTop:"30px"}}>
        <center>
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/award-ceremony-facebook-shared-image-design-template-6f590efcdf3209991e372aea0c318011_screen.jpg?ts=1631081653" className='event-image-2'/>
        </center>
        <CardContent>
            <center>

          <Typography gutterBottom variant="h5" component="div">
          Appreciation ceremonies
          </Typography>
            
          <Typography variant="body2" color="text.secondary">
          Appreciation events express gratitude to employees or clients, often informal with diverse activities. Common venues include restaurants, theaters, sporting arenas, musical venues, popular events, and holiday spots.
          </Typography>
          
        </center>
        </CardContent>
      </CardActionArea>
        <center>

        <Button size="small" color="success" variant="contained"
        sx={{
            width:"300px",
        }}>
         BOOK EVENT
        </Button>
        <br></br>
        </center>
    </Card>
    </div><br></br><br></br>
    <div className="event-1-box">

    <Card sx={{ maxWidth: 345, height:500 }}>
      <CardActionArea sx={{paddingTop:"30px"}}>
        <center>
            <img src="https://i.pinimg.com/originals/c8/f8/76/c8f876440ad62f9b5b48927bb5027f76.jpg" className='event-image-2'/>
        </center>
        <CardContent>
            <center>

          <Typography gutterBottom variant="h5" component="div">
          Award ceremonies
          </Typography>
            
          <Typography variant="body2" color="text.secondary">
          Events are hosted by companies to reward employees, suppliers, customers, and stakeholders, or by an entire industry to celebrate top performers. Internal award ceremonies boost morale and enhance relationships. Industry-wide awards promote businesses and establish leaders.
          </Typography>
          
        </center>
        </CardContent>
      </CardActionArea>
        <center>

        <Button size="small" color="success" variant="contained"
        sx={{
            width:"300px",
        }}>
         BOOK EVENT
        </Button>
        <br></br>
        </center>
    </Card>
    <Card sx={{ maxWidth: 345, height:500 }}>
      <CardActionArea sx={{paddingTop:"30px"}}>
        <center>
            <img src="https://www.pingpongmoments.in/blog/wp-content/uploads/2022/07/Sports-Event-Management.png" className='event-image-2'/>
        </center>
        <CardContent>
            <center>

          <Typography gutterBottom variant="h5" component="div">
          Company or industry sports tournaments
          </Typography>
            
          <Typography variant="body2" color="text.secondary">
          Companies organize sports tournaments for employees and families to interact. Corporate events involve employees representing companies in friendly competition, held in public parks or specialized venues.
          </Typography>
          
        </center>
        </CardContent>
      </CardActionArea>
        <center>

        <Button size="small" color="success" variant="contained"
        sx={{
            width:"300px",
        }}>
         BOOK EVENT
        </Button>
        <br></br>
        </center>
    </Card>
    <Card sx={{ maxWidth: 345, height:500 }}>
      <CardActionArea sx={{paddingTop:"30px"}}>
        <center>
            <img src="https://st4.depositphotos.com/2274151/19708/v/450/depositphotos_197089378-stock-illustration-workshop-red-square-price-tag.jpg" className='event-image-2'/>
        </center>
        <CardContent>
            <center>

          <Typography gutterBottom variant="h5" component="div">
          Host a professional development workshop
          </Typography>
            
          <Typography variant="body2" color="text.secondary">
          Re-engage employees with professional development workshops at corporate events. Guests choose workshops, fostering individualized learning and engagement. Topics vary based on business scope, emphasizing inclusive participation. Educational and fun activities enhance employee involvement.
          </Typography>
          
        </center>
        </CardContent>
      </CardActionArea>
        <center>

        <Button size="small" color="success" variant="contained"
        sx={{
            width:"300px",
        }}>
         BOOK EVENT
        </Button>
        <br></br>
        </center>
    </Card>
    <Card sx={{ maxWidth: 345, height:500 }}>
      <CardActionArea sx={{paddingTop:"30px"}}>
        <center>
            <img src="https://www.rollingstone.com/wp-content/uploads/2022/08/What-Is-the-Future-of-Live-Music.jpg?w=1581&h=1054&crop=1" className='event-image-2'/>
        </center>
        <CardContent>
            <center>

          <Typography gutterBottom variant="h5" component="div">
          Hit the stage with live music
          </Typography>
            
          <Typography variant="body2" color="text.secondary">
          Elevate your corporate event with timeless music. Book a live band or local artist within budget. Consider showcasing talented staff for a memorable experience. Big-name artists or local talents can excite your audience.
          </Typography>
          
        </center>
        </CardContent>
      </CardActionArea>
        <center>

        <Button size="small" color="success" variant="contained"
        sx={{
            width:"300px",
        }}>
         BOOK EVENT
        </Button>
        <br></br>
        </center>
    </Card>
    </div><br></br><br></br>
    <div className="event-1-box">
    <Card sx={{ maxWidth: 345, height:500 }}>
      <CardActionArea sx={{paddingTop:"30px"}}>
        <center>
            <img src="https://www.jobsoid.com/wp-content/uploads/2017/09/Team-Building-e1591699468721.jpg" className='event-image-2'/>
        </center>
        <CardContent>
            <center>

          <Typography gutterBottom variant="h5" component="div">
          Team-building activities
          </Typography>
            
          <Typography variant="body2" color="text.secondary">
          Team-building activities aim to boost employee morale and collaboration by fostering informal connections in a relaxed environment. Typically held outdoors and organized by specialized companies, these activities provide opportunities for employees to reveal their nonprofessional sides.
          </Typography>
          
        </center>
        </CardContent>
      </CardActionArea>
        <center>

        <Button size="small" color="success" variant="contained"
        sx={{
            width:"300px",
        }}>
         BOOK EVENT
        </Button>
        <br></br>
        </center>
    </Card>
    <Card sx={{ maxWidth: 345, height:500 }}>
      <CardActionArea sx={{paddingTop:"30px"}}>
        <center>
            <img src="https://images.squarespace-cdn.com/content/v1/5c63a94129f2cc1d7c26ec14/07f7ab78-5169-4398-b568-cd1f61e930bd/board+meeting.jpg" className='event-image-2'/>
        </center>
        <CardContent>
            <center>

          <Typography gutterBottom variant="h5" component="div">
          Board meetings
          </Typography>
            
          <Typography variant="body2" color="text.secondary">
          Board meetings gather members of an organization's board of directors to review company activity and performance. Conclusions drawn during these meetings inform future strategies. Held at specific intervals, the venue varies based on the organization's size.
          </Typography>
          
        </center>
        </CardContent>
      </CardActionArea>
        <center>

        <Button size="small" color="success" variant="contained"
        sx={{
            width:"300px",
        }}>
         BOOK EVENT
        </Button>
        <br></br>
        </center>
    </Card>
    <Card sx={{ maxWidth: 345, height:500 }}>
      <CardActionArea sx={{paddingTop:"30px"}}>
        <center>
            <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/0/9/0914_shareholder_meeting_powerpoint_presentation_Slide01.jpg" className='event-image-2'/>
        </center>
        <CardContent>
            <center>

          <Typography gutterBottom variant="h5" component="div">
          Shareholder meetings
          </Typography>
            
          <Typography variant="body2" color="text.secondary">
          Shareholder meetings showcase a company's performance, strategies, and future goals to shareholders, ranging from small to large-scale events. The primary aim is to uphold shareholders' confidence in the company's future.
          </Typography>
          
        </center>
        </CardContent>
      </CardActionArea>
        <center>

        <Button size="small" color="success" variant="contained"
        sx={{
            width:"300px",
        }}>
         BOOK EVENT
        </Button>
        <br></br>
        </center>
    </Card>
    <Card sx={{ maxWidth: 345, height:500 }}>
      <CardActionArea sx={{paddingTop:"30px"}}>
        <center>
            <img src="https://thumbs.dreamstime.com/b/milestone-timeline-infographic-company-event-template-mountain-rock-cloud-landscape-steps-to-success-leadership-motivation-concept-183792523.jpg" className='event-image-2'/>
        </center>
        <CardContent>
            <center>

          <Typography gutterBottom variant="h5" component="div">
          Company milestones
          </Typography>
            
          <Typography variant="body2" color="text.secondary">
          Companies host celebratory events for milestones or anniversaries, similar in structure to appreciation events. Their size varies, from small internal celebrations to large events involving customers, vendors, and the local community.
          </Typography>
          
        </center>
        </CardContent>
      </CardActionArea>
        <center>

        <Button size="small" color="success" variant="contained"
        sx={{
            width:"300px",
        }}>
         BOOK EVENT
        </Button>
        <br></br>
        </center>
    </Card>
    </div>
    </div>
    </center>
</>
  );
}
