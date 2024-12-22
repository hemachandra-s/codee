const books = [
    { id: 1, title: "DC", price: 299.00, image: "dcimage.jpg", author: "John Doe", authorInfo: "John Doe is a renowned writer, known for his contributions to superhero comics, especially in the DC Universe. His work has influenced multiple generations of comic enthusiasts." },
    { id: 2, title: "Ben 10", price: 319.00, image: "benimage.jpg", author: "Jane Smith", authorInfo: "Jane Smith is a celebrated comic book writer and animator. She is best known for her role in the creation and development of Ben 10, a popular animated superhero series." },
    { id: 3, title: "Harry Potter", price: 249.00, image: "harrypotterimage.jpg", author: "J.K. Rowling", authorInfo: "J.K. Rowling is a British author, best known for writing the Harry Potter series, which has become one of the most successful franchises in literary history." },
    { id: 4, title: "Tom and Jerry", price: 269.00, image: "tomandjerryimage.jpg", author: "William Hanna & Joseph Barbera", authorInfo: "Hanna and Barbera are legendary animators and the creators of the beloved cartoon duo Tom and Jerry. Their contributions revolutionized animation and left a lasting impact on global pop culture." },
    { id: 5, title: "The Jungle Book", price: 249.00, image: "junglebookimage.jpg", author: "Rudyard Kipling", authorInfo: "Rudyard Kipling was a British author best known for writing The Jungle Book. His stories of Mowgli, the boy raised by wolves, have become classics of children's literature." },
    { id: 6, title: "Stuart Little", price: 299.00, image: "stuartlittleimage.jpg", author: "E.B. White", authorInfo: "E.B. White was an American author known for his works for children, including Stuart Little, the story of a small mouse with big adventures." },
    { id: 7, title: "The Lion King", price: 219.00, image: "lionkingimage.jpg", author: "Roger Allers", authorInfo: "Roger Allers co-directed Disney’s The Lion King. The film became a cultural touchstone, known for its compelling storytelling and unforgettable characters." },
    { id: 8, title: "Marvel", price: 349.00, image: "marvelimage.jpg", author: "Stan Lee", authorInfo: "Stan Lee is the legendary co-creator of Marvel Comics' iconic superheroes like Spider-Man, Iron Man, and the X-Men. His work revolutionized comic books and superhero culture." },
    { id: 9, title: "Sherlock Holmes", price: 399.00, image: "sherlockholmesimage.jpg", author: "Arthur Conan Doyle", authorInfo: "Arthur Conan Doyle is the creator of Sherlock Holmes, the brilliant detective whose stories continue to captivate readers worldwide." }
];

// JavaScript to handle hover functionality, although CSS does most of the work
document.getElementById('authorName').addEventListener('mouseover', function() {
    document.getElementById('authorInfo').style.display = 'block';
});

document.getElementById('authorName').addEventListener('mouseout', function() {
    document.getElementById('authorInfo').style.display = 'none';
});


// Add to cart function
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${book.title} has been added to your cart.`);
}
