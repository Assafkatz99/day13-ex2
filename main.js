const books = [
    {
      title: "Book A",
      author: "Author A",
      alreadyRead: true
    },
    {
      title: "Book B",
      author: "Author B",
      alreadyRead: false
    },
    {
      title: "Book C",
      author: "Author C",
      alreadyRead: true
    }
  ]

  for (const i of books) {
    let msg = `"${i.title}" by ${i.author}`;
    if (i.alreadyRead) {
      console.log(`You already read ${msg}`);
    } else {
      console.log(`You still need to read ${msg}`);
    }
  }