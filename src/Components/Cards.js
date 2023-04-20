import React from "react";
import { Card, Button } from "react-bootstrap";

const Cards = () => {
	return (
		<div>
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
		</div>
	);
};

export default Cards;
