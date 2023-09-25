export default interface Post {
    title: string,
    content: string,
    slug: {
        current: string
    },
    image: string
    excerpt: string
    date: string
}