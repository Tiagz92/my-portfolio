
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
			"GOAT est une plateforme de partage de connaissances via Google Meet. Choisissez un sujet, sélectionnez l'annonce d'un GOAT et choisissez un créneau horaire. Profitez du cours et créez votre propre annonce pour partager vos connaissances.",
		link: "https://github.com/WildCodeSchool-2024-09/JS-Paris-P3-goat.git",
		techStack: ["React", "Node.js", "Express", "MySQL"],
	},

	{
		title: "The Plant Spot",
		description:
			"Un site où vous pouvez trouver la plante parfaite pour votre maison à l'aide de filtres comme la luminosité, l'arrosage, etc...",
		link: "https://github.com/WildCodeSchool-2024-09/JS-Paris-P2-ThePlantSpot",
		techStack: ["React", "Node.js", "MongoDB"],
	},
	{
		title: "DysWay",
		description:
			"Un site qui aide les gens à en savoir plus sur la dyslexie et présente une liste de célébrités dyslexiques.",
		link: "https://tiagz92.github.io/wcs-project1/",
		techStack: ["HTML", "CSS", "JavaScript"],
	},
];
