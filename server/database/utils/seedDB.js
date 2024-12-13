/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York."
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York."
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York."
	});
	const dummy_campus4 = await Campus.create({
		name: "New College",
		address: "Nowhere",
		description: "Nobody knows where this school is."
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
        lastname: "Smith",
		email: "a@a.a",
		GPA: "4.0",
		imageUrl: "https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/637627ca9eebde45ae5f394c_Underwater-Nun.jpeg"
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
        lastname: "Johnson",
		email: "b@b.b",
		GPA: "4.0",
		imageUrl: "https://via.placeholder.com/150"
	});
	const dummy_student3 = await Student.create({
		firstname: "Hunter",
        lastname: "Hunterson",
		email: "c@c.c",
		GPA: "4.0",
		imageUrl: "https://via.placeholder.com/150"
	});
	const dummy_student4 = await Student.create({
		firstname: "Queen",
        lastname: "Queenson",
		email: "d@d.d",
		GPA: "4.0",
		imageUrl: "https://via.placeholder.com/150"
	});
	const dummy_student5 = await Student.create({
		firstname: "Brooklyn",
        lastname: "Brooklynson",
		email: "d@d.d",
		GPA: "4.0",
		imageUrl: "https://via.placeholder.com/150"
	});
	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
	await dummy_student3.setCampus(dummy_campus);
	await dummy_student4.setCampus(dummy_campus2);
	await dummy_student5.setCampus(dummy_campus3);
}

// Export the database seeding function
module.exports = seedDB;