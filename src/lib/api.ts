import { useSanityClient } from '@sanity/astro';

export async function getHeroSection() {
 const client = useSanityClient();
  const query = `*[_type == "hero"]`;
  const heroSection = await client.fetch(query);
  return heroSection;
}

export async function getCards() {
  const client = useSanityClient();
  const query = `*[_type == "cards"]`;
  const cards = await client.fetch(query);
  return cards;
}

export async function getAboutSection() {
  const client = useSanityClient();
  const query = `*[_type == "about"]`;
  const about = await client.fetch(query);
  return about;
}

export async function getContactSection() {
  const client = useSanityClient();
  const query = `*[_type == "contact"]`;
  const contact = await client.fetch(query);
  return contact;
}

export async function getFaqSection() {
  const client = useSanityClient();
  const query = `*[_type == "faq"]`;
  const faq = await client.fetch(query);
  return faq;
}