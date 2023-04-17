import React from "react";
import {
	Nav,
	Navbar,
	Container,
	Carousel,
	Card,
	Button,
} from "react-bootstrap";
import "./App.css";

function App() {
	return (
		<div className='App'>
			{/* NavBar  */}
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='#home'>Navbar</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#features'>Features</Nav.Link>
						<Nav.Link href='#pricing'>Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			{/* CAROUSSEL */}
			<Carousel>
				<Carousel.Item>
					<img
						className='d-block w-100 carous'
						src='https://images.unsplash.com/photo-1681052459402-9a71e8407d6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
						alt='First slide'
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100 carous'
						src='https://images.unsplash.com/photo-1681130497030-2e2ff8bb552c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
						alt='Second slide'
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100 carous'
						src='https://images.unsplash.com/photo-1681056943589-4db67093fd6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
						alt='Third slide'
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			{/* Card */}
			<div className='cards'>
				<Card style={{ width: "18rem" }}>
					<Card.Img
						variant='top'
						src='https://images.unsplash.com/photo-1681052459402-9a71e8407d6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
					/>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant='primary'>Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "18rem" }}>
					<Card.Img
						variant='top'
						src='https://images.unsplash.com/photo-1681130497030-2e2ff8bb552c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
					/>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant='primary'>Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "18rem" }}>
					<Card.Img
						variant='top'
						src='https://images.unsplash.com/photo-1681056943589-4db67093fd6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
					/>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant='primary'>Go somewhere</Button>
					</Card.Body>
				</Card>
			</div>
			<h1>Workshop React Js </h1>
		</div>
	);
}

export default App;
