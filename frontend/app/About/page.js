export default function About() {
	return (
		<div className="flex flex-col h-[100%] bg-white">
			<div className="flex flex-col items-center w-full my-20 text-[#500000]">
				<h1 className="text-5xl font-semibold text-center text-black mb-12">About Us</h1>
				<p className="text-5xl text-center italic w-[60%] my-5 font-serif">
					" A&M encourages volunteerism, encourages being one of a thousand
					points of light, helping others...and it comes naturally to Aggies. "
				</p>
				<p className="mt-4 text-3xl italic font-medium mx-6 lg:mx-0 font-serif">
					- Former US President, George Bush
				</p>
			</div>

			<div className="flex flex-col bg-[#330b0b] h-[70%]">

				<div className="text-white flex flex-col mt-14">
					<p className="basis-full text-4xl text-center">Who are we</p>
					<hr className="my-3 w-[40%] self-center" />
					<p className="text-xl text-center basis-full self-center w-[75%]">
						AggieFunds is a website dedicated to building a stronger community
						by helping those who need support on campus. We aim to embody the
						Aggie core values of selfless service, loyalty, and respect with
						each campaign we help fund. Every contribution goes directly to the
						projects you care about. Your support has the power to shape the
						future of our university, fueling innovation, advancing research,
						and enhancing the overall student experience. Join us in making a
						difference one project at a time.
					</p>
				</div>
				<div className="text-white flex flex-col items-center w-full pt-2 bg-[#330b0b]">
					<p className="text-5xl text-center italic my-24">
						" Through unity, strength "
					</p>
				</div>

			</div>
			<div className="bg-white py-8">
				<img
					src="\AggieBand.jpg"
					className="h-[30rem] w-full object-cover"
					style={{ objectPosition: "50% 10%" }}
				/>
			</div>
		</div>
	);
}
