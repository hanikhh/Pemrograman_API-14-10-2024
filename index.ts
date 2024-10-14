let data = [
	{
		id: 1,
		name: 'John Doe',
		hobbies: [
			{
				id: 1,
				name: 'playing games'
			}
		],
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

// TODO 1: Dapatkan semua data
const getAllData = () => {
	return data;
};

console.log('Semua Data:', getAllData());

// TODO 2: Dapatkan data dengan nama tertentu
const getDataByName = (name) => {
	return data.filter((person) => person.name === name);
};

console.log("Data Berdasarkan Nama 'Jane Smith':", getDataByName('Jane Smith'));

// TODO 3: Dapatkan data dengan alamat New York
const getDataByCity = (city) => {
	return data.filter((person) => person.city === city);
};

console.log("Data Berdasarkan Kota 'New York':", getDataByCity('New York'));

// TODO 4: Dapatkan data dengan umur >= 30
const getDataByAge = (age) => {
	return data.filter((person) => person.age >= age);
};

console.log('Data Berdasarkan Umur >= 30:', getDataByAge(30));
