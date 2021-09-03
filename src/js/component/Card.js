import React from "react";

const Card = () => {
	return (
		<div className="row m-2 ">
			{dogs.map(dog => {
				return (
					<div className="card col-md m-1 p-0" style={{ width: "10rem", zIndex: "-1" }} key={dog.breed}>
						<img className="card-img-top" src={dog.image} alt="Dog image" />
						<div className="card-body">
							<h5 className="card-title">{dog.breed}</h5>
							<p className="card-text">{dog.description}</p>
						</div>
						<hr className="m-0" />
						<div className="text-center m-2">
							<a href={dog.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
								More Information
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

let dogs = [
	{
		breed: "Financial Peace University",
		description:
			"Financial Peace University is the proven plan that helps you pay off debt fast and save more money for your future.  Financial Peace University is a nine-lesson course that teaches you how to save for emergencies, pay off debt fast, spend wisely, and invest for your future. And no financial blah blah blah over here. For over 25 years, Dave Ramsey’s been teaching commonsense, biblical money principles that work. Every time.",
		image: "https://i.ibb.co/0qd9bjR/Financial-Peace-University.png",
		url: "https://www.akc.org/dog-breeds/labrador-retriever/"
	},
	{
		breed: "SYMBIS",
		description:
			"Saving Your Marriage Before It Starts is a six-week relationship course covering conflict resolution; sex and intimacy; finances; spiritual unity; husband/wife roles, and more.",
		image: "https://i.ibb.co/LnYKqRR/pexels-caio-56926.jpg",
		url: "https://www.akc.org/dog-breeds/pug/"
	},
	{
		breed: "ALPHA",
		description:
			"The Alpha course is an evangelistic course which seeks to introduce the basics of the Christian faith through a series of talks and discussions. As a follower of Jesus, we want you to be resourced to answer tough questions about your faith as well as guide others to know more about the 'why' behind our beliefs.",
		image: "https://i.ibb.co/ZcR4L3Z/ALPHAcourse.jpg",
		url: "https://www.akc.org/dog-breeds/dachshund/"
	},
	{
		breed: "The Bible Study",
		description:
			"The Bible Study is a introductory guide through the entire bible. Over the course of a year (separated into 3 seasons), you will dive deeper into scripture, gather historical context and gain a better understanding of what you are reading and how it relates to you as you build a life of richer faith and closeness to God.",
		image: "https://i.ibb.co/TKLQNqV/The-Bible-Study.jpg",
		url: "https://www.akc.org/dog-breeds/australian-shepherd/"
	}
];

export default Card;
