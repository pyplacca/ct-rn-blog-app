import sxs from '../assets/images/blogs/salesforce_x_slack.jpg'
import sfl from '../assets/images/blogs/surface_laptop.jpg'
import ab2 from '../assets/images/blogs/apple-best-of-2020.jpg'
import axn from '../assets/images/blogs/apple-x-nike.jpg'
import aw from '../assets/images/authors/alex-wilhelm.jpg';
import es from '../assets/images/authors/ewan_spence.jpeg';
import ap from '../assets/images/authors/apple.png';
import hn from '../assets/images/authors/highsnobeity.jpg';

const blogs = [
	{
		title: 'Salesforce buys Slack in a $27.7B megadeal',
		image: sxs,
		content: 'Salesforce, the CRM powerhouse that recently surpassed $20 billion in annual ' +
			'revenue, announced today it is wading deeper into enterprise social by acquiring Slack ' +
			'in a $27.7 billion megadeal. Rumors of a pending deal surfaced last week, causing ' +
			'Slack’s stock price to spike.Salesforce co-founder and CEO Marc Benioff didn’t mince ' +
			'words on his latest purchase. “This is a match made in heaven. Together, Salesforce and ' +
			'Slack will shape the future of enterprise software and transform the way everyone works ' +
			'in the all-digital, work-from-anywhere world,” Benioff said in a statement.\n\n' +
			'Slack  CEO Stewart Butterfield was no less effusive than his future boss. ' +
			'“As software plays a more and more critical role in the performance of every ' +
			'organization, we share a vision of reduced complexity, increased power and flexibility, ' +
			'and ultimately a greater degree of alignment and organizational agility. Personally, ' +
			'I believe this is the most strategic combination in the history of software, and I can’t ' +
			'wait to get going,” Butterfield said in a statement.\n\n' +
			'Every worker at every company needs to communicate, something that Slack can ably ' +
			'empower. What’s more, it also facilitates external communication with customers and ' +
			'partners, something that should be quite useful for a company like Salesforce and ' +
			'its family of offerings.\n' +
			'Ultimately, Slack was ripe for the taking. Entering 2020 it had lost around 40% of ' +
			'its value since it went public. Consider that after its most recent earnings report, ' +
			'the company lost 16% of its value, and before the Salesforce deal leaked, the company ' +
			'was worth only a few dollars per share more than its direct listing reference price. ' +
			'Toss in net losses of $147.6 million during the two quarters ending July 31, 2020, ' +
			'Slack’s uninspiring public valuation and its winding path to profitability and it was ' +
			'a sitting target for a takeover like this one. The only surprise here is the price.\n' +
			'Slack’s current valuation, according to both Yahoo and Google Finance, is just over ' +
			'$25 billion, which, given its very modest price change after-hours means that the ' +
			'market priced the company somewhat effectively. Slack is up around 48% from its ' +
			'valuation that preceded the deal becoming known.'
		,
		author: {
			name: 'Alex Wilhelm',
			image: aw,
		},
		readTime: 6,
		id: 'e2979a2e-eb53-4a19-80f1-7cc7aa07bee7',
		category: 'Tech',
		accent: '#ffc8009e'
	},
	{
		title: 'New Leaks Reveal Microsoft’s Latest Surface Pro',
		image: sfl,
		author: {
			name: 'Ewan Spence',
			image: es
		},
		category: 'Tech',
		readTime: 3,
		content: 'Thanks to the latest leaked benchmarks, we have a better idea what to expect from' +
			'Microsoft’s upcoming Surface Pro 8 and Surface Laptop 4 hardware, but we might have to' +
			'wait a long time to see the new machines.\n' +
			'The details from the Geekbench 5 database, via Windows Latest:\n' +
			'“Benchmark for a device codenamed “OEMWY” suggests that Microsoft’s Surface Pro 8 or ' +
			'Surface Laptop 4 (Business edition) could use Intel’s 11th-generation Tiger Lake ' +
			'CPU (i7-1185G7).\n“Surface Laptop 4 with AMD Renoir Another benchmark is for a Surface ' +
			'product with the codename “OEMGR OEMGR Product Name DV”. The Geekbench entry states ' +
			'that the Surface Laptop is using outdated AMD Ryzen 7 3780U chip, but its “AMD Renoir” ' +
			'connection can be sussed out by the codename highlighted in the benchmark.”\n' +
			'It’s always worth noting that benchmarking numbers do not tell the whole story ' +
			'(but when you consider how far ahead Apple’s M1 benchmarks are, the broad direction is ' +
			'still a solid indicator to the rough pecking order).\nWhat benchmarks do show is that ' +
			'the next Microsoft Surface devices are approaching the point where the team would be ' +
			'comfortable showing them off to the public. Clearly labelled benchmarking tests tend to ' +
			'happen near the end of the development period.\nIn terms of the actual hardware, ' +
			'I’d expect the Surface Pro 8 chipset to be bumped up to Intel’s Tiger Lake 11-generation ' +
			'Core processors, which comes with the added bonus of Intel’s Xe GPU which will help ' +
			'shape the Surface Pro as a machine suitable for media creation while on the move.\n' +
			'What is unlikely to be reshaped is the physical design. The curved lines and thinner ' +
			'construction of the Surface Pro X are possible because of the lower thermal ' +
			'requirements of the ARM processor; the Pro 8’s Intel chip will need more cooling, ' +
			'air vents, and a fan, to deliver the top line performance expected.So expect the boxy ' +
			'design to be retained.\nThe same design issues will likely shape the Surface Laptop 4. ' +
			'Even though its looking at an AMD chip rather than Intel, it’s still an x86-64 ' +
			'processor which still needs a lot of thermal capacity.'
		,
		accent: '#e7d6e6',
		id: 'b82643d6-9485-434b-9e0b-18d2cdf4f6ac'
	},
	{
		title: 'Apple presents App Store Best of 2020 winners',
		author: {
			name: 'Apple',
			image: ap
		},
		content: 'Apple today presented its App Store Best of 2020 winners, recognizing 15 apps ' +
			'and games that proved to be essential for making life easier, healthier, and more ' +
			'connected this year. Notable for their high quality, creative design, usability, and ' +
			'innovative technology, these apps and games are equally celebrated for their positive ' +
			'cultural impact, helpfulness, and importance.\n“This year, more than ever before, some ' +
			'of our most creative and connected moments happened in apps. This was thanks to the ' +
			'amazing work of developers who introduced fresh, helpful app experiences throughout the ' +
			'year,” said Phil Schiller, Apple Fellow. “Around the world, we saw remarkable efforts ' +
			'from so many developers, and these Best of 2020 winners are 15 outstanding examples of ' +
			'that innovation. From helping us stay fit and mindful, to keeping our children’s ' +
			'education on track, to helping fight hunger, their impact was meaningful to so ' +
			'many of us.”\nThe independent developer of Wakeout! brought gentle exercise to home ' +
			'offices and classrooms with light-hearted and inclusive movements designed for everyone. ' +
			'Vast fantasy worlds in games like “Genshin Impact,” “Legends of Runeterra,” ' +
			'“Disco Elysium,” “Dandara Trials of Fear,” and Apple Arcade’s “Sneaky Sasquatch” ' +
			'delivered a great escape, while Disney+ offered a sense of unlimited possibility that ' +
			'many craved. Whether it was to facilitate distance learning through Zoom, create daily ' +
			'routines with Fantastical or lull us to sleep with Endel, the App Store Best of 2020 ' +
			'winners helped us live our best lives at home.'
		,
		accent: '#e7e6eb',
		readTime: 7,
		image: ab2,
		category: 'Tech',
		id: 'f4d2b4b2-33d7-45fd-a20d-ef95ad209120'
	},
	{
		title: 'Apple & Nike Are Lobbying for Forced Labor',
		image: axn,
		author: {
			name: 'Highsnobeity',
			image: hn,
		},
		content: 'Apple and Nike are among the business groups and major companies working to ' +
			'weaken a bill that would ban imported goods made with forced labor in China’s Xinjiang ' +
			'region.\nAccording to congressional staff members, these companies have been publicly ' +
			'condemning forced labor while privately trying to water down bills. And lobbying ' +
			'records show vast spending on weakening the legislation.\nThe Uyghur Forced Labor ' +
			'Prevention Act and Uyghur Forced Labor Disclosure Act aim to crackdown on human ' +
			'rights abuses in mass detention camps in China\'s Xinjiang region. The bills would ' +
			'ban the use of products tied to the forced labor and would force companies to report ' +
			'their ties to the Xinjiang region to the Securities and Exchange Commission. Both bills ' +
			'have passed through the U.S. House of Representatives and have the bipartisan support ' +
			'to pass in the Senate.\nHowever, the progressive bills have become the target of ' +
			'multinational companies including Apple, Nike, and Coca-Cola whose supply chains would ' +
			'be affected by a crackdown on slavery in Xinjiang. According to the New York Times, ' +
			'Coca-Cola claims it "strictly prohibits any type of forced labor" in its supply chain. ' +
			'And Nike said it wasn\'t lobbying against the bill, but rather having "constructive ' +
			'discussions" with congressional staff about how to eliminate forced labor.\nMeanwhile, ' +
			'Patagonia actively exited the Xinjiang region earlier this year following concerns ' +
			'about human rights abuses.\nThe UN estimates that there are at least one million ' +
			'Uyghur Muslims held in more than 85 mass detention camps in the Xinjiang region, ' +
			'where they are forced into labor and so-called re-education programs. If these ' +
			'companies truly had nothing to hide, they would leave the bills alone.'
		,
		id: 'd5064a74-db98-4741-b2f2-a33485ce7dab',
		readTime: 2,
		category: 'Social',
		accent: '#a2a2a6'
	}
]

export default blogs
