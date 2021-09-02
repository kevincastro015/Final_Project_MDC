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
		breed: "Labrador Retriever",
		description:
			"The sweet-faced, lovable Labrador Retriever is America's most popular dog breed. Labs are friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog.",
		image:
			"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/29150201/Labrador-Retrievers-three-colors.jpg",
		url: "https://www.akc.org/dog-breeds/labrador-retriever/"
	},
	{
		breed: "Pug",
		description:
			"Once the mischievous companion of Chinese emperors, and later the mascot of Holland's royal House of Orange, the small but solid Pug is today adored by his millions of fans around the world. Pugs live to love and to be loved in return.",
		image:
			"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225358/Pug-On-White-01.jpg",
		url: "https://www.akc.org/dog-breeds/pug/"
	},
	{
		breed: "Dachshund",
		description:
			"The famously long, low silhouette, ever-alert expression, and bold, vivacious personality of the Dachshund have made him a superstar of the canine kingdom. Dachshunds come in two sizes and in three coat types of various colors and patterns.",
		image:
			"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/07143625/Dachshund-standing-outdoors.jpg",
		url: "https://www.akc.org/dog-breeds/dachshund/"
	},
	{
		breed: "Australian Shepherd",
		description:
			"The Australian Shepherd, a lean, tough ranch dog, is one of those 'only in America' stories: a European breed perfected in California by way of Australia. Fixtures on the rodeo circuit, they are closely associated with the cowboy life.",
		image:
			"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/03173132/Australian-Shepherd.1.jpg",
		url: "https://www.akc.org/dog-breeds/australian-shepherd/"
	}
];

export default Card;
