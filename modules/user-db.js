const users = [
    {
        id: 1,
        name: "Jon",
        address: "Jl. A",
        dob: "26-04-2000",
        gender: "Male",
        fine: 0,
        books: [
            {
                bookId: 1,
                bookName: "book1"
            },
            {
                bookId: 2,
                bookName: "book2"
            }
        ]
    },
    {
        id: 2,
        name: "Sansa",
        address: "Jl. B",
        dob: "27-04-2000",
        gender: "Female",
        fine: 100,
        books: [
            {
                bookId: 3,
                bookName: "book3"
            }
        ]
    }
];

module.exports.users = users;