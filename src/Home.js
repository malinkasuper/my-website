import React from 'react';
import { CardGroup, Card } from 'react-bootstrap'
import img1 from './assets/logo.png'
import './App.css';

export const Home = () => (
    <div>
        <h2>Home Page</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper turpis felis, id faucibus lorem posuere ut. Quisque gravida bibendum turpis, ac porttitor est sagittis non. Vestibulum odio nibh, semper ut finibus vitae, porttitor sit amet odio. Vestibulum maximus lacus purus, et scelerisque leo dapibus in. Donec quis dignissim ante. Vestibulum ac gravida eros. Ut ac pretium orci. Aliquam laoreet auctor orci nec scelerisque. Nam magna mauris, mattis sit amet libero ut, varius ultrices elit. Morbi interdum nisi orci, sed finibus magna malesuada a. Suspendisse ut convallis justo. Donec interdum porttitor justo vitae sodales. Aliquam laoreet mi ut augue consectetur, eget mattis sem auctor. In facilisis arcu sit amet nisi aliquet dignissim. Mauris eu quam porta, tristique nulla eu, ullamcorper ipsum.
        </p>
        <p>
        Nullam varius consectetur augue, a posuere mi convallis ut. Vestibulum eu arcu vel felis rhoncus porta id in turpis. Nunc dapibus maximus lectus, vitae iaculis augue auctor vel. Vivamus ut facilisis erat. Cras scelerisque mi quis nisl dictum sollicitudin. Etiam ac urna ac dolor semper pharetra ut vel lacus. Cras vitae egestas odio. Quisque diam sapien, varius vitae velit sit amet, gravida efficitur felis. Pellentesque nec ligula vitae leo tempor ultricies.
        </p>
    
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <br></br>
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        </Card>
      <br></br>
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    
)