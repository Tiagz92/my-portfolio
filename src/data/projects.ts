export interface Project {
	title: string;
	description: string;
	link: string;
	techStack: string[];
}

export const projects: Project[] = [
	{
		title: "GOAT",
		description:
			"GOAT is a platform for sharing knowledge via Google Meet. Choose a subject, select a GOAT's announcement, and pick a time slot. Enjoy the course and create your own announcement to share your knowledge.",
		link: "https://github.com/WildCodeSchool-2024-09/JS-Paris-P3-goat.git",
		techStack: ["React", "Node.js", "Express", "MySQL"],
	},

	{
		title: "The Plant Spot",
		description:
			"A site where you can find the perfect plant for your home with the help of filters like brightness, watering, etc...",
		link: "https://github.com/WildCodeSchool-2024-09/JS-Paris-P2-ThePlantSpot",
		techStack: ["React", "Node.js", "MongoDB"],
	},
	{
		title: "DysWay",
		description:
			"A site that helps people to know more about dyslexia and shows a list of celebrities that have dyslexia.",
		link: "https://tiagz92.github.io/wcs-project1/",
		techStack: ["HTML", "CSS", "JavaScript"],
	},
];
