interface Person {
	id: number;
	name: string;
	age: number;
	address: string;
	city: string;
	phone: string;
}

let data: Array<Person> = [
	{
		id: 1,
		name: 'John Doe',
		age: 30,
		address: '123 Main St',
		city: 'New York',
		phone: '555-1234',
	},
	{
		id: 2,
		name: 'Jane Smith',
		age: 25,
		address: '456 Oak Ave',
		city: 'Los Angeles',
		phone: '555-5678',
	},
	{
		id: 3,
		name: 'Michael Johnson',
		age: 40,
		address: '789 Pine Rd',
		city: 'Chicago',
		phone: '555-8765',
	},
	{
		id: 4,
		name: 'Emily Davis',
		age: 35,
		address: '321 Cedar St',
		city: 'New York',
		phone: '555-4321',
	},
];

//TODO 1 : dapatkan semua data
//TODO 2 : dapatkan data dengan nama tertentu
//TODO 3 : dapatkan data dengan alamat New York
//TODO 4 : dapatkan data dengan umur >= 30