
export interface Project {
	title: string;
	description: string;
	link: string;
	techStack: string[];
}

export const projects: Project[] = [
	{
		title: "GOAT",
		description: "projects.goat_desc",
		link: "https://github.com/WildCodeSchool-2024-09/JS-Paris-P3-goat.git",
		techStack: ["React", "Node.js", "Express", "MySQL"],
	},

	{
		title: "The Plant Spot",
		description: "projects.the_plant_spot_desc",
		link: "https://github.com/WildCodeSchool-2024-09/JS-Paris-P2-ThePlantSpot",
		techStack: ["React", "Node.js", "MongoDB"],
	},
	{
		title: "DysWay",
		description: "projects.dysway_desc",
		link: "https://tiagz92.github.io/wcs-project1/",
		techStack: ["HTML", "CSS", "JavaScript"],
	},
];
