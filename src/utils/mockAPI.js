const posts = [
  {
    id: 1,
    title: 'Featured Post',
    content: 'This blog post shows a few different types of content that\'s supported and styled with Bootstrap. Basic typography, images, and code are all supported.',
    slug: 'featured-post-1595660336929',
    createdAt: 'Sat Jul 25 2020 14:18:42 GMT+0700 (Indochina Time)',
    updatedAt: 'Sat Jul 25 2020 14:18:42 GMT+0700 (Indochina Time)'
  },
  {
    id: 2,
    title: 'Post Title',
    content: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    slug: 'post-title-1595660353188',
    createdAt: 'Sat Jul 25 2020 14:18:42 GMT+0700 (Indochina Time)',
    updatedAt: 'Sat Jul 25 2020 14:18:42 GMT+0700 (Indochina Time)'
  },
]

export function getListPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(posts);
    }, 500)
  })
}

export function getPostBySlug(postSlug) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let foundPost = posts.find(post => post.slug === postSlug);
      if (foundPost) {
        resolve(foundPost);
      } else {
        reject({
          code: 404,
          message: "Post not found"
        })
      }
    }, 500)
  })
}

export function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // create new post with properties
      const { title, content } = post;
      const id = posts.length ? Math.max(...posts.map((item) => item.id)) + 1 : 1;
      const slug = title.trim().toLowerCase().replace(/\s+/g, "-") + "-" + new Date().getTime();
      let newPost = {
        id,
        title,
        content,
        slug,
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
      };
      posts.unshift(newPost);
      resolve(newPost);
    }, 500)
  })
}

export function updatePost(postId, postEdit) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const indexPost = posts.findIndex(post => post.id === postId);
      if (indexPost !== -1) {
        const { title, content } = postEdit;
        const slug = title.trim().toLowerCase().replace(/\s+/g, "-") + "-" + new Date().getTime();
        posts[indexPost] = {
          ...posts[indexPost],
          title,
          content,
          slug,
          updatedAt: new Date().toString()
        }
        resolve(posts[indexPost]);
      } else {
        reject({
          code: 404,
          message: "Post not found"
        })
      }
    }, 500)
  })
}
