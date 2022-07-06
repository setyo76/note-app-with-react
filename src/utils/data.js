const getData = () => {
    return [
      {
        id: 1,
        title: 'Babel',
        body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
        imageUrl: '/images/note48.png',
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z",
      },
      {
        id: 2,
        title: "Instagram",
        body: "Instagram is a photo and video sharing social networking service founded in 2010 by Kevin Systrom and Mike Krieger, and later acquired by American company Facebook Inc. The app allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging.",
        imageUrl: '/images/greennote48.png',
        archived: true,
        createdAt: "2022-04-14T04:27:34.572Z",
      },
      {
        id: 3,
        title: 'Linkedin',
        body: 'LinkedIn Learning is an American online learning provider. It provides video courses taught by industry experts in software, creative, and business skills. It is a subsidiary of LinkedIn. All the courses on LinkedIn fall into four categories: Business, Creative, Technology and Certifications.',
        imageUrl: '/images/bluenote48.png',
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z",
      },
    ];
   }
    
   const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };
  
  export { getData, showFormattedDate };